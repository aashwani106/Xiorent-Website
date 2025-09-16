import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Faq() {
  return (
    <section className="relative overflow-hidden text-white px-6 py-16">

        <div
        className="absolute -bottom-32 -left-32 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-40 pointer-events-none"
      />

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Image src= "/assets/Faq-text.png"
                      alt="heading"
                      width={600}
                      height={490}
                      className="mx-auto mt-5"
                      />
      </div>

      {/* FAQ list */}
      <div className="max-w-5xl mx-auto space-y-4">
        {[
          "What services does Xiorent offer?",
          "How do I get started with a project at Xiorent?",
          "What is the typical turnaround time for a project?",
          "How much do your services cost?",
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-black/20 border border-gray-600 rounded-full px-6 py-4 hover:border-white transition"
          >
            <span className="text-base md:text-lg">{item}</span>
            <ChevronDown className="text-gray-300" size={20} />
          </div>
        ))}
      </div>
    </section>
  );
}
