'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface StickyBannerProps {
  enabled?: boolean;
}

export default function StickyBanner({ enabled = false }: StickyBannerProps) {
  const { t } = useLanguage();
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const wasDismissed = sessionStorage.getItem('banner-dismissed');
    if (wasDismissed === 'true') {
      setDismissed(true);
    }
  }, []);

  if (!enabled || dismissed || !mounted) return null;

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('banner-dismissed', 'true');
  };

  return (
    <div className="bg-[#0B1D2E] text-white text-center py-2.5 px-6 relative z-[60]">
      <p className="text-[13px] tracking-wide">
        {t.banner.message}
      </p>
      <button
        onClick={handleDismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        aria-label={t.banner.dismiss}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
}
