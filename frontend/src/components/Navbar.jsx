import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { navLinks } from '../mock';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-[0_2px_30px_rgba(34,168,132,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#f5af50] to-[#e8902a] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <span className="text-[#22a884] font-semibold tracking-[0.18em] text-sm">INGROWLOGY</span>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[13px] tracking-[0.18em] uppercase text-[#1a2520] hover:text-[#22a884] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#22a884] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-[#22a884] text-white text-[12px] font-medium tracking-[0.2em] uppercase rounded-sm hover:bg-[#1c8d6f] transition-all duration-300 hover:shadow-lg hover:shadow-[#22a884]/30 hover:-translate-y-0.5"
          >
            Talk to us
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#1a2520]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-[#22a884]/10 shadow-lg">
          <ul className="flex flex-col p-6 gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-widest uppercase text-[#1a2520]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block px-6 py-2.5 bg-[#22a884] text-white text-xs tracking-widest uppercase rounded-sm"
              >
                Talk to us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
