"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/app/components/ui/carousel"
import {
  ArrowUpRight,
  Palette,
  Monitor,
  PenTool,
  Smartphone,
  BookOpen,
  Workflow,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Product Design",
    icon: Palette,
  },
  {
    title: "UI/UX Design",
    icon: Monitor,
  },
  {
    title: "Brand Identity",
    icon: PenTool,
  },
  {
    title: "Mobile App Design & Development",
    icon: Smartphone,
  },
  {
    title: "Design System Creation",
    icon: BookOpen,
  },
  {
    title: "Prototyping",
    icon: Workflow,
  },
]

export default function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1264px] px-4 sm:px-6 lg:px-10">
        {/* Top: heading (left) + description/CTA (right) */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 md:gap-16 mb-12 sm:mb-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand to-brand-lime" />
              <span className="text-sm font-semibold text-muted-foreground">
                My Specialization
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
              Innovative best design and{" "}
              <span className="bg-gradient-to-r from-brand to-brand-lime bg-clip-text text-transparent">
                development services
              </span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex flex-col justify-center gap-6 md:pl-16"
          >
            <span className="absolute left-0 top-0 hidden h-full w-px bg-white/10 md:block" />
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              As a skilled Product Designer, I offer a range of services
              tailored to help you create exceptional digital products and
              experiences.
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-brand to-brand-lime px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 sm:-ml-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <CarouselItem
                  key={service.title}
                  className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 transition-all duration-500 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
                  >
                    <div className="mb-10 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.02]">
                        <Icon className="h-5 w-5 text-brand-lime" />
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-lime shadow-md transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4 text-background" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-foreground">
                      {service.title}
                    </h3>
                  </motion.div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>

        {/* Dot pagination */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === index
                  ? "w-6 bg-gradient-to-r from-brand to-brand-lime"
                  : "w-2 bg-white/20 hover:bg-white/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}