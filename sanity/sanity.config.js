// Configuration Sanity CMS · CIAS de la CCSUD
// Pour démarrer : npm install && npm run dev dans ce dossier

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import actualite from './schemas/actualite'
import projet from './schemas/projet'
import contenuSite from './schemas/contenuSite'

export default defineConfig({
  name: 'cias-ccsud',
  title: 'CIAS · Espace d\'administration',

  // TODO: Remplacer par les vraies valeurs après création du projet sur sanity.io
  projectId: 'VOTRE_PROJECT_ID',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu du site')
          .items([
            S.item()
              .title('Actualités')
              .child(S.documentTypeList('actualite').title('Toutes les actualités')),
            S.item()
              .title('Nos projets')
              .child(S.documentTypeList('projet').title('Tous les projets')),
            S.item()
              .title('Contenu éditorial')
              .child(
                S.document()
                  .schemaType('contenuSite')
                  .documentId('contenu-site')
                  .title('Textes & coordonnées du site')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [actualite, projet, contenuSite],
  },
})
