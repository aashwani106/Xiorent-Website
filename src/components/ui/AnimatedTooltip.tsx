"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface AnimatedTooltipProps {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}

export const AnimatedTooltip = ({ items }: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className="flex -space-x-2">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden cursor-pointer">
            <Image
              src={item.image}
              alt={item.name}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          
          {hoveredIndex === idx && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div className="bg-black/80 backdrop-blur-sm text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap">
                <div className="font-semibold">{item.name}</div>
                <div className="text-white/70">{item.designation}</div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};
