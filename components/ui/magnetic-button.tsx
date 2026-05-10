"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
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
