// Schéma Sanity · Contenu éditorial du site
// Permet au client de modifier tous les textes du site depuis le Studio Sanity

export default {
  name: 'contenuSite',
  title: 'Contenu du site',
  type: 'document',
  // Singleton : un seul document de ce type
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ── Page d'accueil ──
    {
      name: 'hero',
      title: 'Page d\'accueil · Section principale',
      type: 'object',
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
