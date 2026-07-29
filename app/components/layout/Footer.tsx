import Link from "next/link"
import { Separator } from "@/app/components/ui/separator"

const footerLinks = {
  Services: ["Web Design", "UI/UX Design", "Brand Identity", "Mobile App", "Illustration"],
  Company: ["About Us", "Our Team", "Careers", "Press", "Contact"],
  Support: ["Help Center", "Terms of Service", "Privacy Policy", "Cookie Policy", "FAQ"],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-[1264px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-lime">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="5" cy="5" r="2.6" fill="#163031" />
                  <circle cx="11" cy="5" r="2.6" fill="#163031" />
                  <circle cx="5" cy="11" r="2.6" fill="#163031" />
                  <circle cx="11" cy="11" r="1.4" fill="#163031" />
                </svg>
              </span>
              <span className="text-xl font-semibold text-foreground">
                Pixion<span className="text-brand">.</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Crafting intuitive, user-centered designs that merge functionality with aesthetics for seamless digital experiences.
            </p>
            <div className="flex items-center gap-3">
              {["Twitter", "Dribbble", "Behance", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground hover:bg-accent transition-all duration-200"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pixion. All rights reserved.</p>
          <p>Designed with passion by the Pixion team.</p>
        </div>
      </div>
    </footer>
  )
}
