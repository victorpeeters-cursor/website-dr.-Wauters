'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import type { Language } from '@/lib/i18n/translations';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col leading-tight"
          >
            <span className="font-serif text-lg font-semibold tracking-tight text-[#0B1D2E]">
              Wauters & Vandoorne
            </span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#6B7280] w-full text-left">
              {t.nav.logoSubtitle}
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: t.nav.specialists, id: 'specialists' },
              { label: t.nav.expertise, id: 'expertise' },
              { label: t.nav.faq, id: 'faq' },
              { label: 'Info', id: 'practical-info' },
              { label: t.nav.contact, id: 'contact' },
            ].map(({ label, id }) => (
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
              {t.nav.appointment}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </nav>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center bg-[#0B1D2E] text-white text-[12px] font-medium px-4 py-2 rounded-full"
            >
              {t.nav.appointment}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
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
        className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-start px-8 pt-12 gap-8">
          {[
            { label: t.nav.specialists, id: 'specialists' },
            { label: t.nav.expertise, id: 'expertise' },
            { label: t.nav.faq, id: 'faq' },
            { label: 'Info', id: 'practical-info' },
            { label: t.nav.contact, id: 'contact' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-2xl font-serif text-[#0B1D2E]"
            >
              {label}
            </button>
          ))}
          <div className="flex items-center gap-2 pt-4 border-t border-[#E5E7EB] w-full">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setMobileOpen(false);
                }}
                className={`px-3 py-1.5 text-sm font-medium tracking-wider uppercase rounded transition-all duration-200 ${
                  language === lang
                    ? 'bg-[#0B1D2E] text-white'
                    : 'text-[#6B7280] hover:text-[#0B1D2E]  border border-[#E5E7EB]'
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
