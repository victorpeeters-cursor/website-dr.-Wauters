import type { Language } from '@/lib/i18n/translations'

/**
 * Helper: haal een meertalig veld op uit een Sanity object.
 * Valt terug op NL als de vertaling ontbreekt, daarna op de fallback string.
 */
export function localize(
  obj: Record<string, unknown> | null | undefined,
  fieldPrefix: string,
  language: Language,
  fallback: string = ''
): string {
  if (!obj) return fallback
  const value = obj[`${fieldPrefix}_${language}`] as string | undefined
  if (value) return value
  const nl = obj[`${fieldPrefix}_nl`] as string | undefined
  return nl || fallback
}
