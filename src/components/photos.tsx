'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

export interface PhotoItem {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotosProps {
  photos: PhotoItem[];
  className?: string;
  title?: string;
}

export function Photos({ photos, className = '', title }: PhotosProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Function to open the photo in full size
  const openPhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
  };

  // Function to close the full-size photo
  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  // Determine grid layout based on number of photos
  const getGridClasses = () => {
    switch (photos.length) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
      default:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
    }
  };

  return (
    <div className={`mx-auto w-full ${className}`}>
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 font-sans ">
        {/* Title Section (if provided) */}
        {title && (
          <div className="mb-8">
            <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
              {title}
            </h2>
          </div>
        )}

        {/* Photos Grid */}
        <div className={`grid ${getGridClasses()} gap-6`}>
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => openPhoto(photo)}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform"
                />
                
                {/* Caption overlay (shown on hover) */}
                {photo.caption && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/30 flex items-end p-4"
                  >
                    <p className="text-white text-sm sm:text-base font-medium">
                      {photo.caption}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closePhoto}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-[90vw] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                onClick={closePhoto}
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="relative aspect-auto h-auto max-h-[80vh] w-auto">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  width={1200}
                  height={900}
                  className="h-auto max-h-[80vh] w-auto max-w-[90vw] object-contain"
                />
              </div>
              
              {/* Caption */}
              {selectedPhoto.caption && (
                <div className="bg-black/60 p-4">
                  <p className="text-center text-white">{selectedPhoto.caption}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Photos;