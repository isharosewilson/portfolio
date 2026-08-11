import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';
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
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Location & College Quick Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-[#F5F5F7]">
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
              <div className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-[#F5F5F7]">
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

        {/* Right Column: Ultra-Clean Apple Profile Picture Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative group rounded-3xl p-3 bg-white dark:bg-[#161618] border border-black/10 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/40 overflow-hidden">
            {/* Real Profile Image */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle glass overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-white/80 font-medium">
                  {PERSONAL_INFO.college}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
