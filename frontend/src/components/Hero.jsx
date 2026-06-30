import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, ShieldCheck, Activity, Server, Wifi } from 'lucide-react';
import { heroStats, marqueeItems, images } from '../mock';

const Hero = () => {
  const stageRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const stage = stageRef.current;
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      const tx = dx * 20;
      const ty = dy * 18;
      const rx = dx * 6;
      const ry = dy * 6;
      stage.style.setProperty('--tx', `${tx}px`);
      stage.style.setProperty('--ty', `${ty}px`);
      stage.style.setProperty('--rx', `${rx}deg`);
      stage.style.setProperty('--ry', `${ry}deg`);
      stage.classList.add('tilt');
    };
    const handleLeave = () => {
      const stage = stageRef.current;
      if (!stage) return;
      stage.style.setProperty('--tx', `0px`);
      stage.style.setProperty('--ty', `0px`);
      stage.style.setProperty('--rx', `0deg`);
      stage.style.setProperty('--ry', `0deg`);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-6 items-center">
          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-10 rounded-sm border border-[#22a884]/30 bg-white/40 backdrop-blur-sm reveal in-view">
              <span className="w-2 h-2 rounded-full bg-[#22a884] animate-pulse"></span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#22a884] font-medium">
                Cybersecurity · Cloud · Infrastructure · DevSecOps
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.6rem,6.2vw,5.8rem)] leading-[1] text-[#1a2520] tracking-tight">
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
                href="/services"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#22a884] text-white text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#1c8d6f] transition-all duration-300 hover:shadow-xl hover:shadow-[#22a884]/30 hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/about"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border border-[#22a884]/40 text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#22a884]/5 hover:border-[#22a884] transition-all duration-300"
              >
                About Us
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Hero stats inline */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg reveal in-view reveal-delay-4">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="stat-number text-3xl md:text-4xl leading-none">{stat.value}</div>
                  <div className="mt-2 text-[10px] tracking-[0.24em] uppercase text-[#1a2520]/55">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Stage */}
          <div className="relative">
            {/* Decorative dotted ring */}
            <svg
              className="hero-dots-ring slow-spin"
              viewBox="0 0 600 600"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <circle cx="300" cy="300" r="240" stroke="#22a884" strokeWidth="0.7" strokeDasharray="2 6" opacity="0.5" />
              <circle cx="300" cy="300" r="180" stroke="#f5af50" strokeWidth="0.7" strokeDasharray="2 8" opacity="0.5" />
              <circle cx="300" cy="60" r="4" fill="#22a884" />
              <circle cx="540" cy="300" r="3" fill="#f5af50" />
            </svg>

            <div ref={stageRef} className="hero-3d-stage">
              {/* Card 1: SOC */}
              <div className="hero-card hc-1">
                <img src={images.socHero} alt="Security Operations Centre" />
                <div className="meta">SOC 24/7</div>
                <div className="badge">
                  <span className="dot"></span>
                  <span>Live threat monitoring · 47 events / min</span>
                </div>
              </div>

              {/* Card 2: Cloud / server */}
              <div className="hero-card hc-2">
                <img src={images.serverRoom1} alt="Cloud Infrastructure" />
                <div className="meta">Cloud</div>
                <div className="badge">
                  <Server className="w-3.5 h-3.5 text-[#22a884]" />
                  <span>AWS · Azure · GCP</span>
                </div>
              </div>

              {/* Card 3: DevOps small */}
              <div className="hero-card hc-3">
                <img src={images.devops1} alt="DevSecOps" />
                <div className="meta">DevSecOps</div>
              </div>

              {/* Floating stat pill 1: uptime */}
              <div className="hero-stat-pill hsp-1">
                <div className="ico">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-[#1a2520]/55">Uptime</div>
                  <div className="font-semibold text-[#1a2520] text-[15px] -mt-0.5">99.9% SLA</div>
                </div>
              </div>

              {/* Floating stat pill 2: clients */}
              <div className="hero-stat-pill hsp-2">
                <div className="ico" style={{ background: 'linear-gradient(135deg, #f5af50, #e8902a)' }}>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-[#1a2520]/55">Trusted by</div>
                  <div className="font-semibold text-[#1a2520] text-[15px] -mt-0.5">50+ Enterprises</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3">
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
