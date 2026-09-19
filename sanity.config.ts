import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { dataset, projectId } from './sanity/env'

export default defineConfig({
  basePath: '/admin',
  name: 'Agaton_Dev_Studio',
  title: 'Agaton Dev — Admin Studio',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
