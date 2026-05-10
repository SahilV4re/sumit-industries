"use client";

import { GalleryCategory } from "@/data/gallery";

type Props = {
  categories: GalleryCategory[];
};

export default function StickyNav({ categories }: Props) {
  const scrollToSection = (id: string) => {
    if (id === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="sticky top-20 z-40 px-6 py-5 bg-white/90 backdrop-blur-xl border-y border-zinc-200">
      <div className="max-w-6xl mx-auto flex gap-3 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => scrollToSection("all")}
          className="px-5 py-2 rounded-full border border-zinc-300 text-sm font-medium whitespace-nowrap hover:bg-black hover:text-white transition"
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => scrollToSection(category.id)}
            className="px-5 py-2 rounded-full border border-zinc-300 text-sm font-medium whitespace-nowrap hover:bg-black hover:text-white transition"
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}