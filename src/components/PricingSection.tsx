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
    <section id="pricing" className="w-full pb-[140px] bg-white flex justify-center px-4">
      <div className="w-full max-w-[1187px]">
        {/* H2 centered, ~48px, light and tight */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)', y: 24 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-display font-normal text-[#2D283C] tracking-[-0.03em] leading-[1.18]">
            {pricing.h2}
          </h2>
        </motion.div>

        {/* Pill Toggle: 235x38px */}
        <div className="flex justify-center mb-12">
          <div className="w-[235px] h-[38px] bg-slate-100 rounded-full p-1 flex items-center relative shadow-inner">
            <button
              type="button"
              onClick={() => setIsPilot(false)}
              className={`flex-1 h-full rounded-full text-xs font-medium transition-all duration-200 z-10 cursor-pointer ${
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
              className={`flex-1 h-full rounded-full text-xs font-medium transition-all duration-200 z-10 cursor-pointer ${
                isPilot
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {pricing.togglePilot}
            </button>
          </div>
        </div>

        {/* Three Cards (385px wide, 491px tall, 40px radius, 15px gap) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[15px]">
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
                    delay: 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full max-w-[385px] lg:w-[385px] h-[491px] rounded-[40px] overflow-hidden relative shadow-[0_10px_40px_rgba(60,50,120,0.08)] shrink-0"
                >
                  <CurtainBackdrop
                    variant="card-violet"
                    className="w-full h-full p-[40px] flex flex-col justify-start text-white relative"
                  >
                    {/* Top: Plan Name (20px) */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-[20px] font-display font-medium text-white tracking-tight">
                        {plan.name}
                      </h3>
                      <span className="text-[11px] font-medium bg-[#6EEDC2]/20 text-[#6EEDC2] px-2 py-0.5 rounded-full">
                        Most popular
                      </span>
                    </div>

                    {/* Description: 16px, 2 lines */}
                    <p className="text-[16px] leading-[24px] text-white/75 h-[48px] line-clamp-2 mt-2">
                      {plan.description}
                    </p>

                    {/* Price: 40px */}
                    <div className="h-[48px] flex items-baseline gap-1 mt-3">
                      {!isPilot ? (
                        <>
                          <span className="text-[40px] font-display font-normal text-white tracking-tight tabular-nums leading-none">
                            ${plan.monthlyPrice}
                          </span>
                          <span className="text-xs text-white/60">/ month</span>
                        </>
                      ) : (
                        <>
                          <span className="text-[40px] font-display font-normal text-[#6EEDC2] tracking-tight leading-none">
                            $0
                          </span>
                          <span className="text-xs text-white/70">/ 30-day pilot</span>
                        </>
                      )}
                    </div>

                    {/* Button: directly below price, 307px wide, 42px tall, fully rounded, 16px gap above */}
                    <button
                      type="button"
                      onClick={() => onPlanSelect(plan.name)}
                      className="w-[307px] max-w-full h-[42px] rounded-full bg-[#6EEDC2] text-[#0A261D] font-medium text-sm mint-glow hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(110,237,194,0.45)] mt-[16px] block shrink-0"
                    >
                      {plan.ctaLabel}
                    </button>

                    {/* Feature list: starts 34px below the button */}
                    <ul className="mt-[34px] space-y-2 text-xs text-white/85">
                      {plan.features.slice(0, 4).map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#6EEDC2] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </CurtainBackdrop>
                </motion.div>
              );
            }

            // Left / Right cards: Starter ($299) and Scale ($999) - #F6F8F7
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
                className="w-full max-w-[385px] lg:w-[385px] h-[491px] rounded-[40px] bg-[#F6F8F7] p-[40px] flex flex-col justify-start shadow-[0_10px_40px_rgba(60,50,120,0.08)] shrink-0"
              >
                {/* Top: Plan Name (20px) */}
                <h3 className="text-[20px] font-display font-medium text-[#2D283C] tracking-tight">
                  {plan.name}
                </h3>

                {/* Description: 16px, 2 lines */}
                <p className="text-[16px] leading-[24px] text-[#2D283C]/75 h-[48px] line-clamp-2 mt-2">
                  {plan.description}
                </p>

                {/* Price: 40px */}
                <div className="h-[48px] flex items-baseline gap-1 mt-3">
                  {!isPilot ? (
                    <>
                      <span className="text-[40px] font-display font-normal text-[#2D283C] tracking-tight tabular-nums leading-none">
                        ${plan.monthlyPrice}
                      </span>
                      <span className="text-xs text-slate-500">/ month</span>
                    </>
                  ) : (
                    <>
                      <span className="text-[40px] font-display font-normal text-slate-800 tracking-tight leading-none">
                        $0
                      </span>
                      <span className="text-xs text-slate-500">/ 30-day pilot</span>
                    </>
                  )}
                </div>

                {/* Button: directly below price, 307px wide, 42px tall, fully rounded, 16px gap above */}
                <button
                  type="button"
                  onClick={() => onPlanSelect(plan.name)}
                  className="w-[307px] max-w-full h-[42px] rounded-full bg-white text-slate-900 font-medium text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer mt-[16px] block shrink-0"
                >
                  {plan.ctaLabel}
                </button>

                {/* Feature list: starts 34px below the button */}
                <ul className="mt-[34px] space-y-2 text-xs text-[#2D283C]/85">
                  {plan.features.slice(0, 4).map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
