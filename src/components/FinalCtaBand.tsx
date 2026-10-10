import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CurtainBackdrop } from './CurtainBackdrop';
import { content } from '../content';
import { Mail, CheckCircle2 } from 'lucide-react';

interface FinalCtaBandProps {
  onSuccessDemo?: () => void;
}

export const FinalCtaBand: React.FC<FinalCtaBandProps> = ({ onSuccessDemo }) => {
  const { finalCta } = content;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate email
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid work email.');
      return;
    }
    setError('');
    // TODO: Wire up real lead capture API endpoint / webhook here
    setSubmitted(true);
    if (onSuccessDemo) onSuccessDemo();
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-white flex justify-center px-4">
      <div className="w-full max-w-[1187px]">
        {/* Curtain gradient band, 1187px wide, ~440px tall, radius 56-60px */}
        <CurtainBackdrop
          variant="violet"
          className="rounded-[52px] sm:rounded-[60px] p-8 sm:p-14 md:p-16 min-h-[440px] flex flex-col justify-center items-center text-center soft-card-shadow"
        >
          {/* H2 white, ~46px */}
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-[46px] font-display font-medium text-white tracking-tight leading-[1.18] max-w-2xl mb-4"
          >
            {finalCta.h2}
          </motion.h2>

          {/* Subline, 17px */}
          <motion.p
            initial={{ opacity: 0, filter: 'blur(8px)', y: 16 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/80 text-base sm:text-[17px] max-w-xl mx-auto mb-8 font-normal leading-relaxed"
          >
            {finalCta.subline}
          </motion.p>

          {/* Row of three checkmark items, white, separated by small dots */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 text-xs sm:text-sm text-white/90 mb-9"
          >
            {finalCta.checks.map((item, idx) => (
              <React.Fragment key={item}>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#6EEDC2]" />
                  <span>{item}</span>
                </div>
                {idx < finalCta.checks.length - 1 && (
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Form: Pill email field (262x40) + mint "Book a Demo" button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md"
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <div className="relative w-full sm:w-[262px] h-[40px]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder={finalCta.emailPlaceholder}
                    className="w-full h-full bg-white/10 backdrop-blur-md border border-white/25 rounded-full pl-5 pr-10 text-xs sm:text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#6EEDC2] transition-all"
                  />
                  <Mail className="w-4 h-4 text-white/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto h-[40px] sm:h-[42px] px-6 rounded-full bg-[#6EEDC2] text-[#0A261D] font-medium text-xs sm:text-sm mint-glow hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(110,237,194,0.45)] whitespace-nowrap"
                >
                  {finalCta.buttonLabel}
                </button>
              </form>
            ) : (
              <div className="bg-emerald-500/20 border border-[#6EEDC2]/40 rounded-full px-6 py-2.5 text-xs sm:text-sm text-[#6EEDC2] flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Demo requested! Our team will reach out to {email} shortly.</span>
              </div>
            )}

            {error && (
              <p className="text-rose-300 text-xs mt-2 font-medium">{error}</p>
            )}
          </motion.div>
        </CurtainBackdrop>
      </div>
    </section>
  );
};
