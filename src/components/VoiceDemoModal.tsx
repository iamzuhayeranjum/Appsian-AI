import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, CheckCircle2, PhoneCall } from 'lucide-react';

interface VoiceDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoiceDemoModal: React.FC<VoiceDemoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [seconds, setSeconds] = useState(14);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setSeconds((prev) => (prev >= 48 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-[#6EEDC2]/30 flex items-center justify-center text-emerald-900 shadow-xs">
              <PhoneCall className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h3 className="text-xl font-display font-medium text-slate-900 tracking-tight">
                Live voice demo goes here
              </h3>
              <p className="text-xs text-slate-500">
                Interactive preview · Trade reception voice pipeline
              </p>
            </div>
          </div>

          {/* Simulated Audio Player Box */}
          <div className="bg-[#0A0D14] rounded-2xl p-5 text-white mb-6 shadow-inner">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Inbound Emergency Plumbing Call
              </span>
              <span className="tabular-nums">00:{seconds < 10 ? `0${seconds}` : seconds} / 00:48</span>
            </div>

            {/* Simulated interactive waveform */}
            <div className="flex items-center justify-between gap-1 h-12 my-3 px-2">
              {[4, 8, 16, 24, 38, 28, 44, 20, 32, 12, 28, 40, 22, 36, 18, 30, 10, 26, 42, 14, 32, 20, 10, 4].map(
                (h, idx) => (
                  <div
                    key={idx}
                    className={`flex-1 rounded-full transition-all duration-300 ${
                      isPlaying
                        ? idx % 2 === 0
                          ? 'bg-[#6EEDC2]'
                          : 'bg-[#ACBDF5]'
                        : 'bg-slate-700'
                    }`}
                    style={{
                      height: isPlaying ? `${Math.max(6, (h * ((idx + seconds) % 5 + 3)) / 5)}px` : `${h / 2}px`,
                    }}
                  />
                )
              )}
            </div>

            {/* Audio player controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-[#6EEDC2] text-slate-900 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-md"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-slate-900" />
                ) : (
                  <Play className="w-4 h-4 fill-slate-900 ml-0.5" />
                )}
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Volume2 className="w-4 h-4 text-slate-400" />
                <span>HD Natural Speech Synth (Ultra-low latency)</span>
              </div>
            </div>
          </div>

          {/* Transcript Snippet */}
          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 text-xs space-y-2 mb-6">
            <div className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">
              Live Transcript
            </div>
            <p className="text-slate-700">
              <strong className="text-slate-900">Appsian:</strong> &ldquo;Good afternoon, thank you for calling Apex Works. Are you inquiring about a new installation, or is this an emergency repair?&rdquo;
            </p>
            <p className="text-slate-700">
              <strong className="text-slate-900">Caller:</strong> &ldquo;Hi, our main shutoff valve is spraying water in the garage.&rdquo;
            </p>
            <p className="text-slate-700">
              <strong className="text-slate-900">Appsian:</strong> &ldquo;Understood. Let me lock in our emergency on-call technician Marcus for you immediately...&rdquo;
            </p>
          </div>

          {/* Action button */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400">Ready to test with your numbers?</span>
            <button
              type="button"
              onClick={() => {
                onClose();
                const el = document.querySelector('#pricing');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-full bg-[#6EEDC2] text-[#0A261D] font-medium text-xs tracking-tight mint-glow hover:-translate-y-0.5 transition-all shadow-[0_0_20px_rgba(110,237,194,0.45)]"
            >
              Start 30-Day Pilot
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
