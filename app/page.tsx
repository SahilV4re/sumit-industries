"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-white text-black overflow-hidden">

      {/* HERO - GRID + SPOTLIGHT */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

  {/* Grid background */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />

  {/* Spotlight */}
  <div id="spotlight" className="pointer-events-none absolute inset-0" />

  <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT: TEXT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
        Print Your Ideas <br />
        Into Reality
      </h1>

      <p className="mt-4 text-gray-500 max-w-md">
        Flex • 3D • Custom Printing Solutions crafted with precision and speed.
      </p>

      <div className="mt-8 flex gap-4">
        <MagneticButton>Get Quote</MagneticButton>
        <MagneticButton outline>View Work</MagneticButton>
      </div>
    </motion.div>

    {/* RIGHT: IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/hero-1.jpeg"
          alt="printing"
          className="w-full h-full object-cover"
        />
      </div>

      {/* subtle glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-purple-200 blur-2xl opacity-30 -z-10" />
    </motion.div>

  </div>
</section>
      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Flex Printing", "3D Printing", "Banner Printing"].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{s}</h3>
              <p className="text-gray-500 mt-2">
                Premium quality {s.toLowerCase()} with fast delivery.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Work
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[1,2,3,4,5,6,7,8].map((img) => (
            <div
              key={img}
              onClick={() => setSelectedImage(`/images/${img}.jpg`)}
              className="cursor-pointer overflow-hidden rounded-lg group"
            >
              <Image
                src={`/images/${img}.jpg`}
                alt="work"
                width={400}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <Image
            src={selectedImage}
            alt="preview"
            width={800}
            height={800}
            className="rounded-lg"
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">
          Need Custom Printing?
        </h2>
        <p className="text-gray-500 mt-3">
          Fast delivery. Premium quality.
        </p>

        <div className="mt-6">
          <MagneticButton>Get Quote</MagneticButton>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        WhatsApp
      </a>

    </main>
  );
}

{/* MAGNETIC BUTTON COMPONENT */}
function MagneticButton({
  children,
  outline = false,
}: {
  children: React.ReactNode;
  outline?: boolean;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.button
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: (e.clientX - rect.left - rect.width / 2) * 0.2,
          y: (e.clientY - rect.top - rect.height / 2) * 0.2,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
      className={`px-6 py-3 rounded-lg ${
        outline
          ? "border border-gray-400"
          : "bg-black text-white hover:bg-gray-800"
      }`}
    >
      {children}
    </motion.button>
  );
}