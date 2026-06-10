// Schémas Sanity · Textes éditables de chaque page du site
// Un singleton par page → un dossier par page dans le Studio.
// Chaque champ correspond à un élément marqué data-edit="<champ>" dans le HTML.

function champ(name, title, rows) {
  return rows
    ? { name, title, type: 'text', rows }
    : { name, title, type: 'string' };
}

function entete() {
  return [
    champ('surtitre', 'En-tête · Sur-titre'),
    champ('titre', 'En-tête · Titre'),
    champ('intro', 'En-tête · Introduction', 2),
  ];
}

export const pageLeCias = {
  name: 'pageLeCias',
  title: 'Le CIAS',
  type: 'document',
  fields: [
    ...entete(),
    champ('missionSurtitre', 'Mission · Sur-titre'),
    champ('missionTitre', 'Mission · Titre'),
    champ('mission1', 'Mission · Paragraphe 1', 3),
    champ('mission2', 'Mission · Paragraphe 2', 3),
    champ('mission3', 'Mission · Paragraphe 3', 3),
    champ('axesSurtitre', 'Axes d\'intervention · Sur-titre'),
    champ('valeursSurtitre', 'Valeurs · Sur-titre'),
    champ('valeursTitre', 'Valeurs · Titre'),
    champ('territoireSurtitre', 'Territoire · Sur-titre'),
  ],
  preview: { prepare: () => ({ title: 'Page Le CIAS' }) },
};

export const pageGouvernance = {
  name: 'pageGouvernance',
  title: 'Gouvernance',
  type: 'document',
  fields: [
    ...entete(),
    champ('structureSurtitre', 'Organigramme · Sur-titre'),
    champ('structureTitre', 'Organigramme · Titre'),
    champ('chiffresSurtitre', 'Chiffres · Sur-titre'),
    champ('chiffresTitre', 'Chiffres · Titre'),
    champ('principesSurtitre', 'Principes · Sur-titre'),
    champ('principesTitre', 'Principes · Titre'),
  ],
  preview: { prepare: () => ({ title: 'Page Gouvernance' }) },
};

export const pageCommunes = {
  name: 'pageCommunes',
  title: 'Les communes',
  type: 'document',
  fields: [
    ...entete(),
    champ('reseauSurtitre', 'Réseau · Sur-titre'),
    champ('reseauTitre', 'Réseau · Titre'),
    champ('reseauIntro', 'Réseau · Introduction', 3),
  ],
  preview: { prepare: () => ({ title: 'Page Les communes' }) },
};

export const pageContact = {
  name: 'pageContact',
  title: 'Contact',
  type: 'document',
  fields: [
    ...entete(),
    champ('coordsSurtitre', 'Coordonnées · Sur-titre'),
    champ('coordsTitre', 'Coordonnées · Titre'),
    champ('formTitre', 'Formulaire · Titre'),
    champ('formIntro', 'Formulaire · Introduction', 2),
  ],
  preview: { prepare: () => ({ title: 'Page Contact' }) },
};

export const pageProjets = {
  name: 'pageProjets',
  title: 'Nos projets',
  type: 'document',
  fields: [
    ...entete(),
    champ('introSurtitre', 'Intro · Sur-titre'),
    champ('introTitre', 'Intro · Titre'),
    champ('introLead', 'Intro · Texte', 4),
  ],
  preview: { prepare: () => ({ title: 'Page Nos projets' }) },
};

export const pageActualites = {
  name: 'pageActualites',
  title: 'Actualités (page)',
  type: 'document',
  fields: [...entete()],
  preview: { prepare: () => ({ title: 'Page Actualités' }) },
};

export const pageDeliberations = {
  name: 'pageDeliberations',
  title: 'Délibérations (page)',
  type: 'document',
  fields: [
    ...entete(),
    champ('docsSurtitre', 'Documents · Sur-titre'),
    champ('docsTitre', 'Documents · Titre'),
  ],
  preview: { prepare: () => ({ title: 'Page Délibérations' }) },
};

export default [
  pageLeCias,
  pageGouvernance,
  pageCommunes,
  pageContact,
  pageProjets,
  pageActualites,
  pageDeliberations,
];
