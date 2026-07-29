"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const cards = [
  {
    id: 1,
    title: "Real Customer",
    avatars: ["img=12", "img=32", "img=5", "img=47"],
    rating: 4.9,
    reviews: "2.4k",
  },
  {
    id: 2,
    title: "Projects Done",
    value: "350+",
    desc: "Successfully delivered",
  },
  {
    id: 3,
    title: "Experience",
    value: "8+ Years",
    desc: "In design industry",
  },
  {
    id: 4,
    title: "Awards",
    value: "24",
    desc: "International awards",
  },
  {
    id: 5,
    title: "Happy Clients",
    value: "180+",
    desc: "Worldwide",
  },
]

export default function FloatingCards() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top-right card - Projects Done */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute top-[12%] right-[5%] z-30 hidden xl:block"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl bg-white/95 backdrop-blur-md px-5 py-4 shadow-2xl border border-white/20"
        >
          <p className="text-sm font-semibold text-gray-900 mb-2">Projects Done</p>
          <p className="text-2xl font-bold text-brand">350+</p>
          <p className="text-xs text-gray-500 mt-0.5">Successfully delivered</p>
        </motion.div>
      </motion.div>

      {/* Bottom-left card - Experience */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-[15%] left-[5%] z-30 hidden xl:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl bg-white/95 backdrop-blur-md px-5 py-4 shadow-2xl border border-white/20"
        >
          <p className="text-sm font-semibold text-gray-900 mb-2">Experience</p>
          <p className="text-2xl font-bold text-brand">8+ Years</p>
          <p className="text-xs text-gray-500 mt-0.5">In design industry</p>
        </motion.div>
      </motion.div>

      {/* Bottom card strip - right to left scroll */}
      <div className="absolute bottom-[6%] left-0 right-0 z-30 hidden sm:block">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...cards, ...cards].map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="flex-shrink-0 rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3.5 shadow-xl border border-white/30 min-w-[200px]"
            >
              {card.avatars ? (
                <>
                  <p className="text-xs font-semibold text-gray-900 mb-2">{card.title}</p>
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {card.avatars.map((img, i) => (
                        <div
                          key={i}
                          className="h-7 w-7 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                          style={{ zIndex: 4 - i }}
                        >
                          <Image
                            src={`https://i.pravatar.cc/64?${img}`}
                            alt="Avatar"
                            width={28}
                            height={28}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                      <div className="h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-brand to-brand-lime flex items-center justify-center text-[10px] font-bold text-background">
                        +
                      </div>
                    </div>
                    <div className="ml-3 flex items-center gap-1 text-xs text-gray-600">
                      <span className="text-yellow-500">★</span> {card.rating}
                      <span className="text-gray-400">({card.reviews})</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xs text-gray-500">{card.title}</p>
                  <p className="text-lg font-bold text-gray-900">{card.value}</p>
                  <p className="text-xs text-gray-400">{card.desc}</p>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile floating card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-[4%] left-1/2 -translate-x-1/2 z-30 sm:hidden"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-lg border border-white/20"
        >
          <p className="text-xs font-semibold text-gray-900 mb-1.5">Real Customer</p>
          <div className="flex items-center">
            <div className="flex -space-x-1.5">
              {["img=12", "img=32", "img=5"].map((img, i) => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                >
                  <Image
                    src={`https://i.pravatar.cc/64?${img}`}
                    alt="Avatar"
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              <div className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-brand to-brand-lime flex items-center justify-center text-[9px] font-bold text-background">
                +
              </div>
            </div>
            <span className="ml-2 text-xs text-gray-600">★ 4.9 (2.4k)</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
