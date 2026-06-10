/* ===================================================================
   Contenu éditable des en-têtes de page · CIAS de la CCSUD
   Remplit le sur-titre / titre / introduction en haut de chaque page
   à partir de contenuSite.entetes.<page> dans Sanity.
   Fallback : si Sanity ne renvoie rien, on garde les textes par défaut.
   =================================================================== */
(function () {
  'use strict';
  if (typeof CIASSanity === 'undefined') return;

  // URL propre -> clé dans entetes
  var PAGE_KEY = {
    '/le-cias': 'leCias',
    '/gouvernance': 'gouvernance',
    '/nos-projets': 'nosProjets',
    '/actualites': 'actualites',
    '/les-communes': 'lesCommunes',
    '/deliberations': 'deliberations',
    '/contact': 'contact'
  };

  var path = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  var key = PAGE_KEY[path];
  if (!key) return; // accueil et pages légales : pas d'en-tête générique

  function setText(el, val) { if (el && val) el.textContent = val; }

  CIASSanity.query('*[_type=="contenuSite"][0].entetes.' + key).then(function (e) {
    if (!e) return;
    var header = document.querySelector('.page-header');
    if (!header) return;
    setText(header.querySelector('.section-label'), e.surtitre);
    setText(header.querySelector('h1'), e.titre);
    setText(header.querySelector('.page-header-intro'), e.intro);
  }).catch(function (err) { console.error('Sanity en-tête page:', err); });
})();
