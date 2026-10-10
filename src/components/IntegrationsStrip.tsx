import React from 'react';
import { motion } from 'motion/react';
import { content } from '../content';

export const IntegrationsStrip: React.FC = () => {
  const { caption, tools } = content.integrations;

  return (
    <section className="w-full py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-[1187px] mx-auto px-4 text-center">
        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-[15px] text-slate-500 font-normal tracking-tight mb-8"
        >
          {caption}
        </motion.p>

        {/* Six wordmarks in grayscale separated by thin vertical dividers */}
        {/* TODO: Swap in verified official SVG logos */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(8px)', y: 16 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-y-4 gap-x-2 sm:gap-x-0 max-w-4xl mx-auto"
        >
          {tools.map((tool, idx) => (
            <React.Fragment key={tool.name}>
              <div className="px-4 sm:px-6 md:px-7 py-1 text-slate-400 hover:text-slate-700 transition-colors duration-200">
                <span className="text-sm sm:text-base md:text-lg font-semibold tracking-tight font-display select-none">
                  {tool.name}
                </span>
              </div>
              {idx < tools.length - 1 && (
                <div className="hidden sm:block w-[1px] h-4 bg-slate-200 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
