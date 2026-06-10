/* ===================================================================
   Crée 2 exemples de base (modèles à dupliquer) · CIAS de la CCSUD
   -------------------------------------------------------------------
   - 1 Actualité  (statut Brouillon → invisible sur le site)
   - 1 Délibération (statut Brouillon → invisible sur le site)

   Servent de « carte de base » que le client peut dupliquer dans le
   Studio plutôt que de partir d'une page blanche.

   Usage :
     export SANITY_TOKEN=<token_editeur>     # NE PAS committer / coller dans un chat
     node sanity/import-exemples.mjs

   Idempotent : _id stables (exemple-actualite / exemple-deliberation),
   donc relançable sans créer de doublons.
   =================================================================== */

const PROJECT_ID = 'l4gh628p';
const DATASET = 'production';
const API = `https://${PROJECT_ID}.api.sanity.io/v2023-05-03/data/mutate/${DATASET}`;

const TOKEN = process.env.SANITY_TOKEN;
if (!TOKEN) {
  console.error('❌ Variable SANITY_TOKEN manquante. Fais : export SANITY_TOKEN=<token> puis relance.');
  process.exit(1);
}

function block(text) {
  return {
    _type: 'block', _key: 'b0', style: 'normal', markDefs: [],
    children: [{ _type: 'span', _key: 's0', text, marks: [] }],
  };
}

const today = new Date().toISOString().slice(0, 10);

const mutations = [
  {
    createOrReplace: {
      _id: 'exemple-actualite',
      _type: 'actualite',
      titre: 'Exemple d\'actualité (modèle à dupliquer)',
      slug: { _type: 'slug', current: 'exemple-actualite' },
      statut: 'brouillon',
      datePublication: today,
      categorie: 'Événement',
      resume: 'Ceci est un exemple d\'actualité. Dupliquez cette carte pour en créer une nouvelle, puis passez son statut sur « Publié » pour l\'afficher sur le site.',
      contenu: [
        block('Ceci est un article d\'exemple. Vous pouvez le dupliquer pour créer une nouvelle actualité.'),
        block('Remplacez ce texte par le contenu de votre choix, ajoutez une image à la une, puis passez le statut sur « Publié » pour le rendre visible sur le site.'),
      ],
    },
  },
  {
    createOrReplace: {
      _id: 'exemple-deliberation',
      _type: 'deliberation',
      titre: 'Exemple de délibération (modèle à dupliquer)',
      type: 'Délibération',
      statut: 'brouillon',
      date: today,
      seance: 'Conseil d\'administration (exemple)',
      description: 'Ceci est un exemple. Dupliquez cette carte, joignez le PDF officiel, puis passez le statut sur « Publié ».',
    },
  },
];

const res = await fetch(API, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + TOKEN },
  body: JSON.stringify({ mutations }),
});

const json = await res.json();
if (!res.ok) {
  console.error('❌ Échec :', JSON.stringify(json, null, 2));
  process.exit(1);
}
console.log('✅ 2 exemples créés (en Brouillon, donc invisibles sur le site) :');
console.log('   • 1 Actualité   → dossier « Actualités »');
console.log('   • 1 Délibération → dossier « Délibérations »');
console.log('Le client peut les dupliquer comme modèles.');
