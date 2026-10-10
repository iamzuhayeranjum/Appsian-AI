import React, { useState } from 'react';
import { motion } from 'motion/react';
import { content, PricingPlan } from '../content';
import { CurtainBackdrop } from './CurtainBackdrop';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onPlanSelect: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onPlanSelect }) => {
  const { pricing } = content;
  const [isPilot, setIsPilot] = useState(false);

  return (
    <section id="pricing" className="w-full py-20 bg-white flex justify-center px-4">
      <div className="w-full max-w-[1187px]">
        {/* H2 centered, ~48px */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)', y: 24 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-display font-medium text-[#2D283C] tracking-tight leading-[1.18]">
            {pricing.h2}
          </h2>
        </motion.div>

        {/* Pill Toggle: 235x38 */}
        <div className="flex justify-center mb-12">
          <div className="w-[235px] h-[38px] bg-slate-100 rounded-full p-1 flex items-center relative shadow-inner">
            <button
              type="button"
              onClick={() => setIsPilot(false)}
              className={`flex-1 h-full rounded-full text-xs font-medium transition-all duration-200 z-10 ${
                !isPilot
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {pricing.toggleMonthly}
            </button>
            <button
              type="button"
              onClick={() => setIsPilot(true)}
              className={`flex-1 h-full rounded-full text-xs font-medium transition-all duration-200 z-10 ${
                isPilot
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {pricing.togglePilot}
            </button>
          </div>
        </div>

        {/* Three Cards (385px wide, 490px tall, 15px gap, radius 40px) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px] justify-center items-center">
          {pricing.plans.map((plan: PricingPlan, index: number) => {
            const isMiddle = plan.highlightCurtain;

            if (isMiddle) {
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, filter: 'blur(14px)', y: 24 }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.05, // Middle card animates first as specified
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full max-w-[385px] mx-auto h-[510px] rounded-[40px] overflow-hidden soft-card-shadow flex flex-col relative z-10"
                >
                  <CurtainBackdrop
                    variant="card-violet"
                    className="w-full h-full p-7 sm:p-8 flex flex-col justify-between text-white"
                  >
                    <div>
                      {/* Top row with name & Most popular */}
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-display font-medium text-white tracking-tight">
                          {plan.name}
                        </h3>
                        <span className="text-[11px] font-semibold bg-[#6EEDC2]/20 text-[#6EEDC2] px-2.5 py-0.5 rounded-full border border-[#6EEDC2]/30">
                          Most popular
                        </span>
                      </div>

                      {/* Pricing block */}
                      <div className="mb-4">
                        {!isPilot ? (
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl sm:text-5xl font-display font-medium text-white tracking-tight tabular-nums">
                              ${plan.monthlyPrice}
                            </span>
                            <span className="text-xs text-white/60">/ month</span>
                          </div>
                        ) : (
                          <div>
                            <div className="flex items-baseline gap-1">
                              <span className="text-3xl sm:text-4xl font-display font-medium text-[#6EEDC2] tracking-tight">
                                $0
                              </span>
                              <span className="text-xs text-white/70">
                                setup &amp; management
                              </span>
                            </div>
                            <p className="text-[11px] text-white/80 mt-1">
                              30-day pilot: you only cover actual AI + phone usage.
                            </p>
                          </div>
                        )}
                        <div className="text-xs text-[#6EEDC2] font-medium mt-1">
                          {plan.minutesLabel}{' '}
                          <span className="text-white/60">{plan.callsLabel}</span>
                        </div>
                      </div>

                      {/* Feature list */}
                      <ul className="space-y-2.5 text-xs text-white/85 pt-2 border-t border-white/10">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#6EEDC2] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mint CTA Button (42px tall, fully rounded) */}
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => onPlanSelect(plan.name)}
                        className="w-full h-[42px] rounded-full bg-[#6EEDC2] text-[#0A261D] font-medium text-sm mint-glow hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(110,237,194,0.45)]"
                      >
                        {plan.ctaLabel}
                      </button>
                    </div>
                  </CurtainBackdrop>
                </motion.div>
              );
            }

            // Left / Right cards (Starter, Scale)
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, filter: 'blur(14px)', y: 24 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index === 0 ? 0.15 : 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full max-w-[385px] mx-auto h-[490px] rounded-[40px] bg-[#F6F8F7] border border-slate-100 p-7 sm:p-8 flex flex-col justify-between soft-card-shadow hover-lift"
              >
                <div>
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-display font-medium text-[#2D283C] tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Pricing block */}
                  <div className="mb-4">
                    {!isPilot ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-display font-medium text-[#2D283C] tracking-tight tabular-nums">
                          ${plan.monthlyPrice}
                        </span>
                        <span className="text-xs text-slate-500">/ month</span>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl sm:text-4xl font-display font-medium text-slate-800 tracking-tight">
                            $0
                          </span>
                          <span className="text-xs text-slate-500">
                            setup during pilot
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-1">
                          Cover actual AI + phone usage during the 30 days.
                        </p>
                      </div>
                    )}
                    <div className="text-xs text-slate-600 font-medium mt-1">
                      {plan.minutesLabel}{' '}
                      <span className="text-slate-400">{plan.callsLabel}</span>
                    </div>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-2.5 text-xs text-[#2D283C]/85 pt-2 border-t border-slate-200/60">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* White/Gray Button (42px tall, fully rounded) */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => onPlanSelect(plan.name)}
                    className="w-full h-[42px] rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/80 font-medium text-sm transition-all duration-200 shadow-xs hover:-translate-y-0.5 cursor-pointer"
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
