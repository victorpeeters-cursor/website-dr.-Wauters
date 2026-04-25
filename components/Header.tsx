'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { localize } from '@/sanity/lib/localize';
import { SiteSettings } from '@/sanity/lib/queries';
import type { Language } from '@/lib/i18n/translations';

export default function Header({ settings }: { settings: SiteSettings | null }) {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const s = settings || {};
  const navSpecialists = localize(s, 'navSpecialists', language, t.nav.specialists);
  const navExpertise = localize(s, 'navExpertise', language, t.nav.expertise);
  const navFaq = localize(s, 'navFaq', language, t.nav.faq);
  const navContact = localize(s, 'navContact', language, t.nav.contact);
  const navAppointment = localize(s, 'navAppointment', language, t.nav.appointment);
  const logoSubtitle = localize(s, 'logoSubtitle', language, t.nav.logoSubtitle);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const languages: Language[] = ['nl', 'fr', 'en'];

  const navItems = [
    { label: navSpecialists, id: 'specialists' },
    { label: navExpertise, id: 'expertise' },
    { label: navFaq, id: 'faq' },
    { label: 'Info', id: 'practical-info' },
    { label: navContact, id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo — smaller on mobile */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col leading-tight"
          >
            <span className="font-serif text-base lg:text-lg font-semibold tracking-tight text-[#0B1D2E]">
              Wauters &amp; Vandoorne
            </span>
            <span className="text-[9px] lg:text-[10px] tracking-[0.15em] uppercase text-[#6B7280] w-full text-left">
              {logoSubtitle}
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[13px] font-medium tracking-wide text-[#1A1A1A]/70 hover:text-[#0B1D2E] transition-colors duration-200"
              >
                {label}
              </button>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 border-l border-[#E5E7EB] pl-6 ml-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-[12px] font-medium tracking-wider uppercase rounded transition-all duration-200 ${
                    language === lang
                      ? 'bg-[#0B1D2E] text-white'
                      : 'text-[#6B7280] hover:text-[#0B1D2E]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="ml-4 inline-flex items-center gap-2 bg-[#0B1D2E] text-white text-[13px] font-medium tracking-wide px-6 py-2.5 rounded-full hover:bg-[#1A3A5C] transition-colors duration-200"
            >
              {navAppointment}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </nav>

          {/* Mobile: Language switcher + Hamburger (CTA moved to FloatingCTA) */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Compact language switcher */}
            <div className="flex items-center gap-0.5">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`min-w-[36px] min-h-[36px] flex items-center justify-center text-[11px] font-medium tracking-wider uppercase rounded-md transition-all duration-200 ${
                    language === lang
                      ? 'bg-[#0B1D2E] text-white'
                      : 'text-[#6B7280]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col justify-center items-center w-11 h-11 gap-1.5"
              aria-label="Menu"
            >
              <span className={`block h-[1.5px] w-5 bg-[#0B1D2E] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-[#0B1D2E] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-white z-40 transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-start px-8 pt-10 gap-7 h-full">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-2xl font-serif text-[#0B1D2E] min-h-[44px] flex items-center"
            >
              {label}
            </button>
          ))}

          {/* CTA in mobile menu */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
            }}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1D2E] text-white text-[15px] font-medium tracking-wide px-6 py-4 rounded-full hover:bg-[#1A3A5C] transition-colors duration-200 mt-2"
          >
            {navAppointment}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <div className="flex items-center gap-2 pt-4 border-t border-[#E5E7EB] w-full">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setMobileOpen(false);
                }}
                className={`min-w-[44px] min-h-[44px] flex items-center justify-center text-sm font-medium tracking-wider uppercase rounded transition-all duration-200 ${
                  language === lang
                    ? 'bg-[#0B1D2E] text-white'
                    : 'text-[#6B7280] hover:text-[#0B1D2E] border border-[#E5E7EB]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
