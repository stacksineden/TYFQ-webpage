import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function LatestWork() {
  const latestWorks = [
    {
      id: 1,
      badge: "NEWS RELEASE",
      title: "TYFQ Hosts 2026 UN World Radio Day Event",
      excerpt: "Exploring the evolving landscape of radio in the era of artificial intelligence, with a focus on Nigeria's democratic processes.",
      date: "13 FEBRUARY 2026",
      readTime: "3 MINUTE READ",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
      link: "/news/world-radio-day-2026"
    },
    {
      id: 2,
      badge: "EXPERT COMMENT",
      title: "The Transformative Power of Media in Shaping Public Narratives",
      excerpt: "In a digital age where information dissemination occurs at unprecedented speed, the media's role as a watchdog is highly critical[cite: 13, 14].",
      date: "10 FEBRUARY 2026",
      readTime: "4 MINUTE READ",
      image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800&auto=format&fit=crop",
      link: "/research/media-narratives"
    },
    {
      id: 3,
      badge: "RESEARCH PAPER",
      title: "Bridging the Gap: Governance Deficits and Public Expectations",
      excerpt: "Addressing governance deficits and socio-economic inequalities to engage citizens in discussions that lead to actionable insights[cite: 7].",
      date: "05 FEBRUARY 2026",
      readTime: "12 MINUTE READ",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      link: "/research/governance-deficits"
    },
    {
      id: 4,
      badge: "EXPLAINER",
      title: "Promoting Ethical Standards in Public Communication",
      excerpt: "Advocating for transparency, accountability, and responsible media practices reinforces the social contract between government and citizenry[cite: 16, 17].",
      date: "28 JANUARY 2026",
      readTime: "5 MINUTE READ",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      link: "/research/ethical-standards"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header with "View All" Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Latest work
          </h2>
          <Link 
            href="/research" 
            className="inline-flex items-center gap-2 border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
          >
            View all latest work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* The Multi-Item Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {latestWorks.map((work) => (
                <CarouselItem key={work.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <article className="group flex flex-col h-full cursor-pointer">
                    
                    {/* Image Container */}
                    <div className="relative w-full aspect-3/2 mb-5 overflow-hidden bg-slate-100">
                      <Image 
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block bg-blue-50 text-blue-700 text-[0.65rem] font-black uppercase tracking-widest px-2.5 py-1">
                        {work.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={work.link} className="inline-block group-hover:underline decoration-blue-600 decoration-2 underline-offset-4 mb-3">
                      <h3 className="text-xl font-bold text-slate-900 leading-snug">
                        {work.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed grow">
                      {work.excerpt}
                    </p>

                    {/* Meta Data (Date / Read Time) */}
                    <div className="mt-auto pt-4 flex items-center text-[0.7rem] font-bold text-slate-500 uppercase tracking-widest">
                      <span>{work.date}</span>
                      <span className="mx-2">—</span>
                      <span>{work.readTime}</span>
                    </div>
                    
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/3 -translate-y-1/2 border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-blue-600 h-12 w-12 shadow-sm" />
              <CarouselNext className="absolute -right-12 top-1/3 -translate-y-1/2 border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-blue-600 h-12 w-12 shadow-sm" />
            </div>
          </Carousel>
        </div>

      </div>
    </section>
  );
}