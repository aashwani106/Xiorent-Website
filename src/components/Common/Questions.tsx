"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services does Xiorent offer?",
      answer: " ",
    },
    {
      question: "How do I get started with a project at Xiorent?",
      answer: " ",
    },
    {
      question: "What is the typical turnaround time for a project?",
      answer: " ",
    },
    {
      question: "How much do your services cost?",
      answer: " ",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-purple-600 to-blue-300 bg-clip-text text-transparent mb-4">
            Frequently asked questions
          </h1>
          <p className="text-gray-300 text-lg">Have any question? We got you</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-[50px] overflow-hidden transition-all duration-300 hover:border-purple-400/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-inset"
              >
                <span className="text-white text-lg font-medium group-hover:text-purple-300 transition-colors duration-200">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-all duration-300 group-hover:text-purple-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 border-t border-white/5">
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
