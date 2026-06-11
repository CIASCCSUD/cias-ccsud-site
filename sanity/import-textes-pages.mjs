/* Pré-remplit les documents « Textes des pages » avec le texte ACTUEL du site.
   Usage : export SANITY_TOKEN=<token_editeur>   (ou SANITY_AUTH_TOKEN)
           node sanity/import-textes-pages.mjs
   Idempotent : createOrReplace sur des _id fixes (page-accueil, …). */

import { readFileSync } from 'node:fs';

const PROJECT_ID = 'l4gh628p';
const DATASET = 'production';
const API = `https://${PROJECT_ID}.api.sanity.io/v2023-05-03/data/mutate/${DATASET}`;
const TOKEN = process.env.SANITY_TOKEN || process.env.SANITY_AUTH_TOKEN;
if (!TOKEN) { console.error('❌ export SANITY_TOKEN=<token> puis relance.'); process.exit(1); }

const data = JSON.parse(readFileSync(new URL('./pages-content.json', import.meta.url)));

const mutations = Object.entries(data).map(([id, { _type, fields }]) => ({
  createOrReplace: { _id: id, _type, ...fields },
}));

const res = await fetch(API, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + TOKEN },
  body: JSON.stringify({ mutations }),
});
const json = await res.json();
if (!res.ok) { console.error('❌', JSON.stringify(json, null, 2)); process.exit(1); }
console.log(`✅ ${mutations.length} pages pré-remplies avec le texte actuel du site.`);
console.log('   Pages :', Object.keys(data).join(', '));
