"use client"

import { motion } from "framer-motion"

interface MarqueeBannerProps {
  items?: string[]
  speed?: number
}

const defaultItems = [
  "Product Design",
  "UI/UX Design",
  "Brand Identity",
  "Web Design",
  "Mobile App",
  "Illustration",
  "Design System",
  "Prototyping",
  "User Research",
  "Interaction Design",
]

export default function MarqueeBanner({ items = defaultItems, speed = 20 }: MarqueeBannerProps) {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-[#0d1f1a]">
      <div className="relative py-4 sm:py-5">
        <motion.div
          className="flex gap-8 sm:gap-12 md:gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="flex-shrink-0 flex items-center gap-8 sm:gap-12 md:gap-16"
            >
              <span className="text-sm sm:text-base font-semibold text-white/70 tracking-wide whitespace-nowrap hover:text-white/90 transition-colors duration-300">
                {item}
              </span>
              <span className="h-2 w-2 rounded-full bg-brand/60 flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
