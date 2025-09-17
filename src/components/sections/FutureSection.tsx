"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FutureSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative  ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Future Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src="/assets/images/home-page/future.png"
                alt="Future with Xiorent"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <div className="space-y-2">
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{
                  background: "linear-gradient(90deg, #C21CF9 0%, #4A14FE 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Future
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                With Xiorent
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-white/90 text-lg leading-relaxed">
                At Xiorent, we believe the future is built on innovation, intelligence, and bold ideas. As a forward-thinking tech partner, we transform concepts into cutting-edge digital solutions that empower businesses to stay ahead in a rapidly evolving world.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                From AI to custom software, our technologies are designed to be future-ready – scalable, secure, and smart. With Xiorent by your side, you're not just keeping up with the future – you're leading it.
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>

            {/* View More Button */}
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full font-medium text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View more
                <span className="text-xl">→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
