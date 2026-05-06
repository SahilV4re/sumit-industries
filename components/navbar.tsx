"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MenuBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full px-6 py-3 flex items-center justify-between transition-all
      ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      {/* LOGO */}
      <Link href="/" className="font-semibold text-lg flex items-center gap-2">
        <Image src="/logo.jpg" alt="logo" width={80} height={80} />
        <p>Sumit Industries</p>
      </Link>

      {/* MENU */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link href="#services" className="hover:text-gray-600 transition">
          Services
        </Link>
        <Link href="#gallery" className="hover:text-gray-600 transition">
          Gallery
        </Link>
        <Link href="#about" className="hover:text-gray-600 transition">
          About
        </Link>
        <Link href="#contact" className="hover:text-gray-600 transition">
          Contact
        </Link>
      </div>

      {/* CTA */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:bg-gray-800 transition"
      >
        Contact Now
      </motion.a>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </motion.nav>
  );
}

/* ---------------- MOBILE MENU ---------------- */

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <div className="w-6 h-[2px] bg-black mb-1" />
        <div className="w-6 h-[2px] bg-black mb-1" />
        <div className="w-6 h-[2px] bg-black" />
      </button>

      {open && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4">
          <Link href="#services">Services</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>

          <a
            href="#contact"
            className="mt-2 bg-black text-white px-4 py-2 rounded-lg text-center"
          >
            Get Quote
          </a>
        </div>
      )}
    </div>
  );
}