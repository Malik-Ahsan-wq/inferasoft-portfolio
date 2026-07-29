"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "James transformed our entire digital presence. The redesign exceeded our expectations and our user engagement increased by 150%.",
    rating: 5,
    avatar: "img=12",
  },
  {
    name: "Michael Chen",
    role: "Product Lead, DesignHub",
    content: "Working with James was an absolute pleasure. His attention to detail and user-centered approach made all the difference.",
    rating: 5,
    avatar: "img=32",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, CreativeCo",
    content: "The design system James built for us is incredibly scalable. It has saved our team countless hours and maintained consistency.",
    rating: 5,
    avatar: "img=5",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1264px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge variant="brand" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Don&apos;t just take my word for it — hear from some of my amazing clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/60 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-brand/30 mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={`https://i.pravatar.cc/64?${testimonial.avatar}`}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
