// import React from 'react'

import Image from "next/image"

function Culture() {
  return (
    <div className="relative overflow-hidden mt-20 text-center px-10">
      <div
        className="absolute -bottom-32 -left-32 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-20 pointer-events-none"
      />

      <Image src= "/assets/Culture-head1.png"
                          alt="heading"
                          width={600}
                          height={490}
                          className="mx-auto mt-5"
      />

      <div className="flex justify-center items-center mt-10 max-w-6xl mx-auto px-4 gap-10">
  <Image
    src="/assets/people.png"
    alt="heading"
    width={600}
    height={500}
    className="object-contain"
  />

  <div className="text-left max-w-lg">
    <h1 className="text-4xl mb-5 ">About Our Work Culture</h1>
    <p className="text-lg text-gray-200 leading-relaxed">
      Work culture defines the shared values, beliefs, <br /> behaviors,
      and practices that shape how <br /> employees interact and work
      together within <br /> an organization.
      <br />
      <br />
      A strong and positive work culture fosters <br />
      collaboration, inclusivity, accountability, and <br /> innovation.
      It impacts employee satisfaction, <br /> productivity, and retention,
      influencing everything <br /> from communication style to
      decision-making <br /> processes.
    </p>
  </div>
</div>

    </div>
  )
}

export default Culture
