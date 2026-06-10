/* ===================================================================
   Textes éditables des pages · CIAS de la CCSUD
   Chaque page a son document Sanity (dossier « Textes des pages » du
   Studio). Tout élément HTML portant data-edit="<champ>" est rempli
   avec la valeur du champ correspondant.
   Fallback : si Sanity ne renvoie rien, les textes par défaut restent.
   =================================================================== */
(function () {
  'use strict';
  if (typeof CIASSanity === 'undefined') return;

  // URL propre -> type de document Sanity
  var PAGE_TYPE = {
    '/': 'pageAccueil',
    '/accueil': 'pageAccueil',
    '/le-cias': 'pageLeCias',
    '/gouvernance': 'pageGouvernance',
    '/nos-projets': 'pageProjets',
    '/actualites': 'pageActualites',
    '/les-communes': 'pageCommunes',
    '/deliberations': 'pageDeliberations',
    '/contact': 'pageContact'
  };

  var path = window.location.pathname.replace(/\.html$/, '').replace(/index$/, '').replace(/\/$/, '') || '/';
  var type = PAGE_TYPE[path];
  if (!type) return; // pages légales, article… : rien à remplir

  CIASSanity.query('*[_type=="' + type + '"][0]').then(function (c) {
    if (!c) return;
    document.querySelectorAll('[data-edit]').forEach(function (el) {
      var key = el.getAttribute('data-edit');
      if (c[key]) el.textContent = c[key];
    });
  }).catch(function (err) { console.error('Sanity textes page:', err); });
})();
