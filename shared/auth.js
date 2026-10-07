/**
 * Meow Office — Auth
 * Cliente único de Supabase + persistencia robusta en Capacitor.
 *
 * Requiere:
 *   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 *   <script src="shared/preferences.js"></script>
 *
 * Uso:
 *   await auth.init()                    → crea el cliente y restaura sesión
 *   await auth.register(email, pass, username)
 *   await auth.login(email, pass)
 *   await auth.logout()
 *   auth.user()                          → usuario actual o null
 *   auth.onChange(cb)                    → suscripción a cambios de sesión
 */

(function () {
  'use strict';

  // 👇 Reemplaza con tus claves reales de Supabase
  const SUPABASE_URL      = 'https://cwpjjzamawyywfcsnaqo.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_NynLf9J-n78PPW7Oaw2W1Q_0_kJjwtl';

  let sb = null;
  let currentUser = null;
  const listeners = new Set();

  function notify() {
    listeners.forEach(cb => { try { cb(currentUser); } catch (_) {} });
  }

  const auth = {

    /** Inicializa el cliente Supabase y restaura la sesión guardada. */
    async init() {
      if (sb) return sb;

      if (!window.supabase || typeof window.supabase.createClient !== 'function') {
        console.error('[auth] Supabase SDK no cargado.');
        return null;
      }

      sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: false,
          storageKey: 'meow_office_auth'
        }
      });

      // Suscripción a cambios de sesión
      sb.auth.onAuthStateChange((event, session) => {
        currentUser = session?.user || null;

        // Guardar copia local del usuario para arranques rápidos
        if (currentUser) {
          window.prefs.setJSON('user_cache', {
            id: currentUser.id,
            email: currentUser.email,
            username: currentUser.user_metadata?.username || null,
            avatar_url: currentUser.user_metadata?.avatar_url || null
          });
        } else {
          window.prefs.remove('user_cache');
        }

        notify();
      });

      // Restaurar sesión existente
      const { data } = await sb.auth.getSession();
      currentUser = data?.session?.user || null;

      // Si no hay sesión activa pero hay cache, se sigue usando para la UI
      if (!currentUser) {
        const cached = await window.prefs.getJSON('user_cache');
        if (cached) currentUser = { ...cached, _offline: true };
      }

      notify();
      return sb;
    },

    /* ---------- Registro ---------- */

    async register(email, password, username) {
      if (!sb) throw new Error('auth no inicializado');
      const { data, error } = await sb.auth.signUp({
        email,
        password,
        options: { data: { username } }
      });
      if (error) throw error;
      return data;
    },

    /* ---------- Login ---------- */

    async login(email, password) {
      if (!sb) throw new Error('auth no inicializado');
      const { data, error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return data;
    },

    /* ---------- Logout ---------- */

    async logout() {
      if (!sb) return;
      await sb.auth.signOut();
      await window.prefs.remove('user_cache');
      currentUser = null;
      notify();
    },

    /* ---------- Recuperar contraseña ---------- */

    async resetPassword(email) {
      if (!sb) throw new Error('auth no inicializado');
      const { error } = await sb.auth.resetPasswordForEmail(email);
      if (error) throw error;
      return true;
    },

    /* ---------- Estado ---------- */

    user() { return currentUser; },
    isLoggedIn() { return !!currentUser && !currentUser._offline; },
    client() { return sb; },

    onChange(cb) {
      listeners.add(cb);
      // Llamada inmediata con el estado actual
      try { cb(currentUser); } catch (_) {}
      return () => listeners.delete(cb);
    }
  };

  window.auth = auth;
})();
