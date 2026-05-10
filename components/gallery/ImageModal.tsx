"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function ImageModal({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex === null) return;

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white z-50"
        >
          <X size={28} />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-6 text-white z-50"
        >
          <ChevronLeft size={40} />
        </button>

        {/* Next */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 text-white z-50"
        >
          <ChevronRight size={40} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-6 text-white text-sm tracking-wide">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Media */}
        <motion.div
          key={images[currentIndex]}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {images[currentIndex].match(/\.(mp4|webm)$/i) ? (
            <video
              src={images[currentIndex]}
              controls
              autoPlay
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <Image
              src={images[currentIndex]}
              alt="Gallery preview"
              fill
              className="object-contain"
            />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}