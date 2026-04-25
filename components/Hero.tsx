'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { localize } from '@/sanity/lib/localize';
import { PageContent } from '@/sanity/lib/queries';
import Image from 'next/image';

export default function Hero({ content }: { content: PageContent | null }) {
  const { t, language } = useLanguage();
  const { ref: heroRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const c = content || {};
  const subtitle = localize(c, 'heroSubtitle', language, t.hero.subtitle);
  const title = localize(c, 'heroTitle', language, t.hero.title);
  const titleAccent = localize(c, 'heroTitleAccent', language, t.hero.titleAccent);
  const description = localize(c, 'heroDescription', language, t.hero.description);
  const cta = localize(c, 'heroCta', language, t.hero.cta);
  const ctaSecondary = localize(c, 'heroCtaSecondary', language, t.hero.ctaSecondary);
  const statYears = c.heroStatYears || t.hero.statYears;
  const statYearsLabel = localize(c, 'heroStatYearsLabel', language, t.hero.statYearsLabel);
  const statSpecialists = c.heroStatSpecialists || t.hero.statSpecialists;
  const statSpecialistsLabel = localize(c, 'heroStatSpecialistsLabel', language, t.hero.statSpecialistsLabel);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          preload
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12 w-full pt-24 pb-16 lg:pt-40 lg:pb-32">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="inline-block text-[12px] tracking-[0.25em] uppercase font-medium text-[#0B1D2E]/50 mb-6">
              {subtitle}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-semibold text-[#0B1D2E] mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {title}
            <br />
            <span className="italic whitespace-pre-line">{titleAccent}</span>
          </h1>

          {/* Description */}
          <p
            className={`text-[15px] leading-relaxed text-[#6B7280] max-w-lg mb-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {description}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-12 lg:mb-16 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center justify-center gap-2 bg-[#0B1D2E] text-white text-[14px] font-medium tracking-wide px-8 py-3.5 rounded-full hover:bg-[#1A3A5C] transition-colors duration-200 w-full sm:w-auto"
            >
              {cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <button
              onClick={() => scrollTo('expertise')}
              className="inline-flex items-center justify-center gap-2 text-[14px] font-medium tracking-wide text-[#0B1D2E] px-6 py-3.5 rounded-full border border-[#E5E7EB] hover:border-[#0B1D2E]/30 transition-colors duration-200 w-full sm:w-auto"
            >
              {ctaSecondary}
            </button>
          </div>

          {/* Stats */}
          <div
            className={`flex items-center gap-12 transition-all duration-700 delay-[400ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-baseline gap-3">
              <span className="text-4xl lg:text-5xl font-serif font-semibold text-[#0B1D2E]">
                {statYears}
              </span>
              <span className="text-[12px] text-[#6B7280] tracking-wide uppercase leading-tight max-w-[80px]">
                {statYearsLabel}
              </span>
            </div>
            <div className="h-10 w-px bg-[#E5E7EB]" />
            <div className="flex items-baseline gap-3">
              <span className="text-4xl lg:text-5xl font-serif font-semibold text-[#0B1D2E]">
                {statSpecialists}
              </span>
              <span className="text-[12px] text-[#6B7280] tracking-wide uppercase leading-tight max-w-[80px]">
                {statSpecialistsLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
