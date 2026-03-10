import Image from "next/image";
import { Play, ExternalLink, Image as ImageIcon, Video } from "lucide-react";

// 1. We define our strict TypeScript Types so TS stops complaining!
type GalleryItem =
  | {
      id: string;
      type: "image";
      src: string;
      alt: string;
      aspectRatio: string;
      title?: string;
    }
  | {
      id: string;
      type: "youtube";
      videoId: string;
      title: string;
      aspectRatio: string;
    }
  | {
      id: string;
      type: "facebook";
      link: string;
      thumbnail: string;
      title: string;
      aspectRatio: string;
    }
  | {
      id: string;
      type: "video";
      src: string;
      poster: string;
      title: string;
      aspectRatio: string;
    };

// 2. Our Mock Database
const galleryData: GalleryItem[] = [
  {
    id: "1",
    type: "image",
    src: "/yfimg1.webp",
    alt: "Colloquium opening ceremony",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "2",
    type: "youtube",
    videoId: "s84d4yWfkvE",
    title: "Keynote Speech by Dr. Farounbi",
    aspectRatio: "aspect-video",
  },
  {
    id: "3",
    type: "facebook",
    link: "https://web.facebook.com/watch/?v=2617586011920294",
    thumbnail: "/meta-prev2.webp",
    title: "TYFC held it's first colloquium series ....",
    aspectRatio: "aspect-square",
  },
  {
    id: "4",
    type: "facebook",
    link: "https://share.google/izzOSYXm35FKtXap7",
    thumbnail: "/meta-prev.webp",
    title:
      "Ambassador (Dr) Yemi Farounbi is a VETERAN Journalist, ace broadcaste...",
    aspectRatio: "aspect-square",
  },
  {
    id: "5",
    type: "youtube",
    videoId: "tDDNpgLgSpI",
    title: "Keynote Speech by Dr. Farounbi",
    aspectRatio: "aspect-video",
  },
  {
    id: "6",
    type: "youtube",
    videoId: "uUBOOZB1vE4",
    title:
      "How PDP Lost Power and Relevance in Nigeria — Amb. Yemi Farounbi Explains...",
    aspectRatio: "aspect-video",
  },
  {
    id: "7",
    type: "facebook",
    link: "https://web.facebook.com/watch/?v=973768951349398",
    thumbnail: "/meta-prev3.webp",
    title:
      "Former Nigerian Ambassador to the Philippines, Dr Yemi Farounbi in his grace visited us again and he shared with us some of his fond memories....",
    aspectRatio: "aspect-square",
  },
   {
    id: "8",
    type: "facebook",
    link: "https://web.facebook.com/reel/506537175351832",
    thumbnail: "/meta-prev4.webp",
    title:
      "Ambassador Yemi Farounbi shares his insights...",
    aspectRatio: "aspect-square",
  }
  //   {
  //     id: "6",
  //     type: "video",
  //     src: "https://www.w3schools.com/html/mov_bbb.mp4",
  //     poster: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800&auto=format&fit=crop",
  //     title: "Short Documentary",
  //     aspectRatio: "aspect-video"
  //   }
];

// 3. The Page Component
export default function MediaGallery() {
  return (
    <div className="bg-white pb-24">
      {/* Hero Section to match the rest of the site */}
      <section className="bg-slate-900 text-white py-20 md:py-32 mb-12">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Media Library
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Moments & Highlights
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Explore our collection of photos, keynote speeches, and live
              session recordings from the TYFQ events.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Grid Section */}
      <section className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid relative rounded-sm overflow-hidden bg-white shadow-sm border border-slate-200 group flex flex-col"
            >
              {/* === IMAGE HANDLER === */}
              {item.type === "image" && (
                <div className={`relative w-full ${item.aspectRatio}`}>
                  <Image
                    src={item.src as string} // <-- FIXED: TypeScript now knows this is a string
                    alt={item.alt || "Gallery image"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* === YOUTUBE HANDLER === */}
              {item.type === "youtube" && (
                <div className={`relative w-full ${item.aspectRatio}`}>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}?rel=0`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              )}

              {/* === NATIVE VIDEO HANDLER === */}
              {item.type === "video" && (
                <div className={`relative w-full ${item.aspectRatio} bg-black`}>
                  <video
                    controls
                    poster={item.poster as string} // <-- FIXED
                    className="w-full h-full object-cover"
                  >
                    <source src={item.src as string} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md p-2 rounded-full text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <Video className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* === FACEBOOK PLACEHOLDER HANDLER === */}
              {item.type === "facebook" && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block w-full ${item.aspectRatio} cursor-pointer overflow-hidden`}
                >
                  <Image
                    src={item.thumbnail as string} // <-- FIXED
                    alt={item.title || "Facebook Video"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors"></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="bg-blue-600 text-white p-4 rounded-full shadow-lg transform group-hover:scale-110 transition-transform flex items-center justify-center">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </div>
                    <span className="mt-4 text-white font-bold tracking-wide text-sm flex items-center gap-2 bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
                      Watch on Facebook <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              )}

              {/* Item Title Footer */}
              {item.title && item.type !== "youtube" && (
                <div className="p-4 border-t border-slate-100 bg-white z-10">
                  <p className="text-sm font-bold text-slate-800 line-clamp-2">
                    {item.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
