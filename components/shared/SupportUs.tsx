import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SupportUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* The Split Container */}
        <div className="flex flex-col md:flex-row bg-slate-50 border border-slate-200">
          
          {/* Left Side: Content & CTA */}
          <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Support our mission
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Consider becoming a member, partner, or donor. Your financial contributions will help sustain our activities, support research initiatives, and empower communities through education and advocacy.
            </p>
            <div>
              <Link 
                href="/support" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 font-bold transition-colors w-fit"
              >
                Find out more <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 relative min-h-75 md:min-h-100">
            <Image 
              // A strong, community/collaboration focused placeholder image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop"
              alt="Community engagement and support"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}