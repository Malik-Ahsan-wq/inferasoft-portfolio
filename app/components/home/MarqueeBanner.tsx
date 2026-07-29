"use client"

import { motion } from "framer-motion"
import { Sparkle } from "lucide-react"

interface MarqueeBannerProps {
  items?: string[]
  speed?: number
  transparent?: boolean
}

const defaultItems = [
  "PRODUCT DESIGN",
  "UI/UX DESIGN",
  "BRAND IDENTITY",
  "WEB DESIGN",
  "MOBILE APP",
  "ILLUSTRATION",
  "DESIGN SYSTEM",
  "PROTOTYPING",
  "USER RESEARCH",
  "INTERACTION DESIGN",
];

export default function MarqueeBanner({ items = defaultItems, speed = 20, transparent }: MarqueeBannerProps) {
  return (
    <div className={`relative overflow-hidden border-y ${transparent ? "border-white/10 bg-gradient-to-r from-brand to-brand-lime" : "border-white/5 bg-[#0d1f1a]"}`}>
      <div className="relative py-4 sm:py-5">
        <motion.div
          className="flex gap-8 sm:gap-12 md:gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        >
          {[...items, ...items].map((item, i) => (
         <div
  key={`${item}-${i}`}
  className="flex items-center gap-10 md:gap-16 flex-shrink-0"
>
  <span
    className="
      font-[family-name:var(--font-space-grotesk)]
      text-2xl
      sm:text-3xl
      md:text-4xl
      font-black
      uppercase
      tracking-[0.2em]
      text-black
      whitespace-nowrap
      leading-none
    "
  >
    {item}
  </span>

  <Sparkle className="w-6 h-6 md:w-8 md:h-8 text-black opacity-80" />
</div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
