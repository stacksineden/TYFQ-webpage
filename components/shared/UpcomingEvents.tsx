import * as React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      badge: "CONFERENCE — HYBRID",
      title: "Media Literacy and Democratic Governance 2026",
      excerpt: "Join senior policymakers, media professionals, and civil society leaders for discussions on the role of media as a watchdog in a digital age.",
      day: "15",
      monthYear: "MARCH 2026",
      time: "9:00AM TO 4:00PM",
      link: "/events/media-literacy-2026",
      isBlue: true, // This alternates the card background color just like Chatham House
    },
    {
      id: 2,
      badge: "WEBINAR — ONLINE",
      title: "Fostering Transparency in Nigerian Elections",
      excerpt: "Panellists examine how recent electoral reforms reflect broader approaches to accountability and bridging the gap between government actions and public expectations.",
      day: "22",
      monthYear: "MARCH 2026",
      time: "1:00PM TO 2:30PM",
      link: "/events/transparency-elections",
      isBlue: false,
    },
    {
      id: 3,
      badge: "WORKSHOP — IN PERSON",
      title: "Youth Leadership and Civic Engagement Workshop",
      excerpt: "Empowering the next generation of leaders with the knowledge and skills necessary for effective civic participation and advocacy.",
      day: "05",
      monthYear: "APRIL 2026",
      time: "10:00AM TO 3:00PM",
      link: "/events/youth-leadership",
      isBlue: true,
    },
    {
      id: 4,
      badge: "PANEL — HYBRID",
      title: "Pan-African Collaboration on Public Policy",
      excerpt: "Discussing shared challenges across the continent, focusing on health, education, and climate change to foster collaborative solutions.",
      day: "18",
      monthYear: "APRIL 2026",
      time: "11:00AM TO 1:00PM",
      link: "/events/pan-african",
      isBlue: false,
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Upcoming events
          </h2>
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
              {events.map((event) => (
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
                          TO {event.time}
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