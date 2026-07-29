"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import FloatingCards from "@/app/components/shared/FloatingCards"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen md:h-auto overflow-hidden flex items-center">
      {/* Background grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden justify-between px-6 lg:flex lg:px-10">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-full w-px bg-white/[0.04]" />
        ))}
      </div>

      {/* Gradient orb */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-lime/5 blur-[100px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full max-w-[1264px] grid-cols-1 items-center gap-6 lg:gap-12 px-4 sm:px-6 lg:px-10 pt-24 pb-12 sm:pt-28 lg:pb-16 lg:grid-cols-2"
      >
        {/* Left column */}
        <div className="relative z-10 py-8 lg:py-16">
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-white/80 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            Your Vision, My Design Expertise
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[40px] sm:text-[52px] lg:text-[60px] xl:text-[64px] font-bold leading-[1.08] tracking-tight text-white"
          >
            <span className="text-brand">I&apos;m james,</span>
            <br />
            product design
            <br />
            based in USA
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-[520px] text-sm sm:text-[15px] leading-7 text-white/60"
          >
            Hi, I&apos;m James, a passionate Product Designer based in the
            USA. I specialize in crafting intuitive, user-centered designs
            that merge functionality with aesthetics.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Button variant="gradient" size="lg" className="text-sm sm:text-base">
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-white hover:bg-white/10 gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 group-hover:border-brand transition-colors">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path
                    d="M0.5 1.2C0.5 0.35 1.42 -0.18 2.16 0.24L13.16 6.54C13.9 6.96 13.9 8.04 13.16 8.46L2.16 14.76C1.42 15.18 0.5 14.65 0.5 13.8V1.2Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Watch Intro
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-10 sm:mt-12 flex items-center gap-6 sm:gap-10"
          >
            {[
              { value: "350+", label: "Projects Done" },
              { value: "8+ yrs", label: "Experience" },
              { value: "180+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/50 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[480px] lg:max-w-[560px]">
            {/* Decorative blob */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 3, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 sm:-right-6 top-1/2 z-0 h-[80%] w-[75%] -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-lime/80 to-brand-lime/40 blur-sm"
            />

            {/* Photo */}
            <div className="relative z-10">
              <Image
                src="/images/hero-img.png"
                alt="James, product designer"
                width={629}
                height={669}
                priority
                className="h-auto w-full select-none object-contain drop-shadow-2xl"
              />
            </div>

            <FloatingCards />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
