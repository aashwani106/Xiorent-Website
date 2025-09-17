// import React from 'react'

import Image from "next/image"

function Alerts() {
  return (
    <div className="relative overflow-hidden flex justify-center items-center px-10">
        <div
        className="absolute -top-32 -right-32 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-20 pointer-events-none"
      />

      <Image src= "/assets/JobAlerts.png"
                                      alt="heading"
                                      width={600}
                                      height={490}
                                      className="mx-auto mt-5"
                  />

        <div>
            <Image src= "/assets/alert-head1.png"
                                      alt="heading"
                                      width={600}
                                      height={490}
                                      className="mx-auto mt-5"
                  />

<div className="relative w-full mt-20">
  <input
    type="text"
    placeholder="Enter Email"
    className="border rounded-full w-full py-6 px-4 pr-28" // <-- extra right padding
  />

  {/* Button inside the input */}
  <button
    className="absolute top-1/2 right-2 -translate-y-1/2
               px-14 py-4 rounded-full bg-gradient-to-r from-white to-gray-400
               text-black text-sm font-medium hover:from-gray-600 hover:to-gray-400
               transition"
  >
    Subscribe
  </button>
</div>
        </div>
    </div>
  )
}

export default Alerts
