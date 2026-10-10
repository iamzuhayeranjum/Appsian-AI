import React from 'react';
import { motion } from 'motion/react';
import { content } from '../content';

export const IntegrationsStrip: React.FC = () => {
  const { caption, tools } = content.integrations;

  return (
    <section className="w-full bg-white overflow-hidden pt-[130px] pb-[150px]">
      <div className="max-w-[1187px] mx-auto px-4 text-center">
        {/* Caption starts 130px below the hero bottom edge */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-[15px] text-slate-500 font-normal tracking-tight mb-[56px]"
        >
          {caption}
        </motion.p>

        {/* Logo row sits 56px below caption */}
        {/* TODO: Swap in verified brand SVG logos when available */}
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
                <span className="text-sm sm:text-base md:text-lg font-normal tracking-tight font-display select-none">
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
