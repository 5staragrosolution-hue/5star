"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, ArrowRight, Mail, ExternalLink, Music2Icon } from "lucide-react"
import { useState } from "react"
import companyData from "@/data/company.json"
import cropsData from "@/data/crops.json"
import contactData from "@/data/contact.json"

const socialLinks = [
  { icon: Facebook, href: contactData.social.facebook, label: "Facebook" },
  { icon: Music2Icon, href: contactData.social.tiktok, label: "Twitter" },
  { icon: Instagram, href: contactData.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: contactData.social.linkedin, label: "LinkedIn" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe")
      }

      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-6 lg:gap-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <Image src="/images/logopng.png" alt="Five Star Agro Solutions" width={40} height={40} />
              <div>
                <p className="font-bold text-base">Five Star</p>
                <p className="text-[9px] text-emerald-400 font-semibold uppercase tracking-wider">Agro Solutions</p>
              </div>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed mb-4 max-w-xs">{companyData.shortDescription}</p>
            <div className="flex gap-1.5">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  <social.icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-xs mb-3">Quick Links</h4>
            <ul className="space-y-1.5">
              {companyData.navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-emerald-400 text-xs transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-xs mb-3">Products</h4>
            <ul className="space-y-1.5">
              {cropsData.slice(0, 5).map((crop) => (
                <li key={crop.name}>
                  <Link
                    href={`/plantations/${crop.slug}`}
                    className="text-slate-400 hover:text-emerald-400 text-xs transition-colors"
                  >
                    {crop.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <h4 className="font-semibold text-xs mb-3">Stay Updated</h4>
            <p className="text-slate-400 text-xs mb-3">Subscribe for latest updates.</p>
            {subscribed ? (
              <p className="text-emerald-400 text-xs font-medium">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-8 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Five Star Agro Solutions. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/50 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-center gap-2 text-[10px] text-slate-600">
            <span>Developed by</span>
            <Link
              href="https://octacodz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-emerald-400 transition-colors font-medium"
            >
              OctaCodez
              <ExternalLink className="h-2.5 w-2.5" />
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="mailto:hello@octacodz.com" className="text-slate-500 hover:text-emerald-400 transition-colors">
              hello@octacodz.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
