'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B1D2E] py-12">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-serif text-lg font-semibold text-white tracking-tight">
              Wauters & Vandoorne
            </span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-white/40 w-full md:text-left">
              {t.nav.logoSubtitle}
            </span>
          </div>

          <div className="flex items-center gap-6 text-[13px] text-white/40">
            <span>© {new Date().getFullYear()} — {t.footer.rights}</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white/70 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white/70 transition-colors">
              {t.footer.disclaimer}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
