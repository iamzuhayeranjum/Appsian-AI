import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CurtainBackdrop } from './CurtainBackdrop';
import { content } from '../content';
import { Calendar, UserCheck, FileAudio, Check } from 'lucide-react';

export const DarkBand1: React.FC = () => {
  const { darkBand1 } = content;

  // Auto-looping selected chips for "Quick Qualify"
  const jobTypes = ['Repair', 'Install', 'Quote', 'Emergency'];
  const timelines = ['Today', 'This week'];

  const [activeJobTypeIndex, setActiveJobTypeIndex] = useState(0);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveJobTypeIndex((prev) => (prev + 1) % jobTypes.length);
      setActiveTimelineIndex((prev) => (prev + 1) % timelines.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full pb-[140px] bg-white flex justify-center px-4">
      {/* The band is 1187px wide and about 840px tall, with a 56px radius on all four corners */}
      <div className="w-full max-w-[1187px] md:h-[840px] rounded-[56px] overflow-hidden relative">
        <CurtainBackdrop
          variant="sky"
          className="w-full h-full rounded-[56px] overflow-hidden relative"
        >
          {/* H2: 48px, white, two lines, top padding 100px */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)', y: 24 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-center pt-[100px] px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-display font-normal text-white tracking-[-0.03em] leading-[1.18] max-w-2xl mx-auto">
              <span className="block">{darkBand1.h2Line1}</span>
              <span className="block">{darkBand1.h2Line2}</span>
            </h2>
          </motion.div>

          {/* Cards start 276px below the band's top edge, cards 471x480px, 16px gap, 28px radius */}
          <div className="md:absolute md:top-[276px] left-0 right-0 flex justify-center px-4 py-8 md:py-0">
            <div className="flex flex-col md:flex-row items-center justify-center gap-[16px] w-full max-w-[958px]">
              {/* Card 1: Qualifies every caller (471x480px) */}
              <motion.div
                initial={{ opacity: 0, filter: 'blur(14px)', y: 24 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-[471px] h-[480px] bg-white rounded-[28px] p-7 flex flex-col justify-between shadow-[0_10px_40px_rgba(60,50,120,0.08)]"
              >
                {/* Inner lavender-to-cyan panel 275px tall holding its mockup */}
                <div
                  className="w-full h-[275px] rounded-2xl p-5 flex flex-col justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(232, 244, 255, 0.95) 0%, rgba(240, 235, 255, 0.95) 50%, rgba(174, 240, 251, 0.7) 100%)',
                  }}
                >
                  <div className="bg-white/95 rounded-xl p-4 shadow-xs">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-800">
                        Quick Qualify
                      </span>
                      <span className="text-[10px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                        Live Logic
                      </span>
                    </div>

                    {/* Group 1: Job Type */}
                    <div className="mb-3">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1.5">
                        Job Type
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {jobTypes.map((type, idx) => {
                          const isSelected = idx === activeJobTypeIndex;
                          return (
                            <span
                              key={type}
                              className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300 ${
                                isSelected
                                  ? 'bg-slate-900 text-white shadow-xs'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {type}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Group 2: Timeline */}
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1.5">
                        Timeline
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {timelines.map((timeline, idx) => {
                          const isSelected = idx === activeTimelineIndex;
                          return (
                            <span
                              key={timeline}
                              className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300 ${
                                isSelected
                                  ? 'bg-[#6EEDC2] text-slate-900 font-semibold shadow-xs'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {timeline}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title (24px) & Blurb (17px) */}
                <div className="pt-2">
                  <h3 className="text-2xl sm:text-[24px] font-display font-medium text-[#2D283C] tracking-tight mb-1.5">
                    {darkBand1.card1.title}
                  </h3>
                  <p className="text-[17px] leading-[25px] text-[#2D283C]/85">
                    {darkBand1.card1.blurb}
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Syncs with your calendar and CRM (471x480px) */}
              <motion.div
                initial={{ opacity: 0, filter: 'blur(14px)', y: 24 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-[471px] h-[480px] bg-white rounded-[28px] p-7 flex flex-col justify-between shadow-[0_10px_40px_rgba(60,50,120,0.08)]"
              >
                {/* Inner lavender-to-cyan panel 275px tall holding its mockup */}
                <div
                  className="w-full h-[275px] rounded-2xl p-5 flex flex-col justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(240, 235, 255, 0.95) 0%, rgba(232, 244, 255, 0.95) 50%, rgba(174, 240, 251, 0.7) 100%)',
                  }}
                >
                  <div className="space-y-2.5">
                    {/* Row 1: Calendar booking */}
                    <div className="bg-white rounded-xl p-3 shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                          <Calendar className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-800">
                            Calendar Booking
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Slot booked in Google Calendar
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        <Check className="w-2.5 h-2.5" /> Synced
                      </span>
                    </div>

                    {/* Row 2: CRM contact */}
                    <div className="bg-white rounded-xl p-3 shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                          <UserCheck className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-800">
                            CRM Contact Created
                          </div>
                          <div className="text-[10px] text-slate-500">
                            HubSpot lead card updated
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        <Check className="w-2.5 h-2.5" /> Synced
                      </span>
                    </div>

                    {/* Row 3: Call transcript */}
                    <div className="bg-white rounded-xl p-3 shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                          <FileAudio className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-800">
                            Call Transcript &amp; Audio
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Audio attached with summary
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        <Check className="w-2.5 h-2.5" /> Attached
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title (24px) & Blurb (17px) */}
                <div className="pt-2">
                  <h3 className="text-2xl sm:text-[24px] font-display font-medium text-[#2D283C] tracking-tight mb-1.5">
                    {darkBand1.card2.title}
                  </h3>
                  <p className="text-[17px] leading-[25px] text-[#2D283C]/85">
                    {darkBand1.card2.blurb}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </CurtainBackdrop>
      </div>
    </section>
  );
};
