import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, ArrowUpRight, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Toast } from './Toast';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setToastMessage('Email address copied to clipboard!');
    setTimeout(() => {
      setCopied(false);
      setToastMessage(null);
    }, 3000);
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-black/5 dark:border-white/10">
      <Toast message={toastMessage} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center"
      >
        {/* Contact Badge */}
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF] mb-4">
          Get in Touch
        </span>

        {/* Headline requested by prompt */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
          Let's build something.
        </h2>

        {/* Subheadline */}
        <p className="mt-4 text-base md:text-lg text-[#86868B] dark:text-[#A1A1A6] max-w-lg font-normal leading-relaxed">
          I'm currently seeking new opportunities, collaboration on web projects, and open-source challenges.
        </p>

        {/* Email Pill Box */}
        <div className="mt-10 p-2 sm:p-2.5 rounded-full bg-white dark:bg-[#161618] border border-black/10 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30 inline-flex flex-col sm:flex-row items-center gap-3 max-w-full">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-6 py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-sm tracking-tight flex items-center gap-2 transition-all shadow-sm group w-full sm:w-auto justify-center"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#86868B] dark:text-[#A1A1A6]">
            <span>{PERSONAL_INFO.email}</span>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Social Links Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 w-full max-w-md">
          {/* GitHub Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/5 dark:border-white/10 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/10 text-[#1D1D1F] dark:text-[#F5F5F7]">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">GitHub</h4>
                <p className="text-xs text-[#86868B]">@isharosewilson</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
          </a>

          {/* LinkedIn Card */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-white dark:bg-[#161618] border border-black/5 dark:border-white/10 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">LinkedIn</h4>
                <p className="text-xs text-[#86868B]">Isha Rose Wilson</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
          </a>
        </div>

        {/* Note on customization */}
        <div className="mt-8 text-xs text-[#86868B] italic">
          [Contact email & links can be updated in <code className="text-[#0071E3]">portfolioData.ts</code>]
        </div>
      </motion.div>
    </section>
  );
};
