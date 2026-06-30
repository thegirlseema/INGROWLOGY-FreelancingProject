import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Award, Users, Wrench, Headphones } from 'lucide-react';
import { partners, serviceCategories } from '../mock';

const PartnerDetailPage = () => {
  const { id } = useParams();
  const partner = partners.find((p) => p.id === id);
  if (!partner) return <Navigate to="/partners" replace />;

  const others = partners.filter((p) => p.id !== id).slice(0, 4);

  const benefits = [
    { icon: Award, title: 'Certified Engineers', desc: `Vendor-certified ${partner.name} specialists on every engagement.` },
    { icon: Wrench, title: 'Design & Deployment', desc: `Architecture, deployment, integration and hardening for all ${partner.name} solutions.` },
    { icon: Headphones, title: 'Lifecycle Support', desc: '24/7 managed services backed by vendor-direct escalation.' },
    { icon: Users, title: 'Commercial Advantage', desc: 'Authorized partner pricing, volume discounts and roadmap visibility.' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 smooth-bg overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid-lines" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 mb-10 text-[11px] tracking-[0.22em] uppercase text-[#22a884] hover:text-[#1c8d6f] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All partners
          </Link>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div className="reveal in-view">
              <div
                className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-sm border bg-white/40 backdrop-blur-sm"
                style={{ borderColor: `${partner.color}55` }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: partner.color }} />
                <span className="text-[11px] tracking-[0.25em] uppercase font-medium" style={{ color: partner.color }}>
                  {partner.role}
                </span>
              </div>
              <h1 className="font-serif text-[clamp(2.8rem,6vw,6rem)] leading-[1.02] text-[#1a2520] mb-2">
                <span className="font-italic" style={{ color: partner.color }}>
                  {partner.name}
                </span>
              </h1>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#1a2520]/55 mb-7">
                with Ingrowlogy Pvt. Ltd.
              </div>
              <p className="text-[15px] leading-[1.8] text-[#1a2520]/75 max-w-xl mb-9">
                {partner.overview}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#22a884] text-white text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#1c8d6f] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#22a884]/30"
                >
                  Discuss {partner.name} solutions
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#22a884]/40 text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#22a884]/5 transition-all duration-300"
                >
                  All Partners
                </Link>
              </div>
            </div>
            <div className="relative tilt-on-hover reveal in-view reveal-delay-2">
              <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-[#22a884]/15 aspect-[4/5] border border-[#22a884]/20">
                <img src={partner.image} alt={partner.name} className="w-full h-full object-cover img-tint" />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${partner.color}dd, transparent 70%)` }}
                />
                <div
                  className="absolute top-5 right-5 w-14 h-14 rounded-md flex items-center justify-center font-serif italic text-2xl text-white shadow-lg"
                  style={{ background: partner.color }}
                >
                  {partner.name.charAt(0)}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] tracking-[0.28em] uppercase text-white/90 mb-1">Alliance</div>
                  <h3 className="font-italic font-serif text-3xl text-white">{partner.name}</h3>
                </div>
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 border rounded-sm -z-10"
                style={{ borderColor: `${partner.color}55` }}
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#f5af50]/40 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Capabilities</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] text-[#1a2520]">
              What we deliver with <span className="font-italic" style={{ color: partner.color }}>{partner.name}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {partner.capabilities.map((cap, i) => (
              <div
                key={cap}
                className="service-card bg-white/60 backdrop-blur-sm border border-[#22a884]/15 p-6 rounded-sm flex items-start gap-4 reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: partner.color }} />
                <span className="text-[14px] text-[#1a2520]/85 font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="relative py-24 bg-gradient-to-b from-[#e6f1e9] to-[#dde9e0] overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 reveal">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Why Ingrowlogy</span>
              <div className="section-line rotate-180" />
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] text-[#1a2520]">
              Authorized expertise, <span className="font-italic text-gradient-teal">delivered locally</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => {
              const Ic = b.icon;
              return (
                <div
                  key={b.title}
                  className="card-3d glass-card p-7 rounded-sm reveal"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-md flex items-center justify-center mb-5 shadow-md"
                    style={{ background: `linear-gradient(135deg, ${partner.color}, ${partner.color}cc)` }}
                  >
                    <Ic className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#1a2520] mb-2 text-[15px]">{b.title}</h4>
                  <p className="text-[13px] leading-relaxed text-[#1a2520]/65">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="relative py-24 overflow-hidden">
        <div className="orb orb-3" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap reveal">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="section-line" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Related Services</span>
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,3rem)] leading-[1.05] text-[#1a2520]">
                Where <span className="font-italic text-gradient-teal">{partner.name}</span> fits
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#22a884] hover:text-[#1c8d6f]"
            >
              All services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.slice(0, 3).map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="card-3d group bg-white/65 backdrop-blur-sm border border-[#22a884]/15 rounded-sm overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={s.heroImage} alt={s.label} className="w-full h-full object-cover img-tint group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2520]/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-xl text-[#1a2520] mb-2">{s.label}</h4>
                  <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#1a2520]/70 group-hover:text-[#22a884] transition">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other partners */}
      <section className="relative py-24 bg-gradient-to-b from-[#e6f1e9] to-[#eef6f0] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 reveal">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Other partners</span>
              <div className="section-line rotate-180" />
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,3rem)] leading-[1.05] text-[#1a2520]">
              More technology <span className="font-italic text-gradient-teal">alliances</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((o) => (
              <Link
                key={o.id}
                to={`/partners/${o.id}`}
                className="card-3d group bg-white/65 backdrop-blur-sm border border-[#22a884]/15 p-7 rounded-sm text-center"
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 rounded-md flex items-center justify-center font-serif italic text-xl text-white shadow-md"
                  style={{ background: `linear-gradient(135deg, ${o.color}, ${o.color}dd)` }}
                >
                  {o.name.charAt(0)}
                </div>
                <div className="font-italic font-serif text-2xl text-[#1a2520] group-hover:text-[#22a884] transition mb-1">
                  {o.name}
                </div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-[#1a2520]/55">{o.role}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerDetailPage;
