"use client";

import MagneticButton from "@/components/ui/magnetic-button";
import Reveal from "@/components/ui/reveal";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-28 px-6 bg-gradient-to-b from-white via-zinc-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
            Contact
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900">
            Questions not
answered?
          </h1>

          <p className="mt-6 text-lg text-zinc-600 max-w-3xl mx-auto">
            Reach out for commercial printing, CNC fabrication, UV applications,
            signage production, and custom manufacturing requirements.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <Reveal>
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-semibold text-zinc-900">
                Get in Touch
              </h2>

              <p className="mt-4 text-zinc-600 leading-relaxed">
                We’d be happy to discuss your requirements and help bring your
                project to production.
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Phone
                  </p>
                  <p className="mt-2 text-xl font-medium">
                    +91 88888 80653
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    WhatsApp
                  </p>
                  <p className="mt-2 text-xl font-medium">
                    +91 70666 60653
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Email
                  </p>
                  <p className="mt-2 text-xl font-medium">
                    sumitarts0@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Address
                  </p>
                  <p className="mt-2 text-zinc-700 leading-relaxed">
                    Sumit Industries, Pawan Nagar, Ambad Trimurti Link Road, Nashik, Maharashtra 422010
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Working Hours
                  </p>
                  <p className="mt-2 text-zinc-700">
                    Mon – Sat | 9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL: MAP & SHOP */}
            <div className="flex flex-col gap-6 h-full">
              {/* MAP */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="rounded-3xl bg-zinc-50 border border-zinc-200 overflow-hidden min-h-[300px] relative w-full flex-1 shadow-sm"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3749.765445215517!2d73.75256957522839!3d19.976364081422457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU4JzM0LjkiTiA3M8KwNDUnMTguNSJF!5e0!3m2!1sen!2sin!4v1778418937026!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </motion.div>

              {/* SHOP PIC */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                className="rounded-3xl overflow-hidden min-h-[250px] relative w-full flex-1 border border-zinc-200 shadow-sm group"
              >
                <Image 
                  src="/office.jpeg" 
                  alt="Sumit Industries Facility" 
                  fill 
                  className="object-cover group-hover:scale-105 transition duration-700" 
                />
              </motion.div>
            </div>

          </div>
        </section>
      </Reveal>

      {/* TRUST STRIP */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-zinc-900">
              Fast Response
            </h3>
            <p className="text-sm text-zinc-500 mt-2">
              Quick discussions for project requirements
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900">
              Custom Quotations
            </h3>
            <p className="text-sm text-zinc-500 mt-2">
              Tailored pricing based on project scope
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900">
              Commercial Support
            </h3>
            <p className="text-sm text-zinc-500 mt-2">
              Production-ready industrial execution
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}