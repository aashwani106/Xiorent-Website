"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TechnologyServicesSection() {
    const services = [
        {
            id: 1,
            title: "Application Development",
            image: "/assets/images/home-page/applicationDev.jpg",
        },
        {
            id: 2,
            title: "Website Development",
            image: "/assets/images/home-page/websiteDev.jpg",
        },
        {
            id: 3,
            title: "Software Development",
            image: "/assets/images/home-page/softwareDev.jpg",
        },
        {
            id: 4,
            title: "AR/VR Development",
            image: "/assets/images/home-page/arvrDev.jpg",
        },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#0a0b14] to-[#111827]">
            <div className="max-w-7xl mx-auto">
                {/* Main Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <span
                            className="block mb-2"
                            style={{
                                background: "linear-gradient(89deg, #C21CF9 15.41%, #4A14FE 53.14%, #01EFFE 90.86%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Bring Your Concepts to Life with Our
                        </span>
                        <span
                            className="block"
                            style={{
                                background: "linear-gradient(89deg, #C21CF9 15.41%, #4A14FE 53.14%, #01EFFE 90.86%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Innovative Technology Services
                        </span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
   {services.map((service, index) => (
     <motion.div
       key={service.id}
       className={`relative rounded-3xl overflow-hidden shadow-lg group h-72
         ${index % 2 === 0 ? "translate-y-4" : "-translate-y-4"}`}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: index * 0.1 }}
       viewport={{ once: true }}
     >
       {/* Title at Top */}
       <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
         <h3 className="text-lg font-semibold text-white text-center">
           {service.title}
         </h3>
       </div>

       {/* Image at Bottom */}
       <div className="relative w-full h-full">
         <Image
           src={service.image}
           alt={service.title}
           fill
           className="object-cover group-hover:scale-105 transition-transform duration-500"
           priority
         />
       </div>
     </motion.div>
   ))}
 </div>


                {/* View More Button */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full font-medium text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View More <span className="text-xl">→</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
