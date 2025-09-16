// import React from 'react'

import { Users } from "lucide-react";


function JobsCard({
  location,
  type,
  stipend,
  title,
  desc,
  applied,
}: {
  location: string;
  type: string;
  stipend: string;
  title: string;
  desc: string;
  applied: string;
})
 {
  return (
<div className="gradient-border px-5">
    <div className="flex justify-center items-center gap-5 mt-5">
        <button className="px-4 py-2 border rounded-xl">{location}</button>
        <button className="px-4 py-2 border rounded-xl">{type}</button>
        <button className="px-4 py-2 border rounded-xl">{stipend}</button>
    </div>

    <div className="mt-10 text-left">
        <h1 className="text-3xl font-mono text-white">{title}</h1>
        <p className="text-md text-gray-400 ">{desc}</p>
    </div>

    <div className="flex justify-between mt-5 mb-5 items-center">
        <button className="gradient-border">Apply Now</button>
        <div className="flex gap-2 justify-center items-center">
            <Users/>
        <p className="font-mono">{applied} applied</p>
        </div>
    </div>
  
</div>

  )
}

export default JobsCard
