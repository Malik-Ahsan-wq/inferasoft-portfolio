"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { CheckCircle } from "lucide-react"

const highlights = [
  "5+ years of industry experience",
  "200+ successful projects delivered",
  "Expert in Figma, Sketch, Adobe Suite",
  "Award-winning design professional",
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-[1264px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-brand/20 -z-10" />
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-brand/5 to-brand-lime/5">
                <Image
                  src="/images/hero-man.png"
                  alt="About James"
                  width={560}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
              {/* Floating experience badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 rounded-xl bg-background border shadow-lg px-4 py-3"
              >
                <p className="text-2xl font-bold text-brand">8+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="brand" className="mb-4">About Me</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Transforming Ideas Into <span className="text-brand">Exceptional</span> Designs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I&apos;m a product designer with a passion for creating meaningful digital experiences. 
              My approach combines user research, creative thinking, and technical precision to 
              deliver designs that not only look great but drive real business results.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="gradient" size="lg">
              Learn More About Me
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
