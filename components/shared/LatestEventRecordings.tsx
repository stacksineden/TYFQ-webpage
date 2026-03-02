import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function LatestEventRecordings() {
  const recordings = [
    {
      id: 1,
      badge: "PANEL — RECORDING",
      title: "Radio Election and Democratic Development in Nigeria",
      excerpt: "TYFQ's 2nd Colloquium Series exploring the nexus of broadcasting, election administration, and democratic development in the era of artificial intelligence.",
      day: "13",
      monthYear: "FEBRUARY 2026",
      time: "12:00PM TO 2:00PM",
      link: "/recordings/radio-election-2026",
      isBlue: true, // Alternating background color
    },
    {
      id: 2,
      badge: "ADDRESS — RECORDING",
      title: "The Role of Media as a Watchdog and Educator",
      excerpt: "An in-depth address on the transformative power of media in shaping public narratives and influencing policy outcomes in a digital age.",
      day: "28",
      monthYear: "JANUARY 2026",
      time: "1:00PM TO 2:30PM",
      link: "/recordings/media-watchdog",
      isBlue: false,
    },
    {
      id: 3,
      badge: "WEBINAR — RECORDING",
      title: "Addressing Governance Deficits and Inequalities",
      excerpt: "Panellists discuss actionable insights and concerted efforts to engage citizens in overcoming socio-economic inequalities and transparency issues.",
      day: "15",
      monthYear: "DECEMBER 2025",
      time: "10:00AM TO 11:30AM",
      link: "/recordings/governance-deficits",
      isBlue: true,
    },
    {
      id: 4,
      badge: "TOWN HALL — RECORDING",
      title: "Cultivating a Culture of Inquiry and Civic Participation",
      excerpt: "A grassroots town hall meeting focused on empowering individuals with the knowledge to engage meaningfully in the democratic process.",
      day: "02",
      monthYear: "NOVEMBER 2025",
      time: "4:00PM TO 6:00PM",
      link: "/recordings/civic-participation",
      isBlue: false,
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header with "View All" Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Latest event recordings
          </h2>
          <Link 
            href="/recordings" 
            className="inline-flex items-center gap-2 border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
          >
            View all event recordings <ArrowRight className="w-4 h-4" />
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
              {recordings.map((event) => (
                <CarouselItem key={event.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <article 
                    className={`group flex flex-col h-full min-h-85 p-8 transition-shadow hover:shadow-md cursor-pointer ${
                      event.isBlue ? 'bg-slate-50 border border-slate-100' : 'bg-white border border-slate-200'
                    }`}
                  >
                    
                    {/* Category Badge */}
                    <div className="mb-5">
                      <span className="inline-block bg-slate-200/50 text-slate-700 text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1">
                        {event.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={event.link} className="inline-block group-hover:underline decoration-blue-600 decoration-2 underline-offset-4 mb-4">
                      <h3 className="text-xl font-bold text-slate-900 leading-snug">
                        {event.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-sm text-slate-600 mb-8 line-clamp-4 leading-relaxed grow">
                      {event.excerpt}
                    </p>

                    {/* Meta Data (Date Typography) */}
                    <div className="mt-auto flex items-end gap-3 pt-4 border-t border-slate-200/50">
                      <span className="text-5xl font-black text-slate-900 leading-none tracking-tighter">
                        {event.day}
                      </span>
                      <div className="flex flex-col pb-0.5">
                        <span className="text-[0.7rem] font-bold text-slate-900 uppercase tracking-widest">
                          {event.monthYear}
                        </span>
                        <span className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                          — {event.time}
                        </span>
                      </div>
                    </div>
                    
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-blue-600 h-12 w-12 shadow-sm" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-blue-600 h-12 w-12 shadow-sm" />
            </div>
          </Carousel>
        </div>

      </div>
    </section>
  );
}