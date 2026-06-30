import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import {
  detailedStats,
  aboutFeatures,
  whyChoose,
  serviceCategories,
} from '../mock';
import { ArrowRight } from 'lucide-react';

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="section-line"></div>
    <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">
      {children}
    </span>
  </div>
);

const Icon = ({ name, ...props }) => {
  const Comp = Icons[name] || Icons.Sparkles;
  return <Comp {...props} />;
};

// ---------- Stats Strip ----------
export const StatsStrip = () => (
  <section className="relative py-16 bg-gradient-to-b from-[#eef6f0] to-[#e6f1e9] overflow-hidden">
    <div className="absolute inset-0 grid-lines opacity-50"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {detailedStats.map((s, i) => (
          <div
            key={s.label}
            className="text-center group reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="stat-number text-5xl md:text-6xl leading-none group-hover:scale-110 transition-transform duration-500 inline-block">
              {s.value}
            </div>
            <div className="mt-3 text-[10px] tracking-[0.28em] uppercase text-[#1a2520]/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- About Section ----------
export const About = () => (
  <section id="about" className="relative py-28 overflow-hidden">
    <div className="orb orb-3"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel>About Ingrowlogy</SectionLabel>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] text-[#1a2520] mb-8">
            Empowering businesses<br />
            to excel in the <span className="font-italic text-gradient-teal">digital era</span>
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#1a2520]/75 mb-8 max-w-xl">
            Ingrowlogy is a digital transformation services partner — combining strategy,
            architecture and engineering capability across cybersecurity, cloud, infrastructure
            and application services. We align technical expertise with your business
            objectives to deliver outcomes, not just tickets.
          </p>
          <div className="relative p-8 mb-10 border-l-2 border-[#22a884] bg-white/40 backdrop-blur-sm rounded-r-sm tilt-on-hover">
            <p className="font-italic font-serif text-2xl text-[#1a2520]/85 leading-snug">
              "We view technology as a catalyst for progress, not just a tool."
            </p>
            <div className="mt-4 text-[10px] tracking-[0.28em] uppercase text-[#22a884]">
              Core Philosophy — Ingrowlogy Pvt. Ltd.
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#22a884] text-white text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#1c8d6f] transition-all duration-300 hover:-translate-y-0.5"
            >
              Our Story <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#22a884]/40 text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#22a884]/5 transition-all duration-300"
            >
              Get in Touch <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:mt-16">
          {aboutFeatures.map((f, i) => (
            <div
              key={f.title}
              className="card-3d glass-card p-7 rounded-sm reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#22a884] to-[#1c8d6f] flex items-center justify-center mb-5 shadow-md">
                <Icon name={f.icon} className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold text-[#1a2520] mb-2 text-[15px]">{f.title}</h4>
              <p className="text-[13px] leading-relaxed text-[#1a2520]/65">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ---------- Why Choose ----------
export const WhyChoose = () => (
  <section className="relative py-28 bg-gradient-to-b from-[#e6f1e9] to-[#dde9e0] overflow-hidden">
    <div className="absolute inset-0 grid-lines opacity-40"></div>
    {/* Decorative connecting lines */}
    <svg className="connector-svg hidden lg:block" viewBox="0 0 1400 600" preserveAspectRatio="none">
      <path d="M 100 300 Q 400 100 700 300 T 1300 300" stroke="#22a884" strokeWidth="1" fill="none" strokeDasharray="4 6" className="draw-line" />
      <path d="M 100 350 Q 400 550 700 350 T 1300 350" stroke="#f5af50" strokeWidth="1" fill="none" strokeDasharray="4 6" className="draw-line" />
    </svg>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="text-center mb-20">
        <div className="flex justify-center mb-6">
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 rounded-full bg-[#22a884] pulse-ring"></div>
          </div>
        </div>
        <SectionLabel>
          <div className="flex justify-center">Why Choose Ingrowlogy</div>
        </SectionLabel>
        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] text-[#1a2520]">
          Built for resilience.<br />
          <span className="font-italic text-gradient-teal">Engineered for growth.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChoose.map((item, i) => (
          <div
            key={item.num}
            className="card-3d bg-white/60 backdrop-blur-sm p-8 rounded-sm border border-[#22a884]/15 reveal group"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-italic font-serif text-3xl text-[#22a884]">{item.num}</span>
              <div className="w-11 h-11 rounded-md bg-[#22a884]/10 flex items-center justify-center group-hover:bg-[#22a884] group-hover:rotate-12 transition-all duration-500">
                <Icon
                  name={item.icon}
                  className="w-5 h-5 text-[#22a884] group-hover:text-white transition-colors duration-500"
                />
              </div>
            </div>
            <h4 className="font-serif text-2xl text-[#1a2520] mb-3">{item.title}</h4>
            <p className="text-[13px] leading-relaxed text-[#1a2520]/65">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Services ----------
export const Services = () => {
  const [active, setActive] = useState(serviceCategories[0].id);
  const current = serviceCategories.find((c) => c.id === active);

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="orb orb-1" style={{ top: '20%', left: '60%' }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <SectionLabel>Comprehensive Service Portfolio</SectionLabel>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] text-[#1a2520] mb-6">
              Our end-to-end<br />
              <span className="font-italic text-gradient-teal">technology solutions</span>
            </h2>
            <p className="max-w-lg text-[15px] leading-[1.8] text-[#1a2520]/70">
              Designed to help businesses thrive in the digital era — from perimeter security
              to cloud infrastructure to full-stack development.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#22a884]/40 text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#22a884]/5 transition-all duration-300 self-start"
          >
            All Services <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#22a884]/15 pb-2">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 text-[11px] tracking-[0.22em] uppercase font-medium transition-all duration-300 relative ${
                active === cat.id
                  ? 'text-[#22a884]'
                  : 'text-[#1a2520]/60 hover:text-[#22a884]'
              }`}
            >
              <Icon name={cat.icon} className="w-4 h-4" />
              {cat.label}
              {active === cat.id && (
                <span className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-[#22a884]"></span>
              )}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {current.items.map((item, i) => (
              <div
                key={item.title}
                className="service-card bg-white/60 backdrop-blur-sm border border-[#22a884]/15 p-6 rounded-sm reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="w-11 h-11 rounded-md bg-gradient-to-br from-[#22a884]/15 to-[#22a884]/5 flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="w-5 h-5 text-[#22a884]" />
                </div>
                <h4 className="font-semibold text-[#1a2520] mb-2 text-[14px]">{item.title}</h4>
                <p className="text-[12.5px] leading-relaxed text-[#1a2520]/65">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Image side */}
          <div className="relative tilt-on-hover">
            <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-[#22a884]/15 aspect-[4/5] border border-[#22a884]/20">
              <img
                src={current.image}
                alt={current.label}
                className="w-full h-full object-cover img-tint"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2520]/85 via-[#1a2520]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="text-[10px] tracking-[0.28em] uppercase text-[#f5af50] mb-2">
                  Featured Category
                </div>
                <h3 className="font-serif text-3xl text-white mb-2">{current.label}</h3>
                <p className="text-[12px] text-white/75 leading-relaxed max-w-sm">
                  Industry-leading solutions, designed and operated by certified engineers.
                </p>
              </div>
              <div className="absolute top-5 right-5 w-12 h-12 rounded-full glass-card flex items-center justify-center">
                <Icon name={current.icon} className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#22a884]/30 rounded-sm -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
