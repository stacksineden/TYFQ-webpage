import Image from "next/image";
import { Mic, Globe, Award, BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function FounderPage() {
  const careerHighlights = [
    {
      year: "1968",
      title: "Began Broadcasting Career",
      description: "Started his monumental journey at WNTV-WNBS.",
      icon: <Mic className="w-5 h-5 text-blue-600" />
    },
    {
      year: "Age 33",
      title: "General Manager, NTA",
      description: "Rose rapidly to become GM of NTA Ibadan and NTA Akure.",
      icon: <Award className="w-5 h-5 text-blue-600" />
    },
    {
      year: "Director-General",
      title: "FRCN Leadership",
      description: "Served as the Director-General of the Federal Radio Corporation of Nigeria.",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    {
      year: "Diplomacy",
      title: "Ambassadorial Service",
      description: "Appointed as Nigeria's Ambassador to the Philippines and Cambodia.",
      icon: <Globe className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-20 pb-32 md:pt-32 md:pb-48 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Founder & Patron
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Amb. Dr. Yemi Farounbi, <span className="text-slate-400 font-light text-3xl md:text-5xl">OON</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              A &quot;doyen&quot; of broadcasting, a disciple of truth, and a dedicated public servant whose five-decade career has shaped Nigerian media and diplomacy.
            </p>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-blue-500">
             <polygon points="100,0 100,100 0,100" />
           </svg>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: The Biography Text */}
            <div className="flex-1 lg:w-2/3 -mt-32 md:-mt-48 relative z-20">
              
              {/* Featured Portrait */}
              <div className="relative w-full aspect-4/3 md:aspect-video lg:aspect-4/3 bg-slate-200 mb-12 border-4 border-white shadow-xl">
                <Image 
                  // Placeholder for the Ambassador's actual portrait
                  src="/founder-sq.webp"
                  alt="Portrait of Ambassador Dr. Yemi Farounbi"
                  fill
                  className=" object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>

              {/* Biography Body */}
              <article className="prose prose-lg md:prose-xl prose-slate max-w-none text-slate-700 font-serif leading-relaxed">
                <p className="lead text-2xl text-slate-900 font-sans font-medium mb-8">
                  Regarded globally as a &apos;Colossus&apos; and an idealist, Ambassador Dr. Yemi Farounbi is recognized for his uncommon patriotism and his unwavering commitment to shaping democratic discourse over a career spanning more than fifty years.
                </p>

                <h2 className="text-3xl font-sans font-bold text-slate-900 mt-12 mb-6">A Pioneer in Broadcasting</h2>
                <p>
                  Dr. Farounbi&apos;s journey in the media began in 1968 at WNTV-WNBS, where he quickly distinguished himself as a visionary communicator. His unparalleled dedication and talent propelled his career at an astonishing rate. By the age of 33, he had already achieved the remarkable feat of becoming the General Manager of both NTA Ibadan and NTA Akure. 
                </p>
                <p>
                  His leadership in the sector culminated in his appointment as the Director-General of the Federal Radio Corporation of Nigeria (FRCN). Throughout his broadcasting tenure, he championed ethical journalism, media literacy, and the crucial role of the press as the watchdog of a developing democracy.
                </p>

                <div className="my-12 p-8 bg-blue-50 border-l-4 border-blue-600 font-sans">
                  <p className="text-xl italic text-slate-800 font-medium m-0">
                    &quot;Advocating for transparency, accountability, and responsible media practices is not merely a profession; it is the reinforcement of the social contract between the government and its citizenry.&quot;
                  </p>
                </div>

                <h2 className="text-3xl font-sans font-bold text-slate-900 mt-12 mb-6">Diplomatic Service &amp; National Honors</h2>
                <p>
                  Transitioning from the newsroom to the global stage, Dr. Farounbi served with profound distinction as Nigeria&apos;s Ambassador to the Republic of the Philippines and the Kingdom of Cambodia. In these roles, he fostered international relationships with absolute integrity, promoting Nigeria&apos;s socio-economic interests and Pan-African collaboration abroad.
                </p>
                <p>
                  In recognition of his immense, multi-sectoral contributions to national development, he was honored with the prestigious national award of Officer of the Order of the Niger (OON).
                </p>

                <h2 className="text-3xl font-sans font-bold text-slate-900 mt-12 mb-6">The Legacy: TYFQ</h2>
                <p>
                  Today, The Yemi Farounbi Colloquium (TYFQ) stands as a living testament to his life&apos;s work. The institution was founded to institutionalize his lifelong advocacy for professionalism, ethical standards, and social responsibility in governance. Through its public lectures, research papers, and awards of recognition, the colloquium ensures that his philosophy of &quot;engagement through dialogue&quot; will continue to inspire the next generation of Nigerian leaders.
                </p>
              </article>

            </div>

            {/* Right Column: Sticky Sidebar Highlights */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-12">
                
                {/* Career Timeline */}
                <div className="bg-slate-50 border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Career Highlights</h3>
                  <div className="space-y-8">
                    {careerHighlights.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="shrink-0 mt-1">
                          <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1 block">
                            {item.year}
                          </span>
                          <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-slate-900 text-white p-8">
                  <h3 className="text-xl font-bold mb-6">Explore the Legacy</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/about" className="flex items-center justify-between text-slate-300 hover:text-white transition-colors border-b border-slate-800 pb-4 group">
                        <span>The TYFQ Mission</span>
                        <ChevronRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/awards" className="flex items-center justify-between text-slate-300 hover:text-white transition-colors border-b border-slate-800 pb-4 group">
                        <span>Awards of Recognition</span>
                        <ChevronRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/research" className="flex items-center justify-between text-slate-300 hover:text-white transition-colors group pt-2">
                        <span>Research &amp; Publications</span>
                        <ChevronRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}