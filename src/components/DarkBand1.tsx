import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CurtainBackdrop } from './CurtainBackdrop';
import { content } from '../content';
import { Calendar, UserCheck, FileAudio, Check, ArrowRight } from 'lucide-react';

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
    <section className="w-full py-12 sm:py-16 bg-white flex justify-center px-4">
      <div className="w-full max-w-[1187px]">
        {/* Sky-blue curtain variant container with radius 56-60px */}
        <CurtainBackdrop
          variant="sky"
          className="rounded-[52px] sm:rounded-[60px] p-8 sm:p-14 md:p-16 soft-card-shadow"
        >
          {/* H2 Heading: Two lines, white, ~48px */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)', y: 24 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-display font-medium text-white tracking-tight leading-[1.18] max-w-2xl mx-auto">
              <span>{darkBand1.h2Line1}</span>
              <br />
              <span>{darkBand1.h2Line2}</span>
            </h2>
          </motion.div>

          {/* Two White Cards (471px wide, radius 28) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[980px] mx-auto">
            {/* Card 1: Qualifies every caller */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(14px)', y: 24 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[28px] p-6 sm:p-7 shadow-xl flex flex-col justify-between hover-lift min-h-[440px]"
            >
              {/* Inner lavender-to-cyan panel with Quick Qualify mockup */}
              <div
                className="w-full rounded-2xl p-5 mb-6 flex-1 flex flex-col justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(232, 244, 255, 0.9) 0%, rgba(240, 235, 255, 0.9) 50%, rgba(174, 240, 251, 0.45) 100%)',
                }}
              >
                <div className="bg-white/90 backdrop-blur-xs rounded-xl p-4 shadow-xs border border-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-800">
                      Quick Qualify
                    </span>
                    <span className="text-[10px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
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
                                ? 'bg-slate-900 text-white shadow-xs scale-102'
                                : 'bg-slate-100/90 text-slate-600'
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
                                ? 'bg-[#6EEDC2] text-slate-900 font-semibold shadow-xs scale-102'
                                : 'bg-slate-100/90 text-slate-600'
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

              {/* Title & Blurb */}
              <div>
                <h3 className="text-xl font-display font-medium text-[#2D283C] tracking-tight mb-1.5">
                  {darkBand1.card1.title}
                </h3>
                <p className="text-sm text-[#2D283C]/85 leading-relaxed">
                  {darkBand1.card1.blurb}
                </p>
              </div>
            </motion.div>

            {/* Card 2: Syncs with your calendar and CRM */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(14px)', y: 24 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[28px] p-6 sm:p-7 shadow-xl flex flex-col justify-between hover-lift min-h-[440px]"
            >
              {/* Inner lavender-to-cyan panel with 3 rows */}
              <div
                className="w-full rounded-2xl p-5 mb-6 flex-1 flex flex-col justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(240, 235, 255, 0.9) 0%, rgba(232, 244, 255, 0.9) 50%, rgba(174, 240, 251, 0.45) 100%)',
                }}
              >
                <div className="space-y-2.5">
                  {/* Row 1: Calendar booking */}
                  <div className="bg-white/95 backdrop-blur-xs rounded-xl p-3 shadow-xs border border-white flex items-center justify-between">
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
                  <div className="bg-white/95 backdrop-blur-xs rounded-xl p-3 shadow-xs border border-white flex items-center justify-between">
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
                  <div className="bg-white/95 backdrop-blur-xs rounded-xl p-3 shadow-xs border border-white flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <FileAudio className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-800">
                          Call Transcript & Audio
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

              {/* Title & Blurb */}
              <div>
                <h3 className="text-xl font-display font-medium text-[#2D283C] tracking-tight mb-1.5">
                  {darkBand1.card2.title}
                </h3>
                <p className="text-sm text-[#2D283C]/85 leading-relaxed">
                  {darkBand1.card2.blurb}
                </p>
              </div>
            </motion.div>
          </div>
        </CurtainBackdrop>
      </div>
    </section>
  );
};
