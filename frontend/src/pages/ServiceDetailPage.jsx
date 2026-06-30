import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { serviceCategories, images } from '../mock';

const Icon = ({ name, ...props }) => {
  const Comp = Icons[name] || Icons.Sparkles;
  return <Comp {...props} />;
};

const processSteps = [
  { num: '01', title: 'Discover', desc: 'We assess your current environment, business objectives and constraints to define a clear baseline.' },
  { num: '02', title: 'Design', desc: 'Our architects design a target solution aligned to your security, scale and budget requirements.' },
  { num: '03', title: 'Deploy', desc: 'Certified engineers deploy, integrate and harden the solution with minimal business disruption.' },
  { num: '04', title: 'Operate', desc: '24/7 managed operations, continuous improvement and quarterly business reviews.' },
];

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = serviceCategories.find((s) => s.id === id);
  if (!service) return <Navigate to="/services" replace />;

  const others = serviceCategories.filter((s) => s.id !== id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 smooth-bg overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid-lines" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mb-10 text-[11px] tracking-[0.22em] uppercase text-[#22a884] hover:text-[#1c8d6f] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All services
          </Link>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div className="reveal in-view">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-sm border border-[#22a884]/30 bg-white/40 backdrop-blur-sm">
                <Icon name={service.icon} className="w-4 h-4 text-[#22a884]" />
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#22a884] font-medium">
                  {service.tagline}
                </span>
              </div>
              <h1 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.02] text-[#1a2520] mb-8">
                {service.label.split(' ')[0]}{' '}
                <span className="font-italic text-gradient-teal">
                  {service.label.split(' ').slice(1).join(' ') || 'services'}
                </span>
              </h1>
              <p className="text-[15px] leading-[1.8] text-[#1a2520]/75 max-w-xl mb-9">
                {service.overview}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#22a884] text-white text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#1c8d6f] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#22a884]/30"
                >
                  Discuss your needs
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#22a884]/40 text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#22a884]/5 transition-all duration-300"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="relative tilt-on-hover reveal in-view reveal-delay-2">
              <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-[#22a884]/15 aspect-[4/5] border border-[#22a884]/20">
                <img src={service.heroImage} alt={service.label} className="w-full h-full object-cover img-tint" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2520]/70 via-transparent to-transparent" />
                <div className="absolute top-5 right-5 w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <Icon name={service.icon} className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] tracking-[0.28em] uppercase text-[#f5af50] mb-1">Practice Area</div>
                  <h3 className="font-serif text-3xl text-white">{service.label}</h3>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#22a884]/30 rounded-sm -z-10" />
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
              What we deliver in <span className="font-italic text-gradient-teal">{service.label.toLowerCase()}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.items.map((item, i) => (
              <div
                key={item.title}
                className="service-card bg-white/60 backdrop-blur-sm border border-[#22a884]/15 p-7 rounded-sm reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#22a884]/15 to-[#22a884]/5 flex items-center justify-center mb-5">
                  <Icon name={item.icon} className="w-5 h-5 text-[#22a884]" />
                </div>
                <h4 className="font-semibold text-[#1a2520] mb-2 text-[15px]">{item.title}</h4>
                <p className="text-[13px] leading-relaxed text-[#1a2520]/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 bg-gradient-to-b from-[#e6f1e9] to-[#dde9e0] overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="section-line" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Our Process</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] text-[#1a2520] mb-7">
                A proven <span className="font-italic text-gradient-teal">delivery model</span>
              </h2>
              <p className="text-[14.5px] leading-[1.8] text-[#1a2520]/70 mb-8 max-w-md">
                Every engagement follows our discover → design → deploy → operate model so you
                always know what's next and what value has been delivered.
              </p>
              <div className="relative rounded-sm overflow-hidden border border-[#22a884]/20 tilt-on-hover">
                <img src={service.secondaryImage} alt="" className="w-full h-80 object-cover img-tint" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2520]/60 to-transparent" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {processSteps.map((p, i) => (
                <div
                  key={p.num}
                  className="card-3d bg-white/65 backdrop-blur-sm border border-[#22a884]/15 p-7 rounded-sm reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="font-italic font-serif text-3xl text-gradient-orange mb-4">{p.num}</div>
                  <h4 className="font-serif text-2xl text-[#1a2520] mb-2">{p.title}</h4>
                  <p className="text-[13px] leading-relaxed text-[#1a2520]/65">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24 overflow-hidden">
        <div className="orb orb-3" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 reveal">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Why this matters</span>
              <div className="section-line rotate-180" />
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] text-[#1a2520]">
              Outcomes you can <span className="font-italic text-gradient-teal">measure</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              'Reduced security incidents and faster detection times',
              'Audit-ready compliance with ISO, SOC 2, RBI, SEBI',
              'Lower TCO through automation and optimization',
              'Faster project delivery with certified engineers',
              '24/7 expert support backed by SLAs',
              'Aligned to your specific business objectives',
            ].map((b, i) => (
              <div
                key={b}
                className="flex items-start gap-3 p-5 bg-white/50 backdrop-blur-sm border border-[#22a884]/15 rounded-sm reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <CheckCircle2 className="w-5 h-5 text-[#22a884] flex-shrink-0 mt-0.5" />
                <span className="text-[14px] text-[#1a2520]/80">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="relative py-24 bg-gradient-to-b from-[#e6f1e9] to-[#eef6f0] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="section-line" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">More from us</span>
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,3rem)] leading-[1.05] text-[#1a2520]">
                Explore other <span className="font-italic text-gradient-teal">practices</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#22a884] hover:text-[#1c8d6f]"
            >
              All services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link
                key={o.id}
                to={`/services/${o.id}`}
                className="card-3d group bg-white/65 backdrop-blur-sm border border-[#22a884]/15 rounded-sm overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={o.heroImage} alt={o.label} className="w-full h-full object-cover img-tint group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2520]/70 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={o.icon} className="w-4 h-4 text-[#22a884]" />
                    <span className="text-[10px] tracking-[0.24em] uppercase text-[#22a884]">{o.tagline}</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#1a2520] mb-2">{o.label}</h4>
                  <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#1a2520]/70 group-hover:text-[#22a884] transition">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
