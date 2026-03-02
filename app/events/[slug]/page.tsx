import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, ArrowRight, Radio } from "lucide-react";

// 1. Mock Database of Events
const eventsDatabase = [
  {
    slug: "media-literacy-2026",
    badge: "CONFERENCE — HYBRID",
    title: "Media Literacy and Democratic Governance 2026",
    excerpt: "Join senior policymakers, media professionals, and civil society leaders for discussions on the role of media as a watchdog in a digital age.",
    date: "15 MARCH 2026 — 9:00AM TO 4:00PM WAT",
    location: "Abuja International Conference Centre & Online",
    content: "The landscape of public communication has undergone a radical transformation. This flagship conference will bring together stakeholders to address how media literacy can be improved to hold public institutions accountable. We will explore the ethical implications of AI in broadcasting and develop strategic frameworks for Nigerian newsrooms."
  },
  {
    slug: "transparency-elections",
    badge: "WEBINAR — LIVESTREAM",
    title: "Fostering Transparency in Nigerian Elections",
    excerpt: "Panellists examine how recent electoral reforms reflect broader approaches to accountability and bridging the gap between government actions and public expectations.",
    date: "22 MARCH 2026 — 1:00PM TO 2:30PM WAT",
    location: "Online / Zoom Webinar",
    content: "In the final days of 2025, discussions surrounding electoral integrity became highly visible. A central source of friction remains the opposing relationships between local actors and institutional frameworks. This webinar will analyze how civic engagement and transparent election administration can successfully rebuild public trust in democratic processes."
  },
  {
    slug: "youth-leadership",
    badge: "WORKSHOP — IN PERSON",
    title: "Youth Leadership and Civic Engagement Workshop",
    excerpt: "Empowering the next generation of leaders with the knowledge and skills necessary for effective civic participation and advocacy.",
    date: "5 APRIL 2026 — 10:00AM TO 3:00PM WAT",
    location: "TYFQ Headquarters, Lagos",
    content: "Youth participation is the cornerstone of sustainable democratic consolidation. This intensive, one-day workshop is designed for young professionals and activists under 35. Participants will engage in hands-on sessions covering policy advocacy, community mobilization, and ethical leadership."
  },
  {
    slug: "pan-african",
    badge: "PANEL — HYBRID",
    title: "Pan-African Collaboration on Public Policy",
    excerpt: "Discussing shared challenges across the continent, focusing on health, education, and climate change to foster collaborative solutions.",
    date: "18 APRIL 2026 — 11:00AM TO 1:00PM WAT",
    location: "Lagos Chamber of Commerce & Online",
    content: "Effective sovereign strategies require continental alliances. This panel brings together thought leaders from across the ECOWAS region to discuss economic diversification, regional security, and the necessity of technological alliances in addressing transnational challenges."
  }
];

// 2. The Dynamic Page Component
export default async function EventDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // Await the params to comply with Next.js 15
  const resolvedParams = await params;

  // Find the event
  const event = eventsDatabase.find((item) => item?.slug === resolvedParams.slug);

  // 404 State
  if (!event) {
    return (
      <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Event Not Found</h1>
        <p className="text-slate-600 mb-8">This event may have passed or the link is incorrect.</p>
        <Link href="/events" className="bg-blue-600 text-white px-6 py-3 font-bold hover:bg-blue-700 transition-colors">
          View All Events
        </Link>
      </div>
    );
  }

  // Chatham House Event Layout
  return (
    <div className="bg-white pb-24">
      
      {/* Top Navigation */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-4">
          <Link href="/events" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-12 md:mt-16">
        
        {/* Two-Column Split (Main Content vs Sidebar) */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3">
            
            {/* Header Area */}
            <header className="mb-12">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1">
                  {event.badge}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                {event.title}
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-8 font-serif">
                {event.excerpt}
              </p>

              {/* Date & Location Meta */}
              <div className="flex flex-col sm:flex-row gap-6 text-sm font-bold text-slate-900 uppercase tracking-widest mb-10">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-slate-400" /> 
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  {event.badge.includes("ONLINE") || event.badge.includes("LIVESTREAM") ? (
                    <Radio className="w-5 h-5 text-slate-400" />
                  ) : (
                    <MapPin className="w-5 h-5 text-slate-400" />
                  )}
                  {event.location}
                </div>
              </div>

              {/* Chatham House Style Register Button */}
              <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 font-bold transition-colors text-lg w-full sm:w-auto justify-center mb-12">
                Register for this event <ArrowRight className="w-5 h-5" />
              </button>
            </header>

            {/* Event Body Text */}
            <article className="prose prose-lg prose-slate max-w-none text-slate-700 font-serif leading-relaxed border-t border-slate-200 pt-10">
              <p>
                {event.content}
              </p>
              <h3 className="text-2xl font-sans font-bold text-slate-900 mt-8 mb-4">Who should attend?</h3>
              <ul>
                <li>Policymakers and government officials</li>
                <li>Media practitioners and journalists</li>
                <li>Civil society leaders and NGO representatives</li>
                <li>Academics and university students</li>
              </ul>
            </article>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:w-1/3">
            <div className="bg-slate-50 border border-slate-200 p-8 sticky top-32">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Event Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Event Type</h4>
                  <p className="font-medium text-slate-900">{event.badge.split('—')[0].trim()}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Focus Area</h4>
                  <p className="text-blue-600 font-medium hover:underline cursor-pointer">Democratic Governance</p>
                  <p className="text-blue-600 font-medium hover:underline cursor-pointer mt-1">Media Literacy</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Enquiries</h4>
                  <p className="text-sm text-slate-600">
                    For accessibility needs or registration issues, please contact <a href="mailto:events@tyfq.org" className="text-blue-600 hover:underline">events@tyfq.org</a>.
                  </p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}