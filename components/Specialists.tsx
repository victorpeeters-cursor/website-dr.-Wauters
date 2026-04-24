'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { localize } from '@/sanity/lib/localize';
import { Doctor, PageContent } from '@/sanity/lib/queries';
import Image from 'next/image';

export default function Specialists({ doctors, content }: { doctors: Doctor[]; content: PageContent | null }) {
  const { t, language } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const c = content || {};
  const label = localize(c, 'specialistsLabel', language, t.specialists.label);
  const title = localize(c, 'specialistsTitle', language, t.specialists.title);
  const description = localize(c, 'specialistsDescription', language, t.specialists.description);

  const team = (doctors || []).map(doc => ({
    name: doc.name,
    role: doc[`role_${language}` as keyof Doctor] || doc.role_nl,
    image: doc.imageUrl || '/images/placeholder.jpg',
  }));

  return (
    <section id="specialists" ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-[12px] tracking-[0.25em] uppercase font-medium text-[#0B1D2E]/40 mb-4">
              {label}
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-semibold text-[#0B1D2E] whitespace-pre-line">
              {title}
            </h2>
          </div>
          <p
            className={`text-[15px] leading-relaxed text-[#6B7280] max-w-md lg:text-right transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {description}
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#F7F5F2] mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#0B1D2E] mb-1">
                {member.name}
              </h3>
              <p className="text-[13px] text-[#6B7280] tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
