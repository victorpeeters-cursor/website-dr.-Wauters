import { defineField, defineType } from 'sanity'

export const expertiseType = defineType({
  name: 'expertise',
  title: 'Expertise',
  type: 'document',
  fields: [
    defineField({
      name: 'iconKey',
      title: 'Icoon',
      type: 'string',
      description: 'Kies het icoon dat bij deze expertise hoort.',
      options: {
        list: [
          { title: 'Astma & Allergie (Wind)', value: 'asthma' },
          { title: 'COPD (Longen)', value: 'copd' },
          { title: 'Luchtweginfecties (Schild)', value: 'infections' },
          { title: 'Tumoren (Scan)', value: 'tumors' },
          { title: 'Longfunctieonderzoek (Activiteit)', value: 'lungFunction' },
          { title: 'Pre-operatief nazicht (Klembord)', value: 'preOperative' },
          { title: 'Slaapstoornissen (Maan)', value: 'sleepDisorders' },
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
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description_fr',
      title: 'Description (FR)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description_en',
      title: 'Description (EN)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'order',
      title: 'Volgorde',
      type: 'number',
      description: 'Bepaalt de volgorde van de expertise items (1, 2, 3, ...)',
    }),
  ],
  preview: {
    select: {
      title: 'title_nl',
      subtitle: 'iconKey',
    },
  },
})
