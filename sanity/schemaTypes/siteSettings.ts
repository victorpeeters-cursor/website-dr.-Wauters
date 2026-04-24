import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Instellingen',
  type: 'document',
  fields: [
    // ── Navigatie ────────────────────────────────────
    defineField({
      name: 'navSpecialists_nl',
      title: 'Nav — Specialisten (NL)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navSpecialists_fr',
      title: 'Nav — Spécialistes (FR)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navSpecialists_en',
      title: 'Nav — Specialists (EN)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navExpertise_nl',
      title: 'Nav — Expertise (NL)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navExpertise_fr',
      title: 'Nav — Expertise (FR)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navExpertise_en',
      title: 'Nav — Expertise (EN)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navFaq_nl',
      title: 'Nav — FAQ (NL)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navFaq_fr',
      title: 'Nav — FAQ (FR)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navFaq_en',
      title: 'Nav — FAQ (EN)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navContact_nl',
      title: 'Nav — Contact (NL)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navContact_fr',
      title: 'Nav — Contact (FR)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navContact_en',
      title: 'Nav — Contact (EN)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navAppointment_nl',
      title: 'Nav — Afspraak knop (NL)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navAppointment_fr',
      title: 'Nav — Bouton rendez-vous (FR)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'navAppointment_en',
      title: 'Nav — Appointment button (EN)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'logoSubtitle_nl',
      title: 'Logo — Ondertitel (NL)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'logoSubtitle_fr',
      title: 'Logo — Sous-titre (FR)',
      type: 'string',
      group: 'nav',
    }),
    defineField({
      name: 'logoSubtitle_en',
      title: 'Logo — Subtitle (EN)',
      type: 'string',
      group: 'nav',
    }),

    // ── Banner ───────────────────────────────────────
    defineField({
      name: 'bannerEnabled',
      title: 'Banner — Ingeschakeld',
      type: 'boolean',
      description: 'Schakel de nood-banner in of uit.',
      group: 'banner',
    }),
    defineField({
      name: 'bannerMessage_nl',
      title: 'Banner — Bericht (NL)',
      type: 'string',
      group: 'banner',
    }),
    defineField({
      name: 'bannerMessage_fr',
      title: 'Banner — Message (FR)',
      type: 'string',
      group: 'banner',
    }),
    defineField({
      name: 'bannerMessage_en',
      title: 'Banner — Message (EN)',
      type: 'string',
      group: 'banner',
    }),

    // ── Contact ──────────────────────────────────────
    defineField({
      name: 'contactLabel_nl',
      title: 'Contact — Label (NL)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactLabel_fr',
      title: 'Contact — Label (FR)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactLabel_en',
      title: 'Contact — Label (EN)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactTitle_nl',
      title: 'Contact — Titel (NL)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactTitle_fr',
      title: 'Contact — Titre (FR)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactTitle_en',
      title: 'Contact — Title (EN)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Adres',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'phone',
      title: 'Telefoonnummer',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'phoneHidden_nl',
      title: 'Telefoon verborgen tekst (NL)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'phoneHidden_fr',
      title: 'Téléphone caché (FR)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'phoneHidden_en',
      title: 'Phone hidden text (EN)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'E-mailadres',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'hoursLabel_nl',
      title: 'Openingsuren — Label (NL)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'hoursLabel_fr',
      title: 'Heures — Label (FR)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'hoursLabel_en',
      title: 'Hours — Label (EN)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'hours',
      title: 'Openingsuren',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day_nl', title: 'Dag (NL)', type: 'string' },
            { name: 'day_fr', title: 'Jour (FR)', type: 'string' },
            { name: 'day_en', title: 'Day (EN)', type: 'string' },
            { name: 'time', title: 'Uren', type: 'string' },
          ],
          preview: {
            select: { title: 'day_nl', subtitle: 'time' },
          },
        },
      ],
      group: 'contact',
    }),
    defineField({
      name: 'contactRouteLabel_nl',
      title: 'Route knop (NL)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactRouteLabel_fr',
      title: 'Bouton itinéraire (FR)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactRouteLabel_en',
      title: 'Directions button (EN)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactCallLabel_nl',
      title: 'Bel knop (NL)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactCallLabel_fr',
      title: 'Bouton appeler (FR)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactCallLabel_en',
      title: 'Call button (EN)',
      type: 'string',
      group: 'contact',
    }),

    // ── Footer ───────────────────────────────────────
    defineField({
      name: 'footerRights_nl',
      title: 'Footer — Rechten (NL)',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerRights_fr',
      title: 'Footer — Droits (FR)',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerRights_en',
      title: 'Footer — Rights (EN)',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerPrivacy_nl',
      title: 'Footer — Privacy (NL)',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerPrivacy_fr',
      title: 'Footer — Confidentialité (FR)',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerPrivacy_en',
      title: 'Footer — Privacy (EN)',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerDisclaimer_nl',
      title: 'Footer — Disclaimer (NL)',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerDisclaimer_fr',
      title: 'Footer — Avertissement (FR)',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerDisclaimer_en',
      title: 'Footer — Disclaimer (EN)',
      type: 'string',
      group: 'footer',
    }),
  ],
  groups: [
    { name: 'nav', title: 'Navigatie', default: true },
    { name: 'banner', title: 'Banner' },
    { name: 'contact', title: 'Contact' },
    { name: 'footer', title: 'Footer' },
  ],
  preview: {
    prepare() {
      return { title: 'Site Instellingen' }
    },
  },
})
