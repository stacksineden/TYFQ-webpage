import Link from "next/link";
import Image from "next/image";
import { Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link href="/" className="flex flex-col items-start justify-center">
              <Image
                src="/yf-logo.webp" // Points to the public folder
                alt="The Yemi Farounbi Colloquium Logo"
                width={55} // Define explicit width/height to prevent layout shift
                height={55}
                priority // Tells Next.js to load this instantly
                className="w-auto h-12" // Tailwind to control responsive sizing
              />
              <span className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">
                The Yemi Farounbi Colloquium
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            <Link
              href="/about"
              className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >
              About
            </Link>
            <Link
              href="/events"
              className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >
              Events
            </Link>
            <Link
              href="/research"
              className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >
              Research
            </Link>
            <Link
              href="/awards"
              className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >
              Awards
            </Link>
          </nav>

          {/* Utility / Mobile Menu Icons */}
          <div className="flex items-center space-x-5">
            <button
              aria-label="Search"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              aria-label="Mobile Menu"
              className="md:hidden text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
