import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TrendingIssues() {
  const trendingTopics = [
    {
      id: 1,
      title: "Democratic Governance",
      description: "Addressing governance deficits and ensuring transparent, accountable leadership in Nigeria and across the continent.",
      image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=800&auto=format&fit=crop",
      link: "/research/democratic-governance"
    },
    {
      id: 2,
      title: "Media Literacy & AI",
      description: "Navigating information in a digital age, focusing on the ethical implications of artificial intelligence in broadcasting.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
      link: "/research/media-literacy"
    },
    {
      id: 3,
      title: "Pan-African Collaboration",
      description: "Fostering dialogue on shared pan-African challenges such as health, education, and climate change.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
      link: "/research/pan-african"
    },
    {
      id: 4,
      title: "Civic Engagement",
      description: "Empowering citizens to participate meaningfully in the democratic process and hold public institutions accountable.",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop",
      link: "/research/civic-engagement"
    },
    {
      id: 5,
      title: "Socio-Economic Equality",
      description: "Research and advocacy targeting socio-economic inequalities to foster a more just and equitable society.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
      link: "/research/equality"
    }
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-10">
          Trending issues
        </h2>

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
              {trendingTopics.map((topic) => (
                // This class controls how many items show per view!
                <CarouselItem key={topic.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col group border border-slate-100">
                    
                    {/* Topic Image */}
                    <div className="relative w-full aspect-video bg-slate-200 overflow-hidden">
                      <Image
                        src={topic.image}
                        alt={topic.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Topic Content */}
                    <div className="p-6 flex flex-col grow">
                      <Link href={topic.link} className="inline-block group-hover:underline decoration-blue-600 decoration-2 underline-offset-4">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {topic.title}
                        </h3>
                      </Link>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {topic.description}
                      </p>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows (Positioned outside the cards like Chatham House) */}
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