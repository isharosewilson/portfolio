import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, ChevronLeft, ChevronRight, Heart, Share2, Download, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portfolioData';

export const Gallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  const activePhoto = activePhotoIndex !== null ? GALLERY_ITEMS[activePhotoIndex] : null;

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNext = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-28 md:py-36 px-6 md:px-12 max-w-6xl mx-auto border-t border-black/5 dark:border-white/10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF]">
            Visual Moments
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mt-2">
            Campus & Community Pins.
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#86868B] dark:text-[#A1A1A6] max-w-lg font-normal">
            A Pinterest-style collection of college life, events, and memories at GEC Wayanad.
          </p>
        </div>

        {/* Pinterest Style Counter Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.06] border border-black/5 dark:border-white/10 text-xs font-medium text-[#86868B] dark:text-[#A1A1A6] self-start md:self-end">
          <span>{GALLERY_ITEMS.length} Visual Pins</span>
        </div>
      </motion.div>

      {/* Pinterest Masonry Waterfall Grid */}
      <div className="masonry-grid">
        {GALLERY_ITEMS.map((item, index) => {
          const isLiked = !!likedIds[item.id];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
              onClick={() => setActivePhotoIndex(index)}
              className="masonry-item group relative rounded-3xl overflow-hidden cursor-pointer bg-white dark:bg-[#161618] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden w-full">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out rounded-3xl"
                  loading="lazy"
                />

                {/* Pinterest Hover Glass Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 backdrop-blur-[2px]">
                  {/* Top Bar: Like / Pin Heart Action */}
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-medium tracking-wider text-white/90 uppercase px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md">
                      Pin #{index + 1}
                    </span>

                    <button
                      onClick={(e) => toggleLike(e, item.id)}
                      className={`p-2.5 rounded-full backdrop-blur-md transition-all duration-200 ${
                        isLiked
                          ? 'bg-rose-500 text-white scale-110'
                          : 'bg-white/20 hover:bg-white/40 text-white'
                      }`}
                      title={isLiked ? "Saved to favorites" : "Save pin"}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Bottom Bar: Title & Quick View */}
                  <div className="flex items-end justify-between gap-2 text-white">
                    <div>
                      <div className="flex items-center gap-1 text-[11px] text-white/80 font-medium mb-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                      <h3 className="text-sm font-semibold tracking-tight leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <span className="p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white shrink-0">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pinterest-Style Fullscreen Lightbox Sheet */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoIndex(null)}
              className="fixed inset-0 bg-black/80 dark:bg-black/95 backdrop-blur-xl"
            />

            {/* Modal Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#161618] rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area */}
              <div className="relative w-full md:w-3/5 bg-black flex items-center justify-center min-h-[300px] max-h-[60vh] md:max-h-[85vh]">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="max-h-[60vh] md:max-h-[85vh] w-full object-contain"
                />

                {/* Left/Right Nav Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Details & Actions Sidebar */}
              <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-black/5 dark:border-white/10 bg-white dark:bg-[#161618]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF]">
                      Pinterest Pin Detail
                    </span>

                    <button
                      onClick={(e) => toggleLike(e, activePhoto.id)}
                      className={`p-2 rounded-full transition-colors ${
                        likedIds[activePhoto.id]
                          ? 'bg-rose-500/10 text-rose-500'
                          : 'bg-black/5 dark:bg-white/10 text-[#86868B]'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${likedIds[activePhoto.id] ? 'fill-current text-rose-500' : ''}`} />
                    </button>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                    {activePhoto.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#86868B] dark:text-[#A1A1A6] mt-2">
                    <MapPin className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF]" />
                    <span>{activePhoto.location}</span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#86868B] dark:text-[#A1A1A6] leading-relaxed">
                    Captured during engineering studies and campus life events at Government Engineering College Wayanad, Kerala.
                  </p>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center gap-3 mt-6">
                  <a
                    href={activePhoto.imageUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-full bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-[#1D1D1F] text-xs font-medium tracking-tight flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Full Resolution</span>
                  </a>

                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: activePhoto.title, url: window.location.href });
                      }
                    }}
                    className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                    title="Share pin"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
