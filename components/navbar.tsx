"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function MenuBar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Hide navbar if scrolling down past 100px, otherwise show it
    if (previous !== undefined && latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full px-6 py-3 flex items-center justify-between transition-colors duration-300
      ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      {/* LOGO */}
      <Link href="/" className="font-semibold text-lg flex items-center gap-2">
        {/* <Image src="/logo.jpg" alt="logo" width={80} height={80} /> */}
        <p>Sumit Industries</p>
      </Link>

      {/* MENU */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium">
            Services
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-[300px] gap-2 p-4">
            <NavigationMenuLink href="/services/flex-printing" className="block rounded-md p-3 hover:bg-gray-50 transition">
              
                
                  <div className="text-sm font-medium">
                    Flex Printing
                  </div>
                  <p className="text-xs text-gray-500">
                    Large format banners & hoardings
                  </p>
                
              
            </NavigationMenuLink>      
              <NavigationMenuLink href="/services/uv-printing" className="block rounded-md p-3 hover:bg-gray-50 transition">
              
                
                  <div className="text-sm font-medium">
                    UV Printing
                  </div>
                  <p className="text-xs text-gray-500">
                    Print on wood, acrylic, metal & more
                  </p>
                
                    
                    </NavigationMenuLink>
<NavigationMenuLink href="/services/cnc-cutting" className="block rounded-md p-3 hover:bg-gray-50 transition">
              
                
                  <div className="text-sm font-medium">
                    CNC Cutting
                  </div>
                  <p className="text-xs text-gray-500">
                    Precision laser & router cutting
                  </p>
                
                    
                    </NavigationMenuLink>

              
                <NavigationMenuLink href="/services/led-signage" className="block rounded-md p-3 hover:bg-gray-50 transition">
                  <div className="text-sm font-medium">
                    LED Signage
                  </div>
                  <p className="text-xs text-gray-500">
                    Channel letters & illuminated signage
                  </p>
                </NavigationMenuLink>
              

            </div>
          </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-sm font-medium p-4">
              <Link href="/gallery">Gallery</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-sm font-medium p-4">
              <Link href="/about">About</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-sm font-medium p-4">
              <Link href="/contact">Contact</Link>
            </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
    

    </div>

      {/* CTA */}
      <motion.a
        href="/contact"
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
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="relative">
      {/* HAMBURGER */}
      <button onClick={() => setOpen(!open)}>
        <div className="w-6 h-[2px] bg-black mb-1" />
        <div className="w-6 h-[2px] bg-black mb-1" />
        <div className="w-6 h-[2px] bg-black" />
      </button>

      {/* MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 mt-4 w-64 bg-white shadow-xl rounded-2xl p-5 flex flex-col gap-4 z-50"
          >
            {/* SERVICES DROPDOWN */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex justify-between items-center text-sm font-medium"
              >
                Services
                <span className="text-xs">
                  {servicesOpen ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 flex flex-col gap-2 text-sm text-gray-600 pl-2"
                  >
                    <Link href="/services/flex-printing">Flex Printing</Link>
                    <Link href="/services/uv-printing">UV Printing</Link>
                    <Link href="/services/cnc-cutting">CNC Cutting</Link>
                    <Link href="/services/led-signage">LED Signage</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* DIVIDER */}
            <div className="h-px bg-gray-200" />

            {/* OTHER LINKS */}
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-3 bg-black text-white px-4 py-2 rounded-lg text-center text-sm font-medium"
            >
              Get Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
  }