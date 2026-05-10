"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Machine } from "@/data/services";

type Props = {
  machines: Machine[];
};

export default function MachineShowcase({ machines }: Props) {
  const [activeMachine, setActiveMachine] = useState(machines[0]);

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Industrial Machinery
          </h2>

          <p className="text-gray-400 mt-4 max-w-md">
            Powered by advanced imported machinery from Japan and Germany, delivering world-class precision, durability, and high-volume commercial production.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {machines.map((machine) => {
              const isActive = activeMachine.name === machine.name;

              return (
                <button
                  key={machine.name}
                  onClick={() => setActiveMachine(machine)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-white text-black border-white shadow-xl scale-[1.02]"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <h3 className="font-semibold text-lg">
                    {machine.name}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isActive ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    {machine.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="relative h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMachine.image}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeMachine.image}
                  alt={activeMachine.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* glow */}
          <div className="absolute -inset-4 bg-white/5 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}