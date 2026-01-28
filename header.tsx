"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import companyData from "@/data/company.json"
import contactData from "@/data/contact.json"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    setIsMenuOpen(false)
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar - hidden on scroll */}
      <div
        className={`transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-9 opacity-100"}`}
      >
        <div className="bg-emerald-800 text-white text-xs">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-9">
              <p className="hidden sm:block text-emerald-200">{companyData.tagline}</p>
              <div className="flex items-center gap-4 ml-auto">
                <a
                  href={`tel:${contactData.phones[0]}`}
                  className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
                >
                  <Phone className="h-3 w-3" />
                  <span className="hidden md:inline">{contactData.phones[0]}</span>
                </a>
                <a
                  href={`mailto:${contactData.emails[0]}`}
                  className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
                >
                  <Mail className="h-3 w-3" />
                  <span className="hidden lg:inline">{contactData.emails[0]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-black/30 backdrop-blur-md"}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/logopng.png"
                alt="Five Star Agro Solutions"
                width={44}
                height={44}
                className="object-contain"
              />
              <div className="hidden sm:block">
                <p className={`font-bold text-lg leading-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>
                  Five Star
                </p>
                <p
                  className={`text-[10px] font-semibold uppercase tracking-wider ${isScrolled ? "text-emerald-600" : "text-emerald-300"}`}
                >
                  Agro Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {companyData.navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 font-medium text-sm rounded-lg transition-colors ${
                    isScrolled
                      ? "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                onClick={scrollToContact}
                size="sm"
                className="ml-3 bg-emerald-600 hover:bg-emerald-500 text-white px-5 font-semibold"
              >
                Get Quote
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Nav */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-80 pb-4" : "max-h-0"}`}
          >
            <nav className="pt-2 border-t border-white/10">
              {companyData.navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2.5 font-medium text-sm rounded-lg ${
                    isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={scrollToContact} className="w-full mt-3 bg-emerald-600 hover:bg-emerald-500">
                Get Quote
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
