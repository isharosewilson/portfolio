import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, UserCheck } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF]">
          About Me
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mt-2">
          Engineering Student & Web Builder.
        </h2>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bio Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="space-y-4 text-base md:text-lg text-[#86868B] dark:text-[#A1A1A6] leading-relaxed font-normal">
            {PERSONAL_INFO.bio.map((paragraph, index) => (
              <p key={index} className={paragraph.startsWith('[') ? 'italic text-sm text-[#0071E3]/80 dark:text-[#2997FF]/80 bg-[#0071E3]/5 p-4 rounded-xl border border-[#0071E3]/10' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Location & College Quick Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">Education</h4>
                <p className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mt-0.5">
                  {PERSONAL_INFO.college}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">Location</h4>
                <p className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mt-0.5">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </div>

          {/* Small Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-black/5 dark:border-white/10">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-[#86868B] dark:text-[#A1A1A6] mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Apple-Style Portrait / Photo Frame Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="group relative rounded-3xl p-8 bg-gradient-to-b from-white to-gray-50 dark:from-[#161618] dark:to-[#0F0F11] border border-black/5 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/40 overflow-hidden flex flex-col items-center justify-center min-h-[380px] text-center">
            {/* Subtle Glass Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0071E3]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Photo Avatar Visual Placeholder */}
            <div className="relative z-10 w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-[#0071E3] to-indigo-600 flex items-center justify-center text-white shadow-xl mb-6 group-hover:scale-105 transition-transform duration-300">
              <UserCheck className="w-16 h-16 stroke-[1.5]" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-[#161618] flex items-center justify-center" title="Open to opportunities" />
            </div>

            <h3 className="relative z-10 text-xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              {PERSONAL_INFO.name}
            </h3>
            <p className="relative z-10 text-xs font-medium text-[#86868B] mt-1">
              Engineering Student & Web Developer
            </p>

            {/* Bracketed Placeholder Instruction Note */}
            <div className="relative z-10 mt-6 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-dashed border-black/10 dark:border-white/15 text-xs text-[#86868B]">
              <span>[Replace with your personal photo URL in <code className="text-[#0071E3]">portfolioData.ts</code>]</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
