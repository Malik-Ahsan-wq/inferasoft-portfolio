"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "350+", label: "Projects Completed" },
  { value: "180+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "24", label: "Awards Won" },
]

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-brand-lime/5" />
      <div className="relative mx-auto max-w-[1264px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{stat.value}</p>
              <p className="text-sm sm:text-base text-white/60 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
