import Image from "next/image";
import Link from "next/link";

export default function LatestInsights() {
  const insights = [
    {
      id: 1,
      category: "Expert Comment",
      title:
        "Bridging the Gap Between Government Actions and Public Expectations",
      excerpt:
        "Addressing governance deficits and socio-economic inequalities necessitates a concerted effort to engage citizens in meaningful, structured dialogue.",
      date: "24 FEBRUARY 2026 — OPINION",
      image:
        "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800&auto=format&fit=crop",
      link: "/research/bridging-the-gap",
    },
    // {
    //   id: 2,
    //   category: "Expert Comment",
    //   title: "Bridging the Gap Between Government Actions and Public Expectations",
    //   excerpt: "Addressing governance deficits and socio-economic inequalities necessitates a concerted effort to engage citizens in meaningful, structured dialogue.",
    //   date: "24 FEBRUARY 2026 — OPINION",
    //   image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800&auto=format&fit=crop",
    //   link: "/research/bridging-the-gap"
    // },
    {
      id: 2,
      category: "Research Paper",
      title: "Promoting Ethical Standards in Nigerian Journalism",
      excerpt:
        "An in-depth analysis of how advocating for transparency, accountability, and responsible media practices reinforces the social contract between the government and the citizenry.",
      date: "20 FEBRUARY 2026 — DOWNLOAD PDF",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      link: "/research/ethical-standards",
    },
    {
      id: 3,
      category: "Research Paper",
      title:
        "Ambassador Yemi Farounbi in Multicolour Gowns: Religion, Media, and Politics",
      excerpt:
        "An in-depth biographical essay exploring the multifaceted life of Ambassador Dr. Yemi Farounbi across religion, media, and politics.",

      date: "2024",
      image: "/news1.webp",
      link: "/research/farounbi-multicolour-gowns",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10 border-b border-slate-900 pb-4">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Latest Insights
          </h2>
          <Link
            href="/research"
            className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider hidden sm:block"
          >
            View All Content &rarr;
          </Link>
        </div>

        {/* The Chatham House Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {insights.map((item) => (
            // WRAPPED THE ENTIRE CARD IN A LINK HERE
            <Link
              href={item.link}
              key={item.id}
              className="group flex flex-col h-full cursor-pointer"
            >
              <article className="flex flex-col h-full">
                {/* Image Container */}
                <div className="relative w-full aspect-3/2 mb-6 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-50 text-blue-700 text-[0.65rem] font-black uppercase tracking-widest px-2.5 py-1">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-base text-slate-600 mb-6 line-clamp-3 leading-relaxed grow">
                  {item.excerpt}
                </p>

                {/* Meta Data (Date / Read Time) */}
                <div className="mt-auto pt-4 border-t border-slate-200">
                  <span className="text-[0.7rem] font-bold text-slate-500 uppercase tracking-widest">
                    {item.date}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 sm:hidden">
          <Link
            href="/research"
            className="block w-full text-center bg-slate-100 text-slate-900 font-bold py-3 uppercase tracking-wider text-sm hover:bg-slate-200 transition-colors"
          >
            View All Content
          </Link>
        </div>
      </div>
    </section>
  );
}
