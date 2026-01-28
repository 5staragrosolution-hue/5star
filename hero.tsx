"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Newspaper } from "lucide-react"
import companyData from "@/data/company.json"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/lush-green-tea-plantation-hills-with-morning-mist-.jpg"
          alt="Lush plantation landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-32">
        <div className="flex justify-between items-start gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 font-medium text-xs">Five Star Agro Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.1] tracking-tight">
              A Greener Universe
              <br />
              <span className="text-emerald-400">Through Agriculture</span>
            </h1>

            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-md">
              Cultivating premium crops with sustainable practices for global markets.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Button
                type="button"
                size="lg"
                onClick={() => scrollToSection("plantations")}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-5 rounded-full font-semibold text-sm group cursor-pointer"
              >
                Explore Plantations
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-white/30 hover:bg-white/10 px-6 py-5 rounded-full font-semibold text-sm cursor-pointer text-white bg-transparent"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-6 lg:gap-10">
              {[
                { value: companyData.stats.acres, label: "Acres", suffix: "+" },
                { value: companyData.stats.yearsExperience, label: "Years", suffix: "+" },
                { value: companyData.stats.exportPartners, label: "Partners", suffix: "+" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 lg:gap-10">
                  <div>
                    <p className="text-3xl lg:text-4xl font-bold text-white">
                      {stat.value}
                      <span className="text-emerald-400">{stat.suffix}</span>
                    </p>
                    <p className="text-xs text-white/50 font-medium mt-0.5">{stat.label}</p>
                  </div>
                  {i < 2 && <div className="w-px h-10 bg-white/20 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce cursor-pointer"
      >
        <ChevronDown className="h-7 w-7" />
      </button>
    </section>
  )
}