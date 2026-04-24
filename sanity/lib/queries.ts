import { groq } from 'next-sanity'

// ── Doctors ──────────────────────────────────────────────
export const doctorsQuery = groq`*[_type == "doctor"] | order(order asc) {
  _id,
  name,
  role_nl,
  role_en,
  role_fr,
  "imageUrl": image.asset->url
}`

export interface Doctor {
  _id: string;
  name: string;
  role_nl: string;
  role_en?: string;
  role_fr?: string;
  imageUrl?: string;
}

// ── FAQ ──────────────────────────────────────────────────
export const faqQuery = groq`*[_type == "faq"] | order(order asc) {
  _id,
  question_nl,
  question_fr,
  question_en,
  answer_nl,
  answer_fr,
  answer_en,
  order
}`

export interface FaqItem {
  _id: string;
  question_nl: string;
  question_fr?: string;
  question_en?: string;
  answer_nl: string;
  answer_fr?: string;
  answer_en?: string;
  order?: number;
}

// ── Expertise ────────────────────────────────────────────
export const expertiseQuery = groq`*[_type == "expertise"] | order(order asc) {
  _id,
  iconKey,
  title_nl,
  title_fr,
  title_en,
  description_nl,
  description_fr,
  description_en,
  order
}`

export interface ExpertiseItem {
  _id: string;
  iconKey: string;
  title_nl: string;
  title_fr?: string;
  title_en?: string;
  description_nl: string;
  description_fr?: string;
  description_en?: string;
  order?: number;
}

// ── Page Content (singleton) ─────────────────────────────
export const pageContentQuery = groq`*[_type == "pageContent"][0]`

export interface PageContent {
  // Hero
  heroSubtitle_nl?: string;
  heroSubtitle_fr?: string;
  heroSubtitle_en?: string;
  heroTitle_nl?: string;
  heroTitle_fr?: string;
  heroTitle_en?: string;
  heroTitleAccent_nl?: string;
  heroTitleAccent_fr?: string;
  heroTitleAccent_en?: string;
  heroDescription_nl?: string;
  heroDescription_fr?: string;
  heroDescription_en?: string;
  heroCta_nl?: string;
  heroCta_fr?: string;
  heroCta_en?: string;
  heroCtaSecondary_nl?: string;
  heroCtaSecondary_fr?: string;
  heroCtaSecondary_en?: string;
  heroStatYears?: string;
  heroStatYearsLabel_nl?: string;
  heroStatYearsLabel_fr?: string;
  heroStatYearsLabel_en?: string;
  heroStatSpecialists?: string;
  heroStatSpecialistsLabel_nl?: string;
  heroStatSpecialistsLabel_fr?: string;
  heroStatSpecialistsLabel_en?: string;
  // Sections
  specialistsLabel_nl?: string;
  specialistsLabel_fr?: string;
  specialistsLabel_en?: string;
  specialistsTitle_nl?: string;
  specialistsTitle_fr?: string;
  specialistsTitle_en?: string;
  specialistsDescription_nl?: string;
  specialistsDescription_fr?: string;
  specialistsDescription_en?: string;
  expertiseLabel_nl?: string;
  expertiseLabel_fr?: string;
  expertiseLabel_en?: string;
  expertiseTitle_nl?: string;
  expertiseTitle_fr?: string;
  expertiseTitle_en?: string;
  expertiseDescription_nl?: string;
  expertiseDescription_fr?: string;
  expertiseDescription_en?: string;
  faqTitle_nl?: string;
  faqTitle_fr?: string;
  faqTitle_en?: string;
  practicalInfoLabel_nl?: string;
  practicalInfoLabel_fr?: string;
  practicalInfoLabel_en?: string;
  practicalInfoTitle_nl?: string;
  practicalInfoTitle_fr?: string;
  practicalInfoTitle_en?: string;
}

// ── Site Settings (singleton) ────────────────────────────
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`

export interface HourEntry {
  day_nl?: string;
  day_fr?: string;
  day_en?: string;
  time?: string;
}

export interface SiteSettings {
  // Nav
  navSpecialists_nl?: string;
  navSpecialists_fr?: string;
  navSpecialists_en?: string;
  navExpertise_nl?: string;
  navExpertise_fr?: string;
  navExpertise_en?: string;
  navFaq_nl?: string;
  navFaq_fr?: string;
  navFaq_en?: string;
  navContact_nl?: string;
  navContact_fr?: string;
  navContact_en?: string;
  navAppointment_nl?: string;
  navAppointment_fr?: string;
  navAppointment_en?: string;
  logoSubtitle_nl?: string;
  logoSubtitle_fr?: string;
  logoSubtitle_en?: string;
  // Banner
  bannerEnabled?: boolean;
  bannerMessage_nl?: string;
  bannerMessage_fr?: string;
  bannerMessage_en?: string;
  // Contact
  contactLabel_nl?: string;
  contactLabel_fr?: string;
  contactLabel_en?: string;
  contactTitle_nl?: string;
  contactTitle_fr?: string;
  contactTitle_en?: string;
  address?: string;
  phone?: string;
  phoneHidden_nl?: string;
  phoneHidden_fr?: string;
  phoneHidden_en?: string;
  email?: string;
  hoursLabel_nl?: string;
  hoursLabel_fr?: string;
  hoursLabel_en?: string;
  hours?: HourEntry[];
  contactRouteLabel_nl?: string;
  contactRouteLabel_fr?: string;
  contactRouteLabel_en?: string;
  contactCallLabel_nl?: string;
  contactCallLabel_fr?: string;
  contactCallLabel_en?: string;
  // Footer
  footerRights_nl?: string;
  footerRights_fr?: string;
  footerRights_en?: string;
  footerPrivacy_nl?: string;
  footerPrivacy_fr?: string;
  footerPrivacy_en?: string;
  footerDisclaimer_nl?: string;
  footerDisclaimer_fr?: string;
  footerDisclaimer_en?: string;
}

// ── Practical Info (list) ────────────────────────────────
export const practicalInfoQuery = groq`*[_type == "practicalInfo"] | order(order asc) {
  _id,
  iconKey,
  title_nl,
  title_fr,
  title_en,
  description_nl,
  description_fr,
  description_en,
  order
}`

export interface PracticalInfoItem {
  _id: string;
  iconKey: string;
  title_nl: string;
  title_fr?: string;
  title_en?: string;
  description_nl: string;
  description_fr?: string;
  description_en?: string;
  order?: number;
}
