"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Leaf, ArrowRight } from "lucide-react"
import cropsData from "@/data/crops.json"

export function Plantations() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="plantations" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full">
              <Leaf className="h-3 w-3 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-[10px] tracking-wider uppercase">
                Our Plantations
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Premium <span className="text-emerald-600">Crops</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-xs lg:text-right">
            High-value crops cultivated with sustainable practices.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
          {cropsData.map((crop, index) => {
            const isLarge = index === 0 || index === 3 || index === 6

            return (
              <Link
                href={`/plantations/${crop.slug}`}
                key={crop.name}
                className={`group relative block rounded-xl overflow-hidden cursor-pointer 
                  ${index === 0 ? "lg:col-span-3 col-span-2 col-span-1 lg:aspect-[40/10] aspect-[16/10] aspect-[4/5]" : (`
                    ${isLarge ? "col-span-2 lg:col-span-1 aspect-[16/10] lg:aspect-[4/5]" : "aspect-[4/5]"}
                  `)}
                `}
              >
                <Image
                  src={crop.image || "/placeholder.svg"}
                  alt={crop.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-semibold rounded">
                    {crop.acres}+ Acres
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                  <p className="text-emerald-400 text-[10px] font-semibold mb-0.5 uppercase tracking-wider">
                    {crop.tagline}
                  </p>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-0.5">{crop.name}</h3>
                  <p className="text-white/60 text-xs line-clamp-2 mb-2 hidden sm:block">{crop.description}</p>

                  <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold text-xs group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 relative rounded-xl overflow-hidden bg-slate-900">
          <div className="absolute inset-0 opacity-30">
            <Image src="/images/cta-bg.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative p-5 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-0.5">Ready to Grow With Us?</h3>
              <p className="text-white/70 text-xs">Join hands with us and explore partnership opportunities.</p>
            </div>
            <button
              type="button"
              onClick={scrollToContact}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white font-semibold text-sm rounded-full hover:bg-emerald-400 transition-colors cursor-pointer"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
