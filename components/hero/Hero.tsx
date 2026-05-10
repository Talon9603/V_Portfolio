'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="grid-bg relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-accent">
          Entering the Photo
        </p>

        <h1 className="mb-6 text-5xl font-black uppercase leading-tight md:text-7xl">
          Talon V
          <span className="block text-accent">Data Scientist</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
          Building cinematic interfaces, machine learning systems, and immersive data experiences.
        </p>

        <a
          href="#projects"
          className="glow inline-flex rounded-full border border-accent bg-accent px-8 py-3 font-semibold text-black transition hover:scale-105"
        >
          Enter the Timeline
        </a>
      </motion.div>
    </section>
  )
}
