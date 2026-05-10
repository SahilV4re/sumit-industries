"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryCategory } from "@/data/gallery";
import ImageModal from "./ImageModal";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  category: GalleryCategory;
  layout?: "top" | "left" | "right";
};

export default function GallerySection({
  category,
  layout = "top",
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const threshold = 5;
  const visibleImages = expanded
    ? category.images
    : category.images.slice(0, threshold);

  const featured = visibleImages[0];
  const secondary = visibleImages.slice(1);

  const next = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) =>
      prev === category.images.length - 1 ? 0 : (prev ?? 0) + 1
    );
  };

  const prev = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) =>
      prev === 0 ? category.images.length - 1 : (prev ?? 0) - 1
    );
  };

  const renderMedia = (src: string, isFeatured: boolean) => {
    const isVideo = src.match(/\.(mp4|webm)$/i);
    const classes = `object-cover transition duration-700 group-hover:scale-105 ${isVideo ? "w-full h-full" : ""}`;
    
    if (isVideo) {
      return (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={classes}
        />
      );
    }
    
    return (
      <Image
        src={src}
        alt={category.title}
        fill
        className={classes}
      />
    );
  };

  const featuredImage = (
    <div
      className="relative rounded-3xl overflow-hidden group h-[520px] cursor-pointer"
      onClick={() => setCurrentIndex(0)}
    >
      {renderMedia(featured, true)}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
    </div>
  );

  return (
    <>
      <section id={category.id} className="py-28 px-6 scroll-mt-36">
        <div className="max-w-6xl mx-auto">
          {/* TOP */}
          {layout === "top" && (
            <>
              <div className="mb-12">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
                  Portfolio
                </p>

                <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">
                  {category.title}
                </h2>

                <p className="mt-4 text-zinc-600 max-w-3xl text-lg">
                  {category.description}
                </p>
              </div>

              {featuredImage}
            </>
          )}

          {/* LEFT / RIGHT */}
          {(layout === "left" || layout === "right") && (
            <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
              {layout === "left" && featuredImage}

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
                  Portfolio
                </p>

                <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">
                  {category.title}
                </h2>

                <p className="mt-4 text-zinc-600 text-lg leading-relaxed">
                  {category.description}
                </p>
              </div>

              {layout === "right" && featuredImage}
            </div>
          )}

          {/* Secondary Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {secondary.map((img, i) => (
              <div
                key={img}
                className="relative rounded-2xl overflow-hidden group h-[260px] cursor-pointer"
                onClick={() => setCurrentIndex(i + 1)}
              >
                {renderMedia(img, false)}

                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition" />
              </div>
            ))}
          </div>

          {/* Show More */}
          {category.images.length > threshold && !expanded && (
            <div className="text-center mt-10">
              <button
                onClick={() => setExpanded(true)}
                className="px-6 py-3 rounded-full border border-zinc-300 text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Show {category.images.length - threshold} More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      <ImageModal
        images={category.images}
        currentIndex={currentIndex}
        onClose={() => setCurrentIndex(null)}
        onNext={next}
        onPrev={prev}
      />
    </>
  );
}