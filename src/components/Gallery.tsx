import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portfolioData';

export const Gallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const activePhoto = activePhotoIndex !== null ? GALLERY_ITEMS[activePhotoIndex] : null;

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
        className="mb-14"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF]">
          Gallery
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mt-2">
          Life & Moments.
        </h2>
        <p className="mt-3 text-base md:text-lg text-[#86868B] dark:text-[#A1A1A6] max-w-xl font-normal">
          Snapshots from engineering days, college community, and memories at GEC Wayanad.
        </p>
      </motion.div>

      {/* Gallery Asymmetrical Apple Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            onClick={() => setActivePhotoIndex(index)}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500 ${
              index === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square'
            }`}
          >
            {/* Image */}
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Hover Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div className="flex justify-end">
                <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal Sheet */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoIndex(null)}
              className="fixed inset-0 bg-black/80 dark:bg-black/90 backdrop-blur-xl"
            />

            {/* Modal Content Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="relative z-10 max-w-5xl max-h-[88vh] flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close photo view"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black max-h-[75vh]">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="max-h-[75vh] w-auto object-contain rounded-3xl"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Footer Caption */}
              <div className="mt-4 text-center text-white">
                <h3 className="text-lg font-semibold tracking-tight">{activePhoto.title}</h3>
                <p className="text-xs text-white/70 font-medium flex items-center justify-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activePhoto.location}</span>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
