import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'l4gh628p',
    dataset: 'production',
  },
  /* Nom du sous-domaine du Studio déployé : cias-ccsud.sanity.studio */
  studioHost: 'cias-ccsud',
})
