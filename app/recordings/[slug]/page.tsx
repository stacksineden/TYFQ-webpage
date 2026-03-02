import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Users, PlayCircle, Share2, FileText } from "lucide-react";

// 1. Mock Database of Recordings
const recordingsDatabase = [
  {
    slug: "radio-election-2026",
    badge: "PANEL — RECORDING",
    title: "Radio Election and Democratic Development in Nigeria",
    date: "13 FEBRUARY 2026",
    duration: "1 HOUR 45 MINUTES",
    speakers: ["Amb. Dr. Yemi Farounbi", "Prof. Ayobami Ojebode", "Dr. Franca Ovadje"],
    content: "This panel explores the crucial nexus of broadcasting, election administration, and democratic development in the era of artificial intelligence. Experts discussed how radio remains a highly trusted medium for grassroots mobilization, and how newsrooms must adapt to combat misinformation during election cycles."
  },
  {
    slug: "media-watchdog",
    badge: "ADDRESS — RECORDING",
    title: "The Role of Media as a Watchdog and Educator",
    date: "28 JANUARY 2026",
    duration: "45 MINUTES",
    speakers: ["Amb. Dr. Yemi Farounbi"],
    content: "An in-depth address on the transformative power of media in shaping public narratives and influencing policy outcomes in a digital age. The address highlighted the urgent need for robust media literacy programs to empower citizens to critically evaluate the news they consume."
  },
  {
    slug: "governance-deficits",
    badge: "WEBINAR — RECORDING",
    title: "Addressing Governance Deficits and Inequalities",
    date: "15 DECEMBER 2025",
    duration: "1 HOUR 15 MINUTES",
    speakers: ["Hon. Justin M. Kunle Adeigbe", "Barr. Tolu Ogundeji"],
    content: "Panellists discuss actionable insights and concerted efforts to engage citizens in overcoming socio-economic inequalities and transparency issues. The webinar focused heavily on the responsibilities of local government in delivering dividends of democracy to marginalized communities."
  },
  {
    slug: "civic-participation",
    badge: "TOWN HALL — RECORDING",
    title: "Cultivating a Culture of Inquiry and Civic Participation",
    date: "02 NOVEMBER 2025",
    duration: "2 HOURS 10 MINUTES",
    speakers: ["Mrs. Evelyn Farounbi", "Pst. Awodele Oluseun", "Chief Mrs. Remi Olowu"],
    content: "A grassroots town hall meeting focused on empowering individuals with the knowledge to engage meaningfully in the democratic process. The town hall allowed for a lengthy Q&A session where citizens directly questioned policymakers on local infrastructure and education funding."
  }
];

// 2. The Dynamic Page Component
export default async function RecordingDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // Await the params for Next.js 15
  const resolvedParams = await params;

  // Find the recording
  const recording = recordingsDatabase.find((item) => item?.slug === resolvedParams.slug);

  // 404 State
  if (!recording) {
    return (
      <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Recording Not Found</h1>
        <p className="text-slate-600 mb-8">This video may have been removed or the link is incorrect.</p>
        <Link href="/events" className="bg-blue-600 text-white px-6 py-3 font-bold hover:bg-blue-700 transition-colors">
          Return to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      
      {/* Top Navigation Bar */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl py-4">
          <Link href="/events" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl mt-12 md:mt-16">
        
        {/* Dynamic Header */}
        <header className="mb-10">
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 bg-slate-200/50 text-slate-700 text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1">
              <PlayCircle className="w-3.5 h-3.5" /> {recording.badge}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
            {recording.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" /> {recording.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" /> {recording.duration}
            </div>
          </div>
        </header>

        {/* The Video Player Placeholder (Matches Chatham House layout) */}
        <div className="relative w-full aspect-video bg-slate-900 mb-16 border border-slate-200 group flex items-center justify-center cursor-pointer overflow-hidden shadow-lg">
          {/* Abstract dark background for the video placeholder */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-300">
            <PlayCircle className="w-20 h-20 text-white opacity-90 mb-4 drop-shadow-lg" />
            <span className="text-white font-bold tracking-widest uppercase text-sm drop-shadow-md">Play Full Recording</span>
          </div>
        </div>

        {/* Split Layout: Content & Sidebar */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Summary/Transcript Area */}
          <article className="lg:w-2/3 prose prose-lg prose-slate max-w-none text-slate-700 font-serif leading-relaxed">
            <h2 className="text-2xl font-sans font-bold text-slate-900 mb-6">Event Summary</h2>
            <p className="lead text-xl text-slate-900 font-sans font-medium mb-8">
              {recording.content}
            </p>
            <p className="mb-6">
              During this session, panellists examined how current civic engagement strategies reflect broader approaches to accountability. The overarching theme focused heavily on bridging the gap between government actions and public expectations.
            </p>
            
            <div className="bg-slate-50 border-l-4 border-slate-900 p-8 my-10 font-sans">
              <p className="text-xl italic text-slate-800 font-medium m-0">
                &quot;When we speak of democratic development, we must look beyond the ballot box and focus on the daily dialogue between the state and the citizen.&quot;
              </p>
            </div>
          </article>

          {/* Right: Meta Sidebar (Speakers & Links) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              
              {/* Speakers Block */}
              <div className="bg-slate-50 border border-slate-200 p-8">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-4">
                  <Users className="w-5 h-5 text-slate-900" />
                  <h3 className="text-lg font-bold text-slate-900">Featured Speakers</h3>
                </div>
                
                <ul className="space-y-4">
                  {recording.speakers.map((speaker, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="font-bold text-slate-900">{speaker}</span>
                      <span className="text-sm text-slate-500">Panellist</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Transcript */}
              <div className="border border-slate-200 p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                <FileText className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-slate-900 mb-1">Download Transcript</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">PDF format</span>
              </div>

              {/* Share Action */}
              <div className="border border-slate-200 p-6 flex items-center justify-between">
                <span className="font-bold text-slate-900">Share this recording</span>
                <button className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}