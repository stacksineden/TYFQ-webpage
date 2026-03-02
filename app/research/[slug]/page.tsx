import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  FileText,
  Calendar,
  Clock,
  Share2,
} from "lucide-react";

// 1. Our Mock Database of Research Articles
const researchDatabase = [
  {
    slug: "governance-deficits",
    type: "POLICY BRIEF",
    title: "Bridging the Gap: Governance Deficits and Public Expectations",
    date: "FEBRUARY 2026",
    readTime: "12 MINUTE READ",
    author: "TYFQ Policy Team",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    pdfUrl: "",
    content:
      "Addressing governance deficits and socio-economic inequalities necessitates a concerted effort to engage citizens in meaningful, structured dialogue. This brief outlines actionable strategies for bridging the communication gap between elected officials and the public they serve.",
  },
  {
    slug: "media-watchdog",
    type: "RESEARCH PAPER",
    title: "The Role of Media as a Watchdog in Nigeria's Democracy",
    date: "JANUARY 2026",
    readTime: "18 MINUTE READ",
    author: "Dr. Yemi Farounbi",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1200&auto=format&fit=crop",
    pdfUrl: "",
    content:
      "In a digital age where information dissemination occurs at unprecedented speed, the role of media as a watchdog has never been more critical for democratic progress. This paper examines historical trends in Nigerian broadcasting and projects the future of journalistic integrity in the era of AI.",
  },
  {
    slug: "ethical-standards",
    type: "REPORT",
    title: "Ethical Standards in Journalism and Public Communication",
    date: "DECEMBER 2025",
    readTime: "10 MINUTE READ",
    author: "TYFQ Ethics Committee",
    image:
      "https://images.unsplash.com/photo-1541872526845-860802e88a38?q=80&w=1200&auto=format&fit=crop",
    pdfUrl: "",
    content:
      "Advocating for transparency, accountability, and responsible media practices reinforces the social contract between government and citizenry. This comprehensive report details the current ethical landscape of West African media.",
  },
  {
    slug: "bridging-the-gap",
    type: "EXPERT COMMENT",
    title:
      "Bridging the Gap Between Government Actions and Public Expectations",
    date: "24 FEBRUARY 2026",
    readTime: "OPINION",
    author: "TYFQ Policy Team",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1200&auto=format&fit=crop",
    pdfUrl: "",
    content:
      "Addressing governance deficits and socio-economic inequalities necessitates a concerted effort to engage citizens in meaningful, structured dialogue. This expert comment outlines actionable strategies for bridging the communication gap between elected officials and the public they serve.",
  },
  {
    slug: "farounbi-multicolour-gowns",
    type: "RESEARCH ESSAY",
    title:
      "Ambassador Yemi Farounbi in Multicolour Gowns: Religion, Media, and Politics",
    date: "2024",
    readTime: "DOWNLOAD PDF",
    author: "Prof. Jacob K. Ayantayo & Elijah O. Samuel",
    image: "/news1.webp",
    pdfUrl: "/documents/ui_inbk_ayantayo_ambassador_2024.pdf",
    content:
      "An in-depth biographical essay exploring the multifaceted life of Ambassador Dr. Yemi Farounbi, an Officer of the Order of Niger (CON). This paper details his remarkable journey across three distinct spheres: religion, media, and politics. It chronicles his vast contributions to media management, his steadfast fight against political oppression during the military era, and his distinguished diplomatic service as Nigeria's Ambassador to the Philippines and the Kingdom of Cambodia.",
  },
];

// 2. The Dynamic Page Component
// FIXED: Added `async` and changed the params type to a Promise
export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // FIXED: Await the params object before using it
  const resolvedParams = await params;

  // Find the specific article that matches the URL slug
  const article = researchDatabase.find(
    (item) => item?.slug === resolvedParams.slug,
  );

  // If someone types a bad URL (like /research/fake-article), show a 404 state
  if (!article) {
    return (
      <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Article Not Found
        </h1>
        <p className="text-slate-600 mb-8">
          We couldn&apos;t find the research paper you&apos;re looking for.
        </p>
        <Link
          href="/research"
          className="bg-blue-600 text-white px-6 py-3 font-bold hover:bg-blue-700 transition-colors"
        >
          Return to Research Hub
        </Link>
      </div>
    );
  }

  // If the article IS found, render the beautiful layout using the dynamic data!
  return (
    <div className="bg-white pb-24">
      {/* Top Navigation Bar */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl py-4">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Research
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl mt-12 md:mt-16">
        {/* Dynamic Article Header */}
        <header className="mb-12">
          <div className="mb-6 flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[0.65rem] font-black uppercase tracking-widest px-3 py-1.5">
              <FileText className="w-3.5 h-3.5" /> {article.type}
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
              By <span className="text-blue-600">{article.author}</span>
            </div>
          </div>
        </header>

        {/* Dynamic Featured Image */}
        <div className="relative w-full aspect-video bg-slate-100 mb-16 border border-slate-200">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Content & Sidebar Split */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Dynamic Article Body */}
          <article className="lg:w-2/3 prose prose-lg prose-slate max-w-none text-slate-700 font-serif leading-relaxed">
            <p className="lead text-2xl text-slate-900 font-sans font-medium mb-8">
              {article.content}
            </p>

            <h2 className="text-2xl font-sans font-bold text-slate-900 mt-10 mb-6">
              Introduction
            </h2>
            <p className="mb-6">
              The landscape of public communication has undergone a radical
              transformation over the last two decades. With the advent of
              social media and instantaneous news cycles, the traditional
              gatekeepers of information have been bypassed, allowing for a more
              democratized flow of news.
            </p>

            <h2 className="text-2xl font-sans font-bold text-slate-900 mt-10 mb-6">
              Methodology & Findings
            </h2>
            <p className="mb-6">
              When the media fails to uphold strict ethical standards, the
              foundation of public trust begins to erode. Our findings indicate
              a strong correlation between media literacy programs and
              heightened civic engagement in democratic processes.
            </p>

            <div className="bg-slate-50 border-l-4 border-blue-600 p-8 my-10 font-sans">
              <p className="text-xl italic text-slate-800 font-medium m-0">
                &quot;The institution must not only reflect society but actively
                elevate the standard of its discourse, ensuring transparency at
                every level of governance.&quot;
              </p>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-6">
              {/* Download Action */}
              {/* Download Action */}
              <div className="bg-slate-50 border border-slate-200 p-8 text-center">
                <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Read the Full Document
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Download the comprehensive analysis in PDF format for offline
                  reading.
                </p>

                {/* CONDITIONAL RENDER: If pdfUrl exists, show download link. If not, show disabled button. */}
                {article.pdfUrl ? (
                  <a
                    href={article.pdfUrl}
                    download // This attribute forces the browser to download the file instead of just opening it
                    target="_blank" // Opens in a new tab as a fallback
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full py-3.5 font-bold transition-colors"
                  >
                    <Download className="w-5 h-5" /> Download PDF
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 bg-slate-300 text-slate-500 w-full py-3.5 font-bold cursor-not-allowed"
                  >
                    <Download className="w-5 h-5" /> PDF Unavailable
                  </button>
                )}
              </div>

              {/* Share Action */}
              <div className="border border-slate-200 p-6 flex items-center justify-between">
                <span className="font-bold text-slate-900">
                  Share this publication
                </span>
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
