import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DiscoverEvents() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* The Split Container */}
        <div className="flex flex-col md:flex-row bg-slate-50 border border-slate-200">
          
          {/* Left Side: Content & CTA */}
          <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Discover our events
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We organize a variety of events—public lectures, panel discussions, town hall meetings, and workshops—that bring together diverse stakeholders, including policymakers, academics, media professionals, and community members.
            </p>
            <div>
              <Link 
                href="/events" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 font-bold transition-colors w-fit"
              >
                Register today <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 relative min-h-75 md:min-h-100">
            <Image 
              // Placeholder for a high-quality event/panel photo
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop"
              alt="Panel discussion at The Yemi Farounbi Colloquium"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}