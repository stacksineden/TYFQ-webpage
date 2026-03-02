import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Newspaper, Mail } from "lucide-react";

// 1. Mock Database of News Releases
const newsDatabase = [
  {
    slug: "world-radio-day-2026",
    badge: "NEWS RELEASE",
    title: "TYFQ Hosts 2026 UN World Radio Day Event",
    date: "13 FEBRUARY 2026",
    readTime: "3 MINUTE READ",
    author: "TYFQ Press Office",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop", // Radio microphone placeholder
    content: "IBADAN, NIGERIA — The Yemi Farounbi Colloquium (TYFQ) today successfully hosted its flagship event marking the 2026 UN World Radio Day. This year's symposium brought together veteran broadcasters, policymakers, and civic leaders to explore the evolving landscape of radio in the era of artificial intelligence.\n\nWith a specific focus on Nigeria's democratic processes, panellists discussed how radio remains the most trusted and accessible medium for grassroots mobilization across West Africa. \n\nAmbassador Dr. Yemi Farounbi, OON, delivered the keynote address, emphasizing that 'while the tools of broadcasting may change with technology, the foundational ethics of truth, transparency, and public service must remain unshakeable.'\n\nThe event concluded with the unveiling of a new TYFQ initiative aimed at providing digital literacy grants to independent community radio stations."
  },
  {
    slug: "media-experts-uphold-family-values",
    badge: "NEWS",
    title: "Media experts seek quality content to uphold family values in Nigeria",
    date: "23 JANUARY 2025",
    readTime: "3 MINUTE READ",
    author: "Segun Showunmi",
    image: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?q=80&w=1200&auto=format&fit=crop",
    content: "IBADAN, NIGERIA — Media experts, including veteran broadcaster Dr. Yemi Farounbi, Media Adviser to Governor Seyi Makinde, Dr. Sulaimon Olanrewaju, and Wellsradio owner Evang. Lillian Bademosi, have called on broadcasters and content producers to churn out quality and valuable content that will uphold family values to build a better Nigeria.\n\nSpeaking at the first anniversary of Wells 89.3 FM, Oluyole, Ibadan, they stated that Nigeria would improve if wholesome values were promoted in the media.\n\nFarounbi, Chairman of the Board of Directors of the station, emphasized the need for media content to promote good values for a better society. 'If we are going to build a better society, we should look at the content of our media. We must begin to talk of those values that can elevate, unite, and make us have a society that is better than what we have now. Years ago, we talked about integrity. If we don't promote those values, we cannot have a good society,' he said.\n\nBademosi added that the media outfit was resolute about its mandate to promote wholesome values to build homes, families, and society. She stated that through wholesome content, media could change the world, which is the mission of the radio station.\n\n'This is a radio station for the entire family; there is no obscene word, and language, and nothing that will not edify the entire family,' Bademosi noted. 'The station is meant to bring hope, encouragement and reconciliation to the people and to reach the entire world. Our core values are excellence, teamwork, professionalism, creativity and Godliness.'\n\nOn his part, Dr Olanrewaju emphasised that without celebrating the right values, there would not be development in the country. 'We don't celebrate the right values. We don't celebrate hard work, honesty and dignity of labour. That is why our nation has been on this trend. There won't be any development unless we celebrate the right values. Wells Radio has been on the right path. I celebrate this media outfit.'"
  },
  {
    slug: "new-board-appointments",
    badge: "ANNOUNCEMENT",
    title: "TYFQ Announces New Board of Trustees",
    date: "05 JANUARY 2026",
    readTime: "2 MINUTE READ",
    author: "TYFQ Press Office",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop", 
    content: "The colloquium is proud to announce the appointment of three new members to its Board of Trustees. These distinguished individuals bring decades of experience in diplomacy, media regulation, and international development."
  },
  {
    slug: "celebrating-farounbi-at-80",
    badge: "FEATURE",
    title: "Celebrating Dr Yemi Farounbi at 80: A Lasting Legacy of Media Innovation and Diplomacy",
    date: "05 OCTOBER 2024",
    readTime: "4 MINUTE READ",
    author: "DAWN Commission",
    image: "/yf-founder.webp",
    content: "As Dr. Yemi Farounbi marks his 80th birthday, his remarkable career as a journalist, innovative media administrator, diplomat, and cultural advocate spans decades, leaving a significant impact on Nigeria's media landscape, diplomatic relations, and cultural heritage.\n\nBorn in 1944 in Usi, Ekiti State, his upbringing instilled in him the traditional Yoruba ethos of Omoluabi. He began his media career at 24 with Western Nigeria Television (WNTV) in Ibadan, Africa's first television station. His transformative leadership later saw him spearheading projects as General Manager of NTA Ibadan and Akure, and playing a key role in establishing the Television Service of Oyo State (TSOS), now BCOS.\n\nBeyond journalism, Dr. Farounbi brought his characteristic intelligence and innovative brilliance to diplomacy. Serving as Nigeria's Ambassador to the Philippines and the Kingdom of Cambodia, he championed cultural exchange programs and successfully established economic partnerships that continue to benefit Nigeria.\n\nAccording to the Chairman of the Nigeria Union of Journalists, Chief Ademola Babalola, 'Your illustrious career, spanning over five decades, has been a beacon of effective communication... Your steadfast advocacy for the media's vital role in shaping democracy and civic engagement has left an indelible mark on the Nigerian landscape.'\n\nIn celebrating this milestone, we honor not just his remarkable career but the enduring values of respect, hard work, integrity, bravery, and intelligence that he embodies."
  },
  {
    slug: "hunger-has-no-tribal-marks",
    badge: "INTERVIEW",
    title: "Nigerians now see that hunger does not have tribal marks - Dr Yemi Farounbi",
    date: "28 SEPTEMBER 2024",
    readTime: "6 MINUTE READ",
    author: "Sam Nwaoko",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1200&auto=format&fit=crop", 
    content: "In a sweeping interview ahead of his 80th birthday, Dr. Yemi Farounbi reflected on Nigeria's trajectory, describing it as 'one long story of hope and failure.' He lamented the country's inability to harness the unique strengths of its diverse ethnic groups, noting that instead of building on regional ingenuity, Nigerians have been 'equalized into beggars' who now queue for basic staples like rice and garri.\n\nDr. Farounbi traced the nation's political decay back to the truncation of early democratic processes, the imposition of a centralized military structure, and the vulgar monetization of politics that began during the 10-year transition program. He criticized modern political parties as mere vehicles for capturing power rather than ideological platforms for development, calling out the 'entitlement approach' to leadership.\n\nProposing a path forward, he advocated for restructuring the nation's resource management and reforming the political recruitment system. He urged citizens to reject vote-buying and instead embrace crowd-funding for competent leaders. Despite the current hardship, Dr. Farounbi expressed optimism that the shared reality of poverty will eventually unite the masses, declaring that 'hunger has no tribal mark nor does it have religious colouration.'"
  }
];

// 2. The Dynamic Page Component
export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  
  // Await the params for Next.js 15
  const resolvedParams = await params;

  // Find the news article
  const article = newsDatabase.find((item) => item?.slug === resolvedParams.slug);

  // 404 State
  if (!article) {
    return (
      <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Article Not Found</h1>
        <p className="text-slate-600 mb-8">This news release could not be found or has been removed.</p>
        <Link href="/" className="bg-blue-600 text-white px-6 py-3 font-bold hover:bg-blue-700 transition-colors">
          Return to Home.
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      
      {/* Top Navigation Bar */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Back to Latest Work
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl mt-12 md:mt-16">
        
        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6 flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[0.65rem] font-black uppercase tracking-widest px-3 py-1.5">
              <Newspaper className="w-3.5 h-3.5" /> {article.badge}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {article.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {article.readTime}
            </div>
            <div className="text-slate-900">
              Source: <span className="text-blue-600">{article.author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video bg-slate-100 mb-16 border border-slate-200">
          <Image 
            src={article.image}
            alt={article.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Main Content & Sidebar Split */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Article Body */}
          <article className="lg:w-2/3 prose prose-lg prose-slate max-w-none text-slate-700 font-serif leading-relaxed whitespace-pre-wrap">
            {article.content}
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-6">
              
              {/* Media Contact Action */}
              <div className="bg-slate-50 border border-slate-200 p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Media Enquiries</h3>
                <p className="text-sm text-slate-600 mb-6">For press passes, interviews, or additional quotes regarding this release, please contact our press office.</p>
                
                <a href="mailto:press@tyfq.org" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white w-full py-3.5 font-bold transition-colors">
                  <Mail className="w-5 h-5" /> Contact Press Office
                </a>
              </div>

              {/* Share Action */}
              <div className="border border-slate-200 p-6 flex items-center justify-between">
                <span className="font-bold text-slate-900">Share this release</span>
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