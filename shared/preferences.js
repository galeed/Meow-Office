/**
 * Meow Office — Preferences
 * Almacenamiento persistente multiplataforma.
 *
 * En web usa localStorage.
 * En Capacitor (Android/iOS) usa @capacitor/preferences (Keychain/Keystore).
 *
 * Uso:
 *   await prefs.set('key', 'value')
 *   const val = await prefs.get('key')
 *   await prefs.remove('key')
 *   await prefs.clear()
 *
 * Fallback automático si Capacitor no está presente.
 */

(function () {
  'use strict';

  const PREFIX = 'meow_office_';

  // Detectar Capacitor Preferences
  let CapPreferences = null;
  try {
    // @capacitor/preferences expone window.Capacitor.Plugins.Preferences
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Preferences) {
      CapPreferences = window.Capacitor.Plugins.Preferences;
    }
  } catch (_) { /* noop */ }

  const hasCapacitor = !!CapPreferences;

  /* ---------- Implementación localStorage (web) ---------- */
  const webStore = {
    async get(key) {
      try {
        const v = localStorage.getItem(PREFIX + key);
        return v === null ? null : v;
      } catch (_) { return null; }
    },
    async set(key, value) {
      try { localStorage.setItem(PREFIX + key, value); } catch (_) {}
    },
    async remove(key) {
      try { localStorage.removeItem(PREFIX + key); } catch (_) {}
    },
    async clear() {
      try {
        Object.keys(localStorage)
          .filter(k => k.startsWith(PREFIX))
          .forEach(k => localStorage.removeItem(k));
      } catch (_) {}
    },
    async keys() {
      try {
        return Object.keys(localStorage)
          .filter(k => k.startsWith(PREFIX))
          .map(k => k.slice(PREFIX.length));
      } catch (_) { return []; }
    }
  };

  /* ---------- Implementación Capacitor Preferences ---------- */
  const capStore = {
    async get(key) {
      try {
        const { value } = await CapPreferences.get({ key: PREFIX + key });
        return value === undefined ? null : value;
      } catch (_) { return null; }
    },
    async set(key, value) {
      try { await CapPreferences.set({ key: PREFIX + key, value: String(value) }); } catch (_) {}
    },
    async remove(key) {
      try { await CapPreferences.remove({ key: PREFIX + key }); } catch (_) {}
    },
    async clear() {
      try {
        const { keys } = await CapPreferences.keys();
        const ours = (keys || []).filter(k => k.startsWith(PREFIX));
        await Promise.all(ours.map(k => CapPreferences.remove({ key: k })));
      } catch (_) {}
    },
    async keys() {
      try {
        const { keys } = await CapPreferences.keys();
        return (keys || []).filter(k => k.startsWith(PREFIX)).map(k => k.slice(PREFIX.length));
      } catch (_) { return []; }
    }
  };

  const store = hasCapacitor ? capStore : webStore;

  /* ---------- API pública ---------- */

  const prefs = {
    isNative() { return hasCapacitor; },

    async get(key) { return store.get(key); },
    async set(key, value) { return store.set(key, value); },
    async remove(key) { return store.remove(key); },
    async clear() { return store.clear(); },
    async keys() { return store.keys(); },

    /** Lee un JSON. Devuelve null si no existe o es inválido. */
    async getJSON(key) {
      const raw = await this.get(key);
      if (!raw) return null;
      try { return JSON.parse(raw); } catch (_) { return null; }
    },

    /** Guarda un JSON serializado. */
    async setJSON(key, obj) {
      try { return await this.set(key, JSON.stringify(obj)); }
      catch (_) { return null; }
    }
  };

  window.prefs = prefs;
})();