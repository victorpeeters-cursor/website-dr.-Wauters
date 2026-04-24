'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { localize } from '@/sanity/lib/localize';
import { SiteSettings } from '@/sanity/lib/queries';

export default function Footer({ settings }: { settings: SiteSettings | null }) {
  const { t, language } = useLanguage();

  const s = settings || {};
  const logoSubtitle = localize(s, 'logoSubtitle', language, t.nav.logoSubtitle);
  const rights = localize(s, 'footerRights', language, t.footer.rights);
  const privacy = localize(s, 'footerPrivacy', language, t.footer.privacy);
  const disclaimer = localize(s, 'footerDisclaimer', language, t.footer.disclaimer);

  return (
    <footer className="bg-[#0B1D2E] py-12">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-serif text-lg font-semibold text-white tracking-tight">
              Wauters & Vandoorne
            </span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-white/40 w-full md:text-left">
              {logoSubtitle}
            </span>
          </div>

          <div className="flex items-center gap-6 text-[13px] text-white/40">
            <span>© {new Date().getFullYear()} — {rights}</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white/70 transition-colors">
              {privacy}
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white/70 transition-colors">
              {disclaimer}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
