import { defineField, defineType } from 'sanity'

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Agaton Dev',
    }),
    defineField({
      name: 'tagline',
      title: 'Hero Tagline',
      type: 'string',
      initialValue: 'Premium Sales Templates & High-Converting UI Components',
    }),
    defineField({
      name: 'announcement',
      title: 'Announcement Banner',
      type: 'string',
    }),
  ],
})
