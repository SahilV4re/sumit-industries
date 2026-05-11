"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MachinesSection from "@/components/machineSection";
import Reveal from "@/components/ui/reveal";
import Link from "next/link";
import { Beam } from "@/components/ui/background-grid-beam";
import { Inter } from "next/font/google";



export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="bg-white text-black overflow-hidden">

      {/* HERO - GRID + SPOTLIGHT */}
    {/* HERO */}
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-24 overflow-hidden bg-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />
      <Beam />

      {/* SOFT SPOTLIGHT */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,0.05), transparent 80%)`,
        }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
  Precision Printing <br />
  & Fabrication Excellence
</h1>

          <p className="mt-5 text-gray-600 max-w-md">
            High precision machines delivering flex printing, UV printing,
            CNC cutting and custom fabrication at scale.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/services/flex-printing"><MagneticButton>Explore Services</MagneticButton></Link>
            <Link href="/gallery"><MagneticButton outline>View Work</MagneticButton></Link>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>✔ 13+ Years Experience</span>
            <span>✔ High Precision Machines</span>
            <span>✔ Bulk Orders Supported</span>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="h-[350px] sm:h-[500px] md:h-[500px] w-full rounded-2xl border bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden">
            <Image src="/hero-1.jpeg" alt="hero" width={500} height={500} className="object-top object-cover w-full h-full" />
          </div>

          {/* subtle depth glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-300 blur-2xl opacity-40 -z-10" />
        </motion.div>

      </div>
      </section>
      
      <section className="py-6 border-y bg-gray-50">
  <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-gray-600">
    <span>Trusted by Businesses</span>
    <span>Fast Turnaround</span>
    <span>High Precision Machines</span>
    <span>Custom Manufacturing</span>
  </div>
</section>
      {/* SERVICES */}
      {/* SERVICES */}
      <Reveal>
        < MachinesSection />
      </Reveal>

      {/* GALLERY */}
      <section className="py-24 px-6 bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-semibold text-center">
    Our Recent Work
  </h2>
  <p className="text-center text-gray-500 mt-2 mb-12">
    Real projects delivered across industries
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
    {[1,2,3,4,5,6,7,8].map((img) => (
      <div
        key={img}
        onClick={() => setSelectedImage(`/gallery/cnc/${img}.jpeg`)}
        className="cursor-pointer overflow-hidden rounded-lg group relative"
      >
        <Image
          src={`/gallery/industrial/${img}.jpeg`}
          alt="work"
          width={400}
          height={400}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
          <span className="text-white text-sm">View Project</span>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* MODAL */}
      {selectedImage && (
  <div
    onClick={() => setSelectedImage(null)}
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
  >
    <Image
      src={selectedImage}
      alt="preview"
      width={900}
      height={900}
      className="rounded-lg max-h-[80vh] object-contain"
    />
  </div>
)}
      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-black to-zinc-900">
  <h2 className="text-4xl font-bold text-white">
    Have a Project in Mind?
  </h2>

  <p className="text-gray-100 mt-3">
    Let’s build it with precision and speed.
  </p>

  <div className="mt-8">
    <Link href="/contact"><MagneticButton>Contact US</MagneticButton></Link>
  </div>
</section>

      {/* WHATSAPP FLOAT */}
    <a
  href="https://wa.me/919999999999"
  target="_blank"
  className="z-50 fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition font-medium"
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
          : "border border-white bg-black text-white hover:bg-gray-800"
      }`}
    >
      {children}
    </motion.button>
  );
}