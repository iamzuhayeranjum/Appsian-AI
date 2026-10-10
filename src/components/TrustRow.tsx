import React from 'react';
import { motion } from 'motion/react';
import { content } from '../content';

export const TrustRow: React.FC = () => {
  const { trustRow } = content;

  // Geometric line-art icons matching the video's aesthetic (48px, 1px stroke)
  const icons = [
    // 1. Geometric intersecting diamond/lattice
    (
      <svg
        className="w-12 h-12 text-[#2D283C]"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <rect x="12" y="12" width="24" height="24" transform="rotate(45 24 24)" />
        <rect x="15" y="15" width="18" height="18" />
        <circle cx="24" cy="24" r="5" />
        <line x1="24" y1="4" x2="24" y2="44" />
        <line x1="4" y1="24" x2="44" y2="24" />
      </svg>
    ),
    // 2. Concentric grooved sphere / ringed orb
    (
      <svg
        className="w-12 h-12 text-[#2D283C]"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="24" cy="24" r="18" />
        <ellipse cx="24" cy="24" rx="18" ry="7" />
        <ellipse cx="24" cy="24" rx="18" ry="13" />
        <line x1="24" y1="6" x2="24" y2="42" />
      </svg>
    ),
    // 3. Geometric layered cube / polygon structure
    (
      <svg
        className="w-12 h-12 text-[#2D283C]"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <polygon points="24,6 40,15 40,33 24,42 8,33 8,15" />
        <line x1="24" y1="6" x2="24" y2="24" />
        <line x1="40" y1="15" x2="24" y2="24" />
        <line x1="8" y1="15" x2="24" y2="24" />
        <line x1="24" y1="24" x2="24" y2="42" />
        <circle cx="24" cy="24" r="2.5" />
      </svg>
    ),
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1187px] mx-auto px-4">
        {/* H2 centered, about 48px, two lines */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)', y: 24 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-display font-medium text-[#2D283C] tracking-tight leading-[1.18] max-w-3xl mx-auto">
            <span>{trustRow.h2Line1}</span>
            <br />
            <span>{trustRow.h2Line2}</span>
          </h2>
        </motion.div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {trustRow.columns.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 24 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.1 * idx,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-start text-left"
            >
              <div className="mb-6 p-2 rounded-2xl bg-[#F6F8F7] border border-slate-100/80 shadow-xs">
                {icons[idx]}
              </div>

              <h3 className="text-2xl sm:text-[24px] font-display font-medium text-[#2D283C] tracking-tight mb-3">
                {col.title}
              </h3>

              <p className="text-base sm:text-[16px] text-[#2D283C]/85 leading-relaxed">
                {col.blurb}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
