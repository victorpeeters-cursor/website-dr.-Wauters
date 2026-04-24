import { type SchemaTypeDefinition } from 'sanity'
import { doctorType } from './doctor'
import { faqType } from './faq'
import { expertiseType } from './expertise'
import { pageContentType } from './pageContent'
import { siteSettingsType } from './siteSettings'
import { practicalInfoType } from './practicalInfo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    doctorType,
    faqType,
    expertiseType,
    pageContentType,
    siteSettingsType,
    practicalInfoType,
  ],
}
