"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* 404 Content */}
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Left Side - 404 Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              src="/assets/images/home-page/herosection/not-found/not-found-img.png"
              alt="404 Not Found"
              width={500}
              height={400}
              className="max-w-full h-auto"
              priority
            />
          </div>

          {/* Right Side - 404 Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* 404 Text */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}>
              404
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              Page Not Found
            </h2>

            {/* Action Button */}
            <div className="flex justify-center lg:justify-start">
              <Link href="/">
                <motion.div
                  className="inline-block p-[3px] rounded-[50px]"
                  style={{
                    background: 'linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.button
                    className="px-8 py-4 text-white font-medium flex items-center gap-2 transition-transform duration-300 relative overflow-hidden w-full"
                    style={{
                      background: '#1a1a2e',
                      borderRadius: '50px'
                    }}
                  >
                    Go Back Home
                    <span className="text-lg" style={{ 
                      background: 'linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>→</span>
                  </motion.button>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
