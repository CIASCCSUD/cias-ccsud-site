// Configuration Sanity CMS · CIAS de la CCSUD
// Pour démarrer : npm install && npm run dev dans ce dossier

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import actualite from './schemas/actualite'
import projet from './schemas/projet'
import deliberation from './schemas/deliberation'
import contenuSite from './schemas/contenuSite'
import pageAccueil from './schemas/pageAccueil'
import pagesSchemas from './schemas/pages'

// Singletons « textes de page » : un dossier par page dans le Studio.
const PAGES = [
  { type: 'pageAccueil', id: 'page-accueil', title: 'Accueil' },
  { type: 'pageLeCias', id: 'page-le-cias', title: 'Le CIAS' },
  { type: 'pageGouvernance', id: 'page-gouvernance', title: 'Gouvernance' },
  { type: 'pageProjets', id: 'page-projets', title: 'Nos projets' },
  { type: 'pageActualites', id: 'page-actualites', title: 'Actualités' },
  { type: 'pageCommunes', id: 'page-communes', title: 'Les communes' },
  { type: 'pageDeliberations', id: 'page-deliberations', title: 'Délibérations' },
  { type: 'pageContact', id: 'page-contact', title: 'Contact' },
]
const SINGLETON_TYPES = [...PAGES.map((p) => p.type), 'contenuSite']

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
            // ── Textes des pages (un dossier par page) ──
            S.listItem()
              .id('textesPages')
              .title('Textes des pages')
              .child(
                S.list()
                  .title('Textes des pages')
                  .items(
                    PAGES.map((p) =>
                      S.listItem()
                        .id(p.type)
                        .title(p.title)
                        .child(
                          S.document().schemaType(p.type).documentId(p.id).title(p.title)
                        )
                    )
                  )
              ),
            S.divider(),
            // ── Contenus de type blog ──
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
            // ── Réglages ──
            S.listItem()
              .id('contenuSite')
              .title('Réglages (menu, coordonnées)')
              .child(
                S.document()
                  .schemaType('contenuSite')
                  .documentId('contenu-site')
                  .title('Réglages du site')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [actualite, projet, deliberation, contenuSite, pageAccueil, ...pagesSchemas],
  },

  // Les singletons (un seul document) ne doivent pas être créables/dupliquables
  // depuis le bouton « + » global du Studio.
  document: {
    newDocumentOptions: (prev) =>
      prev.filter((item) => !SINGLETON_TYPES.includes(item.templateId)),
    actions: (prev, { schemaType }) =>
      SINGLETON_TYPES.includes(schemaType)
        ? prev.filter(({ action }) => action !== 'duplicate' && action !== 'delete')
        : prev,
  },
})
