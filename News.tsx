"use client"

import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import  allNews  from '@/data/news.json'
import Link from "next/link";
import { getLucideIcon } from "@/lib/getIcon";
import { categories } from "@/app/news/page";
import Image from "next/image";

export function LatestNews() {
  const newsItems = [...allNews]
    .filter( news => news.featured )
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)

  const getColorClasses = (color: string | undefined) => {
    const colors = {
      emerald: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      amber: "bg-amber-500/10 text-amber-600 border-amber-500/20"
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-600 font-semibold text-sm">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            News & Updates
          </h2>
          <p className="text-lg text-slate-600">
            Stay informed about our latest achievements, expansions, and sustainability initiatives
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {newsItems.map((item) => {
            const IconComponent = getLucideIcon(categories.find(c => c.name === item.category)?.icon);
            const itemColor = categories.find(c => c.name === item.category)?.color;
            
            return (
              <article
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-emerald-500/30"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-emerald-50 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${getColorClasses(itemColor)} backdrop-blur-sm`}>
                      <IconComponent className="h-3.5 w-3.5" />
                      <span className="text-xs font-semibold">{item.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <time>{item.date}</time>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>

                  <Link href={item.link} target="_blank" className="inline-flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all cursor-pointer">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
            <Link href="/news">
                <Button
                    size="lg"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-full font-semibold group cursor-pointer"
                >
                    View All News
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  )
}