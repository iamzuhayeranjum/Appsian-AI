import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { content, FaqItem } from '../content';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { faq } = content;
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const renderFaqRow = (item: FaqItem) => {
    const isOpen = openId === item.id;

    return (
      <div
        key={item.id}
        className="w-full bg-[#F7F8FB] hover:bg-[#F0F2F7] rounded-[28px] transition-colors duration-200 overflow-hidden shadow-xs"
      >
        <button
          type="button"
          onClick={() => toggleItem(item.id)}
          className="w-full min-h-[78px] px-6 sm:px-8 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
          aria-expanded={isOpen}
        >
          <span className="text-base sm:text-[17px] font-display font-medium text-[#2D283C] pr-4">
            {item.question}
          </span>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 text-[#2D283C] shadow-xs transition-transform duration-200">
            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 sm:px-8 pb-6 pt-1 text-[16px] leading-[25px] text-[#2D283C]/85 font-sans">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="w-full pb-[140px] bg-white flex justify-center px-4">
      <div className="w-full max-w-[1187px]">
        {/* H2 about 48px, weight 400, light and tight */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)', y: 24 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-display font-normal text-[#2D283C] tracking-[-0.03em] leading-[1.18]">
            {faq.h2}
          </h2>
        </motion.div>

        {/* Two columns, about 580px each, rows 78px tall with 18px gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px] items-start">
          {/* Left column */}
          <div className="flex flex-col gap-[18px]">
            {faq.leftColumn.map((item) => renderFaqRow(item))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-[18px]">
            {faq.rightColumn.map((item) => renderFaqRow(item))}
          </div>
        </div>
      </div>
    </section>
  );
};
