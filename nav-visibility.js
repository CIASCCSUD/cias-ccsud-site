/* ===================================================================
   Visibilité des pages dans le menu · CIAS de la CCSUD
   Lit contenuSite.visibilitePages depuis Sanity et retire du menu
   (en-tête + pied de page) les liens des pages désactivées.
   Comportement par défaut : tout visible (si Sanity vide / hors-ligne).
   La page reste accessible par son URL directe — seul le lien est masqué.
   =================================================================== */
(function () {
  'use strict';
  if (typeof CIASSanity === 'undefined') return;

  // Clé Sanity -> URL propre de la page
  var MAP = {
    leCias: '/le-cias',
    gouvernance: '/gouvernance',
    deliberations: '/deliberations',
    nosProjets: '/nos-projets',
    actualites: '/actualites',
    lesCommunes: '/les-communes'
  };

  CIASSanity.query('*[_type=="contenuSite"][0].visibilitePages').then(function (vis) {
    if (!vis) return; // aucun réglage : tout reste visible
    Object.keys(MAP).forEach(function (key) {
      // false = masqué. (undefined/true = visible)
      if (vis[key] === false) {
        var url = MAP[key];
        document.querySelectorAll('a[href="' + url + '"]').forEach(function (a) {
          // On ne masque que les liens de navigation (menus header/footer),
          // pas d'éventuels liens contextuels dans le corps de page.
          if (a.closest('.nav-links, .nav-mobile, .footer')) {
            var li = a.closest('li');
            (li || a).style.display = 'none';
          }
        });
      }
    });
  }).catch(function (e) { console.error('Sanity visibilité menu:', e); });
})();
