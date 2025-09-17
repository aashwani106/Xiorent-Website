// import React from 'react'

import Faq from "@/components/layout/Faq"
import ExploreProjects from "@/components/our-creations/ExploreProjects"
import ProjectForm from "@/components/our-creations/ProjectForm"
import Image from "next/image"

function page() {
  return (
    <div className="min-h-screen p-3 pt-24 relative z-10">
      <div className="relative overflow-hidden w-full mx-auto text-center">
        <div
          className="absolute -bottom-32 -right-32 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-20 pointer-events-none"
        />
        <div
          className="absolute -bottom-32 -left-32 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-20 pointer-events-none"
        />
        <div
          className="absolute top-32 -right-32 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-30 pointer-events-none"
        />
        <div
          className="absolute top-32 -left-32 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-30 pointer-events-none"
        />

        <Image src="/assets/tech-creations.png"
          alt="heading"
          width={700}
          height={490}
          className="mx-auto mt-5"
        />

        <Image
          src="/assets/creations-bg.png"
          alt="creations"
          width={1600}               // large intrinsic width for better quality
          height={900}
          priority
          className="
        mt-16
        w-full                
        h-auto               
        rounded-2xl
        shadow-2xl
        object-cover        
        transition-transform
        duration-300
      "
        />
      </div>

      <ExploreProjects />

      <ProjectForm />

      <Faq />
    </div>

  )
}

export default page
