import Hero from "@/app/components/home/Hero"
import ServicesSection from "@/app/components/home/ServicesSection"
import About from "@/app/components/home/About"
import Stats from "@/app/components/home/Stats"
import Testimonials from "@/app/components/home/Testimonials"
import Contact from "@/app/components/home/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Stats />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}
