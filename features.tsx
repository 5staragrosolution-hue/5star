"use client"

import Image from "next/image"
import { Sprout, Globe, Shield, Truck, Recycle, Award, Leaf, type LucideIcon } from "lucide-react"
import featuresData from "@/data/features.json"

const iconMap: Record<string, LucideIcon> = {
  Sprout,
  Globe,
  Shield,
  Truck,
  Recycle,
  Award,
  Leaf
}

export function Features() {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/features-bg.jpg" alt="" fill className="object-cover opacity-30" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
              <span className="text-emerald-400 font-semibold text-xs tracking-wide uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Excellence in Every <span className="text-emerald-400">Harvest</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-sm lg:text-right">
            Traditional wisdom combined with modern sustainable practices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuresData.map((feature, index) => {
            const IconComponent = iconMap[feature.icon]

            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl transition-all duration-300 bg-white/5 border border-white/10 hover:bg-emerald-500 hover:border-emerald-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-emerald-500/20 group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  {IconComponent && (
                    <IconComponent className="h-6 w-6 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
