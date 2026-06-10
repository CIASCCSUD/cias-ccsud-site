// Configuration Sanity CMS · CIAS de la CCSUD
// Pour démarrer : npm install && npm run dev dans ce dossier

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import actualite from './schemas/actualite'
import projet from './schemas/projet'
import deliberation from './schemas/deliberation'
import contenuSite from './schemas/contenuSite'

export default defineConfig({
  name: 'cias-ccsud',
  title: 'CIAS · Espace d\'administration',

  projectId: 'l4gh628p',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu du site')
          .items([
            S.listItem()
              .id('actualites')
              .title('Actualités')
              .child(S.documentTypeList('actualite').title('Toutes les actualités')),
            S.listItem()
              .id('projets')
              .title('Nos projets')
              .child(S.documentTypeList('projet').title('Tous les projets')),
            S.listItem()
              .id('deliberations')
              .title('Délibérations')
              .child(S.documentTypeList('deliberation').title('Délibérations & procès-verbaux')),
            S.divider(),
            S.listItem()
              .id('contenuSite')
              .title('Textes & coordonnées du site')
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
    types: [actualite, projet, deliberation, contenuSite],
  },
})
