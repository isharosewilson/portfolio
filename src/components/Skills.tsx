import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Code2, 
  FileCode2, 
  Palette, 
  Layout, 
  Paintbrush, 
  Zap, 
  GitBranch, 
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  // Map icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#0071E3] dark:text-[#2997FF]" />;
      case 'FileCode2':
        return <FileCode2 className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-sky-500 dark:text-sky-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-orange-500 dark:text-orange-400" />;
      case 'Paintbrush':
        return <Paintbrush className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-rose-500 dark:text-rose-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#0071E3]" />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="py-28 md:py-36 px-6 md:px-12 max-w-6xl mx-auto border-t border-black/5 dark:border-white/10">
      {/* Section Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF]">
          Skills & Technologies
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mt-2">
          Tools of my craft.
        </h2>
        <p className="mt-3 text-base md:text-lg text-[#86868B] dark:text-[#A1A1A6] max-w-2xl font-normal">
          Every tool is chosen to build performant, responsive, and aesthetically refined user interfaces.
        </p>
      </motion.div>

      {/* Grid of Apple-style Skill Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.id}
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative p-6 rounded-2xl bg-white dark:bg-[#161618] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Icon Badge */}
              <div className="w-12 h-12 rounded-2xl bg-black/[0.03] dark:bg-white/[0.06] border border-black/5 dark:border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {getIcon(skill.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                {skill.name}
              </h3>

              {/* Category Pill */}
              <span className="inline-block text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-[#86868B] dark:text-[#A1A1A6] mt-1.5 mb-3">
                {skill.category}
              </span>

              {/* One-Line Description */}
              <p className="text-xs text-[#86868B] dark:text-[#A1A1A6] leading-relaxed font-normal">
                {skill.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
