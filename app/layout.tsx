import type { Metadata } from "next"
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/app/components/layout/Navbar"
import Footer from "@/app/components/layout/Footer"
import { Toaster } from "@/app/components/ui/toaster"
import { StarsBackgroundDemo } from "@/app/components/home/StarsBackgroundDemo"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Pixion — Product Designer Portfolio",
  description: "I'm James, a passionate Product Designer based in the USA. I specialize in crafting intuitive, user-centered designs.",
  keywords: ["product designer", "UI/UX", "portfolio", "design", "web design"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${plusJakartaSans.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col text-foreground antialiased">
        <StarsBackgroundDemo />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
