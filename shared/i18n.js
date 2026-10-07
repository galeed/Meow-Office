/**
 * Meow Office — i18n
 * Motor de traducción ligero.
 *
 * Uso:
 *   i18n.init()                      → carga el idioma guardado y traduce el DOM
 *   i18n.t('auth.btn_login')         → devuelve el string traducido
 *   i18n.t('time.minutes_ago', {n:5})→ con parámetros
 *   i18n.setLang('en')               → cambia idioma y re-traduce el DOM
 *   i18n.current()                   → devuelve el código actual ('es', 'en'…)
 *   i18n.available()                 → lista de idiomas disponibles
 *
 * Convenciones en el HTML:
 *   <span data-i18n="nav.home">Inicio</span>
 *   <input data-i18n-attr="placeholder:auth.field_email">
 *   <div data-i18n-attr="title:menu.settings,aria-label:menu.settings">
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'meow_office_lang';
  const DEFAULT_LANG = 'es';
  const FALLBACK_LANG = 'es';

  let currentLang = DEFAULT_LANG;
  let strings = {};

  /* ---------- Utilidades internas ---------- */

  function getNested(obj, path) {
    return path.split('.').reduce((acc, key) => {
      if (acc && typeof acc === 'object' && key in acc) return acc[key];
      return undefined;
    }, obj);
  }

  function interpolate(template, params) {
    if (!params || typeof template !== 'string') return template;
    return template.replace(/\{(\w+)\}/g, (_, key) => {
      return params[key] !== undefined ? params[key] : `{${key}}`;
    });
  }

  function detectInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && window.MEOW_LOCALES[saved]) return saved;

    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if (window.MEOW_LOCALES[nav]) return nav;

    return DEFAULT_LANG;
  }

  /* ---------- Motor principal ---------- */

  const i18n = {

    /** Carga el idioma guardado y traduce el DOM actual. */
    init(customLang) {
      const lang = customLang || detectInitialLang();
      this.setLang(lang, { silent: true });
      this.translateDOM();
      document.documentElement.setAttribute('lang', currentLang);
      return currentLang;
    },

    /** Cambia el idioma. Por defecto re-traduce el DOM. */
    setLang(lang, opts = {}) {
      if (!window.MEOW_LOCALES[lang]) {
        console.warn(`[i18n] Idioma "${lang}" no existe. Usando "${FALLBACK_LANG}".`);
        lang = FALLBACK_LANG;
      }
      currentLang = lang;
      strings = window.MEOW_LOCALES[lang] || {};
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.setAttribute('lang', lang);

      // Actualiza <title> si tiene data-i18n
      const titleEl = document.querySelector('title[data-i18n]');
      if (titleEl) {
        titleEl.textContent = this.t(titleEl.getAttribute('data-i18n'));
      }

      // Notifica a la app (útil para re-render dinámico)
      if (!opts.silent) {
        document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang } }));
      }

      return currentLang;
    },

    /** Traduce un DOM completo. Idempotente. */
    translateDOM(root = document) {
      // Texto: data-i18n
      root.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = this.t(key);
        if (val !== undefined && val !== null) el.textContent = val;
      });

      // Atributos: data-i18n-attr="placeholder:auth.field_email,title:menu.settings"
      root.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const spec = el.getAttribute('data-i18n-attr');
        spec.split(',').forEach(pair => {
          const [attr, key] = pair.split(':').map(s => s.trim());
          if (!attr || !key) return;
          const val = this.t(key);
          if (val !== undefined && val !== null) el.setAttribute(attr, val);
        });
      });
    },

    /** Devuelve una cadena traducida. Soporta parámetros {n}, {name}… */
    t(key, params) {
      let val = getNested(strings, key);

      // Fallback al idioma por defecto si falta la clave
      if (val === undefined && currentLang !== FALLBACK_LANG) {
        val = getNested(window.MEOW_LOCALES[FALLBACK_LANG], key);
      }

      if (val === undefined) {
        console.warn(`[i18n] Falta clave: "${key}" en "${currentLang}"`);
        return key;
      }

      return interpolate(val, params);
    },

    /** Código del idioma actual. */
    current() { return currentLang; },

    /** Objeto _meta del idioma actual (name, flag…). */
    meta(lang) {
      const code = lang || currentLang;
      return (window.MEOW_LOCALES[code] && window.MEOW_LOCALES[code]._meta) || {};
    },

    /** Lista de idiomas disponibles: [{code, name, flag}, …] */
    available() {
      return Object.keys(window.MEOW_LOCALES).map(code => ({
        code,
        ...window.MEOW_LOCALES[code]._meta
      }));
    },

    /** Cambia el atributo lang de <html> sin recargar. Útil al alternar. */
    applyToDOM() {
      this.translateDOM();
    }
  };

  // Exponer global
  window.i18n = i18n;
})();