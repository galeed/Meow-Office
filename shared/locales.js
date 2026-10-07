/**
 * Meow Office — Locales
 * Todos los idiomas en un solo archivo.
 * Añadir un idioma = añadir un bloque más al objeto I18N.
 *
 * Convenciones:
 *   - Placeholders: {nombre}, {n}, {when}
 *   - Italic en hero: hero_title_2 (Fraunces italic)
 *   - Guion largo: hero_title_dash
 */

window.MEOW_LOCALES = {

  /* ============================================================
     ESPAÑOL (default)
     ============================================================ */
  es: {
    _meta: { lang: 'es', name: 'Español', flag: '🇲🇽' },

    brand: {
      name: 'Meow Office',
      tagline: 'Suite editorial para escribir, calcular y presentar.'
    },

    landing: {
      eyebrow: 'Suite editorial · 2026',
      hero_title_1: 'Tus documentos,',
      hero_title_2: 'bellamente',
      hero_title_dash: '—',
      hero_title_3: 'simples.',
      hero_sub: 'Cinco herramientas para escribir, calcular, presentar y organizar. Todo en un solo lugar, con la calma de un cuaderno en blanco.',
      cta_primary: 'Comenzar gratis',
      cta_secondary: 'Ya tengo cuenta',
      cta_demo: 'Probar sin registrarme',
      scroll_hint: 'Desliza para explorar'
    },

    features: {
      section_title: 'Cinco herramientas,',
      section_title_italic: 'una sola calma.',
      docs:   { title: 'Documents', desc: 'Redacción, notas y guiones con exportación a DOCX, PDF y Markdown.' },
      sheets: { title: 'Sheets',    desc: 'Cálculo, fórmulas, formato condicional y exportación a Excel.' },
      slides: { title: 'Slides',    desc: 'Presentaciones con estética editorial y exportación a PowerPoint.' },
      pdf:    { title: 'PDF Tools', desc: 'Ver, cortar, unir y añadir páginas. Rápido y sin subir tus archivos.' },
      notes:  { title: 'Notes',     desc: 'Apuntes rápidos, siempre contigo, sincronizados en la nube.' },
      preview_label: 'Vista previa'
    },

    auth: {
      modal_title_login: 'Inicia sesión',
      modal_title_register: 'Crea tu cuenta',
      tab_login: 'Entrar',
      tab_register: 'Registro',
      field_username: 'Nombre de usuario',
      field_username_hint: 'Así te verán en Meow Office. Puedes cambiarlo luego.',
      field_email: 'Correo electrónico',
      field_password: 'Contraseña',
      field_password_confirm: 'Confirmar contraseña',
      btn_login: 'Entrar',
      btn_register: 'Crear cuenta',
      btn_logout: 'Cerrar sesión',
      link_forgot: '¿Olvidaste tu contraseña?',
      msg_welcome: 'Bienvenido de vuelta, {name}.',
      msg_created: 'Cuenta creada. Revisa tu correo para confirmar.',
      msg_invalid_email: 'El correo no es válido.',
      msg_short_password: 'La contraseña debe tener al menos 8 caracteres.',
      msg_passwords_mismatch: 'Las contraseñas no coinciden.',
      msg_user_exists: 'Ese correo ya está registrado.',
      msg_bad_credentials: 'Correo o contraseña incorrectos.',
      msg_network: 'Error de conexión. Inténtalo más tarde.'
    },

    demo: {
      banner: 'Modo demo · Regístrate para guardar tus cambios',
      banner_cta: 'Crear cuenta',
      exit: 'Salir del modo demo',
      limit_reached: 'Has llegado al límite del modo demo.'
    },

    app: {
      greeting_morning: 'Buenos días',
      greeting_afternoon: 'Buenas tardes',
      greeting_evening: 'Buenas noches',
      section_tools: 'Herramientas',
      section_recent: 'Recientes',
      section_recent_empty: 'Aún no tienes archivos. Empieza creando uno.',
      section_favorites: 'Favoritos',
      search_placeholder: 'Buscar…',
      recent_updated: 'Actualizado {when}',
      recent_created: 'Creado {when}'
    },

    time: {
      just_now: 'ahora mismo',
      minutes_ago: 'hace {n} min',
      hours_ago: 'hace {n} h',
      days_ago: 'hace {n} d',
      yesterday: 'ayer',
      today: 'hoy'
    },

    nav: {
      home: 'Inicio',
      docs: 'Docs',
      sheets: 'Sheets',
      slides: 'Slides',
      more: 'Más'
    },

    menu: {
      settings: 'Ajustes',
      profile: 'Perfil',
      language: 'Idioma',
      theme: 'Tema',
      theme_light: 'Claro',
      theme_dark: 'Oscuro',
      theme_auto: 'Automático',
      logout: 'Cerrar sesión',
      about: 'Acerca de',
      help: 'Ayuda'
    },

    tools: {
      docs:   { name: 'Documents', desc: 'Redacción, notas y guiones' },
      sheets: { name: 'Sheets',    desc: 'Cálculo, fórmulas y tablas' },
      slides: { name: 'Slides',    desc: 'Presentaciones y portadas' },
      pdf:    { name: 'PDF Tools', desc: 'Ver, cortar, unir, añadir' },
      notes:  { name: 'Notes',     desc: 'Notas rápidas y apuntes' }
    },

    footer: {
      copyright: 'Meow Office © 2026',
      privacy: 'Privacidad',
      terms: 'Términos',
      github: 'GitHub'
    },

    common: {
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      edit: 'Editar',
      close: 'Cerrar',
      back: 'Atrás',
      next: 'Siguiente',
      confirm: 'Confirmar',
      loading: 'Cargando…',
      error: 'Algo salió mal',
      retry: 'Reintentar',
      yes: 'Sí',
      no: 'No'
    }
  },

  /* ============================================================
     ENGLISH
     ============================================================ */
  en: {
    _meta: { lang: 'en', name: 'English', flag: '🇺🇸' },

    brand: {
      name: 'Meow Office',
      tagline: 'An editorial suite to write, calculate, and present.'
    },

    landing: {
      eyebrow: 'Editorial suite · 2026',
      hero_title_1: 'Your documents,',
      hero_title_2: 'beautifully',
      hero_title_dash: '—',
      hero_title_3: 'simple.',
      hero_sub: 'Five tools to write, calculate, present, and organize. All in one place, with the calm of a blank notebook.',
      cta_primary: 'Start for free',
      cta_secondary: 'I already have an account',
      cta_demo: 'Try without signing up',
      scroll_hint: 'Scroll to explore'
    },

    features: {
      section_title: 'Five tools,',
      section_title_italic: 'one single calm.',
      docs:   { title: 'Documents', desc: 'Writing, notes, and scripts with export to DOCX, PDF, and Markdown.' },
      sheets: { title: 'Sheets',    desc: 'Calculation, formulas, conditional formatting, and Excel export.' },
      slides: { title: 'Slides',    desc: 'Presentations with editorial aesthetic and PowerPoint export.' },
      pdf:    { title: 'PDF Tools', desc: 'View, split, merge, and add pages. Fast and without uploading your files.' },
      notes:  { title: 'Notes',     desc: 'Quick notes, always with you, synced to the cloud.' },
      preview_label: 'Preview'
    },

    auth: {
      modal_title_login: 'Sign in',
      modal_title_register: 'Create your account',
      tab_login: 'Sign in',
      tab_register: 'Sign up',
      field_username: 'Username',
      field_username_hint: 'This is how others will see you. You can change it later.',
      field_email: 'Email address',
      field_password: 'Password',
      field_password_confirm: 'Confirm password',
      btn_login: 'Sign in',
      btn_register: 'Create account',
      btn_logout: 'Sign out',
      link_forgot: 'Forgot your password?',
      msg_welcome: 'Welcome back, {name}.',
      msg_created: 'Account created. Check your email to confirm.',
      msg_invalid_email: 'The email is not valid.',
      msg_short_password: 'Password must be at least 8 characters.',
      msg_passwords_mismatch: 'Passwords do not match.',
      msg_user_exists: 'That email is already registered.',
      msg_bad_credentials: 'Incorrect email or password.',
      msg_network: 'Connection error. Try again later.'
    },

    demo: {
      banner: 'Demo mode · Sign up to save your changes',
      banner_cta: 'Create account',
      exit: 'Exit demo mode',
      limit_reached: 'You reached the demo limit.'
    },

    app: {
      greeting_morning: 'Good morning',
      greeting_afternoon: 'Good afternoon',
      greeting_evening: 'Good evening',
      section_tools: 'Tools',
      section_recent: 'Recent',
      section_recent_empty: 'No files yet. Start by creating one.',
      section_favorites: 'Favorites',
      search_placeholder: 'Search…',
      recent_updated: 'Updated {when}',
      recent_created: 'Created {when}'
    },

    time: {
      just_now: 'just now',
      minutes_ago: '{n} min ago',
      hours_ago: '{n} h ago',
      days_ago: '{n} d ago',
      yesterday: 'yesterday',
      today: 'today'
    },

    nav: {
      home: 'Home',
      docs: 'Docs',
      sheets: 'Sheets',
      slides: 'Slides',
      more: 'More'
    },

    menu: {
      settings: 'Settings',
      profile: 'Profile',
      language: 'Language',
      theme: 'Theme',
      theme_light: 'Light',
      theme_dark: 'Dark',
      theme_auto: 'Auto',
      logout: 'Sign out',
      about: 'About',
      help: 'Help'
    },

    tools: {
      docs:   { name: 'Documents', desc: 'Writing, notes, and scripts' },
      sheets: { name: 'Sheets',    desc: 'Calculation, formulas, and tables' },
      slides: { name: 'Slides',    desc: 'Presentations and covers' },
      pdf:    { name: 'PDF Tools', desc: 'View, split, merge, add' },
      notes:  { name: 'Notes',     desc: 'Quick notes and memos' }
    },

    footer: {
      copyright: 'Meow Office © 2026',
      privacy: 'Privacy',
      terms: 'Terms',
      github: 'GitHub'
    },

    common: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      confirm: 'Confirm',
      loading: 'Loading…',
      error: 'Something went wrong',
      retry: 'Retry',
      yes: 'Yes',
      no: 'No'
    }
  },

  /* ============================================================
     PORTUGUÊS (BR)
     ============================================================ */
  pt: {
    _meta: { lang: 'pt', name: 'Português', flag: '🇧🇷' },

    brand: {
      name: 'Meow Office',
      tagline: 'Uma suíte editorial para escrever, calcular e apresentar.'
    },

    landing: {
      eyebrow: 'Suíte editorial · 2026',
      hero_title_1: 'Seus documentos,',
      hero_title_2: 'belamente',
      hero_title_dash: '—',
      hero_title_3: 'simples.',
      hero_sub: 'Cinco ferramentas para escrever, calcular, apresentar e organizar. Tudo em um só lugar, com a calma de um caderno em branco.',
      cta_primary: 'Começar grátis',
      cta_secondary: 'Já tenho conta',
      cta_demo: 'Testar sem me cadastrar',
      scroll_hint: 'Deslize para explorar'
    },

    features: {
      section_title: 'Cinco ferramentas,',
      section_title_italic: 'uma só calma.',
      docs:   { title: 'Documents', desc: 'Redação, notas e roteiros com exportação para DOCX, PDF e Markdown.' },
      sheets: { title: 'Sheets',    desc: 'Cálculo, fórmulas, formatação condicional e exportação para Excel.' },
      slides: { title: 'Slides',    desc: 'Apresentações com estética editorial e exportação para PowerPoint.' },
      pdf:    { title: 'PDF Tools', desc: 'Ver, dividir, unir e adicionar páginas. Rápido e sem enviar seus arquivos.' },
      notes:  { title: 'Notes',     desc: 'Anotações rápidas, sempre com você, sincronizadas na nuvem.' },
      preview_label: 'Pré-visualização'
    },

    auth: {
      modal_title_login: 'Entrar',
      modal_title_register: 'Crie sua conta',
      tab_login: 'Entrar',
      tab_register: 'Cadastro',
      field_username: 'Nome de usuário',
      field_username_hint: 'É assim que você será visto no Meow Office. Você pode mudar depois.',
      field_email: 'E-mail',
      field_password: 'Senha',
      field_password_confirm: 'Confirmar senha',
      btn_login: 'Entrar',
      btn_register: 'Criar conta',
      btn_logout: 'Sair',
      link_forgot: 'Esqueceu sua senha?',
      msg_welcome: 'Bem-vindo de volta, {name}.',
      msg_created: 'Conta criada. Verifique seu e-mail para confirmar.',
      msg_invalid_email: 'O e-mail não é válido.',
      msg_short_password: 'A senha deve ter pelo menos 8 caracteres.',
      msg_passwords_mismatch: 'As senhas não coincidem.',
      msg_user_exists: 'Esse e-mail já está cadastrado.',
      msg_bad_credentials: 'E-mail ou senha incorretos.',
      msg_network: 'Erro de conexão. Tente mais tarde.'
    },

    demo: {
      banner: 'Modo demo · Cadastre-se para salvar suas alterações',
      banner_cta: 'Criar conta',
      exit: 'Sair do modo demo',
      limit_reached: 'Você atingiu o limite do modo demo.'
    },

    app: {
      greeting_morning: 'Bom dia',
      greeting_afternoon: 'Boa tarde',
      greeting_evening: 'Boa noite',
      section_tools: 'Ferramentas',
      section_recent: 'Recentes',
      section_recent_empty: 'Nenhum arquivo ainda. Comece criando um.',
      section_favorites: 'Favoritos',
      search_placeholder: 'Buscar…',
      recent_updated: 'Atualizado {when}',
      recent_created: 'Criado {when}'
    },

    time: {
      just_now: 'agora mesmo',
      minutes_ago: 'há {n} min',
      hours_ago: 'há {n} h',
      days_ago: 'há {n} d',
      yesterday: 'ontem',
      today: 'hoje'
    },

    nav: {
      home: 'Início',
      docs: 'Docs',
      sheets: 'Sheets',
      slides: 'Slides',
      more: 'Mais'
    },

    menu: {
      settings: 'Configurações',
      profile: 'Perfil',
      language: 'Idioma',
      theme: 'Tema',
      theme_light: 'Claro',
      theme_dark: 'Escuro',
      theme_auto: 'Automático',
      logout: 'Sair',
      about: 'Sobre',
      help: 'Ajuda'
    },

    tools: {
      docs:   { name: 'Documents', desc: 'Redação, notas e roteiros' },
      sheets: { name: 'Sheets',    desc: 'Cálculo, fórmulas e tabelas' },
      slides: { name: 'Slides',    desc: 'Apresentações e capas' },
      pdf:    { name: 'PDF Tools', desc: 'Ver, dividir, unir, adicionar' },
      notes:  { name: 'Notes',     desc: 'Notas rápidas e anotações' }
    },

    footer: {
      copyright: 'Meow Office © 2026',
      privacy: 'Privacidade',
      terms: 'Termos',
      github: 'GitHub'
    },

    common: {
      save: 'Salvar',
      cancel: 'Cancelar',
      delete: 'Excluir',
      edit: 'Editar',
      close: 'Fechar',
      back: 'Voltar',
      next: 'Próximo',
      confirm: 'Confirmar',
      loading: 'Carregando…',
      error: 'Algo deu errado',
      retry: 'Tentar novamente',
      yes: 'Sim',
      no: 'Não'
    }
  },

  /* ============================================================
     FRANÇAIS
     ============================================================ */
  fr: {
    _meta: { lang: 'fr', name: 'Français', flag: '🇫🇷' },

    brand: {
      name: 'Meow Office',
      tagline: 'Une suite éditoriale pour écrire, calculer et présenter.'
    },

    landing: {
      eyebrow: 'Suite éditoriale · 2026',
      hero_title_1: 'Vos documents,',
      hero_title_2: 'magnifiquement',
      hero_title_dash: '—',
      hero_title_3: 'simples.',
      hero_sub: 'Cinq outils pour écrire, calculer, présenter et organiser. Tout au même endroit, avec le calme d’un carnet vierge.',
      cta_primary: 'Commencer gratuitement',
      cta_secondary: 'J’ai déjà un compte',
      cta_demo: 'Essayer sans m’inscrire',
      scroll_hint: 'Faites défiler pour explorer'
    },

    features: {
      section_title: 'Cinq outils,',
      section_title_italic: 'un seul calme.',
      docs:   { title: 'Documents', desc: 'Rédaction, notes et scripts avec export vers DOCX, PDF et Markdown.' },
      sheets: { title: 'Sheets',    desc: 'Calculs, formules, mise en forme conditionnelle et export vers Excel.' },
      slides: { title: 'Slides',    desc: 'Présentations à l’esthétique éditoriale et export vers PowerPoint.' },
      pdf:    { title: 'PDF Tools', desc: 'Voir, diviser, fusionner et ajouter des pages. Rapide et sans téléverser vos fichiers.' },
      notes:  { title: 'Notes',     desc: 'Notes rapides, toujours avec vous, synchronisées dans le cloud.' },
      preview_label: 'Aperçu'
    },

    auth: {
      modal_title_login: 'Connexion',
      modal_title_register: 'Créez votre compte',
      tab_login: 'Connexion',
      tab_register: 'Inscription',
      field_username: 'Nom d’utilisateur',
      field_username_hint: 'C’est ainsi que vous serez vu sur Meow Office. Modifiable plus tard.',
      field_email: 'Adresse e-mail',
      field_password: 'Mot de passe',
      field_password_confirm: 'Confirmer le mot de passe',
      btn_login: 'Se connecter',
      btn_register: 'Créer un compte',
      btn_logout: 'Se déconnecter',
      link_forgot: 'Mot de passe oublié ?',
      msg_welcome: 'Bon retour, {name}.',
      msg_created: 'Compte créé. Vérifiez votre e-mail pour confirmer.',
      msg_invalid_email: 'L’e-mail n’est pas valide.',
      msg_short_password: 'Le mot de passe doit comporter au moins 8 caractères.',
      msg_passwords_mismatch: 'Les mots de passe ne correspondent pas.',
      msg_user_exists: 'Cet e-mail est déjà enregistré.',
      msg_bad_credentials: 'E-mail ou mot de passe incorrect.',
      msg_network: 'Erreur de connexion. Réessayez plus tard.'
    },

    demo: {
      banner: 'Mode démo · Inscrivez-vous pour enregistrer vos modifications',
      banner_cta: 'Créer un compte',
      exit: 'Quitter le mode démo',
      limit_reached: 'Vous avez atteint la limite du mode démo.'
    },

    app: {
      greeting_morning: 'Bonjour',
      greeting_afternoon: 'Bon après-midi',
      greeting_evening: 'Bonsoir',
      section_tools: 'Outils',
      section_recent: 'Récents',
      section_recent_empty: 'Aucun fichier pour l’instant. Commencez par en créer un.',
      section_favorites: 'Favoris',
      search_placeholder: 'Rechercher…',
      recent_updated: 'Mis à jour {when}',
      recent_created: 'Créé {when}'
    },

    time: {
      just_now: 'à l’instant',
      minutes_ago: 'il y a {n} min',
      hours_ago: 'il y a {n} h',
      days_ago: 'il y a {n} j',
      yesterday: 'hier',
      today: 'aujourd’hui'
    },

    nav: {
      home: 'Accueil',
      docs: 'Docs',
      sheets: 'Sheets',
      slides: 'Slides',
      more: 'Plus'
    },

    menu: {
      settings: 'Paramètres',
      profile: 'Profil',
      language: 'Langue',
      theme: 'Thème',
      theme_light: 'Clair',
      theme_dark: 'Sombre',
      theme_auto: 'Automatique',
      logout: 'Se déconnecter',
      about: 'À propos',
      help: 'Aide'
    },

    tools: {
      docs:   { name: 'Documents', desc: 'Rédaction, notes et scripts' },
      sheets: { name: 'Sheets',    desc: 'Calculs, formules et tableaux' },
      slides: { name: 'Slides',    desc: 'Présentations et couvertures' },
      pdf:    { name: 'PDF Tools', desc: 'Voir, diviser, fusionner, ajouter' },
      notes:  { name: 'Notes',     desc: 'Notes rapides et mémos' }
    },

    footer: {
      copyright: 'Meow Office © 2026',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      github: 'GitHub'
    },

    common: {
      save: 'Enregistrer',
      cancel: 'Annuler',
      delete: 'Supprimer',
      edit: 'Modifier',
      close: 'Fermer',
      back: 'Retour',
      next: 'Suivant',
      confirm: 'Confirmer',
      loading: 'Chargement…',
      error: 'Une erreur est survenue',
      retry: 'Réessayer',
      yes: 'Oui',
      no: 'Non'
    }
  },

  /* ============================================================
     ITALIANO
     ============================================================ */
  it: {
    _meta: { lang: 'it', name: 'Italiano', flag: '🇮🇹' },

    brand: {
      name: 'Meow Office',
      tagline: 'Una suite editoriale per scrivere, calcolare e presentare.'
    },

    landing: {
      eyebrow: 'Suite editoriale · 2026',
      hero_title_1: 'I tuoi documenti,',
      hero_title_2: 'meravigliosamente',
      hero_title_dash: '—',
      hero_title_3: 'semplici.',
      hero_sub: 'Cinque strumenti per scrivere, calcolare, presentare e organizzare. Tutto in un unico posto, con la calma di un quaderno bianco.',
      cta_primary: 'Inizia gratis',
      cta_secondary: 'Ho già un account',
      cta_demo: 'Prova senza registrarti',
      scroll_hint: 'Scorri per esplorare'
    },

    features: {
      section_title: 'Cinque strumenti,',
      section_title_italic: 'una sola calma.',
      docs:   { title: 'Documents', desc: 'Scrittura, note e copioni con esportazione in DOCX, PDF e Markdown.' },
      sheets: { title: 'Sheets',    desc: 'Calcoli, formule, formattazione condizionale ed esportazione in Excel.' },
      slides: { title: 'Slides',    desc: 'Presentazioni con estetica editoriale ed esportazione in PowerPoint.' },
      pdf:    { title: 'PDF Tools', desc: 'Visualizza, dividi, unisci e aggiungi pagine. Veloce e senza caricare i tuoi file.' },
      notes:  { title: 'Notes',     desc: 'Note rapide, sempre con te, sincronizzate nel cloud.' },
      preview_label: 'Anteprima'
    },

    auth: {
      modal_title_login: 'Accedi',
      modal_title_register: 'Crea il tuo account',
      tab_login: 'Accedi',
      tab_register: 'Registrati',
      field_username: 'Nome utente',
      field_username_hint: 'Così ti vedranno su Meow Office. Puoi cambiarlo in seguito.',
      field_email: 'Indirizzo email',
      field_password: 'Password',
      field_password_confirm: 'Conferma password',
      btn_login: 'Accedi',
      btn_register: 'Crea account',
      btn_logout: 'Esci',
      link_forgot: 'Hai dimenticato la password?',
      msg_welcome: 'Bentornato, {name}.',
      msg_created: 'Account creato. Controlla la tua email per confermare.',
      msg_invalid_email: 'L’email non è valida.',
      msg_short_password: 'La password deve avere almeno 8 caratteri.',
      msg_passwords_mismatch: 'Le password non coincidono.',
      msg_user_exists: 'Questa email è già registrata.',
      msg_bad_credentials: 'Email o password errati.',
      msg_network: 'Errore di connessione. Riprova più tardi.'
    },

    demo: {
      banner: 'Modalità demo · Registrati per salvare le modifiche',
      banner_cta: 'Crea account',
      exit: 'Esci dalla modalità demo',
      limit_reached: 'Hai raggiunto il limite della modalità demo.'
    },

    app: {
      greeting_morning: 'Buongiorno',
      greeting_afternoon: 'Buon pomeriggio',
      greeting_evening: 'Buonasera',
      section_tools: 'Strumenti',
      section_recent: 'Recenti',
      section_recent_empty: 'Nessun file ancora. Inizia creandone uno.',
      section_favorites: 'Preferiti',
      search_placeholder: 'Cerca…',
      recent_updated: 'Aggiornato {when}',
      recent_created: 'Creato {when}'
    },

    time: {
      just_now: 'proprio ora',
      minutes_ago: '{n} min fa',
      hours_ago: '{n} h fa',
      days_ago: '{n} g fa',
      yesterday: 'ieri',
      today: 'oggi'
    },

    nav: {
      home: 'Home',
      docs: 'Docs',
      sheets: 'Sheets',
      slides: 'Slides',
      more: 'Altro'
    },

    menu: {
      settings: 'Impostazioni',
      profile: 'Profilo',
      language: 'Lingua',
      theme: 'Tema',
      theme_light: 'Chiaro',
      theme_dark: 'Scuro',
      theme_auto: 'Automatico',
      logout: 'Esci',
      about: 'Informazioni',
      help: 'Aiuto'
    },

    tools: {
      docs:   { name: 'Documents', desc: 'Scrittura, note e copioni' },
      sheets: { name: 'Sheets',    desc: 'Calcoli, formule e tabelle' },
      slides: { name: 'Slides',    desc: 'Presentazioni e copertine' },
      pdf:    { name: 'PDF Tools', desc: 'Visualizza, dividi, unisci, aggiungi' },
      notes:  { name: 'Notes',     desc: 'Note rapide e appunti' }
    },

    footer: {
      copyright: 'Meow Office © 2026',
      privacy: 'Privacy',
      terms: 'Termini',
      github: 'GitHub'
    },

    common: {
      save: 'Salva',
      cancel: 'Annulla',
      delete: 'Elimina',
      edit: 'Modifica',
      close: 'Chiudi',
      back: 'Indietro',
      next: 'Avanti',
      confirm: 'Conferma',
      loading: 'Caricamento…',
      error: 'Qualcosa è andato storto',
      retry: 'Riprova',
      yes: 'Sì',
      no: 'No'
    }
  },

  /* ============================================================
     РУССКИЙ
     ============================================================ */
  ru: {
    _meta: { lang: 'ru', name: 'Русский', flag: '🇷🇺' },

    brand: {
      name: 'Meow Office',
      tagline: 'Редакционный набор для письма, расчётов и презентаций.'
    },

    landing: {
      eyebrow: 'Редакционный набор · 2026',
      hero_title_1: 'Ваши документы,',
      hero_title_2: 'красиво',
      hero_title_dash: '—',
      hero_title_3: 'просто.',
      hero_sub: 'Пять инструментов, чтобы писать, считать, презентовать и организовывать. Всё в одном месте, со спокойствием чистого блокнота.',
      cta_primary: 'Начать бесплатно',
      cta_secondary: 'У меня уже есть аккаунт',
      cta_demo: 'Попробовать без регистрации',
      scroll_hint: 'Прокрутите, чтобы изучить'
    },

    features: {
      section_title: 'Пять инструментов,',
      section_title_italic: 'одно спокойствие.',
      docs:   { title: 'Documents', desc: 'Тексты, заметки и сценарии с экспортом в DOCX, PDF и Markdown.' },
      sheets: { title: 'Sheets',    desc: 'Расчёты, формулы, условное форматирование и экспорт в Excel.' },
      slides: { title: 'Slides',    desc: 'Презентации в редакционной эстетике с экспортом в PowerPoint.' },
      pdf:    { title: 'PDF Tools', desc: 'Просмотр, разделение, объединение и добавление страниц. Быстро и без загрузки файлов.' },
      notes:  { title: 'Notes',     desc: 'Быстрые заметки, всегда с вами, синхронизируются в облаке.' },
      preview_label: 'Предпросмотр'
    },

    auth: {
      modal_title_login: 'Вход',
      modal_title_register: 'Создайте аккаунт',
      tab_login: 'Войти',
      tab_register: 'Регистрация',
      field_username: 'Имя пользователя',
      field_username_hint: 'Так вас увидят в Meow Office. Можно изменить позже.',
      field_email: 'Электронная почта',
      field_password: 'Пароль',
      field_password_confirm: 'Подтвердите пароль',
      btn_login: 'Войти',
      btn_register: 'Создать аккаунт',
      btn_logout: 'Выйти',
      link_forgot: 'Забыли пароль?',
      msg_welcome: 'С возвращением, {name}.',
      msg_created: 'Аккаунт создан. Проверьте почту для подтверждения.',
      msg_invalid_email: 'Неверный адрес электронной почты.',
      msg_short_password: 'Пароль должен содержать минимум 8 символов.',
      msg_passwords_mismatch: 'Пароли не совпадают.',
      msg_user_exists: 'Эта почта уже зарегистрирована.',
      msg_bad_credentials: 'Неверная почта или пароль.',
      msg_network: 'Ошибка соединения. Попробуйте позже.'
    },

    demo: {
      banner: 'Демо-режим · Зарегистрируйтесь, чтобы сохранить изменения',
      banner_cta: 'Создать аккаунт',
      exit: 'Выйти из демо-режима',
      limit_reached: 'Вы достигли лимита демо-режима.'
    },

    app: {
      greeting_morning: 'Доброе утро',
      greeting_afternoon: 'Добрый день',
      greeting_evening: 'Добрый вечер',
      section_tools: 'Инструменты',
      section_recent: 'Недавние',
      section_recent_empty: 'Пока нет файлов. Начните с создания нового.',
      section_favorites: 'Избранное',
      search_placeholder: 'Поиск…',
      recent_updated: 'Обновлено {when}',
      recent_created: 'Создано {when}'
    },

    time: {
      just_now: 'только что',
      minutes_ago: '{n} мин назад',
      hours_ago: '{n} ч назад',
      days_ago: '{n} дн назад',
      yesterday: 'вчера',
      today: 'сегодня'
    },

    nav: {
      home: 'Главная',
      docs: 'Docs',
      sheets: 'Sheets',
      slides: 'Slides',
      more: 'Ещё'
    },

    menu: {
      settings: 'Настройки',
      profile: 'Профиль',
      language: 'Язык',
      theme: 'Тема',
      theme_light: 'Светлая',
      theme_dark: 'Тёмная',
      theme_auto: 'Авто',
      logout: 'Выйти',
      about: 'О программе',
      help: 'Помощь'
    },

    tools: {
      docs:   { name: 'Documents', desc: 'Тексты, заметки и сценарии' },
      sheets: { name: 'Sheets',    desc: 'Расчёты, формулы и таблицы' },
      slides: { name: 'Slides',    desc: 'Презентации и обложки' },
      pdf:    { name: 'PDF Tools', desc: 'Просмотр, разделение, объединение' },
      notes:  { name: 'Notes',     desc: 'Быстрые заметки и записи' }
    },

    footer: {
      copyright: 'Meow Office © 2026',
      privacy: 'Конфиденциальность',
      terms: 'Условия',
      github: 'GitHub'
    },

    common: {
      save: 'Сохранить',
      cancel: 'Отмена',
      delete: 'Удалить',
      edit: 'Изменить',
      close: 'Закрыть',
      back: 'Назад',
      next: 'Далее',
      confirm: 'Подтвердить',
      loading: 'Загрузка…',
      error: 'Что-то пошло не так',
      retry: 'Повторить',
      yes: 'Да',
      no: 'Нет'
    }
  }

};