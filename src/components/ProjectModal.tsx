import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 bg-white dark:bg-[#161618] rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl p-6 sm:p-8 md:p-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Visual Bar (Apple Window Controls) */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-[#86868B]">github.com/isharosewilson/{project.id}</span>
          </div>

          {/* Project Category Tag */}
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-2">
            {project.category}
          </span>

          {/* Title & Tagline */}
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            {project.title}
          </h3>
          <p className="text-base text-[#86868B] dark:text-[#A1A1A6] mt-1">
            {project.tagline}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 my-6">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/5 dark:border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Detailed Description */}
          <div className="space-y-4 text-sm sm:text-base text-[#86868B] dark:text-[#A1A1A6] leading-relaxed font-normal border-t border-black/5 dark:border-white/10 pt-6">
            <p>{project.longDescription || project.description}</p>

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] dark:text-[#F5F5F7] mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pt-6 border-t border-black/5 dark:border-white/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-sm tracking-tight flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#1D1D1F] dark:text-[#F5F5F7] text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
