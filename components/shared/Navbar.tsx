"use client"; // 1. Tell Next.js this component uses client-side interactivity

import { useState } from "react"; // 2. Import useState
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react"; // 3. Import the 'X' icon for closing

export default function Navbar() {
  // 4. Create state to track if the menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to toggle the menu
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <div className="shrink-0">
            <Link href="/" className="flex flex-col items-start justify-center">
              <Image
                src="/yf-logo.webp" 
                alt="The Yemi Farounbi Colloquium Logo"
                width={55} 
                height={55}
                priority 
                className="w-auto h-12" 
              />
              <span className="text-[0.65rem] font-extrabold text-slate-500 uppercase tracking-widest">
                The Yemi Farounbi Colloquium
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            <Link href="/about" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider">
              About
            </Link>
            <Link href="/events" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider">
              Events
            </Link>
            <Link href="/research" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider">
              Research
            </Link>
            <Link href="/awards" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider">
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
            
            {/* 5. Attach the click handler to toggle the menu */}
            <button
              aria-label="Mobile Menu"
              onClick={toggleMenu}
              className="md:hidden text-slate-600 hover:text-blue-600 transition-colors"
            >
              {/* 6. Swap between Menu and X icon based on state */}
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 7. The Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col space-y-6 px-4 py-8">
            <Link 
              href="/about" 
              onClick={toggleMenu} // Close menu when a link is clicked!
              className="text-base font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider block"
            >
              About
            </Link>
            <Link 
              href="/events" 
              onClick={toggleMenu}
              className="text-base font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider block"
            >
              Events
            </Link>
            <Link 
              href="/research" 
              onClick={toggleMenu}
              className="text-base font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider block"
            >
              Research
            </Link>
            <Link 
              href="/awards" 
              onClick={toggleMenu}
              className="text-base font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider block"
            >
              Awards
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}