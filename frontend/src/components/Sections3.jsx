import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight, ArrowLeft, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { industries, caseStudies, testimonials, insights } from '../mock';

const Icon = ({ name, ...props }) => {
  const Comp = Icons[name] || Icons.Sparkles;
  return <Comp {...props} />;
};

const SectionLabel = ({ children, center }) => (
  <div className={`flex items-center gap-3 mb-6 ${center ? 'justify-center' : ''}`}>
    <div className="section-line"></div>
    <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">
      {children}
    </span>
    {center && <div className="section-line rotate-180"></div>}
  </div>
);

// ---------- Industries ----------
export const Industries = () => (
  <section className="relative py-28 bg-gradient-to-b from-[#eef6f0] to-[#e6f1e9] overflow-hidden">
    <div className="absolute inset-0 grid-lines opacity-40" />
    <div className="orb orb-2" style={{ top: '40%' }} />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="text-center mb-14 reveal">
        <SectionLabel center>Industries We Serve</SectionLabel>
        <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] leading-[1.05] text-[#1a2520]">
          Powering progress across<br />
          <span className="font-italic text-gradient-teal">industries</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-[14.5px] leading-[1.75] text-[#1a2520]/70">
          We partner with organisations across industries to solve complex challenges
          with tailored technology solutions that drive measurable impact.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
        {industries.map((ind, i) => (
          <div
            key={ind.name}
            className="group bg-white/65 backdrop-blur-sm border border-[#22a884]/15 p-5 rounded-sm text-center hover:border-[#22a884]/40 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-[#22a884]/15 transition-all duration-500 reveal"
            style={{ transitionDelay: `${i * 0.04}s` }}
            title={ind.tagline}
          >
            <div className="w-11 h-11 mx-auto mb-3 rounded-md bg-gradient-to-br from-[#22a884]/12 to-[#22a884]/4 flex items-center justify-center group-hover:from-[#22a884] group-hover:to-[#1c8d6f] transition-all duration-500">
              <Icon name={ind.icon} className="w-4.5 h-4.5 text-[#22a884] group-hover:text-white transition-colors duration-500" />
            </div>
            <div className="text-[12.5px] font-semibold text-[#1a2520] leading-tight">{ind.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Case Studies ----------
export const CaseStudies = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="orb orb-1" style={{ top: '20%', left: '60%' }} />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
        <div>
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] leading-[1.05] text-[#1a2520]">
            Proud projects that<br />
            make our team <span className="font-italic text-gradient-teal">stand out</span>
          </h2>
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#22a884]/40 text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#22a884]/5 transition-all duration-300 self-start"
        >
          View all studies <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((cs, i) => (
          <div
            key={cs.id}
            className="card-3d group bg-white/70 backdrop-blur-sm border border-[#22a884]/15 rounded-sm overflow-hidden reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={cs.image}
                alt={cs.title}
                className="w-full h-full object-cover img-tint group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2520]/75 via-[#1a2520]/15 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-sm text-[10px] tracking-[0.2em] uppercase text-[#22a884] font-semibold">
                {cs.tag}
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-serif text-[22px] leading-tight text-[#1a2520] mb-3">
                {cs.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-[#1a2520]/70 mb-5">{cs.summary}</p>
              <div className="grid grid-cols-3 gap-3 mb-6 pt-5 border-t border-[#22a884]/12">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-italic font-serif text-xl text-gradient-orange">{m.value}</div>
                    <div className="text-[9.5px] tracking-[0.18em] uppercase text-[#1a2520]/55 mt-1 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#22a884] font-medium group-hover:gap-3 transition-all">
                Read case study <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Testimonials ----------
export const Testimonials = () => {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 380, behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#e6f1e9] to-[#dde9e0] overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6 reveal">
          <div>
            <SectionLabel>What clients say</SectionLabel>
            <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] leading-[1.05] text-[#1a2520]">
              Trusted by leaders<br />
              who <span className="font-italic text-gradient-teal">deliver outcomes</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-md border border-[#22a884]/40 text-[#22a884] hover:bg-[#22a884] hover:text-white transition flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-md border border-[#22a884]/40 text-[#22a884] hover:bg-[#22a884] hover:text-white transition flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin"
          style={{ scrollbarWidth: 'thin' }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="snap-start flex-shrink-0 w-[340px] md:w-[400px] bg-white/70 backdrop-blur-sm border border-[#22a884]/15 p-8 rounded-sm reveal hover:border-[#22a884]/40 hover:shadow-lg hover:shadow-[#22a884]/10 transition-all"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <Quote className="w-7 h-7 text-[#22a884]/30 mb-4" />
              <p className="text-[14.5px] leading-[1.75] text-[#1a2520]/85 mb-6 font-italic font-serif">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4 pt-5 border-t border-[#22a884]/15">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#22a884] to-[#1c8d6f] text-white font-serif text-base flex items-center justify-center shadow-md">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#1a2520] text-[14px]">{t.name}</div>
                  <div className="text-[11px] text-[#1a2520]/60">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Insights / Blog ----------
export const Insights = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="orb orb-3" />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6 reveal">
        <div>
          <SectionLabel>Insights & Updates</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] leading-[1.05] text-[#1a2520]">
            Notes from our<br />
            <span className="font-italic text-gradient-teal">engineering teams</span>
          </h2>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#22a884]/40 text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#22a884]/5 transition-all duration-300 self-start"
        >
          All articles <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.slice(0, 3).map((p, i) => (
          <div
            key={p.id}
            className="card-3d group bg-white/70 backdrop-blur-sm border border-[#22a884]/15 rounded-sm overflow-hidden reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover img-tint group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2520]/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-sm text-[10px] tracking-[0.2em] uppercase text-[#22a884] font-semibold">
                {p.tag}
              </div>
            </div>
            <div className="p-7">
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#1a2520]/55 mb-3">{p.date}</div>
              <h3 className="font-serif text-[20px] leading-tight text-[#1a2520] mb-3">{p.title}</h3>
              <p className="text-[13px] leading-[1.7] text-[#1a2520]/65 mb-5">{p.summary}</p>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#22a884] font-medium group-hover:gap-3 transition-all">
                Read article <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {insights.length > 3 && (
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {insights.slice(3, 6).map((p, i) => (
            <div
              key={p.id}
              className="group flex items-center gap-4 p-4 bg-white/55 backdrop-blur-sm border border-[#22a884]/15 rounded-sm hover:border-[#22a884]/40 transition-all reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover img-tint group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] tracking-[0.22em] uppercase text-[#22a884] mb-1.5">{p.tag}</div>
                <div className="font-semibold text-[#1a2520] text-[13.5px] leading-snug line-clamp-2">{p.title}</div>
                <div className="text-[10px] text-[#1a2520]/55 mt-1">{p.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);
