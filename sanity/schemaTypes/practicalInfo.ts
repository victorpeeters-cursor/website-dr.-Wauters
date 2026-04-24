import { defineField, defineType } from 'sanity'

export const practicalInfoType = defineType({
  name: 'practicalInfo',
  title: 'Praktische Informatie',
  type: 'document',
  fields: [
    defineField({
      name: 'iconKey',
      title: 'Icoon',
      type: 'string',
      options: {
        list: [
          { title: 'Uitslagen (Vinkje)', value: 'results' },
          { title: 'Voorschriften (Document)', value: 'prescriptions' },
          { title: 'Tarieven (Euro)', value: 'rates' },
          { title: 'Betaling (Kaart)', value: 'payment' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title_nl',
      title: 'Titel (NL)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title_fr',
      title: 'Titre (FR)',
      type: 'string',
    }),
    defineField({
      name: 'title_en',
      title: 'Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'description_nl',
      title: 'Beschrijving (NL)',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description_fr',
      title: 'Description (FR)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'description_en',
      title: 'Description (EN)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'order',
      title: 'Volgorde',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title_nl',
      subtitle: 'iconKey',
    },
  },
})
