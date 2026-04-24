'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useScrollGate } from '@/hooks/useScrollGate';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { localize } from '@/sanity/lib/localize';
import { SiteSettings } from '@/sanity/lib/queries';

export default function Contact({ settings }: { settings: SiteSettings | null }) {
  const { t, language } = useLanguage();
  const phoneRevealed = useScrollGate('faq');
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  const s = settings || {};
  const contactLabel = localize(s, 'contactLabel', language, t.contact.label);
  const contactTitle = localize(s, 'contactTitle', language, t.contact.title);
  const address = s.address || t.contact.addressValue;
  const phone = s.phone || t.contact.phoneValue;
  const phoneHidden = localize(s, 'phoneHidden', language, t.contact.phoneHidden);
  const hoursLabel = localize(s, 'hoursLabel', language, t.contact.hours);
  const routeLabel = localize(s, 'contactRouteLabel', language, t.contact.route);
  const callLabel = localize(s, 'contactCallLabel', language, t.contact.call);

  const hoursData = s.hours && s.hours.length > 0
    ? s.hours.map(h => ({
        day: (h[`day_${language}` as keyof typeof h] as string) || h.day_nl || '',
        time: h.time || '',
      }))
    : t.contact.hoursData;

  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.5!2d4.5346!3d50.7742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3d9b0b0b0b0b0%3A0x0!2sBelgielaan%2023a%2C%203090%20Overijse!5e0!3m2!1snl!2sbe!4v1';
  const mapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Belgielaan+23a,+3090+Overijse,+Belgium';

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 bg-[#F7F5F2]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[12px] tracking-[0.25em] uppercase font-medium text-[#0B1D2E]/40 mb-4">
            {contactLabel}
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold text-[#0B1D2E]">
            {contactTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact details */}
          <div
            className={`space-y-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0B1D2E]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B1D2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-medium text-[#0B1D2E]/40 uppercase tracking-wide mb-1">
                  {t.contact.address}
                </p>
                <p className="text-[15px] text-[#1A1A1A]">{address}</p>
              </div>
            </div>

            {/* Phone — scroll-gated */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0B1D2E]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B1D2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-medium text-[#0B1D2E]/40 uppercase tracking-wide mb-1">
                  {t.contact.phone}
                </p>
                {phoneRevealed ? (
                  <a
                    href={`tel:${phone.replace(/\//g, '')}`}
                    className="text-[15px] text-[#0B1D2E] font-medium hover:text-[#1A3A5C] transition-colors"
                  >
                    {phone}
                  </a>
                ) : (
                  <p className="text-[14px] text-[#6B7280] italic">
                    {phoneHidden}
                  </p>
                )}
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0B1D2E]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B1D2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-medium text-[#0B1D2E]/40 uppercase tracking-wide mb-2">
                  {hoursLabel}
                </p>
                <div className="space-y-1.5">
                  {hoursData.map((row) => (
                    <div key={row.day} className="flex justify-between gap-8 text-[14px]">
                      <span className="text-[#1A1A1A] font-medium min-w-[100px]">{row.day}</span>
                      <span className="text-[#6B7280]">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              {phoneRevealed && (
                <a
                  href={`tel:${phone.replace(/\//g, '')}`}
                  className="inline-flex items-center gap-2 bg-[#0B1D2E] text-white text-[13px] font-medium px-6 py-3 rounded-full hover:bg-[#1A3A5C] transition-colors duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  {callLabel}
                </a>
              )}
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#E5E7EB] text-[#0B1D2E] text-[13px] font-medium px-6 py-3 rounded-full hover:border-[#0B1D2E]/30 transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                {routeLabel}
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#E5E7EB] h-[400px] lg:h-full lg:min-h-[500px]">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Belgielaan 23a, Overijse"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
