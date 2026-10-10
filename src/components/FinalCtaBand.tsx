import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CurtainBackdrop } from './CurtainBackdrop';
import { content } from '../content';
import { Mail, Check, CheckCircle2 } from 'lucide-react';

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
    <section className="w-full pb-[140px] bg-white flex justify-center px-4">
      {/* The band is 1187px wide and 440px tall, with a 56px radius on all four corners */}
      <div className="w-full max-w-[1187px] h-[440px] rounded-[56px] overflow-hidden relative">
        <CurtainBackdrop
          variant="final-cta"
          className="w-full h-full rounded-[56px] overflow-hidden relative"
        >
          {/* H2 centers at 110px. 46px, white, weight 400, MUST stay on ONE line (white-space: nowrap) */}
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[110px] -translate-y-1/2 left-0 right-0 text-center font-display font-normal text-2xl sm:text-3xl md:text-[46px] text-white tracking-[-0.03em] whitespace-nowrap px-4"
          >
            {finalCta.h2}
          </motion.h2>

          {/* Subline: two lines, 17px, white at 75%, line-height 28px, centered at about 165px and 195px */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(8px)', y: 14 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[180px] -translate-y-1/2 left-0 right-0 text-center text-white/75 text-[17px] leading-[28px] max-w-xl mx-auto font-normal px-4"
          >
            <span className="block">Hear your AI receptionist take a real call for your business</span>
            <span className="block">before you decide anything.</span>
          </motion.div>

          {/* Steps row at 260px: three items with filled white check-circle icon, 18px white text, separated by tiny dots (~45px gap) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[260px] -translate-y-1/2 left-0 right-0 flex flex-wrap items-center justify-center gap-x-[45px] gap-y-2 px-4"
          >
            {finalCta.checks.map((item, idx) => (
              <React.Fragment key={item}>
                <div className="flex items-center gap-2 text-[17px] sm:text-[18px] text-white font-normal whitespace-nowrap">
                  {/* Filled white check-circle icon */}
                  <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center text-[#201C52] shrink-0 shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
                {idx < finalCta.checks.length - 1 && (
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Form at 340px, 40px tall, side by side with a 12px gap */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[340px] -translate-y-1/2 left-0 right-0 flex items-center justify-center px-4"
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center gap-[12px] h-[40px]"
              >
                {/* Email pill: 262px wide, glass rgba(255,255,255,0.14) with 1px lighter top border, backdrop blur */}
                <div
                  className="relative w-[262px] h-[40px] rounded-full flex items-center overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.14)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.45)',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.22)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.22)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.22)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder={finalCta.emailPlaceholder}
                    className="w-full h-full pl-5 pr-10 text-xs sm:text-sm text-white placeholder-white/65 bg-transparent focus:outline-none"
                  />
                  <Mail className="w-4 h-4 text-white/65 absolute right-3.5 pointer-events-none" />
                </div>

                {/* Button: mint #6EEDC2, "Book a Demo", 115px wide with soft mint glow */}
                <button
                  type="submit"
                  className="w-[115px] h-[40px] rounded-full bg-[#6EEDC2] text-[#0A261D] font-medium text-xs sm:text-sm mint-glow hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(110,237,194,0.45)] whitespace-nowrap"
                >
                  {finalCta.buttonLabel}
                </button>
              </form>
            ) : (
              <div className="h-[40px] bg-emerald-500/20 border border-[#6EEDC2]/50 rounded-full px-6 flex items-center gap-2 text-xs sm:text-sm text-[#6EEDC2]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Demo requested! Our team will contact {email} shortly.</span>
              </div>
            )}
          </motion.div>
        </CurtainBackdrop>
      </div>
    </section>
  );
};
