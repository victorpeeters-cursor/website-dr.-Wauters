'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Expertise() {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  const items = [
    { key: 'asthma' as const, icon: <WindIcon /> },
    { key: 'copd' as const, icon: <LungsIcon /> },
    { key: 'infections' as const, icon: <ShieldIcon /> },
    { key: 'tumors' as const, icon: <ScanIcon /> },
    { key: 'lungFunction' as const, icon: <ActivityIcon /> },
    { key: 'preOperative' as const, icon: <ClipboardIcon /> },
    { key: 'sleepDisorders' as const, icon: <MoonIcon /> },
  ];

  return (
    <section id="expertise" ref={sectionRef} className="py-24 lg:py-32 bg-[#F7F5F2]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[12px] tracking-[0.25em] uppercase font-medium text-[#0B1D2E]/40 mb-4">
            {t.expertise.label}
          </span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {/* Featured card — spans 2 cols, 2 rows */}
          <div
            className={`md:col-span-2 md:row-span-2 bg-[#0B1D2E] rounded-2xl p-8 lg:p-10 flex flex-col justify-between min-h-[320px] transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.15] font-semibold text-white mb-4">
                {t.expertise.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-white/60 max-w-md">
                {t.expertise.description}
              </p>
            </div>
          </div>

          {/* Expertise cards */}
          {items.map((item, index) => (
            <div
              key={item.key}
              className={`group bg-white rounded-2xl p-6 lg:p-7 flex flex-col justify-between min-h-[180px] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 60}ms` : '0ms', transitionDuration: '700ms' }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#F7F5F2] group-hover:bg-[#0B1D2E]/5 flex items-center justify-center mb-4 transition-colors duration-300">
                <span className="text-[#0B1D2E]">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-semibold text-[15px] text-[#0B1D2E] mb-1.5">
                  {t.expertise.items[item.key].title}
                </h4>
                <p className="text-[13px] leading-relaxed text-[#6B7280]">
                  {t.expertise.items[item.key].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SVG Icon Components */
function WindIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
    </svg>
  );
}

function LungsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v8"/>
      <path d="M6.8 14.6c-1.5 1.3-2.8 3.2-2.8 5.4 0 1.1.9 2 2 2h4V10c-2 0-3 1-4 2l-.8.9"/>
      <path d="M17.2 14.6c1.5 1.3 2.8 3.2 2.8 5.4 0 1.1-.9 2-2 2h-4V10c2 0 3 1 4 2l.8.9"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
      <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
      <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
      <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <path d="M12 11h4"/>
      <path d="M12 16h4"/>
      <path d="M8 11h.01"/>
      <path d="M8 16h.01"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}
