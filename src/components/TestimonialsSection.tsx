import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CurtainBackdrop } from './CurtainBackdrop';
import { content, Testimonial } from '../content';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = content;
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle one

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

  return (
    <section className="w-full py-14 sm:py-20 bg-white flex justify-center px-4">
      <div className="w-full max-w-[1187px]">
        {/* Dark band 2 (same gradient as band 1 or hero, 1187px wide, radius 56-60px) */}
        <CurtainBackdrop
          variant="sky"
          className="rounded-[52px] sm:rounded-[60px] p-8 sm:p-14 md:p-16 soft-card-shadow"
        >
          {/* H2 white, ~44px */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)', y: 24 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-display font-medium text-white tracking-tight leading-[1.18]">
              Proof it&apos;s working
            </h2>
          </motion.div>

          {/* 3-card carousel */}
          <div className="relative flex items-center justify-center gap-3 sm:gap-6 min-h-[380px] max-w-[960px] mx-auto overflow-hidden sm:overflow-visible">
            {/* Left side card (dimmed portrait, 198x350) */}
            <motion.div
              onClick={() => setCurrentIndex(prevIndex)}
              whileHover={{ scale: 0.98, opacity: 0.85 }}
              className="hidden md:flex w-[198px] h-[350px] rounded-[28px] overflow-hidden opacity-60 cursor-pointer shadow-xl border border-white/20 shrink-0 relative items-center justify-center"
            >
              {/* PLACEHOLDER: replace with a real founding-client quote */}
              <div
                className={`w-full h-full bg-gradient-to-b ${prevTestimonial.avatarGradient} flex flex-col justify-end p-4 text-white relative`}
              >
                <div className="absolute inset-0 bg-black/35" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-sm font-bold mb-2">
                    {prevTestimonial.initials}
                  </div>
                  <div className="text-xs font-semibold">{prevTestimonial.name}</div>
                  <div className="text-[10px] text-white/70">{prevTestimonial.company}</div>
                </div>
              </div>
            </motion.div>

            {/* Center Card: White, 480x350, radius 28 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[500px] sm:w-[480px] min-h-[350px] bg-white rounded-[28px] p-5 sm:p-6 shadow-2xl border border-white/40 flex flex-col sm:flex-row gap-4 sm:gap-5 z-20"
              >
                {/* PLACEHOLDER: replace with a real founding-client quote */}
                {/* 200px portrait/avatar on the left */}
                <div className="w-full sm:w-[185px] h-[160px] sm:h-full rounded-2xl overflow-hidden shrink-0 relative shadow-inner">
                  <div
                    className={`w-full h-full bg-gradient-to-b ${currentTestimonial.avatarGradient} flex flex-col items-center justify-center p-4 text-white relative`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    {/* Stylized lighting rings */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/20 blur-xl" />
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-xl font-bold mb-2 mx-auto shadow-md">
                        {currentTestimonial.initials}
                      </div>
                      <span className="text-[11px] font-medium bg-black/30 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                        Founding Client
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quote, name, role and 5 stars on the right */}
                <div className="flex-1 flex flex-col justify-between py-1">
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
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic mb-4">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author attribution */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-xs font-semibold text-slate-900">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {currentTestimonial.role} · {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right side card (dimmed portrait, 198x350) */}
            <motion.div
              onClick={() => setCurrentIndex(nextIndex)}
              whileHover={{ scale: 0.98, opacity: 0.85 }}
              className="hidden md:flex w-[198px] h-[350px] rounded-[28px] overflow-hidden opacity-60 cursor-pointer shadow-xl border border-white/20 shrink-0 relative items-center justify-center"
            >
              {/* PLACEHOLDER: replace with a real founding-client quote */}
              <div
                className={`w-full h-full bg-gradient-to-b ${nextTestimonial.avatarGradient} flex flex-col justify-end p-4 text-white relative`}
              >
                <div className="absolute inset-0 bg-black/35" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-sm font-bold mb-2">
                    {nextTestimonial.initials}
                  </div>
                  <div className="text-xs font-semibold">{nextTestimonial.name}</div>
                  <div className="text-[10px] text-white/70">{nextTestimonial.company}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Carousel dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-[#6EEDC2]' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </CurtainBackdrop>
      </div>
    </section>
  );
};
