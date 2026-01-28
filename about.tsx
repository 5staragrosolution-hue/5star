"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Target, Eye, Users, Linkedin, CheckCircle, Sprout, ChevronLeft, ChevronRight, TreePalm } from "lucide-react"
import teamData from "@/data/team.json"
import companyData from "@/data/company.json"

export function About() {
  const carouselImages = [
    { src: "/carousel/1.jpg", alt: "Plantation workers harvesting" },
    { src: "/carousel/2.png", alt: "Tea plantation landscape" },
    { src: "/carousel/3.png", alt: "Organic farming practices" },
    { src: "/carousel/4.png", alt: "Sustainable agriculture" },
    { src: "/carousel/5.png", alt: "Sustainable agriculture" },
    { src: "/carousel/6.png", alt: "Sustainable agriculture" },
    { src: "/carousel/7.jpg", alt: "Sustainable agriculture" },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="py-20 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side with carousel */}
            <div className="relative order-2 lg:order-1 group">
              <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />

                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 text-slate-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 text-slate-800" />
                </button>

                {/* Dots indicator */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-100 rounded-xl">
                        <Sprout className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">Excellence in farming</p>
                        <p className="text-xs text-slate-500">Using latest technology</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-600">{companyData.stats.acres}</p>
                      <p className="text-xs text-slate-500">Acres</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-100 rounded-full -z-10" />
            </div>

            {/* Content side */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-emerald-700 font-semibold text-xs tracking-wide uppercase">About Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Pioneering Sustainable
                <span className="text-emerald-600"> Agriculture</span>
              </h2>

              <p className="text-slate-600 mb-8 leading-relaxed text-lg">{companyData.fullDescription}</p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Organic Certified", "Global Export", "Sustainable", "Premium Quality"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="p-2 bg-emerald-100 rounded-xl w-fit mb-3">
                    <Target className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1">Our Mission</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">To responsibly cultivate high-value crops using certified genetic seed technology, sustainable farming practices, and skilled expertise, delivering safe, high-quality agricultural products to local and global markets.</p>
                </div>
                <div className="p-5 bg-sky-50 rounded-2xl border border-sky-100">
                  <div className="p-2 bg-sky-100 rounded-xl w-fit mb-3">
                    <Eye className="h-5 w-5 text-sky-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1">Our Vision</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">To become a global leader in next-generation agriculture by uniting genetic innovation, sustainability, and nature-driven farming.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
              <Users className="h-3.5 w-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-xs tracking-wide uppercase">Our Team</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Meet the <span className="text-emerald-600">Experts</span>
            </h3>
            <p className="text-slate-600 max-w-lg mx-auto">
              Decades of experience in sales, agriculture and global trade.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-5">
            {teamData.map((member) => (
              <div
                key={member.name}
                className={`group relative block rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                  member.role === "Chairman" ? "col-span-2 lg:col-span-1 aspect-[16/10] lg:aspect-[4/5]" : "aspect-[4/5]"
                }`}
              >
                <div className="">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  { member.linkedin 
                    ? <a
                        target="_blank"
                        href={member.linkedin}
                        className="absolute top-3 right-3 p-2 bg-white/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-emerald-500 hover:text-white"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    : <></>
                  }

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="font-bold text-white text-base">{member.name}</h4>
                    <p className="text-emerald-400 text-sm font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-white/20 rounded-xl">
                  <TreePalm className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold">Excellence In Plantation Development</h4>
                  <p className="text-white/80 text-sm">We are the only company that has obtained the qualification certificate to produce and sell seeds according to genetic technology.</p>
                </div>
              </div>
              <div className="flex gap-8 lg:gap-12 text-white text-center">
                <div>
                  <p className="text-3xl font-bold">{companyData.stats.acres}+</p>
                  <p className="text-xs text-white/70">Acres</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{companyData.stats.organicCertified}</p>
                  <p className="text-xs text-white/70">Organic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}