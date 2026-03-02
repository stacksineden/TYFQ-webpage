"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi, // Import the type for the API
} from "@/components/ui/carousel";

export default function NewsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  
  // Use a ref to track if the user is hovering to prevent sliding
  const isHovered = React.useRef(false);

  const slides = [
    {
      id: 1,
      category: "UN World Radio Day 2026",
      title: "Radio and Artificial Intelligence: Navigating the Evolving Landscape",
      description: "TYFQ's 2nd Colloquium Series explored the nexus of broadcasting, election administration, and democratic development in Nigeria. Featuring a keynote by Amb. Dr. Yemi Farounbi OON.",
      date: "13 February 2026",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000&auto=format&fit=crop", 
      link: "/news/world-radio-day-2026"
    },
    {
      id: 2,
      category: "Colloquium Vision",
      title: "Advancing Public Discourse & Democratic Governance",
      description: "Dedicated to fostering informed public discourse on governance, public policy, and social issues in Nigeria through rigorous research, inclusive dialogue, and civic engagement.",
      date: "Ongoing Initiative",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2000&auto=format&fit=crop",
      link: "/about"
    },
    {
      id: 3,
      category: "Media Ethics & Values",
      title: "Media experts seek quality content to uphold family values in Nigeria",
      description: "Media experts, including veteran broadcaster Dr. Yemi Farounbi, have called on content producers to churn out quality and valuable content that promotes wholesome values to build a better society.",
      date: "23 January 2025",
      image: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?q=80&w=2000&auto=format&fit=crop",
      link: "/news/media-experts-uphold-family-values"
    },
    {
      id: 4,
      category: "Milestone Celebration",
      title: "Celebrating Dr Yemi Farounbi at 80: A Lasting Legacy of Media Innovation and Diplomacy",
      description: "As Dr. Yemi Farounbi marks his 80th birthday, his remarkable career as a journalist, innovative media administrator, diplomat, and cultural advocate is celebrated by the DAWN Commission.",
      date: "05 October 2024",
      image: "/yf-founder.webp",
      link: "/news/celebrating-farounbi-at-80"
    }
  ];

  // Logic for the interval timer
  React.useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      // Only slide if the user isn't hovering
      if (!isHovered.current) {
        api.scrollNext();
      }
    }, 5000); // 5-second interval

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <div 
      className="w-full relative bg-slate-900"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <Carousel 
        setApi={setApi} // This captures the Embla API
        opts={{ loop: true, align: "start" }} 
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[80vh] min-h-150 w-full overflow-hidden">
                <Image 
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0} 
                  className="object-cover"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/70 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-16 text-white max-w-6xl mx-auto w-full">
                  <span className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 border-l-4 border-blue-400 pl-3">
                    {slide.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-4xl">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl font-light mb-8 text-gray-200 line-clamp-3 max-w-3xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm font-medium text-gray-300">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      {slide.date}
                    </span>
                    <Link href={slide.link} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transition-colors text-base font-semibold w-fit inline-block text-center">
                      Read Full Report
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white border-none h-12 w-12" />
        <CarouselNext className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white border-none h-12 w-12" />
      </Carousel>
    </div>
  );
}