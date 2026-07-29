"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, ArrowUpRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1264px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Circular image with decorative rings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto flex h-[420px] w-[420px] max-w-full items-center justify-center"
          >
            {/* Outer dashed decorative circle */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />

            {/* Decorative dots */}
            <span className="absolute bottom-10 left-4 h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="absolute bottom-6 left-16 h-2 w-2 rounded-full bg-white/15" />
            <span className="absolute right-2 top-16 h-1.5 w-1.5 rounded-full bg-white/15" />

            {/* Gradient ring — rotates clockwise continuously */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative flex h-[320px] w-[320px] items-center justify-center rounded-full p-[6px] bg-[conic-gradient(from_180deg,theme(colors.brand)_0%,theme(colors.brand-lime)_55%,transparent_56%,transparent_100%)]"
            >
              {/* Counter-rotate the photo wrapper so the picture itself stays upright — only the ring appears to spin */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="h-full w-full overflow-hidden rounded-full bg-background p-[6px]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/images/about-us-img.png"
                    alt="James Scott"
                    fill
                    sizes="320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand to-brand-lime" />
              <span className="text-sm font-semibold text-muted-foreground">
                About Us
              </span>
            </div>

            <h2 className="mb-5 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Who is{" "}
              <span className="bg-gradient-to-r from-brand to-brand-lime bg-clip-text text-transparent">
                james scott?
              </span>
            </h2>

            <p className="mb-4 text-base font-bold leading-relaxed text-foreground">
              &ldquo;Helping businesses grow with creative web design and
              development solutions.&rdquo;
            </p>

            <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Hi, I&apos;m James, a passionate{" "}
              <a
                href="#services"
                className="text-brand-lime underline underline-offset-2 hover:opacity-80"
              >
                UI/UX designer
              </a>{" "}
              who thrives on turning ideas into visually stunning realities.
              With a love for creativity and a meticulous eye for detail.
            </p>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Contact info */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15">
                    <Mail className="h-4 w-4 text-brand-lime" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Email Us At
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Info@domain.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15">
                    <Phone className="h-4 w-4 text-brand-lime" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Phone Number
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      +0 123 456 789
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-24 w-px bg-white/10 sm:block" />

              {/* Stat card */}
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6 text-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-brand to-brand-lime bg-clip-text text-transparent">
                  12+
                </span>
                <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Years Experience
                </span>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-brand-lime"
                >
                  My Resume
                  <ArrowUpRight className="h-3.5 w-3.5 text-brand-lime" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}