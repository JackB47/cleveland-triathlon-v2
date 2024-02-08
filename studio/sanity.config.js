import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Cleveland Triathlon V2',

  projectId: 'xwlevetc',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems().filter(
              (listItem) => !['contactFormSettings', 'globalSettings'].includes(listItem.getId()),
            ),
            S.listItem()
              .title('Contact Settings')
              .id('contactSettings')
              .child(
                S.document().schemaType('contactFormSettings').documentId('contactFormSettings'),
              ),
            S.listItem()
              .title('Global Settings')
              .id('globalSettings')
              .child(S.document().schemaType('globalSettings').documentId('globalSettings')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
