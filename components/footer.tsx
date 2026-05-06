"use client";

import Link from "next/link";
import Image from "next/image";
import  { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
                  <div>
                  <div className="flex items-center gap-2">
                  <Image src="/logo.jpg" alt="logo" width={80} height={80} />          
            <h2 className="text-lg font-semibold">Sumit Industries</h2></div>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Manufacturing solutions crafted with precision and speed.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="#services" className="hover:text-black transition">
                Services
              </Link>
              <Link href="#gallery" className="hover:text-black transition">
                Gallery
              </Link>
              <Link href="#about" className="hover:text-black transition">
                About
              </Link>
              <Link href="#contact" className="hover:text-black transition">
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <p>+91 8888880653</p>
              <p>+91 7066660653</p>
              <p>sumitarts0@gmail.com</p>

              <motion.a
                href="https://wa.me/917066660653"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="mt-2 inline-block w-fit bg-black text-white px-4 py-2 rounded-full text-sm"
              >
                WhatsApp Us
              </motion.a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sumit Industries. All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-black transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-black transition">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}