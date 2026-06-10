/* ===================================================================
   Import des 8 projets existants dans Sanity · CIAS de la CCSUD
   -------------------------------------------------------------------
   Lance une seule fois pour pré-remplir le dataset avec les projets
   actuellement codés en dur dans projets.html.

   Usage :
     export SANITY_TOKEN=<ton_token_editeur>   # NE PAS committer ce token
     node sanity/import-projets.mjs

   Le script est idempotent : il utilise un _id stable par projet
   (projet-import-01 … 08), donc le relancer met à jour au lieu de
   créer des doublons.
   =================================================================== */

const PROJECT_ID = 'l4gh628p';
const DATASET = 'production';
const API = `https://${PROJECT_ID}.api.sanity.io/v2023-05-03/data/mutate/${DATASET}`;

const TOKEN = process.env.SANITY_TOKEN;
if (!TOKEN) {
  console.error('❌ Variable SANITY_TOKEN manquante. Fais : export SANITY_TOKEN=<ton_token> puis relance.');
  process.exit(1);
}

/* Statut affiché -> valeur du schéma */
const STATUT = {
  'En cours': 'encours',
  "À l'étude": 'etude',
  'Planifié': 'planifie',
  'Terminé': 'termine',
};

/* Transforme un texte (paragraphes séparés par \n\n) en Portable Text. */
function toPortableText(text) {
  return String(text || '')
    .split('\n\n')
    .filter((p) => p.trim())
    .map((p, i) => ({
      _type: 'block',
      _key: 'b' + i,
      style: 'normal',
      markDefs: [],
      children: [{ _type: 'span', _key: 's' + i, text: p.trim(), marks: [] }],
    }));
}

function slugify(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 96);
}

/* Les 8 projets (repris de PROJETS_DATA dans projets.html) */
const PROJETS = [
  { n:'01', title:"Observatoire des solidarités", axe:"Santé", statut:"En cours",
    lead:"Outil de diagnostic et de pilotage des politiques sociales du Sud de Mayotte, l'Observatoire centralise les données pour mieux comprendre les fragilités et cibler l'action.",
    long:"L'Observatoire des solidarités collecte, croise et analyse les données sociales du territoire pour offrir aux élus, agents et partenaires une vision objectivée des besoins. Il produit des tableaux de bord trimestriels, des cartographies de la précarité et des notes thématiques (jeunesse, logement, santé). C'est l'outil socle qui alimente toute la stratégie du CIAS.",
    budget:"320 000 €", partenaires:["INSEE","DEETS Mayotte","CAF","Conseil départemental","Université de Mayotte"] },
  { n:'02', title:"Maisons du droit et de la justice", axe:"Accès aux droits", statut:"À l'étude",
    lead:"Lieux d'écoute, d'information et d'orientation juridique de proximité, ouverts à tous les habitants du Sud de Mayotte.",
    long:"Les Maisons du droit et de la justice offriront un accès gratuit à un conseiller juridique, à un écrivain public et à des permanences spécialisées (droit de la famille, droit des étrangers, médiation). Une première implantation est envisagée à Bandrélé, avec des permanences itinérantes dans les trois autres communes.",
    budget:"180 000 € / an", partenaires:["Ministère de la Justice","CDAD de Mayotte","France Services","Préfecture","Barreau de Mayotte"] },
  { n:'03', title:"Maison de santé pluridisciplinaire", axe:"Santé", statut:"Planifié",
    lead:"Un lieu unique regroupant médecins, infirmiers, sages-femmes et professionnels paramédicaux pour répondre à la désertification médicale du Sud.",
    long:"Face au déficit d'offre de soins du territoire, le CIAS porte le projet d'une maison de santé pluridisciplinaire. Elle accueillera médecins généralistes, spécialistes en consultation avancée, infirmiers, kinésithérapeutes et un point d'écoute santé mentale. Un volet de prévention sera développé autour des maladies chroniques et de la santé maternelle.",
    budget:"2,4 M€ investissement", partenaires:["ARS Mayotte","CHM","CPAM","Ordres professionnels","Communes membres"] },
  { n:'04', title:"Office intercommunal culture, jeunesse & sports", axe:"Jeunesse", statut:"En cours",
    lead:"Une structure dédiée à la jeunesse pour animer la vie culturelle, sportive et associative des quatre communes.",
    long:"L'Office intercommunal coordonne l'offre culturelle, sportive et de jeunesse à l'échelle du Sud. Il anime un programme annuel d'événements, soutient les associations locales, organise des stages multisports pendant les vacances scolaires et porte un dispositif d'aide au permis de conduire pour les 18-25 ans.",
    budget:"240 000 € / an", partenaires:["DRAJES","Quatre communes membres","DAC Mayotte","Comité régional olympique","Associations locales"] },
  { n:'05', title:"Ateliers et chantiers d'insertion", axe:"Insertion", statut:"En cours",
    lead:"Des parcours d'accompagnement individualisés vers l'emploi, combinant formation pratique, encadrement social et mise en situation professionnelle.",
    long:"Le CIAS porte plusieurs chantiers d'insertion sur les métiers du BTP, de l'environnement et des services à la personne. Chaque salarié en parcours bénéficie d'un contrat de 6 à 24 mois, d'une formation qualifiante et d'un accompagnement social global. Le programme Mobil'Sud lève en parallèle les freins à la mobilité (permis, transport).",
    budget:"1,1 M€ / an", partenaires:["France Travail","DEETS Mayotte","Mission locale","Employeurs du Sud","Fonds social européen"] },
  { n:'06', title:"Plateforme de service de l'habitat", axe:"Logement", statut:"À l'étude",
    lead:"Un guichet unique d'information et d'accompagnement sur le logement, la rénovation et l'amélioration de l'habitat.",
    long:"La plateforme de service de l'habitat propose un accompagnement gratuit aux propriétaires occupants modestes pour leurs travaux de rénovation, ainsi qu'aux locataires en recherche de logement décent. Elle s'appuie sur un partenariat fort avec l'Adil, Action Logement et les bailleurs sociaux du territoire.",
    budget:"210 000 € / an", partenaires:["Adil de Mayotte","Anah","Action Logement","Bailleurs sociaux","DDETS"] },
  { n:'07', title:"Bourses intercommunales & aides financières", axe:"Jeunesse", statut:"En cours",
    lead:"Un dispositif de bourses et d'aides ponctuelles pour soutenir les étudiants et les familles en situation de fragilité économique.",
    long:"Le CIAS attribue chaque année des bourses d'études aux jeunes du territoire poursuivant des études supérieures en métropole ou à La Réunion. Un fonds d'aide d'urgence complète le dispositif pour les familles confrontées à un accident de la vie (deuil, hospitalisation, sinistre).",
    budget:"150 000 € / an", partenaires:["CCSUD","Quatre communes membres","Conseil départemental","Crous","Lycées du Sud"] },
  { n:'08', title:"Structures d'hébergement", axe:"Logement", statut:"Planifié",
    lead:"Des solutions d'hébergement d'urgence et d'insertion pour accompagner les personnes vulnérables vers un logement pérenne.",
    long:"Le CIAS prévoit la création d'une résidence sociale de 20 places à proximité de Bandrélé, doublée d'un dispositif d'hébergement d'urgence saisonnier en période cyclonique. Chaque personne accueillie bénéficie d'un accompagnement social personnalisé pour préparer sa sortie vers le logement de droit commun.",
    budget:"1,8 M€ investissement", partenaires:["SIAO Mayotte","DDETS","Préfecture","Bailleurs sociaux","Associations spécialisées"] },
];

const mutations = PROJETS.map((p) => ({
  createOrReplace: {
    _id: 'projet-import-' + p.n,
    _type: 'projet',
    titre: p.title,
    slug: { _type: 'slug', current: slugify(p.title) },
    statut: STATUT[p.statut] || 'encours',
    axe: p.axe,
    description: p.lead,
    descriptionComplete: toPortableText(p.long),
    budget: p.budget,
    partenaires: p.partenaires,
  },
}));

const res = await fetch(API, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + TOKEN,
  },
  body: JSON.stringify({ mutations }),
});

const json = await res.json();
if (!res.ok) {
  console.error('❌ Échec import :', JSON.stringify(json, null, 2));
  process.exit(1);
}
console.log(`✅ ${mutations.length} projets importés/mis à jour dans Sanity.`);
console.log('   IDs :', json.results.map((r) => r.id).join(', '));
