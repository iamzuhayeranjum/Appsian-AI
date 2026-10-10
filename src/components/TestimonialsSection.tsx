import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CurtainBackdrop } from './CurtainBackdrop';
import { content } from '../content';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = content;
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card

  // Auto-advance every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  const currentTestimonial = testimonials[currentIndex];
  const prevTestimonial = testimonials[prevIndex];
  const nextTestimonial = testimonials[nextIndex];

  // Duotone portrait gradient options matching the video
  const duotoneGradients = [
    'linear-gradient(135deg, #092c3e 0%, #115e75 45%, #67e8f9 100%)', // teal/cyan
    'linear-gradient(135deg, #2e1065 0%, #581c87 45%, #f472b6 100%)', // violet/pink
    'linear-gradient(135deg, #0f172a 0%, #312e81 48%, #818cf8 100%)', // deep indigo/purple
  ];

  return (
    <section className="w-full pb-[140px] bg-white flex justify-center px-4">
      {/* The band is 1187px wide and about 730px tall, with a 56px radius on all four corners */}
      <div className="w-full max-w-[1187px] md:h-[730px] rounded-[56px] overflow-hidden relative">
        <CurtainBackdrop
          variant="sky"
          className="w-full h-full rounded-[56px] overflow-hidden relative"
        >
          {/* Headline is 44px, centered, sits 128px from the band's top edge */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)', y: 24 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-center pt-[128px] px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-display font-normal text-white tracking-[-0.03em] leading-[1.18]">
              Proof it&apos;s working
            </h2>
          </motion.div>

          {/* Cards start 234px from the top edge, bottom sits about 150px above band bottom edge */}
          <div className="md:absolute md:top-[234px] left-0 right-0 flex justify-center px-4 py-8 md:py-0">
            <div className="flex items-center justify-center gap-[30px] w-full max-w-[968px]">
              {/* Left side card: 198x350, 28px radius, dimmed and slightly scaled */}
              <motion.div
                onClick={() => setCurrentIndex(prevIndex)}
                whileHover={{ scale: 0.98, opacity: 0.85 }}
                className="hidden md:flex w-[198px] h-[350px] rounded-[28px] overflow-hidden opacity-60 scale-95 cursor-pointer shrink-0 relative items-center justify-center shadow-lg"
              >
                {/* PLACEHOLDER: replace with a real founding-client quote */}
                <div
                  className="w-full h-full flex flex-col justify-end p-5 text-white relative"
                  style={{ background: duotoneGradients[prevIndex % duotoneGradients.length] }}
                >
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-sm font-semibold mb-2">
                      {prevTestimonial.initials}
                    </div>
                    <div className="text-xs font-semibold">{prevTestimonial.name}</div>
                    <div className="text-[10px] text-white/70 truncate">{prevTestimonial.company}</div>
                  </div>
                </div>
              </motion.div>

              {/* Center card: 480x350, white, with a 200px image panel on left */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full sm:w-[480px] h-[350px] bg-white rounded-[28px] overflow-hidden flex flex-row shadow-2xl shrink-0 z-20"
                >
                  {/* PLACEHOLDER: replace with a real founding-client quote */}
                  {/* 200px image panel on left with duotone gradient */}
                  <div
                    className="w-[200px] h-full shrink-0 flex flex-col justify-end p-5 text-white relative overflow-hidden"
                    style={{ background: duotoneGradients[currentIndex % duotoneGradients.length] }}
                  >
                    <div className="absolute inset-0 bg-black/15" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-base font-bold mb-3 shadow-md">
                        {currentTestimonial.initials}
                      </div>
                      <span className="text-[10px] font-medium bg-black/35 backdrop-blur-sm px-2.5 py-1 rounded-full inline-block">
                        Founding Client
                      </span>
                    </div>
                  </div>

                  {/* Quote, name, role and 5 stars on right */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      {/* 5 gold stars */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic">
                        &ldquo;{currentTestimonial.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author attribution */}
                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-xs font-semibold text-slate-900">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {currentTestimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right side card: 198x350, 28px radius, dimmed and slightly scaled */}
              <motion.div
                onClick={() => setCurrentIndex(nextIndex)}
                whileHover={{ scale: 0.98, opacity: 0.85 }}
                className="hidden md:flex w-[198px] h-[350px] rounded-[28px] overflow-hidden opacity-60 scale-95 cursor-pointer shrink-0 relative items-center justify-center shadow-lg"
              >
                {/* PLACEHOLDER: replace with a real founding-client quote */}
                <div
                  className="w-full h-full flex flex-col justify-end p-5 text-white relative"
                  style={{ background: duotoneGradients[nextIndex % duotoneGradients.length] }}
                >
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-sm font-semibold mb-2">
                      {nextTestimonial.initials}
                    </div>
                    <div className="text-xs font-semibold">{nextTestimonial.name}</div>
                    <div className="text-[10px] text-white/70 truncate">{nextTestimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </CurtainBackdrop>
      </div>
    </section>
  );
};
