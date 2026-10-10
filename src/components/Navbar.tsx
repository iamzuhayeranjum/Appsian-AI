import React from 'react';
import { content } from '../content';

interface NavbarProps {
  onBookDemoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookDemoClick }) => {
  const { nav } = content.hero;

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-[27px] flex justify-center px-4 relative z-50">
      <nav
        className="w-full max-w-[750px] h-[60px] bg-[#1B1B1B]/80 backdrop-blur-md border border-white/10 rounded-full px-5 sm:px-6 flex items-center justify-between shadow-2xl transition-all"
        aria-label="Main Navigation"
      >
        {/* Left: Logo mark + brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#6EEDC2] to-[#4A7FF0] p-[2px] flex items-center justify-center shadow-[0_0_12px_rgba(110,237,194,0.4)]">
            <div className="w-full h-full bg-[#18181b] rounded-full flex items-center justify-center">
              {/* Minimalist geometric mark */}
              <div className="w-2.5 h-2.5 rotate-45 border-2 border-[#6EEDC2] rounded-xs" />
            </div>
          </div>
          <span className="text-white font-medium text-lg tracking-tight font-display">
            {nav.brand}
          </span>
        </a>

        {/* Center: Nav links */}
        <div className="hidden sm:flex items-center gap-7 text-sm font-normal text-white/80">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              // Smooth scroll to final cta or demo
              const el = document.querySelector('#pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden xs:inline-flex text-xs sm:text-sm font-medium text-white/85 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 hover:bg-white/10 hover:text-white transition-all whitespace-nowrap"
          >
            {nav.loginLabel}
          </button>
          <button
            onClick={onBookDemoClick}
            className="text-xs sm:text-sm font-medium text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#4F5585] indigo-glow hover:bg-[#5b6399] transition-all whitespace-nowrap shadow-[0_0_20px_rgba(79,85,133,0.5)]"
          >
            {nav.ctaLabel}
          </button>
        </div>
      </nav>
    </div>
  );
};
