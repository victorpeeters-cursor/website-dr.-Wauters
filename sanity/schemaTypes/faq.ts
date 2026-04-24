import { defineField, defineType } from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'Veelgestelde Vraag',
  type: 'document',
  fields: [
    defineField({
      name: 'question_nl',
      title: 'Vraag (NL)',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'question_fr',
      title: 'Question (FR)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'question_en',
      title: 'Question (EN)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'answer_nl',
      title: 'Antwoord (NL)',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer_fr',
      title: 'Réponse (FR)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'answer_en',
      title: 'Answer (EN)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'order',
      title: 'Volgorde',
      type: 'number',
      description: 'Bepaalt de volgorde van de FAQ items (1, 2, 3, ...)',
    }),
  ],
  preview: {
    select: {
      title: 'question_nl',
    },
  },
})
