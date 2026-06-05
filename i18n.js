/**
 * CIAS de la CCSUD · Système multilingue FR / SHIMAORÉ
 * ======================================================
 *
 * Usage : ajouter data-i18n="clé" sur les éléments HTML à traduire.
 *
 * ⚠️  Traductions Shimaoré préliminaires : validation par un locuteur natif
 *     requise avant mise en production.
 * ⚠️  Les clés sans traduction SHI tombent automatiquement sur la version FR.
 */

(function () {

  // ── Dictionnaire ──────────────────────────────────────────────────
  const TRANSLATIONS = {

    fr: {

      // ── Navigation ────────────────────────────────────────────────
      'nav.home':         'Accueil',
      'nav.about':        'Le CIAS',
      'nav.gouvernance':  'Gouvernance',
      'nav.projets':      'Nos projets',
      'nav.actualites':   'Actualités',
      'nav.membres':      'Nos membres',
      'nav.contact':      'Contact',

      // ── Bandeau horaires ──────────────────────────────────────────
      'horaires.label':    "Horaires d'accueil :",
      'horaires.schedule': '<span class="nowrap">Lundi – Vendredi</span> · <span class="nowrap">7h30–12h00 &amp; 13h30–16h30</span>',

      // ── Hero (index) ──────────────────────────────────────────────
      'hero.badge':        'Établissement public · CCSUD Mayotte',
      'hero.title':        'La solidarité<br>au service du<br><em>Sud de Mayotte</em>',
      'hero.subtitle':     "Le CIAS accompagne les habitants de Bandrélé, Chirongui, Kani-Kéli et Bouéni dans l'accès aux droits, à la santé, à l'insertion et au logement.",
      'hero.cta.services': 'Découvrir nos services',
      'hero.cta.aide':     "Besoin d'aide ?",

      // ── Accès rapide (index) ──────────────────────────────────────
      'section.quick.label': 'Accès rapide',
      'section.quick.title': 'Comment pouvons-nous vous aider ?',
      'quick.soins':         'Accès aux soins',
      'quick.soins.sub':     'Maison de santé',
      'quick.logement':      'Logement',
      'quick.logement.sub':  'Habitat & hébergement',
      'quick.insertion':     'Insertion',
      'quick.insertion.sub': "Mobil'Sud & emploi",
      'quick.droits':        'Accès aux droits',
      'quick.droits.sub':    'Justice & information',
      'quick.bourses':       'Bourses',
      'quick.bourses.sub':   'Aides financières',
      'quick.contact':       'Contact',
      'quick.contact.sub':   '06 19 007 814',

      // ── Mission (index) ───────────────────────────────────────────
      'section.mission.label': 'Qui sommes-nous',
      'section.mission.title': 'Un acteur essentiel de la solidarité territoriale',
      'mission.text':          "Établissement public de la CCSUD, le CIAS coordonne l'action sociale sur les 4 communes du territoire. Accès aux droits, santé, insertion, logement : nous agissons pour que chaque habitant de Bandrélé, Chirongui, Kani-Kéli et Bouéni trouve un soutien concret dans ses démarches.",
      'mission.cta.more':      'En savoir plus',
      'mission.cta.org':       'Notre organisation',

      // ── Chiffres (index) ──────────────────────────────────────────
      'section.stats.label': 'Le CIAS en chiffres',
      'section.stats.title': 'Un territoire uni par la solidarité',
      'stat.communes':       'Communes',
      'stat.elus':           'Élus délégués',
      'stat.projets':        'Projets',
      'stat.jeunes':         "Jeunes Mobil'Sud",

      // ── Actualités (index + page) ─────────────────────────────────
      'section.actus.label': 'Actualités',
      'section.actus.title': 'Les dernières nouvelles du CIAS',

      // ── CTA bannière (index + pages) ──────────────────────────────
      'cta.title': "Vous avez besoin d'un accompagnement ?",
      'cta.sub':   'Notre équipe vous accueille du lundi au vendredi pour vous guider dans vos démarches.',
      'cta.btn':   'Prendre contact',

      // ── Page À propos ─────────────────────────────────────────────
      'about.hero.label':    'Notre identité',
      'about.hero.title':    'À propos du CIAS',
      'about.mission.label': 'Notre mission',
      'about.mission.title': 'Un acteur clé de la solidarité',
      'about.mission.p1':    "La Communauté de Communes du Sud de Mayotte a choisi d'exercer la compétence d'action sociale par la création d'un Centre Intercommunal d'Action Sociale. Le CIAS porte ainsi une ambition collective : faire de la solidarité une réalité concrète pour tous les habitants du territoire.",
      'about.mission.p2':    "Établissement public administratif, le CIAS dispose d'une personnalité juridique propre et d'une autonomie financière. Il agit sous la présidence d'un élu et s'appuie sur une équipe dédiée pour animer les politiques sociales.",
      'about.mission.p3':    "Son organisation et son fonctionnement sont encadrés par les textes de loi régissant les CIAS, garantissant transparence, rigueur et redevabilité vis-à-vis des habitants et des communes membres.",
      'about.values.label':  'Nos valeurs fondatrices',
      'about.values.title':  'Ce qui nous guide au quotidien',
      'about.val.solidarity':'Solidarité',
      'about.val.equity':    'Équité',
      'about.val.dignity':   'Dignité',
      'about.val.proximity': 'Proximité',
      'about.stats.label':   'Le CIAS en chiffres',
      'about.stats.title':   'Notre territoire en quelques chiffres',
      'about.legal.label':   'Cadre juridique',
      'about.legal.title':   'Un établissement encadré par la loi',
      'about.cta.btn':       'Découvrir la gouvernance',

      // ── Page Gouvernance ──────────────────────────────────────────
      'gov.hero.label':     'Organisation',
      'gov.hero.title':     "L'Exécutif et l'Organe Délibérant",
      'gov.structure.label':'Structure',
      'gov.structure.title':'Organigramme du CIAS',
      'gov.structure.p1':   "Le Conseil d'Administration constitue l'organe délibérant du CIAS. Il est composé d'élus communautaires représentant les quatre communes membres et de membres nommés représentant les organismes sociaux du territoire.",
      'gov.function.label': 'Fonctionnement',
      'gov.function.title': 'Un pilotage collégial et transparent',
      'gov.function.p1':    "Le Conseil d'Administration se réunit régulièrement pour délibérer sur les orientations stratégiques, voter le budget et approuver les projets du CIAS.",
      'gov.function.p2':    "Chaque commune membre est représentée par deux délégués titulaires, assurant une représentation équilibrée du territoire au sein de l'organe délibérant.",
      'gov.function.p3':    "Les membres nommés apportent l'expertise des organismes sociaux (CAF, MSA, associations) pour enrichir les décisions et garantir la pertinence des actions menées.",
      'gov.cta.title':      "Besoin d'informations complémentaires ?",
      'gov.cta.btn':        'Nous contacter',

      // ── Page Projets ──────────────────────────────────────────────
      'projets.hero.label':  'Actions territoriales',
      'projets.hero.title':  'Nos Projets',
      'projets.hero.sub':    "Le CIAS de la CCSUD développe une gamme complète de services et de projets pour répondre aux besoins des habitants des 4 communes du territoire.",
      'projets.p01.title':   "Observatoire des solidarités",
      'projets.p02.title':   "Maisons du droit et de la justice",
      'projets.p03.title':   "Maison de santé pluridisciplinaire",
      'projets.p04.title':   "Office intercommunal culture, jeunesse & sports",
      'projets.p05.title':   "Ateliers et chantiers d'insertion",
      'projets.p06.title':   "Plateforme de service de l'habitat",
      'projets.p07.title':   "Bourses intercommunales & aides financières",
      'projets.p08.title':   "Structures d'hébergement",
      'projets.cta.title':   'Vous souhaitez en savoir plus sur nos projets ?',
      'projets.cta.btn':     'Contactez-nous',

      // ── Page Membres ──────────────────────────────────────────────
      'membres.hero.label':    'Intercommunalité',
      'membres.hero.title':    'Les CCAS Membres',
      'membres.hero.sub':      "Quatre Centres Communaux d'Action Sociale composent le réseau du CIAS de la CCSUD. Ensemble, ils forment un territoire solidaire au service des habitants.",
      'membres.network.label': 'Notre réseau',
      'membres.network.title': '4 communes, 1 territoire solidaire',
      'membres.network.p1':    "Chaque CCAS membre assure la mise en œuvre de l'action sociale de proximité sur sa commune, en complémentarité avec les missions intercommunales du CIAS.",
      'membres.m1.name':       'CCAS de Bandrélé',
      'membres.m2.name':       'CCAS de Chirongui',
      'membres.m3.name':       'CCAS de Bouéni',
      'membres.m4.name':       'CCAS de Kani-Kéli',
      'membres.cta.title':     'Vous souhaitez contacter un CCAS ?',
      'membres.cta.btn':       'Nous contacter',

      // ── Page Contact ──────────────────────────────────────────────
      'contact.hero.label':    'Coordonnées',
      'contact.hero.title':    'Nous contacter',
      'contact.form.title':    'Envoyer un message',
      'contact.form.intro':    "Une question, une demande d'information ? Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais.",
      'contact.field.name':    'Nom complet',
      'contact.field.email':   'Adresse email',
      'contact.field.phone':   'Téléphone',
      'contact.field.subject': 'Sujet',
      'contact.field.message': 'Message',
      'contact.form.submit':   'Envoyer le message',
      'contact.info.title':    'Retrouvez-nous',
      'contact.loc.label':     'Localisation',
      'contact.loc.title':     'Nous trouver',
    },

    // ── Shimaoré ──────────────────────────────────────────────────────
    // Fonds lexical comorien/mahorais (kiswahili de Mayotte).
    // ⚠️  Validation par un locuteur natif requise avant mise en production.
    shi: {

      // ── Navigation ────────────────────────────────────────────────
      'nav.home':         'Nyumbani',
      'nav.about':        'CIAS',
      'nav.gouvernance':  'Utawala',
      'nav.projets':      'Miradi',
      'nav.actualites':   'Habari',
      'nav.membres':      'Wanachama',
      'nav.contact':      'Wasiliana',

      // ── Bandeau horaires ──────────────────────────────────────────
      'horaires.label':    'Masaa ya mapokezi :',
      'horaires.schedule': '<span class="nowrap">Jumatatu – Ijumaa</span> · <span class="nowrap">7h30–12h00 &amp; 13h30–16h30</span>',

      // ── Hero (index) ──────────────────────────────────────────────
      'hero.badge':        'Ofisi ya umma · CCSUD Mayotte',
      'hero.title':        'Mshikamano<br>kwa ajili ya<br><em>Kusini mwa Mayotte</em>',
      'hero.subtitle':     "CIAS inasaidia wakazi wa Bandrélé, Chirongui, Kani-Kéli na Bouéni kupata haki zao, afya, ujumuishaji na makazi.",
      'hero.cta.services': 'Gundua huduma zetu',
      'hero.cta.aide':     'Unahitaji msaada ?',

      // ── Accès rapide (index) ──────────────────────────────────────
      'section.quick.label': 'Ufikiaji wa haraka',
      'section.quick.title': 'Tunaweza kukusaidia vipi ?',
      'quick.soins':         'Afya',
      'quick.soins.sub':     'Nyumba ya afya',
      'quick.logement':      'Makazi',
      'quick.logement.sub':  'Nyumba & malazi',
      'quick.insertion':     'Kazi',
      'quick.insertion.sub': "Mobil'Sud & ajira",
      'quick.droits':        'Haki',
      'quick.droits.sub':    'Sheria & taarifa',
      'quick.bourses':       'Msaada',
      'quick.bourses.sub':   'Msaada wa kifedha',
      'quick.contact':       'Wasiliana',
      'quick.contact.sub':   '06 19 007 814',

      // ── Mission (index) ───────────────────────────────────────────
      'section.mission.label': 'Sisi ni nani',
      'section.mission.title': 'Mshirika muhimu wa mshikamano wa eneo',
      'mission.text':          "CIAS ni wakala wa umma wa CCSUD, inayoratibu kazi za kijamii katika manispaa 4 za eneo. Haki, afya, ujumuishaji, makazi: tunafanya kazi ili kila mkazi wa Bandrélé, Chirongui, Kani-Kéli na Bouéni apate msaada madhubuti katika hatua zake.",
      'mission.cta.more':      'Jifunza zaidi',
      'mission.cta.org':       'Shirika letu',

      // ── Chiffres (index) ──────────────────────────────────────────
      'section.stats.label': 'CIAS kwa takwimu',
      'section.stats.title':  'Eneo lililounganika kwa mshikamano',
      'stat.communes':        'Manispaa',
      'stat.elus':            'Wajumbe',
      'stat.projets':         'Miradi',
      'stat.jeunes':          "Vijana Mobil'Sud",

      // ── Actualités ────────────────────────────────────────────────
      'section.actus.label': 'Habari',
      'section.actus.title': 'Habari za hivi karibuni za CIAS',

      // ── CTA bannière ──────────────────────────────────────────────
      'cta.title': 'Unahitaji msaada wa mtu ?',
      'cta.sub':   'Timu yetu inakukaribisha Jumatatu hadi Ijumaa kukusaidia katika hatua zako.',
      'cta.btn':   'Wasiliana nasi',

      // ── Page À propos ─────────────────────────────────────────────
      'about.hero.label':    'Utambulisho wetu',
      'about.hero.title':    'Kuhusu CIAS',
      'about.mission.label': 'Dhamira yetu',
      'about.mission.title': 'Mshirika muhimu wa mshikamano',
      'about.mission.p1':    "Jumuiya ya Manispaa ya Kusini mwa Mayotte ilichagua kutekeleza huduma za kijamii kwa kuunda CIAS. CIAS inabeba dhamira ya pamoja: kufanya mshikamano kuwa ukweli halisi kwa wakazi wote wa eneo.",
      'about.mission.p2':    "CIAS ni wakala wa umma wenye uhalali wa kisheria na uhuru wa kifedha. Inafanya kazi chini ya uongozi wa mwanasiasa na inategemea timu iliyojitolea kutekeleza sera za kijamii.",
      'about.mission.p3':    "Mpangilio na utendaji wake unasimamiwa na sheria zinazodhibiti CIAS, kuhakikisha uwazi, utaratibu na uwajibikaji kwa wakazi na manispaa wanachama.",
      'about.values.label':  'Maadili yetu ya msingi',
      'about.values.title':  'Kinachotuongoza kila siku',
      'about.val.solidarity':'Mshikamano',
      'about.val.equity':    'Usawa',
      'about.val.dignity':   'Heshima',
      'about.val.proximity': 'Ukaribu',
      'about.stats.label':   'CIAS kwa takwimu',
      'about.stats.title':   'Eneo letu kwa muhtasari',
      'about.legal.label':   'Mfumo wa kisheria',
      'about.legal.title':   'Wakala uliodhibitiwa na sheria',
      'about.cta.btn':       'Gundua utawala',

      // ── Page Gouvernance ──────────────────────────────────────────
      'gov.hero.label':     'Shirika',
      'gov.hero.title':     'Mkurugenzi na Bodi ya Usimamizi',
      'gov.structure.label':'Muundo',
      'gov.structure.title':'Chati ya shirika la CIAS',
      'gov.structure.p1':   "Bodi ya Usimamizi ndiyo chombo cha maamuzi cha CIAS. Inajumuisha wajumbe wa manispaa wanaowakilisha manispaa nne wanachama na wanachama waliochaguliwa wanaowakilisha mashirika ya kijamii ya eneo.",
      'gov.function.label': 'Utendaji',
      'gov.function.title': 'Uongozi wa pamoja na uwazi',
      'gov.function.p1':    "Bodi ya Usimamizi inakutana mara kwa mara kujadili mwelekeo wa kimkakati, kupitisha bajeti na kuidhinisha miradi ya CIAS.",
      'gov.function.p2':    "Kila manispaa mwanachama inawakilishwa na wajumbe wawili, kuhakikisha uwakilishi uliosawa wa eneo ndani ya chombo cha maamuzi.",
      'gov.function.p3':    "Wanachama waliochaguliwa wanaleta utaalamu wa mashirika ya kijamii (CAF, MSA, vyama) ili kuboresha maamuzi na kuhakikisha umuhimu wa shughuli zinazofanywa.",
      'gov.cta.title':      'Unahitaji maelezo zaidi ?',
      'gov.cta.btn':        'Wasiliana nasi',

      // ── Page Projets ──────────────────────────────────────────────
      'projets.hero.label':  'Shughuli za eneo',
      'projets.hero.title':  'Miradi Yetu',
      'projets.hero.sub':    "CIAS ya CCSUD inatengeneza huduma na miradi kamili kukidhi mahitaji ya wakazi wa manispaa 4 za eneo.",
      'projets.p01.title':   "Uchunguzi wa mshikamano",
      'projets.p02.title':   "Nyumba za haki na haki",
      'projets.p03.title':   "Nyumba ya afya ya taaluma nyingi",
      'projets.p04.title':   "Ofisi ya utamaduni, vijana & michezo",
      'projets.p05.title':   "Warsha na miradi ya ujumuishaji",
      'projets.p06.title':   "Jukwaa la huduma za makazi",
      'projets.p07.title':   "Bursari za pamoja & msaada wa kifedha",
      'projets.p08.title':   "Miundo ya malazi",
      'projets.cta.title':   'Unataka kujua zaidi kuhusu miradi yetu ?',
      'projets.cta.btn':     'Wasiliana nasi',

      // ── Page Membres ──────────────────────────────────────────────
      'membres.hero.label':    'Ushirikiano wa manispaa',
      'membres.hero.title':    'Wanachama wa CCAS',
      'membres.hero.sub':      "Vituo vinne vya Kijamii vya Manispaa vinaunda mtandao wa CIAS ya CCSUD. Pamoja, wanaunda eneo moja la mshikamano kwa wakazi.",
      'membres.network.label': 'Mtandao wetu',
      'membres.network.title': 'Manispaa 4, eneo moja la mshikamano',
      'membres.network.p1':    "Kila CCAS mwanachama inatekeleza huduma za kijamii za karibu katika manispaa yake, kwa nyongeza na dhamira za kikanda za CIAS.",
      'membres.m1.name':       'CCAS ya Bandrélé',
      'membres.m2.name':       'CCAS ya Chirongui',
      'membres.m3.name':       'CCAS ya Bouéni',
      'membres.m4.name':       'CCAS ya Kani-Kéli',
      'membres.cta.title':     'Unataka kuwasiliana na CCAS ?',
      'membres.cta.btn':       'Wasiliana nasi',

      // ── Page Contact ──────────────────────────────────────────────
      'contact.hero.label':    'Mawasiliano',
      'contact.hero.title':    'Wasiliana nasi',
      'contact.form.title':    'Tuma ujumbe',
      'contact.form.intro':    "Una swali au ombi la taarifa? Jaza fomu hapa chini na tutakujibu haraka iwezekanavyo.",
      'contact.field.name':    'Jina kamili',
      'contact.field.email':   'Barua pepe',
      'contact.field.phone':   'Simu',
      'contact.field.subject': 'Mada',
      'contact.field.message': 'Ujumbe',
      'contact.form.submit':   'Tuma ujumbe',
      'contact.info.title':    'Tupate',
      'contact.loc.label':     'Mahali',
      'contact.loc.title':     'Tupate',
    }
  };

  // ── Utilitaires ───────────────────────────────────────────────────

  /** Retourne la traduction d'une clé, avec fallback FR */
  function t(key, lang) {
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key])
      || TRANSLATIONS['fr'][key]
      || key;
  }

  /** Applique les traductions à tous les éléments data-i18n */
  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key, lang);
      // Utilise innerHTML pour les clés contenant du HTML (em, br…)
      if (val.indexOf('<') !== -1) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // Attributs HTML (placeholder, aria-label, label…)
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var pairs = el.getAttribute('data-i18n-attr').split(';');
      pairs.forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length === 2) {
          el.setAttribute(parts[0].trim(), t(parts[1].trim(), lang));
        }
      });
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder'), lang));
    });

    // Classe sur <body> pour CSS conditionnel
    document.body.classList.toggle('lang-shi', lang === 'shi');
    document.body.setAttribute('lang', lang === 'shi' ? 'sw' : 'fr');

    // État actif des boutons du sélecteur
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    // Persistance
    try { localStorage.setItem('cias-lang', lang); } catch (e) {}
  }

  /** Initialise le sélecteur et charge la langue mémorisée */
  function init() {
    var saved = 'fr';
    try { saved = localStorage.getItem('cias-lang') || 'fr'; } catch (e) {}
    if (saved !== 'fr' && saved !== 'shi') saved = 'fr';

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.dataset.lang);
      });
    });

    applyLang(saved);
  }

  // Lance après chargement du DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
