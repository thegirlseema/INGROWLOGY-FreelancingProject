import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Rocket,
  Award,
  Briefcase,
  Layers,
} from 'lucide-react';
import { heroStats, marqueeItems } from '../mock';

const Hero = () => {
  const stageRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const stage = stageRef.current;
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      stage.style.setProperty('--tx', `${dx * 20}px`);
      stage.style.setProperty('--ty', `${dy * 18}px`);
      stage.style.setProperty('--rx', `${dx * 6}deg`);
      stage.style.setProperty('--ry', `${dy * 6}deg`);
      stage.classList.add('tilt');
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const practiceAreas = [
    'Cybersecurity', 'Cloud', 'Infrastructure',
    'DevSecOps', 'Development', 'Advisory',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 lg:pt-32 pb-10 smooth-bg overflow-hidden"
    >
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="grid-lines"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-6 items-center">
          {/* Left text */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 mb-7 lg:mb-10 rounded-sm border border-[#22a884]/30 bg-white/40 backdrop-blur-sm reveal in-view">
              <span className="w-2 h-2 rounded-full bg-[#22a884] animate-pulse"></span>
              <span className="text-[10px] lg:text-[11px] tracking-[0.22em] uppercase text-[#22a884] font-medium">
                Digital Transformation · Cloud · Cybersecurity
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.4rem,9vw,5.8rem)] leading-[1] text-[#1a2520] tracking-tight">
              <span className="block reveal in-view">Innovation</span>
              <span className="block font-italic text-gradient-teal reveal in-view reveal-delay-1">
                with Growth
              </span>
              <span className="block font-italic text-gradient-orange reveal in-view reveal-delay-2">
                &amp; Technology
              </span>
            </h1>

            <p className="mt-6 lg:mt-8 max-w-xl text-[14px] lg:text-[15px] leading-[1.7] text-[#1a2520]/75 reveal in-view reveal-delay-3">
              Ingrowlogy is a digital transformation services partner — combining strategy,
              architecture and engineering expertise to deliver outcomes that move your
              business forward.
            </p>

            <div className="mt-8 lg:mt-10 flex flex-wrap gap-3 lg:gap-4 reveal in-view reveal-delay-4">
              <a
                href="/services"
                className="group inline-flex items-center gap-2 px-5 lg:px-7 py-3 lg:py-3.5 bg-[#22a884] text-white text-[11px] lg:text-[12px] font-medium tracking-[0.2em] lg:tracking-[0.22em] uppercase rounded-sm hover:bg-[#1c8d6f] transition-all duration-300 hover:shadow-xl hover:shadow-[#22a884]/30 hover:-translate-y-0.5"
              >
                Our Services
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/about"
                className="group inline-flex items-center gap-2 px-5 lg:px-7 py-3 lg:py-3.5 border border-[#22a884]/40 text-[#1a2520] text-[11px] lg:text-[12px] font-medium tracking-[0.2em] lg:tracking-[0.22em] uppercase rounded-sm hover:bg-[#22a884]/5 hover:border-[#22a884] transition-all duration-300"
              >
                About Us
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-10 lg:mt-12 grid grid-cols-3 gap-4 lg:gap-6 max-w-lg reveal in-view reveal-delay-4">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="stat-number text-2xl sm:text-3xl md:text-4xl leading-none">{stat.value}</div>
                  <div className="mt-2 text-[9px] lg:text-[10px] tracking-[0.22em] uppercase text-[#1a2520]/55 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Stage (desktop) / Stacked dashboard (mobile) */}
          <div className="order-1 lg:order-2 relative w-full">
            {/* MOBILE / TABLET: simplified flat dashboard grid */}
            <div className="lg:hidden relative">
              <svg
                className="absolute inset-0 w-full h-full slow-spin opacity-50 pointer-events-none"
                viewBox="0 0 600 600"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="300" cy="300" r="240" stroke="#22a884" strokeWidth="0.7" strokeDasharray="2 6" />
                <circle cx="300" cy="300" r="180" stroke="#f5af50" strokeWidth="0.7" strokeDasharray="2 8" />
              </svg>

              <div className="relative grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto">
                {/* Projects */}
                <div className="hero-card !static !relative !rotate-0 !w-auto" style={{ transform: 'none', animation: 'none' }}>
                  <div className="hc-head">
                    <div className="hc-ico">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span className="hc-chip"><span className="pulse"></span>FY25</span>
                  </div>
                  <div>
                    <div className="hc-eyebrow">Projects</div>
                    <div className="hc-value" style={{ fontSize: '22px' }}>150+</div>
                    <div className="hc-sub mt-1">↑ 38% YoY</div>
                  </div>
                  <div className="hc-bars" style={{ height: '38px' }}>
                    {[40, 55, 50, 70, 65, 85, 78, 95].map((h, i) => (
                      <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}></span>
                    ))}
                  </div>
                </div>

                {/* NPS Ring */}
                <div className="hero-card !static !relative !rotate-0 !w-auto" style={{ transform: 'none', animation: 'none' }}>
                  <div className="hc-head">
                    <div>
                      <div className="hc-eyebrow">NPS Score</div>
                      <div className="hc-title mt-1" style={{ fontSize: '11px' }}>Last 90 days</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center" style={{ height: '88px' }}>
                    <div className="hc-ring">
                      <svg width="80" height="80" viewBox="0 0 88 88">
                        <circle cx="44" cy="44" r="36" fill="none" stroke="rgba(34,168,132,0.15)" strokeWidth="8" />
                        <circle cx="44" cy="44" r="36" fill="none" stroke="url(#mringG)" strokeWidth="8" strokeLinecap="round" strokeDasharray="226" strokeDashoffset="42" />
                        <defs>
                          <linearGradient id="mringG" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#22a884" />
                            <stop offset="100%" stopColor="#f5af50" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="label" style={{ color: '#1a2520', fontSize: '16px' }}>72</div>
                    </div>
                  </div>
                </div>

                {/* Portfolio (full width) */}
                <div className="hero-card dark !static !relative !rotate-0 !w-auto col-span-2" style={{ transform: 'none', animation: 'none' }}>
                  <div className="hc-head">
                    <div className="hc-ico">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="hc-chip"><span className="pulse"></span>6 PRACTICES</span>
                  </div>
                  <div>
                    <div className="hc-eyebrow">Service Portfolio</div>
                    <div className="hc-value" style={{ fontSize: '20px' }}>End-to-end</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mt-1">
                    {practiceAreas.map((p) => (
                      <div
                        key={p}
                        className="text-[9px] font-medium tracking-wide px-1.5 py-1.5 rounded text-center"
                        style={{
                          background: 'linear-gradient(135deg, rgba(34,168,132,0.22), rgba(34,168,132,0.08))',
                          border: '1px solid rgba(95, 211, 179, 0.3)',
                          color: '#cdeee0',
                        }}
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pills row */}
                <div className="col-span-2 grid grid-cols-2 gap-3 sm:gap-4 mt-1">
                  <div className="hero-stat-pill !static !rotate-0" style={{ position: 'relative', transform: 'none', animation: 'none' }}>
                    <div className="ico">
                      <Rocket className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] tracking-[0.2em] uppercase text-[#1a2520]/55">Time to Value</div>
                      <div className="font-semibold text-[#1a2520] text-[13px] -mt-0.5">{`< 4 weeks`}</div>
                    </div>
                  </div>
                  <div className="hero-stat-pill !static !rotate-0" style={{ position: 'relative', transform: 'none', animation: 'none' }}>
                    <div className="ico" style={{ background: 'linear-gradient(135deg, #f5af50, #e8902a)' }}>
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] tracking-[0.2em] uppercase text-[#1a2520]/55">Certified</div>
                      <div className="font-semibold text-[#1a2520] text-[13px] -mt-0.5">ISO 27001</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DESKTOP: full 3D stage */}
            <div className="hidden lg:block relative">
              <svg
                className="hero-dots-ring slow-spin"
                viewBox="0 0 600 600"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
              >
                <circle cx="300" cy="300" r="260" stroke="#22a884" strokeWidth="0.7" strokeDasharray="2 6" opacity="0.45" />
                <circle cx="300" cy="300" r="200" stroke="#f5af50" strokeWidth="0.7" strokeDasharray="2 8" opacity="0.45" />
                <circle cx="300" cy="40" r="4" fill="#22a884" />
                <circle cx="560" cy="300" r="3" fill="#f5af50" />
                <circle cx="300" cy="560" r="3" fill="#22a884" />
                <circle cx="40" cy="300" r="3" fill="#f5af50" />
              </svg>

              <div className="hero-glow-dot" style={{ top: '12%', left: '12%' }}></div>
              <div className="hero-glow-dot alt" style={{ bottom: '8%', right: '14%' }}></div>

              <div ref={stageRef} className="hero-3d-stage">
                {/* Card 1: Projects */}
                <div className="hero-card hc-1">
                  <div className="hc-head">
                    <div className="hc-ico">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="hc-chip"><span className="pulse"></span>FY25</span>
                  </div>
                  <div>
                    <div className="hc-eyebrow">Projects Delivered</div>
                    <div className="hc-value">150+</div>
                    <div className="hc-sub mt-1">↑ 38% YoY — across 6 practice areas</div>
                  </div>
                  <div className="hc-bars">
                    {[30, 45, 38, 55, 50, 68, 62, 78, 72, 85, 92, 100].map((h, i) => (
                      <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}></span>
                    ))}
                  </div>
                </div>

                {/* Card 2 (dark): Portfolio */}
                <div className="hero-card hc-2 dark">
                  <div className="hc-head">
                    <div className="hc-ico">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="hc-chip"><span className="pulse"></span>6 PRACTICES</span>
                  </div>
                  <div>
                    <div className="hc-eyebrow">Service Portfolio</div>
                    <div className="hc-value">End-to-end</div>
                    <div className="hc-sub mt-1">Advisory · Build · Run</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mt-1">
                    {practiceAreas.map((p) => (
                      <div
                        key={p}
                        className="text-[9.5px] font-medium tracking-wide px-2 py-1.5 rounded text-center"
                        style={{
                          background: 'linear-gradient(135deg, rgba(34,168,132,0.22), rgba(34,168,132,0.08))',
                          border: '1px solid rgba(95, 211, 179, 0.3)',
                          color: '#cdeee0',
                        }}
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 3: NPS Ring */}
                <div className="hero-card hc-3">
                  <div className="hc-head">
                    <div>
                      <div className="hc-eyebrow">Client Satisfaction</div>
                      <div className="hc-title mt-1">NPS Score</div>
                    </div>
                    <div className="hc-ring">
                      <svg width="88" height="88" viewBox="0 0 88 88">
                        <circle cx="44" cy="44" r="36" fill="none" stroke="rgba(34,168,132,0.15)" strokeWidth="8" />
                        <circle
                          cx="44" cy="44" r="36"
                          fill="none"
                          stroke="url(#ringG)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray="226"
                          strokeDashoffset="42"
                        />
                        <defs>
                          <linearGradient id="ringG" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#22a884" />
                            <stop offset="100%" stopColor="#f5af50" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="label" style={{ color: '#1a2520' }}>72</div>
                    </div>
                  </div>
                </div>

                {/* Pills */}
                <div className="hero-stat-pill hsp-1">
                  <div className="ico"><Rocket className="w-4 h-4" /></div>
                  <div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-[#1a2520]/55">Time to Value</div>
                    <div className="font-semibold text-[#1a2520] text-[15px] -mt-0.5">{`< 4 weeks`}</div>
                  </div>
                </div>
                <div className="hero-stat-pill hsp-2">
                  <div className="ico" style={{ background: 'linear-gradient(135deg, #f5af50, #e8902a)' }}>
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-[#1a2520]/55">Certified</div>
                    <div className="font-semibold text-[#1a2520] text-[15px] -mt-0.5">ISO 27001 · SOC 2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-12 hidden sm:flex items-center gap-3">
          <div className="section-line"></div>
          <span className="text-[10px] tracking-[0.28em] uppercase text-[#1a2520]/50">
            Scroll to explore
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-[#22a884] animate-bounce" />
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-12 lg:mt-16 overflow-hidden border-y border-[#22a884]/15 py-4 lg:py-5 bg-white/30 backdrop-blur-sm">
        <div className="flex marquee-track whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-italic font-serif text-xl md:text-3xl text-[#1a2520]/70 px-6 lg:px-10 flex items-center gap-6 lg:gap-10"
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
