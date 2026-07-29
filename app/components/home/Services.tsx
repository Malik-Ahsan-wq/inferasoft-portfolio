"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { PenTool, Palette, Monitor, Smartphone, Globe, Layers } from "lucide-react"

const services = [
  { icon: PenTool, title: "Web Design", desc: "Beautiful, responsive websites that captivate your audience and drive results." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive interfaces and seamless user experiences backed by research." },
  { icon: Monitor, title: "Brand Identity", desc: "Cohesive brand systems that communicate your unique value proposition." },
  { icon: Smartphone, title: "Mobile App", desc: "Native-feeling mobile experiences for iOS and Android platforms." },
  { icon: Globe, title: "Illustration", desc: "Custom illustrations that add personality and clarity to your brand." },
  { icon: Layers, title: "Design System", desc: "Scalable component libraries for consistent product experiences." },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1264px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge variant="brand" className="mb-4">What I Do</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Services I Provide
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            I offer a comprehensive range of design services to help your business stand out and succeed in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="group h-full border-border/60 hover:border-brand/30 hover:shadow-lg transition-all duration-300 cursor-default">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
