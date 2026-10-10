import React from 'react';
import { motion } from 'motion/react';
import { CurtainBackdrop } from './CurtainBackdrop';
import { Navbar } from './Navbar';
import { DashboardMockup } from './DashboardMockup';
import { content } from '../content';

interface HeroProps {
  onBookDemoClick: () => void;
  onPlayClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookDemoClick, onPlayClick }) => {
  const { hero } = content;

  return (
    <section className="relative w-full min-h-[960px] lg:min-h-[1050px] overflow-hidden flex flex-col justify-between">
      <CurtainBackdrop variant="violet" className="w-full h-full min-h-screen pb-16">
        {/* Floating Nav */}
        <Navbar onBookDemoClick={onBookDemoClick} />

        {/* Hero Copy Container */}
        <div className="max-w-[1187px] mx-auto px-4 pt-12 sm:pt-16 md:pt-20 text-center flex flex-col items-center z-10">
          {/* H1 with blur-to-sharp animation on load */}
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(20px)', y: 16 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-4xl sm:text-5xl md:text-[56px] font-display font-medium tracking-tight leading-[1.18] max-w-4xl"
          >
            <span className="block">{hero.h1Line1}</span>
            <span className="block">{hero.h1Line2}</span>
          </motion.h1>

          {/* Subline staggered fade & blur */}
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)', y: 14 }}
            animate={{ opacity: 0.75, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-base sm:text-lg md:text-[18px] max-w-xl mx-auto mt-4 sm:mt-5 font-normal leading-relaxed"
          >
            {hero.subline}
          </motion.p>

          {/* Two Buttons: 42px tall, side by side */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3.5 mt-7 sm:mt-8 z-20"
          >
            <button
              onClick={onBookDemoClick}
              className="h-[42px] px-6 rounded-full bg-[#6EEDC2] text-[#0d221a] font-medium text-sm tracking-tight mint-glow hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(110,237,194,0.45)] whitespace-nowrap"
            >
              {hero.primaryCta}
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#features');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="h-[42px] px-6 rounded-full bg-white/10 hover:bg-white/18 text-white border border-white/20 font-medium text-sm tracking-tight backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              {hero.secondaryCta}
            </button>
          </motion.div>

          {/* Dashboard Mockup - rises 40px while un-blurring */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(16px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.95, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full mt-10 sm:mt-14 z-20"
          >
            <DashboardMockup onPlayClick={onPlayClick} />
          </motion.div>
        </div>

        {/* Cropping bottom edge that fades to white with soft lavender glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none z-30"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(172, 189, 245, 0.35) 45%, rgba(232, 244, 255, 0.85) 75%, #FFFFFF 100%)',
          }}
        />
      </CurtainBackdrop>
    </section>
  );
};
