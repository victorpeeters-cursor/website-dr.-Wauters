'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FAQ() {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[800px] px-6 lg:px-12">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold text-[#0B1D2E]">
            {t.faq.title}
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border-b border-[#E5E7EB] transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: isVisible ? `${100 + index * 50}ms` : '0ms' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-[15px] font-medium text-[#0B1D2E] pr-8 group-hover:text-[#1A3A5C] transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#0B1D2E] border-[#0B1D2E] rotate-45' : 'group-hover:border-[#0B1D2E]/30'
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? 'white' : '#0B1D2E'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[400px] pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-[14px] leading-relaxed text-[#6B7280] pr-12">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
