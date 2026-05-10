import { Beam } from "@/components/ui/background-grid-beam";

export default function GalleryHero() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-white via-zinc-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)] bg-[size:40px_40px]" />
      <Beam />

      <div className="relative max-w-5xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-5">
          Our Work
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-zinc-900">
          A Showcase of Precision & Production Excellence
        </h1>

        <p className="mt-6 text-zinc-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Explore our commercial printing, fabrication, UV applications, CNC
          cutting, and custom signage work delivered with premium quality and
          industrial precision.
        </p>
      </div>
    </section>
  );
}