import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { team, milestones, aboutFeatures, missionPoints, visionPoints, detailedStats, images } from '../mock';

const Icon = ({ name, ...props }) => {
  const Comp = Icons[name] || Icons.Sparkles;
  return <Comp {...props} />;
};

const AboutPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="About Ingrowlogy"
        title="Engineered for trust, built for growth."
        italicWord="trust"
        description="Ingrowlogy Private Limited delivers cybersecurity, cloud, network and DevSecOps solutions to ambitious Indian enterprises — aligning deep technical expertise with strategic business objectives."
        ctaPrimary={{ label: 'Talk to us', to: '/#contact' }}
        ctaSecondary={{ label: 'Our Services', to: '/services' }}
        image={images.team1}
      />

      {/* Story */}
      <section className="relative py-24 overflow-hidden">
        <div className="orb orb-3" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Our story</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] text-[#1a2520] mb-8">
              Five years of <span className="font-italic text-gradient-teal">engineering excellence</span>
            </h2>
            <div className="space-y-5 text-[14.5px] leading-[1.8] text-[#1a2520]/75">
              <p>
                Ingrowlogy was founded with one clear belief — that good security and modern
                infrastructure should be available to every ambitious Indian enterprise, not just
                the largest few.
              </p>
              <p>
                Over the last five years our team has delivered cybersecurity, cloud and network
                projects across BFSI, government, manufacturing, healthcare and retail. We hold
                authorized partnerships with Cisco, Microsoft, Google, Fortinet, Palo Alto and
                ManageEngine, and operate a 24/7 SOC and NOC from India.
              </p>
              <p>
                We don't just resell technology. We design, deploy, operate and continuously
                improve it — with engineers who own outcomes, not just tickets.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal reveal-delay-2">
            <img src={images.team2} alt="" className="rounded-sm aspect-[3/4] object-cover img-tint border border-[#22a884]/20 tilt-on-hover" />
            <img src={images.devops1} alt="" className="rounded-sm aspect-[3/4] object-cover img-tint border border-[#22a884]/20 mt-10 tilt-on-hover" />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative py-16 bg-gradient-to-b from-[#eef6f0] to-[#e6f1e9] overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-5 gap-8">
          {detailedStats.map((s) => (
            <div key={s.label} className="text-center group reveal">
              <div className="stat-number text-5xl md:text-6xl leading-none group-hover:scale-110 transition-transform duration-500 inline-block">{s.value}</div>
              <div className="mt-3 text-[10px] tracking-[0.28em] uppercase text-[#1a2520]/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Vision */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 reveal">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Mission & Vision</span>
              <div className="section-line rotate-180" />
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] text-[#1a2520]">
              What drives <span className="font-italic text-gradient-teal">everything we do</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { letter: 'M', label: 'Our Mission', heading: 'Empowering through secure technology', items: missionPoints },
              { letter: 'V', label: 'Our Vision', heading: 'Future-ready enterprises built on trust', items: visionPoints },
            ].map((block) => (
              <div key={block.label} className="card-3d glass-card p-10 rounded-sm border border-[#22a884]/15 reveal">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#22a884] to-[#1c8d6f] text-white font-serif text-3xl flex items-center justify-center shadow-lg">
                    {block.letter}
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-[#22a884] mb-2">{block.label}</div>
                    <h3 className="font-serif text-3xl text-[#1a2520] leading-tight">{block.heading}</h3>
                  </div>
                </div>
                <div className="space-y-5 mt-8">
                  {block.items.map((it) => (
                    <div key={it.title} className="pl-5 border-l-2 border-[#22a884]/30 hover:border-[#22a884] transition-colors duration-300">
                      <h4 className="font-semibold text-[#1a2520] mb-1 text-[14px]">{it.title}</h4>
                      <p className="text-[13px] leading-relaxed text-[#1a2520]/65">{it.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 bg-gradient-to-b from-[#e6f1e9] to-[#dde9e0] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 reveal">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Our Journey</span>
              <div className="section-line rotate-180" />
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] text-[#1a2520]">
              From founding to <span className="font-italic text-gradient-teal">today</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#22a884]/25 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`grid md:grid-cols-2 gap-8 items-center reveal ${i % 2 === 0 ? '' : 'md:[direction:rtl]'}`}
                >
                  <div className={`relative md:[direction:ltr] ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="font-italic font-serif text-5xl md:text-6xl text-gradient-orange mb-2">{m.year}</div>
                    <h3 className="font-serif text-2xl text-[#1a2520] mb-2">{m.title}</h3>
                    <p className="text-[13.5px] leading-relaxed text-[#1a2520]/70 max-w-md md:inline-block">{m.desc}</p>
                  </div>
                  <div className="hidden md:flex justify-center md:[direction:ltr] relative">
                    <div className="w-5 h-5 rounded-full bg-[#22a884] ring-4 ring-[#22a884]/20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 overflow-hidden">
        <div className="orb orb-2" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 reveal">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Leadership</span>
              <div className="section-line rotate-180" />
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] text-[#1a2520]">
              The people behind <span className="font-italic text-gradient-teal">Ingrowlogy</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {team.map((t, i) => (
              <div
                key={t.name}
                className="card-3d bg-white/60 backdrop-blur-sm border border-[#22a884]/15 p-6 rounded-sm text-center reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#22a884] to-[#1c8d6f] text-white font-serif text-xl flex items-center justify-center shadow-md">
                  {t.initials}
                </div>
                <h4 className="font-semibold text-[#1a2520] text-[14px]">{t.name}</h4>
                <div className="text-[10px] tracking-[0.24em] uppercase text-[#22a884] mt-1">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 bg-gradient-to-b from-[#e6f1e9] to-[#eef6f0] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 reveal">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Core Values</span>
              <div className="section-line rotate-180" />
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] text-[#1a2520]">
              What we <span className="font-italic text-gradient-teal">stand for</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutFeatures.map((f, i) => (
              <div
                key={f.title}
                className="card-3d glass-card p-7 rounded-sm reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
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
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#22a884] via-[#1c8d6f] to-[#16735a]" />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] text-white mb-6">
            Let's build something <span className="font-italic text-[#f5af50]">remarkable</span>
          </h2>
          <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-9">
            Talk to our engineers — free 30-minute consultation on your security, cloud or infrastructure roadmap.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#f5af50] text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Free Assessment <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
