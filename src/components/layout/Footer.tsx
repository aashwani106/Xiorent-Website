import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-full flex items-center">
        <div className="w-16 h-16 border-2 border-purple-500 rounded-lg transform rotate-12 opacity-20"></div>
        <div className="w-12 h-12 border-2 border-purple-500 rounded-lg transform -rotate-12 -ml-4 opacity-30"></div>
      </div>
      
      <div className="absolute right-0 top-0 h-full flex items-center">
        <div className="w-20 h-20 border-2 border-purple-500 rounded-lg transform rotate-12 opacity-20"></div>
        <div className="w-16 h-16 border-2 border-purple-500 rounded-lg transform -rotate-12 -ml-6 opacity-25"></div>
        <div className="w-12 h-12 border-2 border-purple-500 rounded-lg transform rotate-45 -ml-4 opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Logo and Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/xiorent-logo.png"
                alt="Xiorent Logo"
                width={120}
                height={40}
                className="h-15 w-auto"
              />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Navigating towards<br />
              innovation
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white hover:text-gray-300 text-sm">
                  Our Service
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white hover:text-gray-300 text-sm">
                  Our Creation
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-gray-300 text-sm">
                  Our Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-gray-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-gray-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-gray-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Policy Info</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-white hover:text-gray-300 text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white hover:text-gray-300 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white hover:text-gray-300 text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Location */}
          <div>
            <h4 className="text-white font-bold mb-4">OFFICE LOCATION</h4>
            <div className="space-y-2 text-sm">
              <p className="text-white">10/10, Hridaypur. Kolkata.700127</p>
              <p className="text-white">+ 91 7319524047</p>
              <p className="text-white">official@xiorent.com</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <span className="text-xs font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-white text-sm">
              @2025 By Xiorent Technologies Private Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
