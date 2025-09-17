"use client";
import React from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Heading from "../Common/Heading";

const CompanyDirector = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/60 to-slate-900 p-[120px]">
      <div className="max-w-7xl mx-auto relative">
        
        {/* NAVBAR */}
        <nav className="flex justify-between items-center mb-20">
          <ul className="flex w-full justify-between text-base text-gray-400">
            <li>
              <a
                href="#"
                className="relative pb-2 font-semibold text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white"
              >
                Board of Directors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
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

        {/* Header: COMPANY + Directors */}
        <Heading heading={"Company"} subHeading={"Directors"}/>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: profile image */}

            <div className="relative w-96 h-96">
              <img
                src="./shivam.png" // transparent PNG
                alt="Shivam Goswami"
                className="relative w-72 h-72 object-contain left-40 top-20"
              />
            </div>


          {/* RIGHT: content */}
          <div className="text-gray-300">
            {/* Name image */}
            <div className="mb-6">
              <img
                src="./Shivam Goswami.png"
                alt="Shivam Goswami"
                className="w-90 h-auto object-contain mx-auto lg:mx-0"
              />
              <p className="text-lg text-gray-400 mt-4">Director &amp; CEO</p>
            </div>

            {/* Description */}
            <div className="space-y-5 text-sm md:text-base leading-relaxed text-gray-300">
              <p>
                Shivam Goswami is the Director and Chief Executive Officer of
                Xiorent Technologies Private Limited, a next-generation
                technology company focused on driving digital innovation across
                artificial intelligence, automation, blockchain, AR/VR, IoT, and
                full-stack software development. He founded the company with a
                mission to transform the digital landscape through creativity,
                purpose-driven innovation, and user-centric design.
              </p>
              <p>
                Shivam has led Xiorent from inception with a vision to develop
                advanced technology platforms that challenge conventional norms
                and deliver practical, high-impact solutions. His leadership has
                been instrumental in positioning Xiorent as a forward-thinking
                player in emerging tech—spearheading efforts in machine
                learning, immersive technologies, and intelligent automation. At
                Xiorent, he fosters an environment where creativity thrives and
                diverse perspectives fuel progress. His belief in the power of
                experimentation and continuous learning drives the company's
                agile, solution-driven mindset.
              </p>
              <p>
                Shivam also actively engages with thought leaders, strategic
                partners, and global technology forums to contribute to the
                broader discourse on digital transformation. He is dedicated to
                using technology as a catalyst for growth, empowerment, and
                positive change—both in business and society.
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

export default CompanyDirector;
