"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TechStackSection() {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  const techStacks = [
    {
      id: 1,
      name: "Node.Js",
      logo: "/assets/images/home-page/nodejs.png",
      description: "Our languages node s. website empowers individuals",
    },
    {
      id: 2,
      name: "Swift",
      logo: "/assets/images/home-page/swift.png",
      description: "Our Technology AI Generator website empowers individuals",
    },
    {
      id: 3,
      name: "React",
      logo: "/assets/images/home-page/react.png",
      description: "Our Technology AI Generator website empowers individuals",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStacks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [techStacks.length]);

  const currentTech = techStacks[currentTechIndex];

  return (
    // bg-[#0a0b14]
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative ">
       oka
       
    </section>
  );
}
