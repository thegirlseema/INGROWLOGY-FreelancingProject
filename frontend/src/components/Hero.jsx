import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { heroStats, marqueeItems } from '../mock';

const Hero = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!wrapperRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      wrapperRef.current.style.setProperty('--mx', `${x}px`);
      wrapperRef.current.style.setProperty('--my', `${y}px`);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section
      id="home"
      ref={wrapperRef}
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-12 smooth-bg overflow-hidden"
    >
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="grid-lines"></div>

      {/* Decorative geometric SVG */}
      <svg
        className="absolute top-20 right-10 w-72 h-72 opacity-40 slow-spin pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="#22a884" strokeWidth="0.6" strokeDasharray="3 4" />
        <circle cx="100" cy="100" r="70" stroke="#22a884" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="50" stroke="#f5af50" strokeWidth="0.6" strokeDasharray="2 3" />
        <circle cx="100" cy="30" r="4" fill="#22a884" />
        <circle cx="170" cy="100" r="3" fill="#f5af50" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-center">
          <div
            style={{ transform: 'translate(var(--mx, 0), var(--my, 0))' }}
            className="transition-transform duration-300 ease-out"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-10 rounded-sm border border-[#22a884]/30 bg-white/40 backdrop-blur-sm reveal in-view">
              <span className="w-2 h-2 rounded-full bg-[#22a884] animate-pulse"></span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#22a884] font-medium">
                Cybersecurity · Cloud · Infrastructure · DevSecOps
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.98] text-[#1a2520] tracking-tight">
              <span className="block reveal in-view">Innovation</span>
              <span className="block font-italic text-gradient-teal reveal in-view reveal-delay-1">
                with Growth
              </span>
              <span className="block font-italic text-gradient-orange reveal in-view reveal-delay-2">
                &amp; Technology
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-[15px] leading-[1.7] text-[#1a2520]/75 reveal in-view reveal-delay-3">
              Ingrowlogy Private Limited empowers businesses to excel in the digital era —
              aligning technical expertise with strategic objectives for sustainable growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 reveal in-view reveal-delay-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#22a884] text-white text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#1c8d6f] transition-all duration-300 hover:shadow-xl hover:shadow-[#22a884]/30 hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border border-[#22a884]/40 text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#22a884]/5 hover:border-[#22a884] transition-all duration-300"
              >
                About Us
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Stats column */}
          <div className="hidden lg:flex flex-col gap-10 items-end pr-4">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-right reveal in-view float-anim"
                style={{ animationDelay: `${i * 0.8}s`, transitionDelay: `${0.4 + i * 0.15}s` }}
              >
                <div className="stat-number text-5xl md:text-6xl leading-none">{stat.value}</div>
                <div className="mt-2 text-[10px] tracking-[0.28em] uppercase text-[#1a2520]/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3">
          <div className="section-line"></div>
          <span className="text-[10px] tracking-[0.28em] uppercase text-[#1a2520]/50">
            Scroll to explore
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-[#22a884] animate-bounce" />
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-16 overflow-hidden border-y border-[#22a884]/15 py-5 bg-white/30 backdrop-blur-sm">
        <div className="flex marquee-track whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-italic font-serif text-2xl md:text-3xl text-[#1a2520]/70 px-10 flex items-center gap-10"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5af50]"></span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
