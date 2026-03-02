import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <Image
              src="/yf-logo-t.webp" // Points to the public folder
              alt="The Yemi Farounbi Colloquium Logo"
              width={55} // Define explicit width/height to prevent layout shift
              height={55}
              priority // Tells Next.js to load this instantly
              className="w-auto h-12" // Tailwind to control responsive sizing
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              Dedicated to fostering informed public discourse on governance,
              public policy, and social issues in Nigeria.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-blue-400 transition-colors"
                >
                  Colloquium Events
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="hover:text-blue-400 transition-colors"
                >
                  Research & Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/awards"
                  className="hover:text-blue-400 transition-colors"
                >
                  Awards of Recognition
                </Link>
              </li>
              <li>
                <Link
                  href="/governance"
                  className="hover:text-blue-400 transition-colors"
                >
                  Board of Trustees
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">
              Get Involved
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/collaborate"
                  className="hover:text-blue-400 transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support / Donate */}
          <div className="space-y-4 bg-slate-900 p-6 rounded-sm border border-slate-800">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">
              Support Our Mission
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your financial contributions will help sustain our activities,
              support research initiatives, and empower communities.
            </p>
            {/* Bank details from the official document */}
            <div className="text-xs text-slate-300 font-mono bg-slate-950 p-3 rounded-sm border border-slate-800">
              <span className="block text-blue-400 font-bold mb-1">
                Bank: Zenith Bank
              </span>
              <span className="block">Acct: 1310140840</span>
              <span className="block">Name: The Yemi Farounbi Colloquium</span>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} The Yemi Farounbi Colloquium. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
