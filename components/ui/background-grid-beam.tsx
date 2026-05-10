'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

export const Beam = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Horizontal Beams */}
      <BeamLine x={0} y={40} delay={0} duration={3.5} />
      <BeamLine x={0} y={160} delay={1.5} duration={4.2} />
      <BeamLine x={0} y={280} delay={0.5} duration={3.8} />
      <BeamLine x={0} y={440} delay={2.5} duration={4.5} />
      <BeamLine x={0} y={600} delay={1.2} duration={3.2} />
      
      {/* Vertical Beams */}
      <BeamLine x={120} y={0} vertical delay={0.8} duration={3.2} />
      <BeamLine x={280} y={0} vertical delay={2.2} duration={4.8} />
      <BeamLine x={400} y={0} vertical delay={1.2} duration={3.8} />
      <BeamLine x={640} y={0} vertical delay={0.3} duration={4.1} />
      <BeamLine x={840} y={0} vertical delay={2.8} duration={3.6} />
      <BeamLine x={1040} y={0} vertical delay={1.7} duration={4.3} />
      <BeamLine x={1280} y={0} vertical delay={0.5} duration={3.9} />
    </svg>
  )
}

const BeamLine = ({
  x, y, vertical = false, duration = 4, delay = 0
}: {
  x: number, y: number, vertical?: boolean, duration?: number, delay?: number
}) => {
  const id = `grad-${x}-${y}`
  return (
    <>
      <defs>
        <motion.linearGradient
          id={id}
          variants={{
            initial: {
              x1: vertical ? '0%' : '-40%',
              x2: vertical ? '0%' : '0%',
              y1: vertical ? '-40%' : '0%',
              y2: vertical ? '0%' : '0%'
            },
            animate: {
              x1: vertical ? '0%' : '100%',
              x2: vertical ? '0%' : '140%',
              y1: vertical ? '100%' : '0%',
              y2: vertical ? '140%' : '0%'
            }
          }}
          animate="animate"
          initial="initial"
          transition={{ duration, repeat: Infinity, ease: 'linear', delay, repeatDelay: 1 }}
        >
          <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
          <stop offset="50%" stopColor="#6344F5" />
          <stop offset="95%" stopColor="#AE48FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
      <rect
        x={x}
        y={y}
        width={vertical ? 1 : "100%"}
        height={vertical ? "100%" : 1}
        fill={`url(#${id})`}
      />
    </>
  )
}
