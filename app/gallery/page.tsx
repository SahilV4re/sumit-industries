import GalleryHero from "@/components/gallery/GalleryHero";
import StickyNav from "@/components/gallery/StickyNav";
import GallerySection from "@/components/gallery/GallerySection";
import { galleryData } from "@/data/gallery";
import MagneticButton from "../../components/ui/magnetic-button";
import { Button } from "../../components/ui/button";


export default function GalleryPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <GalleryHero />

      {/* STICKY CATEGORY NAV */}
      <StickyNav categories={galleryData} />

      {/* FLEX */}
      <GallerySection
        category={galleryData[3]}
        layout="left"
      />

      {/* UV */}
      <GallerySection
        category={galleryData[1]}
        layout="right"
      />

      {/* CNC */}
      <GallerySection
        category={galleryData[2]}
        layout="left"
      />

      {/* LED */}
      <GallerySection
        category={galleryData[0]}
        layout="left"
      />

      {/* INDUSTRIAL PROJECTS */}
      <GallerySection
        category={galleryData[4]}
        layout="top"
      />

      {/* CTA */}
      <section className="py-28 px-6 bg-gradient-to-r from-black to-zinc-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">
            Let’s Build
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Have a Custom Project in Mind?
          </h2>

          <p className="mt-5 text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            From precision fabrication to large-scale commercial production,
            we bring your ideas to life with industrial-grade quality.
          </p>

          <div className="mt-10 flex justify-center">
            <MagneticButton>Contact Us</MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}