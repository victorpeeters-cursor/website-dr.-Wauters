'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PracticalInfo() {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  const items = [
    { key: 'results' as const, icon: <ResultsIcon /> },
    { key: 'prescriptions' as const, icon: <PrescriptionsIcon /> },
    { key: 'rates' as const, icon: <RatesIcon /> },
    { key: 'payment' as const, icon: <PaymentIcon /> },
  ];

  return (
    <section id="practical-info" ref={sectionRef} className="py-24 lg:py-32 bg-[#F7F5F2]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[12px] tracking-[0.25em] uppercase font-medium text-[#0B1D2E]/40 mb-4">
            {t.practicalInfo.label}
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold text-[#0B1D2E] whitespace-pre-line">
            {t.practicalInfo.title}
          </h2>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {items.map((item, index) => (
            <div
              key={item.key}
              className={`group bg-white rounded-2xl p-8 lg:p-10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${150 + index * 80}ms` : '0ms',
                transitionDuration: '700ms',
              }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#F7F5F2] group-hover:bg-[#0B1D2E]/5 flex items-center justify-center mb-5 transition-colors duration-300">
                <span className="text-[#0B1D2E]">{item.icon}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0B1D2E] mb-3">
                {t.practicalInfo.items[item.key].title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#6B7280]">
                {t.practicalInfo.items[item.key].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SVG Icon Components */
function ResultsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function PrescriptionsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function RatesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}
