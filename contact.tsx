"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import contactData from "@/data/contact.json"

const contactInfo = [
  { icon: MapPin, title: "Visit Us", details: [contactData.address.line1, contactData.address.line2] },
  { icon: Phone, title: "Call Us", details: contactData.phones },
  { icon: Mail, title: "Email Us", details: contactData.emails },
  { icon: Clock, title: "Hours", details: [contactData.businessHours.weekdays] },
]

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">
          {/* Left - Image & Info */}
          <div className="relative min-h-[400px] lg:min-h-full">
            <Image
              src="/images/contact-plantation.jpg"
              alt="Plantation aerial view"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-emerald-900/60" />

            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-3">
                  Contact Us
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Get in Touch</h2>
                <p className="text-white/70 text-sm max-w-xs">Have questions? We'd love to hear from you.</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {contactInfo.map((info) => (
                  <div key={info.title} className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 text-white/90 text-xs sm:text-sm break-words overflow-wrap-anywhere">
                    <info.icon className="h-4 w-4 text-emerald-400 mb-2" />
                    <h4 className="font-semibold text-white text-xs mb-1">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-white/70 text-xs leading-tight">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-slate-50 p-6 lg:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-5">Send us a Message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>
                )}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white border-slate-200 h-10 text-sm focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white border-slate-200 h-10 text-sm focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-700 mb-1.5">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-white border-slate-200 h-10 text-sm focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1.5">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white border-slate-200 text-sm focus:border-emerald-500 focus:ring-emerald-500/20 resize-none rounded-lg"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white gap-2 h-11 font-semibold rounded-lg text-sm cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
