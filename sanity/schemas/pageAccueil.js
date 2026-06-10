// Schéma Sanity · Textes de la page d'accueil
// Singleton : un seul document. Apparaît comme le dossier « Accueil » dans le Studio.

export default {
  name: 'pageAccueil',
  title: 'Accueil',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Bandeau principal' },
    { name: 'accesRapide', title: 'Accès rapide' },
    { name: 'mission', title: 'Qui sommes-nous' },
    { name: 'chiffres', title: 'Le CIAS en chiffres' },
    { name: 'citation', title: 'Citation du président' },
    { name: 'actualites', title: 'Bloc actualités' },
    { name: 'cta', title: 'Appel à l\'action' },
  ],
  fields: [
    // Bandeau principal
    { name: 'heroTitre', title: 'Titre principal', type: 'text', rows: 2, group: 'hero' },
    { name: 'heroSousTitre', title: 'Sous-titre', type: 'text', rows: 3, group: 'hero' },
    // Accès rapide
    { name: 'accesRapideSurtitre', title: 'Sur-titre', type: 'string', group: 'accesRapide' },
    { name: 'accesRapideTitre', title: 'Titre', type: 'string', group: 'accesRapide' },
    // Qui sommes-nous
    { name: 'missionSurtitre', title: 'Sur-titre', type: 'string', group: 'mission' },
    { name: 'missionTitre', title: 'Titre', type: 'string', group: 'mission' },
    { name: 'missionTexte', title: 'Texte', type: 'text', rows: 4, group: 'mission' },
    // Le CIAS en chiffres
    { name: 'chiffresSurtitre', title: 'Sur-titre', type: 'string', group: 'chiffres' },
    { name: 'chiffresTitre', title: 'Titre', type: 'string', group: 'chiffres' },
    // Citation du président
    { name: 'citationTexte', title: 'Citation', type: 'text', rows: 3, group: 'citation' },
    { name: 'citationAuteur', title: 'Nom de l\'auteur', type: 'string', group: 'citation' },
    { name: 'citationFonction', title: 'Fonction', type: 'string', group: 'citation' },
    // Bloc actualités
    { name: 'actualitesSurtitre', title: 'Sur-titre', type: 'string', group: 'actualites' },
    { name: 'actualitesTitre', title: 'Titre', type: 'string', group: 'actualites' },
    // Appel à l'action
    { name: 'ctaTitre', title: 'Titre', type: 'string', group: 'cta' },
  ],
  preview: { prepare: () => ({ title: 'Page d\'accueil' }) },
};
