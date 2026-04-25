'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { localize } from '@/sanity/lib/localize';
import { SiteSettings } from '@/sanity/lib/queries';

export default function FloatingCTA({ settings }: { settings: SiteSettings | null }) {
  const { language, t } = useLanguage();
  const [visible, setVisible] = useState(false);

  const s = settings || {};
  const label = localize(s, 'navAppointment', language, t.nav.appointment);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // check initial position
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className={`lg:hidden fixed bottom-6 right-5 z-50 inline-flex items-center gap-2 bg-[#0B1D2E] text-white text-[13px] font-medium tracking-wide pl-5 pr-4 py-3.5 rounded-full shadow-[0_4px_20px_rgba(11,29,46,0.35)] transition-all duration-500 ease-out ${
        visible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-16 opacity-0 scale-95 pointer-events-none'
      }`}
      aria-label={label}
    >
      {/* Calendar icon */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      {label}
    </a>
  );
}
