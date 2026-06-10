// Schéma Sanity · Contenu éditorial du site
// Permet au client de modifier tous les textes du site depuis le Studio Sanity

// Génère un sous-objet « en-tête de page » (sur-titre / titre / intro).
function entetePage(name, title) {
  return {
    name,
    title,
    type: 'object',
    options: { collapsible: true, collapsed: true },
    fields: [
      { name: 'surtitre', title: 'Sur-titre', type: 'string' },
      { name: 'titre', title: 'Titre', type: 'string' },
      { name: 'intro', title: 'Introduction', type: 'text', rows: 2 },
    ],
  };
}

export default {
  name: 'contenuSite',
  title: 'Contenu du site',
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
    // ── En-têtes des pages (sur-titre / titre / intro affichés en haut de chaque page) ──
    {
      name: 'entetes',
      title: 'En-têtes des pages',
      description: 'Le sur-titre, le titre et l\'introduction affichés en haut de chaque page.',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        entetePage('leCias', 'Page · Le CIAS'),
        entetePage('gouvernance', 'Page · Gouvernance'),
        entetePage('nosProjets', 'Page · Nos projets'),
        entetePage('actualites', 'Page · Actualités'),
        entetePage('lesCommunes', 'Page · Les communes'),
        entetePage('deliberations', 'Page · Délibérations'),
        entetePage('contact', 'Page · Contact'),
      ],
    },
    // ── Page d'accueil ──
    {
      name: 'hero',
      title: 'Page d\'accueil · Section principale',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'titre', title: 'Titre principal', type: 'text', rows: 2 },
        { name: 'sousTitre', title: 'Sous-titre', type: 'text', rows: 3 },
      ],
    },
    {
      name: 'mission',
      title: 'Page d\'accueil · Notre mission',
      type: 'object',
      fields: [
        { name: 'texte', title: 'Texte de la mission', type: 'text', rows: 4 },
      ],
    },
    {
      name: 'citation',
      title: 'Bloc citation du président',
      type: 'object',
      fields: [
        { name: 'texte', title: 'Citation', type: 'text', rows: 3 },
        { name: 'auteur', title: 'Nom de l\'auteur', type: 'string' },
        { name: 'fonction', title: 'Fonction', type: 'string' },
      ],
    },
    // ── Coordonnées ──
    {
      name: 'contact',
      title: 'Coordonnées de contact',
      type: 'object',
      fields: [
        { name: 'telephone', title: 'Téléphone', type: 'string' },
        { name: 'email', title: 'E-mail', type: 'string' },
        { name: 'adresseSiege', title: 'Adresse du siège', type: 'text', rows: 2 },
        { name: 'adresseBureau', title: 'Adresse du bureau', type: 'text', rows: 2 },
        { name: 'horaires', title: 'Horaires d\'accueil', type: 'string' },
      ],
    },
    // ── À propos ──
    {
      name: 'aPropos',
      title: 'Page L\'ECIAS · Contenu',
      type: 'object',
      fields: [
        { name: 'mission1', title: 'Mission · Paragraphe 1', type: 'text', rows: 3 },
        { name: 'mission2', title: 'Mission · Paragraphe 2', type: 'text', rows: 3 },
        { name: 'mission3', title: 'Mission · Paragraphe 3', type: 'text', rows: 3 },
      ],
    },
    // ── Membres / communes ──
    {
      name: 'communes',
      title: 'Page Communes · Présentation',
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
