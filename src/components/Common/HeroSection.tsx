'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white p-[120px] relative overflow-hidden"
      style={{ backgroundImage: "url('/Laptopimage.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e293b]/80 to-[#1e3a8a]/70 z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 lg:pr-8">
            
            {/* Main Heading - Image */}
            <div className="space-y-6">
              <img 
                src="/About Xiorent.png" 
                alt="About Xiorent" 
                className="w-[400px] h-auto"
              />
            </div>
            
            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-gray-200 text-lg lg:text-xl leading-relaxed max-w-2xl">
                At Xiorent Technologies, we deliver transformative solutions for businesses. Committed to innovation, 
                we empower organizations to reimagine their future through technology. Our expertise includes AI, 
                software development, blockchain, and IoT systems. We partner with startups and enterprises, 
                providing scalable solutions that drive impact.
              </p>
            </div>
            
            {/* Mission and Vision Section */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              
              {/* Our Mission */}
              <div className="space-y-4">
                <img 
                  src="/ourmission.png" 
                  alt="Our Mission" 
                  className="w-[220px] h-auto"
                />
              </div>
              
              {/* Our Vision */}
              <div className="space-y-4">
                <img 
                  src="/ourvision.png" 
                  alt="Our Vision" 
                  className="w-[220px] h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Right Side - Stats Floating */}
          <div className="relative flex items-center justify-center">
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
