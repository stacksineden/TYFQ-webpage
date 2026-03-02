import { Mic, Globe, Award, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutFounder() {
  const achievements = [
    {
      icon: <Mic className="w-6 h-6 text-blue-600" />,
      title: "Broadcasting Leadership",
      description:
        "Former Director-General of FRCN. Began broadcasting in 1968 at WNTV-WNBS, reaching GM of NTA Ibadan and NTA Akure by age 33.",
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Diplomatic Service",
      description:
        "Served with distinction as Nigeria's Ambassador to the Philippines and Cambodia, fostering international relationships with integrity.",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "National Accolades",
      description:
        "Honored with the national award of Officer of the Order of the Niger (OON) for his immense contributions to national development.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "Public Intellectual",
      description:
        "Regarded as a 'Colossus' and an idealist, recognized for uncommon patriotism and shaping democratic discourse over a five-decade career.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-32 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Biography with Image */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-t-4 border-blue-600 w-16 mb-8"></div>

            {/* --- NEW IMAGE SECTION --- */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 overflow-hidden rounded-sm shadow-md border border-slate-200">
              <Image
                // Using a professional Unsplash placeholder for now
                src="/yf-founder.webp"
                alt="Ambassador Dr. Yemi Farounbi"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* ------------------------- */}

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              About the Founder
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              Ambassador Dr. Yemi Farounbi, OON, is a distinguished Nigerian
              media icon, diplomat, and administrator.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Renowned as a &quot;doyen&quot; in broadcasting and a
              &quot;disciple of truth,&quot; he has dedicated a five-decade
              career to media, diplomacy, and public service. The colloquium
              stands as a testament to his legacy, consistently advocating for
              professionalism, ethical standards, and social responsibility in
              governance.
            </p>
            <Link
              href="/founder"
              className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors w-fit inline-block"
            >
              Read Full Biography
            </Link>
          </div>

          {/* Right Column: Achievements Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="mb-4 bg-slate-50 w-12 h-12 flex items-center justify-center rounded-sm group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
