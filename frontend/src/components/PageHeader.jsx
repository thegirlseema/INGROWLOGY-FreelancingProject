import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Shared page hero header used across non-home pages
const PageHeader = ({ eyebrow, title, italicWord, description, ctaPrimary, ctaSecondary, image }) => {
  const renderTitle = () => {
    if (!italicWord) return title;
    const parts = title.split(italicWord);
    return (
      <>
        {parts[0]}
        <span className="font-italic text-gradient-teal">{italicWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative pt-40 pb-20 smooth-bg overflow-hidden">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="grid-lines" />
      <svg
        className="absolute top-32 right-10 w-64 h-64 opacity-40 slow-spin pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="#22a884" strokeWidth="0.6" strokeDasharray="3 4" />
        <circle cx="100" cy="100" r="60" stroke="#f5af50" strokeWidth="0.6" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`grid ${image ? 'lg:grid-cols-[1.1fr_1fr]' : 'lg:grid-cols-1'} gap-12 items-center`}>
          <div className="reveal in-view">
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-sm border border-[#22a884]/30 bg-white/40 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#22a884] animate-pulse" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#22a884] font-medium">{eyebrow}</span>
            </div>
            <h1 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.02] text-[#1a2520]">
              {renderTitle()}
            </h1>
            {description && (
              <p className="mt-7 max-w-xl text-[15px] leading-[1.8] text-[#1a2520]/75">{description}</p>
            )}
            <div className="mt-9 flex flex-wrap gap-4">
              {ctaPrimary && (
                <Link
                  to={ctaPrimary.to}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#22a884] text-white text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#1c8d6f] transition-all duration-300 hover:shadow-xl hover:shadow-[#22a884]/30 hover:-translate-y-0.5"
                >
                  {ctaPrimary.label}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  to={ctaSecondary.to}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 border border-[#22a884]/40 text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#22a884]/5 hover:border-[#22a884] transition-all duration-300"
                >
                  {ctaSecondary.label}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>

          {image && (
            <div className="relative tilt-on-hover reveal in-view reveal-delay-2">
              <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-[#22a884]/15 aspect-[4/5] border border-[#22a884]/20">
                <img src={image} alt="" className="w-full h-full object-cover img-tint" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2520]/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#22a884]/30 rounded-sm -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#f5af50]/40 rounded-sm -z-10" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
