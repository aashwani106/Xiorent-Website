"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import {motion,AnimatePresence} from "framer-motion"

export default function Faq() {
    const [show, setShow] = useState<number | null>(null);
const Questions = [
  {
    q: "What services does Xiorent offer?",
    a: "We provide end-to-end digital solutions including custom web design and development, mobile app development (iOS and Android), UI/UX design, and full-stack engineering. We also offer technical consulting and long-term product maintenance."
  },
  {
    q: "How do I get started with a project at Xiorent?",
    a: "Simply reach out through our contact form or email us with a brief description of your idea or requirements. We’ll schedule a free discovery call to understand your goals, then share a proposal and timeline for your approval."
  },
  {
    q: "What is the typical turnaround time for a project?",
    a: "Timelines vary based on project size and complexity. Small websites often take 4–6 weeks, while larger web or mobile applications may range from 8–16 weeks. We provide a detailed schedule after the initial consultation."
  },
  {
    q: "How much do your services cost?",
    a: "Costs depend on project scope and technology stack. After our discovery call we provide a transparent quote with a fixed or milestone-based payment plan so you know the budget before we start."
  }
];

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
  {Questions.map((item, idx) => (
    <div key={idx}>
      <div
        className="flex justify-between items-center bg-black/20 border border-gray-600 rounded-full px-6 py-4 hover:border-white transition"
      >
        <span className="text-base md:text-lg">{item.q}</span>
        <ChevronDown
          onClick={() => setShow(show === idx ? null : idx)}
          className={`text-gray-300 transition-transform duration-300 ${
            show === idx ? "rotate-180" : ""
          }`}
          size={20}
        />
      </div>

      <AnimatePresence>
        {show === idx && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border border-gray-600 rounded-xl mt-4 px-6 py-4 overflow-hidden"
          >
            <span className="text-md font-mono bg-clip-text text-transparent bg-gradient-to-b from-purple-600 to to-blue-600 ">{item.a}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</div>
    </section>
  );
}
