"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import testimonialsData from "@/data/testimonials.json"

export function Testimonials() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/testimonials-bg.jpg" alt="" fill className="object-cover opacity-10" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-emerald-50/95 to-emerald-50" />
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full">
            <span className="text-emerald-700 font-semibold text-xs tracking-wide uppercase">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            Trusted <span className="text-emerald-600">Worldwide</span>
          </h2>
          <p className="text-slate-600 max-w-md mx-auto">
            Hear from our valued partners about their experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                index === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-6">"{testimonial.content}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-100">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-emerald-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
