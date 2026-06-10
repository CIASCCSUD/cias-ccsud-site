// Schéma Sanity · Réglages du site (visibilité du menu, coordonnées, communes)
// Les textes de chaque page sont gérés dans les documents « Textes des pages ».

export default {
  name: 'contenuSite',
  title: 'Réglages du site',
  type: 'document',
  // Singleton : un seul document de ce type (création unique gérée via la structure)
  fields: [
    // ── Visibilité des pages ──
    {
      name: 'visibilitePages',
      title: 'Visibilité des pages',
      description: 'Décochez une page pour la retirer du menu de navigation (en-tête et pied de page). La page reste accessible par son adresse directe. Les pages Accueil et Contact restent toujours visibles.',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'leCias', title: 'Le CIAS', type: 'boolean', initialValue: true },
        { name: 'gouvernance', title: 'Gouvernance', type: 'boolean', initialValue: true },
        { name: 'deliberations', title: 'Délibérations', type: 'boolean', initialValue: true },
        { name: 'nosProjets', title: 'Nos projets', type: 'boolean', initialValue: true },
        { name: 'actualites', title: 'Actualités', type: 'boolean', initialValue: true },
        { name: 'lesCommunes', title: 'Les communes', type: 'boolean', initialValue: true },
      ],
    },
    // ── Coordonnées ──
    {
      name: 'contact',
      title: 'Coordonnées de contact',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'telephone', title: 'Téléphone', type: 'string' },
        { name: 'email', title: 'E-mail', type: 'string' },
        { name: 'adresseSiege', title: 'Adresse du siège', type: 'text', rows: 2 },
        { name: 'adresseBureau', title: 'Adresse du bureau', type: 'text', rows: 2 },
        { name: 'horaires', title: 'Horaires d\'accueil', type: 'string' },
      ],
    },
    // ── Membres / communes ──
    {
      name: 'communes',
      title: 'Communes · Présentation détaillée',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nom', title: 'Nom de la commune', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'action', title: 'Action du CIAS sur cette commune', type: 'text', rows: 3 },
          ],
          preview: { select: { title: 'nom' } },
        },
      ],
    },
  ],
};
