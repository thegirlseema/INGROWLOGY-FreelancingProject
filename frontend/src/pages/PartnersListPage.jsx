import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { partners, images } from '../mock';

const PartnersListPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Our Collaboration"
        title="Technology alliances that define industries"
        italicWord="define industries"
        description="We hold authorized and reseller partnerships with the world's leading technology vendors — so you get certified expertise, vendor-direct support and best-in-class commercials."
        ctaPrimary={{ label: 'Talk to us', to: '/#contact' }}
        ctaSecondary={{ label: 'Our Services', to: '/services' }}
        image={images.handshake1}
      />

      <section className="relative py-20 overflow-hidden">
        <div className="orb orb-2" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <Link
                key={p.id}
                to={`/partners/${p.id}`}
                className="card-3d group bg-white/65 backdrop-blur-sm border border-[#22a884]/15 rounded-sm overflow-hidden reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover img-tint group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2520]/85 via-[#1a2520]/20 to-transparent" />
                  <div
                    className="absolute top-4 left-4 w-12 h-12 rounded-md flex items-center justify-center font-serif italic text-xl text-white shadow-md"
                    style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}dd)` }}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-italic font-serif text-3xl text-white mb-1">{p.name}</h3>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-[#f5af50]">{p.role}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[13.5px] leading-[1.7] text-[#1a2520]/70 mb-5 line-clamp-3">{p.overview}</p>
                  <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#22a884] font-medium group-hover:gap-3 transition-all duration-300">
                    Partner details <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
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
            Need help choosing the <span className="font-italic text-[#f5af50]">right stack?</span>
          </h2>
          <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-9">
            Our engineers are vendor-certified and vendor-agnostic. We'll recommend what's right for you — not for the resale margin.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#f5af50] text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Get expert advice <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default PartnersListPage;
