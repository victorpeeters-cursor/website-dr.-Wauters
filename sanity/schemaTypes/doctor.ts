import { defineField, defineType } from 'sanity'

export const doctorType = defineType({
  name: 'doctor',
  title: 'Arts',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Naam',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role_nl',
      title: 'Functie / Rol (NL)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role_en',
      title: 'Functie / Rol (EN)',
      type: 'string',
    }),
    defineField({
      name: 'role_fr',
      title: 'Functie / Rol (FR)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Volgorde',
      type: 'number',
      description: 'Bepaalt in welke volgorde de arts wordt getoond (bijv. 1, 2, 3)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role_nl',
      media: 'image',
    },
  },
})
