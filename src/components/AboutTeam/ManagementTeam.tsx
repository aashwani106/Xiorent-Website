"use client";
import React from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Heading from "../Common/Heading";
const CompanyTeam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/60 to-slate-900 p-[120px]">
      <div className="max-w-7xl mx-auto relative">
        
        {/* NAVBAR */}
        <nav className="flex justify-between items-center mb-20">
          <ul className="flex w-full justify-between text-base text-gray-400">
            <li>
              <a href="/about/bod" className="hover:text-white transition">
                Board Of Directors
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative pb-2 font-semibold text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400"
              >
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Code of Ethics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Jobs
              </a>
            </li>
          </ul>
        </nav>

        {/* Header: MANAGEMENT + Team */}
        <Heading heading="Management" subHeading="Team" />

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: profile image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/annanya.png" // update with your actual image
                alt="Ananya Banerjee"
                className="w-[450px] h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="text-gray-300">
            {/* Name & Role */}
            <div className="mb-6">
              <h3 className="text-gray-400 text-sm uppercase mb-2">
                Hello, My Name Is
              </h3>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                Ananya Banerjee
              </h1>
              <p className="text-lg text-gray-400 mt-2">
                Technical Team Manager
              </p>
            </div>

            {/* Description */}
            <div className="space-y-5 text-sm md:text-base leading-relaxed text-gray-300">
              <p>
                Ananya Banerjee is the Technical Team Manager at Xiorent Technologies,
                leading cutting-edge projects in AI, automation, and software development. 
                With a sharp eye for detail and a passion for innovation, she ensures seamless 
                execution and drives technical excellence across the team.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-5 mt-10">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 bg-black/30 hover:border-blue-500 transition"
              >
                <Facebook className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 bg-black/30 hover:border-blue-400 transition"
              >
                <Linkedin className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 bg-black/30 hover:border-blue-300 transition"
              >
                <Twitter className="w-4 h-4 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTeam;
