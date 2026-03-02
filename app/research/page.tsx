"use client"; // <-- This is required for interactivity in Next.js!

import { useState } from "react";
import { FileText, Download, Library, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // <-- Added the Link import!

export default function ResearchPage() {
  // Expanded data array with 8 items total
  const allPublications = [
     {
      id: 1,
      slug: "farounbi-multicolour-gowns", 
      type: "RESEARCH ESSAY",
      title: "Ambassador Yemi Farounbi in Multicolour Gowns: Religion, Media, and Politics",
      description: "An in-depth biographical essay exploring the multifaceted life of Ambassador Dr. Yemi Farounbi across religion, media, and politics.",
      date: "2024",
      image: "/news1.webp",
    },
    {
      id: 2,
      slug: "media-watchdog", // <-- Added slug
      type: "RESEARCH PAPER",
      title: "The Role of Media as a Watchdog in Nigeria's Democracy",
      description: "A comprehensive study on how information dissemination in the digital age influences policy outcomes and public narratives.",
      date: "JANUARY 2026",
      image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      slug: "ethical-standards", // <-- Added slug
      type: "REPORT",
      title: "Ethical Standards in Journalism and Public Communication",
      description: "Advocating for transparency, accountability, and responsible media practices to reinforce the social contract.",
      date: "DECEMBER 2025",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
    },
     {
      id: 4,
      slug: "bridging-the-gap", // <-- Added slug
      type: "POLICY BRIEF",
      title: "Bridging the Gap: Governance Deficits and Public Expectations",
      description: "An analysis of socio-economic inequalities and strategies for engaging citizens in discussions that lead to actionable insights.",
      date: "FEBRUARY 2026",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    },
    // {
    //   id: 4,
    //   slug: "pan-african-climate", // <-- Added slug
    //   type: "POLICY BRIEF",
    //   title: "Fostering Pan-African Collaboration on Climate Change",
    //   description: "Collaborative solutions to shared challenges across the African continent, focusing on resilience and policy formulation.",
    //   date: "NOVEMBER 2025",
    //   image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
    // },
    // {
    //   id: 5,
    //   slug: "civic-engagement-youth", // <-- Added slug
    //   type: "REPORT",
    //   title: "Civic Engagement and Youth Participation",
    //   description: "Empowering the next generation with the tools and knowledge necessary to hold public institutions accountable.",
    //   date: "OCTOBER 2025",
    //   image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop",
    // },
    // {
    //   id: 6,
    //   slug: "ai-impact-broadcasting", // <-- Added slug
    //   type: "RESEARCH PAPER",
    //   title: "Evaluating the Impact of AI on Broadcasting",
    //   description: "Navigating the ethical and practical implications of artificial intelligence in modern newsrooms and public radio.",
    //   date: "SEPTEMBER 2025",
    //   image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    // },
    // {
    //   id: 7,
    //   slug: "economic-diversification", // <-- Added slug
    //   type: "POLICY BRIEF",
    //   title: "Economic Diversification in Post-Oil Nigeria",
    //   description: "Strategic frameworks for developing robust, alternative economic sectors to ensure long-term national stability.",
    //   date: "AUGUST 2025",
    //   image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
    // },
    // {
    //   id: 8,
    //   slug: "democratic-consolidation", // <-- Added slug
    //   type: "REPORT",
    //   title: "Democratic Consolidation in West Africa",
    //   description: "A comparative analysis of election administration, transparency, and institutional resilience across the ECOWAS region.",
    //   date: "JULY 2025",
    //   image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=800&auto=format&fit=crop",
    // },
    
   
  ];

  // State to track how many publications are currently visible
  const [visibleCount, setVisibleCount] = useState(4);

  // Function to load 4 more items when the button is clicked
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  // The slice of data we actually render based on the current state
  const visiblePublications = allPublications.slice(0, visibleCount);

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Knowledge Repository
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Research & Analysis
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
              Our commitment to informed discourse is rooted in rigorous research and analysis. We collaborate with academic institutions, think tanks, and subject matter experts to produce insights that inform evidence-based governance.
            </p>
          </div>
        </div>
      </section>

      {/* The Knowledge Repository Intro */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            <div className="shrink-0 bg-blue-100 p-6 rounded-full hidden md:block">
              <Library className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">A Hub for Evidence-Based Governance</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                The colloquium serves as a hub for research and policy analysis, creating a repository of knowledge that informs decision-making processes. This resource is invaluable for scholars, policymakers, and the public, contributing to evidence-based governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-4">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Latest Publications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {/* Map over visiblePublications instead of the full array */}
            {visiblePublications.map((pub) => (
              // WRAPPED IN A NEXT.JS LINK
              <Link href={`/research/${pub.slug}`} key={pub.id} className="group">
                <article className="flex flex-col sm:flex-row gap-6 border border-slate-200 p-6 hover:shadow-lg transition-shadow bg-white h-full cursor-pointer">
                  
                  {/* FIXED Tailwind Aspect Ratio syntax: aspect-[3/4] */}
                  <div className="relative w-full sm:w-48 aspect-3/4 sm:aspect-auto sm:h-auto shrink-0 bg-slate-100 overflow-hidden">
                    <Image 
                      src={pub.image}
                      alt={pub.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col grow">
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1">
                        <FileText className="w-3 h-3" /> {pub.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed grow">
                      {pub.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[0.7rem] font-bold text-slate-500 uppercase tracking-widest">
                        {pub.date}
                      </span>
                      {/* FIXED HTML VALIDATION: Changed button to span since it's now inside a Link */}
                      <span className="text-blue-600 group-hover:text-blue-800 font-bold text-sm flex items-center gap-1 transition-colors">
                        <Download className="w-4 h-4" /> PDF
                      </span>
                    </div>
                  </div>

                </article>
              </Link>
            ))}
          </div>

          {/* Load More Action - Only shows if there are more items to load */}
          {visibleCount < allPublications.length && (
            <div className="mt-16 text-center">
              <button 
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 font-bold transition-colors"
              >
                Load more publications <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}