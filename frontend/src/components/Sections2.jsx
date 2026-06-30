import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { partners, missionPoints, visionPoints, clients, contactInfo } from '../mock';

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

// ---------- Partners ----------
export const Partners = () => (
  <section id="partners" className="relative py-28 bg-gradient-to-b from-[#dde9e0] to-[#e6f1e9] overflow-hidden">
    <div className="absolute inset-0 grid-lines opacity-30"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
        <div>
          <SectionLabel>Our Collaboration</SectionLabel>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] text-[#1a2520]">
            Technology alliances<br />
            that <span className="font-italic text-gradient-teal">define industries</span>
          </h2>
        </div>
        <Link
          to="/partners"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#22a884]/40 text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#22a884]/5 transition-all duration-300 self-start"
        >
          All Partners <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {partners.map((p, i) => (
          <Link
            to={`/partners/${p.id}`}
            key={p.name}
            className="card-3d group bg-white/60 backdrop-blur-sm p-8 rounded-sm border border-[#22a884]/15 text-center reveal"
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="font-italic font-serif text-3xl text-[#1a2520] group-hover:text-[#22a884] transition-colors duration-500 mb-3">
              {p.name}
            </div>
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#1a2520]/55">
              {p.role}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Mission Vision ----------
export const MissionVision = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="orb orb-2" style={{ top: '20%' }}></div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="text-center mb-20">
        <SectionLabel center>Mission &amp; Vision</SectionLabel>
        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] text-[#1a2520]">
          What drives<br />
          <span className="font-italic text-gradient-teal">everything we do</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {[
          { letter: 'M', label: 'Our Mission', heading: 'Empowering through secure technology', items: missionPoints },
          { letter: 'V', label: 'Our Vision', heading: 'Future-ready enterprises built on trust', items: visionPoints },
        ].map((block, idx) => (
          <div
            key={block.label}
            className="card-3d glass-card p-10 rounded-sm border border-[#22a884]/15 reveal"
            style={{ transitionDelay: `${idx * 0.15}s` }}
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#22a884] to-[#1c8d6f] text-white font-serif text-3xl flex items-center justify-center shadow-lg">
                {block.letter}
              </div>
              <div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-[#22a884] mb-2">
                  {block.label}
                </div>
                <h3 className="font-serif text-3xl text-[#1a2520] leading-tight">
                  {block.heading}
                </h3>
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
);

// ---------- Clients ----------
export const Clients = () => (
  <section className="relative py-28 bg-gradient-to-b from-[#e6f1e9] to-[#eef6f0] overflow-hidden">
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="text-center mb-16">
        <SectionLabel center>Reference Clients</SectionLabel>
        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] text-[#1a2520]">
          Trusted by enterprises<br />
          <span className="font-italic text-gradient-teal">across India</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {clients.map((c, i) => (
          <div
            key={c.name}
            className="group bg-white/55 backdrop-blur-sm border border-[#22a884]/15 p-7 rounded-sm hover:border-[#22a884]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#22a884]/15 reveal"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#22a884]/15 to-[#22a884]/5 text-[#22a884] font-serif text-2xl flex items-center justify-center mb-4 group-hover:from-[#22a884] group-hover:to-[#1c8d6f] group-hover:text-white transition-all duration-500">
              {c.letter}
            </div>
            <h4 className="font-semibold text-[#1a2520] text-[14px]">{c.name}</h4>
            <div className="text-[10px] tracking-[0.24em] uppercase text-[#1a2520]/55 mt-1">
              {c.sector}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- CTA ----------
export const CTA = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#22a884] via-[#1c8d6f] to-[#16735a]"></div>
    <div className="absolute inset-0 grid-lines opacity-20"></div>
    <svg className="absolute top-10 right-10 w-72 h-72 opacity-30 slow-spin" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="90" stroke="#fff" strokeWidth="0.6" strokeDasharray="4 5" />
      <circle cx="100" cy="100" r="60" stroke="#fff" strokeWidth="0.6" />
      <circle cx="100" cy="30" r="4" fill="#f5af50" />
    </svg>
    <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
      <div className="flex justify-center mb-6">
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#f5af50] font-medium">
          Get Started
        </span>
      </div>
      <h2 className="font-serif text-[clamp(2.2rem,5vw,5rem)] leading-[1.05] text-white mb-8">
        Ready to secure<br />
        and <span className="font-italic text-[#f5af50]">scale</span> your business?
      </h2>
      <p className="text-[15px] leading-[1.8] text-white/85 max-w-2xl mx-auto mb-10">
        Talk to our engineers. Get a free assessment of your current infrastructure,
        security posture, and digital transformation opportunities.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f5af50] text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-black/20"
        >
          Book Free Assessment <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
        >
          Explore Services <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </section>
);

// ---------- Contact ----------
export const Contact = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-[#eef6f0]">
      <div className="orb orb-3" style={{ left: '60%' }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] text-[#1a2520]">
            Let's build something<br />
            <span className="font-italic text-gradient-teal">remarkable</span> together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {contactInfo.map((c, i) => (
              <div
                key={c.label}
                className="card-3d glass-card p-6 rounded-sm flex items-center gap-5 reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#22a884] to-[#1c8d6f] flex items-center justify-center shadow-md">
                  <Icon name={c.icon} className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.28em] uppercase text-[#22a884] mb-1">
                    {c.label}
                  </div>
                  <div className="font-semibold text-[#1a2520] text-[15px]">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-sm space-y-5"
          >
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#22a884] mb-2">
              Quick Message
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.22em] uppercase text-[#1a2520]/65 mb-2">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/60 border border-[#22a884]/20 rounded-sm focus:border-[#22a884] focus:outline-none focus:ring-2 focus:ring-[#22a884]/20 transition-all text-[14px]"
              />
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.22em] uppercase text-[#1a2520]/65 mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/60 border border-[#22a884]/20 rounded-sm focus:border-[#22a884] focus:outline-none focus:ring-2 focus:ring-[#22a884]/20 transition-all text-[14px]"
              />
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.22em] uppercase text-[#1a2520]/65 mb-2">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/60 border border-[#22a884]/20 rounded-sm focus:border-[#22a884] focus:outline-none focus:ring-2 focus:ring-[#22a884]/20 transition-all text-[14px] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#22a884] text-white text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#1c8d6f] transition-all duration-300 hover:shadow-lg hover:shadow-[#22a884]/30"
            >
              {sent ? 'Message Sent!' : 'Send Message'} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// ---------- Footer ----------
export const Footer = () => (
  <footer className="relative py-12 border-t border-[#22a884]/15 bg-[#eef6f0]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#f5af50] to-[#e8902a] flex items-center justify-center">
          <Icons.Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
        <span className="text-[#22a884] font-semibold tracking-[0.18em] text-xs">INGROWLOGY</span>
      </div>
      <div className="text-[11px] tracking-[0.22em] uppercase text-[#1a2520]/55">
        © 2025 Ingrowlogy Private Limited — All rights reserved
      </div>
      <div className="flex gap-5 text-[11px] tracking-[0.22em] uppercase text-[#1a2520]/55">
        <a href="#about" className="hover:text-[#22a884] transition">Privacy</a>
        <a href="#about" className="hover:text-[#22a884] transition">Terms</a>
      </div>
    </div>
  </footer>
);
