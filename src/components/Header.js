'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md elegant-shadow border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <Image src="/images/logo.png" alt="Shubh Law Firm" width={80} height={80} />
            <div>
              <h1 className="text-2xl font-bold text-primary-brown font-playfair group-hover:text-accent-gold transition-colors duration-300">
                Shubh Law Firm
              </h1>
              <p className="text-sm text-accent-blue font-source-sans uppercase tracking-wider">
                Professional Legal Services
              </p>
            </div>
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
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Free Consultation
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-primary-brown group-hover:bg-accent-gold transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-primary-brown group-hover:bg-accent-gold transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-primary-brown group-hover:bg-accent-gold transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
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
  )
} 