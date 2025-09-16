"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { useEffect, useState } from "react";

const GlobeDemo = dynamic(() => import("@/components/ui/GlobeDemo"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-white">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
    </div>
  ),
});

// Error boundary component for globe
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  key: number;
}

class GlobeErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, key: 0 };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Globe rendering error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center text-white">
          <button 
            onClick={() => this.setState({ hasError: false, key: this.state.key + 1 })}
            className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Retry Globe
          </button>
        </div>
      );
    }

    return <GlobeDemo key={this.state.key} />;
  }
}

export default function HomeHeroSection() {
  const [globeKey, setGlobeKey] = useState(0);
  const [isGlobeReady, setIsGlobeReady] = useState(false);

  // Force globe re-render when component mounts or updates
  useEffect(() => {
    const timer = setTimeout(() => {
      setGlobeKey(prev => prev + 1);
      setIsGlobeReady(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Additional re-render trigger for better reliability
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isGlobeReady) {
        setGlobeKey(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isGlobeReady]);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      designation: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Globe */}
      <section className="relative min-h-screen flex">
        {/* Left Side - Text Content */}
        <div className="w-1/2 flex flex-col justify-center px-8 lg:px-16 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}>
              Transforming Your 
              Ideas Into Scalable 
              Digital Products!
            </h1>
            
            <p className="text-lg text-white/80 mb-12 leading-relaxed">
              From advanced machine learning models to<br />
              user-friendly tech applications, we provide<br />
              state-of-the-art solutions.
            </p>
            
            {/* Statistics Section */}
            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-white">100+</div>
                <div className="text-sm text-white/70">Projects<br />Delivered</div>
              </div>
              
              {/* Team Avatars with Animated Tooltip */}
              <AnimatedTooltip items={teamMembers} />
              
              <div className="text-4xl font-bold text-white">60+</div>
              <div className="text-sm text-white/70">Clients<br />Served</div>
            </div>
            
            {/* CTA Button */}
            <Link href="/contact">
              <motion.div
                className="inline-block p-[3px] rounded-[50px]"
                style={{
                  background: 'linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  className="px-8 py-2 text-white font-[20px] flex items-center gap-2 hover:scale-105 transition-transform duration-300 relative overflow-hidden w-full"
                  style={{
                    background: '#1a1a2e',
                    borderRadius: '50px'
                  }}
                >
                  Get a quote
                  <span className="text-lg" style={{ 
                    background: 'linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>→</span>
                </motion.button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
        
        {/* Right Side - Globe */}
        <div className="w-1/2 relative z-0">
          <GlobeErrorBoundary key={globeKey}>
            <GlobeDemo />
          </GlobeErrorBoundary>
          
          {/* Manual retry button (hidden by default) */}
          {!isGlobeReady && (
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={() => {
                  setGlobeKey(prev => prev + 1);
                  setIsGlobeReady(false);
                }}
                className="px-3 py-1 text-xs bg-purple-600/80 text-white rounded hover:bg-purple-700/80 transition-colors"
              >
                Retry Globe
              </button>
            </div>
          )}
          
          {/* Overlay Box with Statistics */}
          <motion.div
            className="absolute bottom-60 left-4 bg-black/20 backdrop-blur-sm p-6 border border-white/10"
            style={{ borderRadius: '24px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-white mb-4">
              <div className="text-2xl font-bold">1.5+</div>
              <div className="text-sm text-white/70">Years of Proven Expertise</div>
            </div>
            
            {/* Bar Chart */}
            <div className="flex items-end gap-2 h-16">
              <div className="w-3 bg-purple-400 rounded-t" style={{ height: '60%' }}></div>
              <div className="w-3 bg-purple-500 rounded-t" style={{ height: '80%' }}></div>
              <div className="w-3 bg-purple-600 rounded-t" style={{ height: '100%' }}></div>
              <div className="w-3 bg-purple-500 rounded-t" style={{ height: '70%' }}></div>
              <div className="w-3 bg-purple-400 rounded-t" style={{ height: '50%' }}></div>
              <div className="w-3 bg-purple-600 rounded-t" style={{ height: '90%' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Company Logos Section - Bottom of Hero */}
        <div className="absolute bottom-3 left-0 right-0 z-10">
          <div className="w-full px-0">
            <div className="flex items-center justify-around overflow-x-auto px-8">
                {/* Company Logo 1 */}
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/assets/images/home-page/herosection/company-icon1.png"
                    alt="Frame Digital Pvt Ltd"
                  width={160}
                  height={60}
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                {/* Divider */}
                <div className="w-px h-8 bg-white/30"></div>
                
                {/* Company Logo 2 */}
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/assets/images/home-page/herosection/company-icon2.png"
                    alt="COS HM TOXIN-FREE"
                  width={160}
                  height={60}
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                {/* Divider */}
                <div className="w-px h-8 bg-white/30"></div>
                
                {/* Company Logo 3 */}
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/assets/images/home-page/herosection/comapny-icon3.png"
                    alt="HYPERDIGITAL"
                  width={160}
                  height={60}
                  className="h-30 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                {/* Divider */}
                <div className="w-px h-8 bg-white/30"></div>
                
                {/* Company Logo 4 */}
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/assets/images/home-page/herosection/company-icon4.png"
                    alt="TRIAMOND TECH."
                  width={160}
                  height={60}
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                {/* Divider */}
                <div className="w-px h-8 bg-white/30"></div>
                
                {/* Company Logo 5 (Duplicate of first) */}
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/assets/images/home-page/herosection/company-icon1.png"
                    alt="Frame Digital Pvt Ltd"
                  width={160}
                  height={60}
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
