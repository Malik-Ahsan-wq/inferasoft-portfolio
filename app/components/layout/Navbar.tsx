"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { cn } from "@/app/lib/utils"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/app/components/ui/sheet"

const navItems = [
  {
    label: "Home",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Hero Classic", href: "#" },
      { label: "Hero Modern", href: "#" },
      { label: "Hero Minimal", href: "#" },
      { label: "Hero Video", href: "#" },
    ],
  },
  { label: "About Us", href: "#about", hasDropdown: false },
  { label: "Services", href: "#services", hasDropdown: false },
  { label: "Blog", href: "#blog", hasDropdown: false },
  { label: "Pages", href: "#", hasDropdown: true },
  { label: "Contact Us", href: "#contact", hasDropdown: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null)
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1264px] items-center justify-between px-4 sm:px-6 lg:px-10 h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-lime transition-transform group-hover:scale-105 duration-300">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="5" cy="5" r="2.6" fill="#163031" />
              <circle cx="11" cy="5" r="2.6" fill="#163031" />
              <circle cx="5" cy="11" r="2.6" fill="#163031" />
              <circle cx="11" cy="11" r="1.4" fill="#163031" />
            </svg>
          </span>
          <span className="text-lg sm:text-xl font-semibold text-foreground">
            Pixion<span className="text-brand">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-muted/50 backdrop-blur-sm px-2 py-1.5 border border-border/30" ref={dropdownRef}>
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.hasDropdown ? (
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    openDropdown === item.label
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    openDropdown === item.label && "rotate-180"
                  )} />
                </button>
              ) : (
                <a
                  href={item.href}
                  className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
                >
                  {item.label}
                </a>
              )}

              <AnimatePresence>
                {item.hasDropdown && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-full mt-2 w-56 rounded-xl border bg-popover/95 backdrop-blur-xl p-1.5 shadow-xl"
                  >
                    {item.children?.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-150"
                      >
                        {child.label}
                        <ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="h-6 w-px bg-border" />
          <Button variant="gradient" size="default">
            Download CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <a href="#" className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-lime">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <circle cx="5" cy="5" r="2.6" fill="#163031" />
                      <circle cx="11" cy="5" r="2.6" fill="#163031" />
                      <circle cx="5" cy="11" r="2.6" fill="#163031" />
                      <circle cx="11" cy="11" r="1.4" fill="#163031" />
                    </svg>
                  </span>
                  <span className="text-lg font-semibold">
                    Pixion<span className="text-brand">.</span>
                  </span>
                </a>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <details className="group">
                        <summary className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent cursor-pointer list-none transition-colors">
                          {item.label}
                          <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="ml-3 mt-1 space-y-0.5 border-l pl-3 border-border">
                          {item.children?.map((child) => (
                            <SheetClose key={child.label} asChild>
                              <a
                                href={child.href}
                                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                              >
                                {child.label}
                              </a>
                            </SheetClose>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </nav>
              <div className="p-4 border-t">
                <Button variant="gradient" className="w-full">
                  Download CV
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
