"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MachinesSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Advanced Industrial Machinery
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-12">
          High-end machines ensuring precision and large-scale production
        </p>

        {/* BIG FEATURE CARD */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl overflow-hidden border bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm mb-10"
        >
          <div className="grid md:grid-cols-2 items-center">

            {/* IMAGE */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-full min-h-[250px]">
              <Image
                src="/UV Flatbed.jpeg"
                alt="UV Flatbed Machine"
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 flex flex-col justify-center border-l border-gray-200">
              
              {/* BADGE */}
              <span className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                Featured Machine
              </span>

              <h3 className="text-2xl font-semibold">
                UV Flatbed Printing Machine
              </h3>

              <p className="text-gray-700 mt-3">
                Print on wood, acrylic, metal, tiles, and more with high precision and durability.
              </p>

            </div>
          </div>
        </motion.div>

        {/* SMALL CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

          {[
            {
              title: "CNC Laser Cutting",
              desc: "Precision cutting for metal and industrial materials.",
              img: "/CNC LASER CUTTING.jpeg",
            },
            {
              title: "Flex & Eco Printing",
              desc: "Large format high quality printing solutions.",
              img: "/flex.jpeg",
            },
            {
              title: "LED Signage Machines",
              desc: "Custom channel letters and signage production.",
              img: "/LED SIGNAGE.jpeg",
            },
          ].map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border overflow-hidden bg-white hover:shadow-lg transition group"
            >
              {/* TOP ACCENT LINE */}
              <div className="h-[2px] bg-gray-100 group-hover:bg-black transition" />

              {/* IMAGE */}
              <div className="relative w-full h-40 bg-gray-100">
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {m.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {m.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}