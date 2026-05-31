// Schéma Sanity · Projets du CIAS
// Le client peut ajouter, modifier, archiver des projets et attacher des documents PDF téléchargeables

export default {
  name: 'projet',
  title: 'Projet',
  type: 'document',
  fields: [
    {
      name: 'titre',
      title: 'Titre du projet',
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
          { title: 'En cours', value: 'encours' },
          { title: 'Planifié', value: 'planifie' },
          { title: 'À l\'étude', value: 'etude' },
          { title: 'Terminé', value: 'termine' },
          { title: 'Archivé', value: 'archive' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'axe',
      title: 'Axe d\'intervention',
      type: 'string',
      options: {
        list: ['Santé', 'Insertion', 'Logement', 'Accès aux droits', 'Jeunesse'],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'commune',
      title: 'Commune(s) concernée(s)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: ['Bandrélé', 'Chirongui', 'Kani-Kéli', 'Bouéni', 'Tout le territoire'],
      },
    },
    {
      name: 'image',
      title: 'Image du projet',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Texte alternatif', type: 'string' }],
    },
    {
      name: 'description',
      title: 'Description courte',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(300),
    },
    {
      name: 'descriptionComplete',
      title: 'Description complète',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'documents',
      title: 'Documents téléchargeables',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'titre', title: 'Titre du document', type: 'string' },
            { name: 'fichier', title: 'Fichier PDF', type: 'file', options: { accept: '.pdf,.doc,.docx' } },
            { name: 'dateDocument', title: 'Date du document', type: 'date' },
          ],
          preview: { select: { title: 'titre' } },
        },
      ],
    },
    {
      name: 'dateDebut',
      title: 'Date de début',
      type: 'date',
    },
    {
      name: 'dateFin',
      title: 'Date de fin prévue',
      type: 'date',
    },
    {
      name: 'budget',
      title: 'Budget indicatif',
      type: 'string',
      description: 'Ex: "125 000 €" ou "Sur financement FEDER"',
    },
    {
      name: 'partenaires',
      title: 'Partenaires',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  orderings: [
    {
      title: 'Statut (en cours en premier)',
      name: 'statutDesc',
      by: [{ field: 'statut', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'titre', subtitle: 'axe', media: 'image' },
  },
};
