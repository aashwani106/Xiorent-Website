"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r" style={{ background: 'linear-gradient(90deg, #24154C 0%, #0B152D 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/xiorent-logo.png"
                alt="Xiorent Logo"
                width={140}
                height={60}
                className="h-15 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Container */}
          <nav className="hidden md:flex">
            <div className="gradient-border">
              <div className="flex items-center space-x-1">
                <Link
                  href="/"
                  className="text-white hover:text-purple-200 px-4 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-purple-200 px-4 py-2 text-sm font-medium transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:text-purple-200 px-4 py-2 text-sm font-medium transition-colors"
                >
                  Our Services
                </Link>
                <Link
                  href="/portfolio"
                  className="text-white hover:text-purple-200 px-4 py-2 text-sm font-medium transition-colors"
                >
                  Our Creations
                </Link>
                <Link
                  href="/careers"
                  className="text-white hover:text-purple-200 px-4 py-2 text-sm font-medium transition-colors"
                >
                  Career
                </Link>
              </div>
            </div>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-6 transition-all duration-300"
                style={{ borderRadius: '36px' }}
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-purple-200 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-700">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-white hover:text-purple-200 px-4 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-purple-200 px-4 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-purple-200 px-4 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                href="/portfolio"
                className="text-white hover:text-purple-200 px-4 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Creations
              </Link>
              <Link
                href="/careers"
                className="text-white hover:text-purple-200 px-4 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>
              <div className="pt-2">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-6 py-2 transition-all duration-300"
                    style={{ borderRadius: '36px' }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
