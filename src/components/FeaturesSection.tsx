import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { content } from '../content';
import { Check, Phone, Volume2, Clock } from 'lucide-react';
import { Card, Chip, SectionHeader, Reveal } from './design-system';

export const FeaturesSection: React.FC = () => {
  const { features } = content;

  // Typewriter effect state for "Reclaim your time"
  const summaryText =
    'Caller reported sudden boiler leak in basement. Verified service address at 42 Elm St. Confirmed diagnostic slot for Tuesday 9:30 AM with master tech.';
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isDeleting && displayText.length < summaryText.length) {
      timeout = setTimeout(() => {
        setDisplayText(summaryText.slice(0, displayText.length + 1));
      }, 40);
    } else if (!isDeleting && displayText.length === summaryText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2600);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(summaryText.slice(0, displayText.length - 2));
      }, 20);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section id="features" className="w-full pb-[120px] bg-[#F5F6F7]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Heading with mixed-weight Headline */}
        <SectionHeader
          eyebrow="Workflow Intelligence"
          headline={[
            { text: 'Save Hours', weight: 'light' },
            { text: 'And Keep Jobs Moving', weight: 'strong' },
          ]}
        />

        {/* 1. Wide Card (987x580, radius 20px, surface #FFFFFF, shadow-1, hairline border) */}
        <Reveal delay={0.1}>
          <Card className="w-full max-w-[987px] mx-auto p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[520px] md:h-[580px]">
            {/* Concentric faint arc lines in the background */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
              <svg
                className="w-[800px] h-[800px] -top-32 absolute"
                viewBox="0 0 800 800"
                fill="none"
              >
                <circle
                  cx="400"
                  cy="400"
                  r="180"
                  stroke="#CBD5E1"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
                <circle cx="400" cy="400" r="260" stroke="#CBD5E1" strokeWidth="1" />
                <circle
                  cx="400"
                  cy="400"
                  r="340"
                  stroke="#E2E8F0"
                  strokeWidth="1"
                  strokeDasharray="8 8"
                />
              </svg>
            </div>

            {/* Overlapping Floating Mockup Cards */}
            <div className="relative z-10 w-full pt-4 pb-4 flex items-center justify-center">
              <div className="relative w-full max-w-[620px] h-[260px] sm:h-[280px]">
                {/* Back Card: Live Call Card */}
                <div className="absolute left-2 sm:left-6 top-2 w-[280px] sm:w-[320px] bg-white rounded-[16px] p-4 sm:p-5 shadow-1 border border-[rgba(11,11,15,0.08)] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-[8px] bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-[#0B0B0F] block">
                          Incoming Line 1
                        </span>
                        <span className="text-[9px] text-[#5B5F68]">02:45 · Connected</span>
                      </div>
                    </div>
                    <Chip active>Live Call</Chip>
                  </div>

                  <div className="bg-[#F5F6F7] rounded-[10px] p-2.5 mb-2.5 border border-[rgba(11,11,15,0.06)]">
                    <div className="text-[11px] font-medium text-[#0B0B0F]">
                      &ldquo;My water heater is making a buzzing sound and leaking...&rdquo;
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Volume2 className="w-3 h-3 text-[#4A3FB5]" />
                      <div className="flex gap-1 items-end h-2.5">
                        <div className="w-0.5 h-2 bg-[#4A3FB5] animate-pulse" />
                        <div className="w-0.5 h-3 bg-[#4A3FB5] animate-pulse delay-75" />
                        <div className="w-0.5 h-1.5 bg-[#4A3FB5] animate-pulse delay-150" />
                        <div className="w-0.5 h-2.5 bg-[#4A3FB5] animate-pulse delay-100" />
                      </div>
                      <span className="text-[9px] text-[#5B5F68] ml-1">AI Listening</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[#5B5F68] pt-1 border-t border-[rgba(11,11,15,0.08)]">
                    <span>Caller: Marcus V.</span>
                    <span className="text-emerald-700 font-medium">Auto-qualifying...</span>
                  </div>
                </div>

                {/* Front Card: Progress Card */}
                <div className="absolute right-2 sm:right-6 bottom-2 w-[290px] sm:w-[340px] bg-white rounded-[16px] p-4 sm:p-5 shadow-2 border border-[rgba(11,11,15,0.08)] transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#0B0B0F]">
                      Qualification Progress
                    </span>
                    <Chip>92% Complete</Chip>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-[#EEF0F2] h-1.5 rounded-[4px] mb-3.5 overflow-hidden">
                    <motion.div
                      initial={{ width: '20%' }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: 'easeOut' }}
                      className="h-full bg-[#6EEDC2] rounded-[4px]"
                    />
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="flex items-center justify-between text-[#0B0B0F]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[9px] font-bold">✓</span>
                        Emergency Plumbing triage
                      </span>
                      <span className="text-[#5B5F68] text-[10px]">Verified</span>
                    </div>
                    <div className="flex items-center justify-between text-[#0B0B0F]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[9px] font-bold">✓</span>
                        Calendar slot confirmed
                      </span>
                      <span className="text-[#5B5F68] text-[10px]">Tue 9:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Title & Blurb */}
            <div className="relative z-10 text-center max-w-xl mx-auto pt-3">
              <h3 className="text-[20px] font-display font-[500] text-[#0B0B0F] tracking-tight mb-2">
                {features.bigCard.title}
              </h3>
              <p className="text-[15px] leading-[24px] text-[#5B5F68]">
                {features.bigCard.blurb}
              </p>
            </div>
          </Card>
        </Reveal>

        {/* 2. Two Half-Width Cards (485x430, radius 20px, 16px gap, surface #FFFFFF, shadow-1) */}
        <div className="max-w-[987px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Left Card: Reclaim your time */}
          <Reveal delay={0.15}>
            <Card className="w-full md:w-[485px] h-[430px] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
              {/* Mockup with "Mark as complete" chip and typewriter summary */}
              <div className="bg-[#F5F6F7] rounded-[16px] p-4 border border-[rgba(11,11,15,0.06)] flex-1 flex flex-col justify-between mb-4 shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#6EEDC2]" />
                      <span className="text-xs font-semibold text-[#0B0B0F]">
                        AI Call Summary
                      </span>
                    </div>
                    <Chip>
                      <Check className="w-3 h-3 mr-1" /> Mark complete
                    </Chip>
                  </div>

                  {/* Rich text box with typewriter effect */}
                  <div className="bg-white rounded-[10px] p-3 min-h-[96px] text-xs text-[#0B0B0F] leading-relaxed border border-[rgba(11,11,15,0.08)]">
                    <span>{displayText}</span>
                    <span className="inline-block w-1.5 h-3.5 bg-[#0B0B0F] ml-0.5 animate-pulse" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-[rgba(11,11,15,0.08)] text-[10px] text-[#5B5F68]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Duration: 2m 14s
                  </span>
                  <span>Dispatched to tech</span>
                </div>
              </div>

              {/* Title & Blurb */}
              <div>
                <h3 className="text-[18px] font-display font-[500] text-[#0B0B0F] tracking-tight mb-1">
                  {features.card1.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-[#5B5F68]">
                  {features.card1.blurb}
                </p>
              </div>
            </Card>
          </Reveal>

          {/* Right Card: Stay on top of every call */}
          <Reveal delay={0.25}>
            <Card className="w-full md:w-[485px] h-[430px] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
              {/* Mockup with two call rows (Booked, Escalated) & skeleton lines */}
              <div className="bg-[#F5F6F7] rounded-[16px] p-4 border border-[rgba(11,11,15,0.06)] flex-1 flex flex-col justify-center space-y-3 mb-4 shadow-xs">
                {/* Row 1: Booked */}
                <div className="p-3 bg-white rounded-[10px] border border-[rgba(11,11,15,0.08)] flex items-center justify-between shadow-xs">
                  <div className="space-y-1.5 flex-1 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[#0B0B0F]">
                        Sarah Jenkins
                      </span>
                      <span className="text-[10px] text-[#5B5F68]">· 11:42 AM</span>
                    </div>
                    {/* Skeleton lines */}
                    <div className="w-4/5 h-1.5 bg-slate-200 rounded-full" />
                    <div className="w-2/5 h-1 bg-slate-100 rounded-full" />
                  </div>
                  <Chip active>Booked</Chip>
                </div>

                {/* Row 2: Escalated */}
                <div className="p-3 bg-white rounded-[10px] border border-[rgba(11,11,15,0.08)] flex items-center justify-between shadow-xs">
                  <div className="space-y-1.5 flex-1 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[#0B0B0F]">
                        Highland Dental Clinic
                      </span>
                      <span className="text-[10px] text-[#5B5F68]">· 01:15 PM</span>
                    </div>
                    {/* Skeleton lines */}
                    <div className="w-3/4 h-1.5 bg-slate-200 rounded-full" />
                    <div className="w-1/2 h-1 bg-slate-100 rounded-full" />
                  </div>
                  <Chip>Escalated</Chip>
                </div>
              </div>

              {/* Title & Blurb */}
              <div>
                <h3 className="text-[18px] font-display font-[500] text-[#0B0B0F] tracking-tight mb-1">
                  {features.card2.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-[#5B5F68]">
                  {features.card2.blurb}
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
