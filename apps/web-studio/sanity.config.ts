import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from '../../packages/cms/schemas'

export default defineConfig({
  name: 'default',
  title: 'Rubric Website',
  projectId: '98ffjfuo',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
})
