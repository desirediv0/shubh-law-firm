"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const practiceAreas = [
    { name: "Civil Law", href: "/practice-areas/civil" },
    { name: "Family Law", href: "/practice-areas/family" },
    { name: "Criminal Law", href: "/practice-areas/criminal" },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md elegant-shadow border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <Image
              src="/images/logo.png"
              alt="Shubh Legal Offices"
              width={80}
              height={80}
            />
            <h3 className="text-lg font-bold font-playfair">
              Shubh Legal Offices
            </h3>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary-brown hover:text-accent-gold font-source-sans font-medium transition-all duration-300 relative group py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-bronze transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Practice Areas Dropdown */}
            <div className="relative group">
              <button
                className="text-primary-brown hover:text-accent-gold font-source-sans font-medium transition-all duration-300 relative py-2 flex items-center space-x-1"
                onMouseEnter={() => setIsPracticeAreasOpen(true)}
                onMouseLeave={() => setIsPracticeAreasOpen(false)}
              >
                <span>Practice Areas</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isPracticeAreasOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-bronze transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 transition-all duration-300 ${
                  isPracticeAreasOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setIsPracticeAreasOpen(true)}
                onMouseLeave={() => setIsPracticeAreasOpen(false)}
              >
                <div className="py-2">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.name}
                      href={area.href}
                      className="block px-4 py-3 text-primary-brown hover:text-accent-gold hover:bg-gray-50 transition-all duration-200 font-source-sans"
                    >
                      {area.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/practice-areas"
                      className="block px-4 py-3 text-primary-brown hover:text-accent-gold hover:bg-gray-50 transition-all duration-200 font-source-sans"
                    >
                      View All Practice Areas
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contact" className="btn btn-primary">
              Free Consultation
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-primary-brown group-hover:bg-accent-gold transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-primary-brown group-hover:bg-accent-gold transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-primary-brown group-hover:bg-accent-gold transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 space-y-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-primary-brown hover:text-accent-gold font-source-sans font-medium py-3 transition-all duration-300 relative group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                <span className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Mobile Practice Areas */}
            <div>
              <button
                className="w-full text-left text-primary-brown hover:text-accent-gold font-source-sans font-medium py-3 transition-all duration-300 relative group flex items-center justify-between"
                onClick={() => setIsPracticeAreasOpen(!isPracticeAreasOpen)}
              >
                <span>Practice Areas</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isPracticeAreasOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isPracticeAreasOpen
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 space-y-2 mt-2">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.name}
                      href={area.href}
                      className="block text-primary-brown hover:text-accent-gold font-source-sans py-2 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                  <Link
                    href="/practice-areas"
                    className="block text-primary-brown hover:text-accent-gold font-source-sans py-2 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Practice Areas
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="btn btn-primary block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
