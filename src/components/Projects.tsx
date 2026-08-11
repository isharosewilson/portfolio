import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'UI Project', 'Web App', 'TypeScript'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-28 md:py-36 px-6 md:px-12 max-w-6xl mx-auto border-t border-black/5 dark:border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF]">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mt-2">
            Selected Work.
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#86868B] dark:text-[#A1A1A6] max-w-xl font-normal">
            Real projects built with attention to modern design, responsive layouts, and clean code.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-tight transition-all duration-200 ${
                filter === cat
                  ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#1D1D1F] shadow-sm'
                  : 'bg-black/[0.03] dark:bg-white/[0.06] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl bg-white dark:bg-[#161618] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Visual Card Header / Artwork Frame */}
            <div className={`h-48 sm:h-52 w-full bg-gradient-to-br ${project.colorGradient || 'from-blue-500/10 to-purple-500/10'} p-6 flex flex-col justify-between border-b border-black/5 dark:border-white/5 relative overflow-hidden`}>
              {/* Window Bar Graphic */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {project.category}
                </span>
              </div>

              {/* Decorative Mock Art Pattern */}
              <div className="my-auto text-center transform group-hover:scale-105 transition-transform duration-500">
                <h4 className="text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] opacity-90">
                  {project.title}
                </h4>
                <p className="text-xs font-medium text-[#86868B] dark:text-[#A1A1A6] mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Action Quick Pill */}
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/5 dark:border-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] flex items-center gap-1 hover:bg-white dark:hover:bg-black transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Quick View</span>
                </button>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {project.title}
                </h3>
                
                {/* One-Line Description */}
                <p className="mt-2 text-sm text-[#86868B] dark:text-[#A1A1A6] leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-[11px] font-medium text-[#86868B] dark:text-[#A1A1A6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA Link */}
              <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
                >
                  Details & Highlights
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-sm font-semibold text-[#0071E3] dark:text-[#2997FF] hover:opacity-80 transition-opacity"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Project Sheet Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
