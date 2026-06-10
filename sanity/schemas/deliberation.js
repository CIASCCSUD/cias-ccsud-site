// Schéma Sanity · Délibérations & procès-verbaux du CIAS
// Le client ajoute / modifie / supprime des documents officiels et y joint un PDF
// que les visiteurs peuvent télécharger.

export default {
  name: 'deliberation',
  title: 'Délibération / Procès-verbal',
  type: 'document',
  fields: [
    {
      name: 'titre',
      title: 'Titre du document',
      type: 'string',
      validation: (Rule) => Rule.required().max(160),
    },
    {
      name: 'type',
      title: 'Type de document',
      type: 'string',
      options: {
        list: [
          { title: 'Délibération', value: 'Délibération' },
          { title: 'Procès-verbal', value: 'Procès-verbal' },
        ],
        layout: 'radio',
      },
      initialValue: 'Délibération',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'statut',
      title: 'Statut',
      description: 'Seuls les documents « Publié » apparaissent sur le site.',
      type: 'string',
      options: {
        list: [
          { title: 'Publié', value: 'publie' },
          { title: 'Brouillon', value: 'brouillon' },
        ],
        layout: 'radio',
      },
      initialValue: 'publie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date de la séance',
      type: 'date',
      options: { dateFormat: 'DD/MM/YYYY' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seance',
      title: 'Séance (facultatif)',
      description: 'Ex. « Conseil d\'administration du 12 mars 2026 ».',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description (facultatif)',
      type: 'text',
      rows: 2,
    },
    {
      name: 'pdf',
      title: 'Document PDF',
      description: 'Fichier téléchargeable par les visiteurs.',
      type: 'file',
      options: { accept: '.pdf' },
    },
  ],
  orderings: [
    {
      title: 'Date (plus récent)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'titre', subtitle: 'type', date: 'date' },
    prepare(sel) {
      return { title: sel.title, subtitle: [sel.type, sel.date].filter(Boolean).join(' · ') };
    },
  },
};
