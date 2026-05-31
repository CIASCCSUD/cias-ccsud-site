// Schéma Sanity · Actualités du CIAS
// Ce fichier définit la structure d'un article d'actualité

export default {
  name: 'actualite',
  title: 'Actualité',
  type: 'document',
  fields: [
    {
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required().max(120),
    },
    {
      name: 'slug',
      title: 'Identifiant URL',
      type: 'slug',
      options: { source: 'titre', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'statut',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          { title: 'Publié', value: 'publie' },
          { title: 'Archivé', value: 'archive' },
          { title: 'Brouillon', value: 'brouillon' },
        ],
        layout: 'radio',
      },
      initialValue: 'brouillon',
      validation: Rule => Rule.required(),
    },
    {
      name: 'datePublication',
      title: 'Date de publication',
      type: 'date',
      options: { dateFormat: 'DD/MM/YYYY' },
      validation: Rule => Rule.required(),
    },
    {
      name: 'categorie',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          'Insertion',
          'Santé',
          'Logement',
          'Protection',
          'Jeunesse',
          'Partenariat',
          'Événement',
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'imageUne',
      title: 'Image à la une',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Texte alternatif', type: 'string' },
      ],
    },
    {
      name: 'resume',
      title: 'Résumé (extrait)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(280),
      description: 'Affiché dans les listes. Maximum 280 caractères.',
    },
    {
      name: 'contenu',
      title: 'Contenu complet',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'documentJoint',
      title: 'Document joint (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
    },
  ],
  orderings: [
    {
      title: 'Date de publication (plus récent)',
      name: 'dateDesc',
      by: [{ field: 'datePublication', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'titre', subtitle: 'categorie', media: 'imageUne' },
  },
};
