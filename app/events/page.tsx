import { Clock, MapPin, Video, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      badge: "CONFERENCE — HYBRID",
      title: "Media Literacy and Democratic Governance 2026",
      description: "Join senior policymakers, media professionals, and civil society leaders for discussions on the role of media as a watchdog in a digital age.",
      day: "15",
      month: "MAR",
      year: "2026",
      time: "9:00 AM - 4:00 PM WAT",
      location: "Abuja International Conference Centre & Online",
      link: "/events/media-literacy-2026",
    },
    {
      id: 2,
      badge: "WEBINAR — ONLINE",
      title: "Fostering Transparency in Nigerian Elections",
      description: "Panellists examine how recent electoral reforms reflect broader approaches to accountability and bridging the gap between government actions and public expectations.",
      day: "22",
      month: "MAR",
      year: "2026",
      time: "1:00 PM - 2:30 PM WAT",
      location: "Zoom Webinar",
      link: "/events/transparency-elections",
    },
    {
      id: 3,
      badge: "WORKSHOP — IN PERSON",
      title: "Youth Leadership and Civic Engagement Workshop",
      description: "Empowering the next generation of leaders with the knowledge and skills necessary for effective civic participation and advocacy.",
      day: "05",
      month: "APR",
      year: "2026",
      time: "10:00 AM - 3:00 PM WAT",
      location: "TYFQ Headquarters, Lagos",
      link: "/events/youth-leadership",
    }
  ];

  const pastEvents = [
    {
      id: 4,
      badge: "PANEL — RECORDING AVAILABLE",
      title: "Radio Election and Democratic Development in Nigeria",
      description: "TYFQ's 2nd Colloquium Series exploring the nexus of broadcasting, election administration, and democratic development in the era of artificial intelligence.",
      day: "13",
      month: "FEB",
      year: "2026",
      link: "/recordings/radio-election-2026",
    },
    {
      id: 5,
      badge: "TOWN HALL — RECORDING AVAILABLE",
      title: "Cultivating a Culture of Inquiry and Civic Participation",
      description: "A grassroots town hall meeting focused on empowering individuals with the knowledge to engage meaningfully in the democratic process.",
      day: "02",
      month: "NOV",
      year: "2025",
      link: "/recordings/civic-participation",
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Engagement through Dialogue
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Colloquium Events
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
              We organize public lectures, panel discussions, town hall meetings, and workshops to bring together diverse stakeholders for open discussions on pressing national and international issues.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events List */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          
          <div className="mb-12 border-b border-slate-900 pb-4">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Upcoming Events
            </h2>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <article key={event.id} className="flex flex-col md:flex-row gap-8 bg-white border border-slate-200 p-6 md:p-8 hover:shadow-lg transition-shadow group">
                
                {/* Left Side: Massive Date Display */}
                <div className="shrink-0 flex flex-col items-center justify-center md:w-32 py-4 md:py-0 md:border-r border-slate-200 md:pr-8">
                  <span className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-1">{event.month}</span>
                  <span className="text-5xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter mb-2">{event.day}</span>
                  <span className="text-sm font-bold text-slate-500">{event.year}</span>
                </div>

                {/* Right Side: Event Details */}
                <div className="flex flex-col grow">
                  <div className="mb-3">
                    <span className="inline-block bg-blue-50 text-blue-700 text-[0.65rem] font-black uppercase tracking-widest px-2.5 py-1">
                      {event.badge}
                    </span>
                  </div>
                  
                  <Link href={event.link} className="inline-block group-hover:underline decoration-blue-600 decoration-2 underline-offset-4 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                      {event.title}
                    </h3>
                  </Link>

                  <p className="text-base text-slate-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium text-slate-700">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      {event.badge.includes("ONLINE") ? (
                        <Video className="w-4 h-4 text-slate-400" />
                      ) : (
                        <MapPin className="w-4 h-4 text-slate-400" />
                      )}
                      {event.location}
                    </div>
                  </div>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Past Events / Recordings */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          
          <div className="mb-12 border-b border-slate-300 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Past Events & Recordings
            </h2>
          </div>

          <div className="space-y-6">
            {pastEvents.map((event) => (
              <article key={event.id} className="flex flex-col sm:flex-row gap-6 bg-white border border-slate-200 p-6 hover:border-blue-300 transition-colors group">
                <div className="flex flex-col grow">
                  <div className="mb-2">
                    <span className="inline-block text-slate-500 text-[0.65rem] font-bold uppercase tracking-widest">
                      {event.day} {event.month} {event.year} • {event.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {event.description}
                  </p>
                </div>
                <div className="sm:self-center shrink-0 mt-4 sm:mt-0">
                  <Link href={event.link} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold text-sm transition-colors">
                    Watch Recording <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
             <Link href="/recordings" className="inline-flex items-center gap-2 border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
              View full archive
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}