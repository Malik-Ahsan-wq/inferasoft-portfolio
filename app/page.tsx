import Hero from "@/app/components/home/Hero"

import Services from "@/app/components/home/Services"
import About from "@/app/components/home/About"
import Stats from "@/app/components/home/Stats"
import Testimonials from "@/app/components/home/Testimonials"
import Contact from "@/app/components/home/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}
