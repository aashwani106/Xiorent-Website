import { Laptop, MenuSquare, Paintbrush, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Categories() {
  return (
    <div className='relative overflow-hidden'>

        <div
        className="absolute -bottom-32 -right-32 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-20 pointer-events-none"
      />

        <Image src= "/assets/cat-head1.png"
            alt="heading"
            width={600}
            height={490}
            className="mx-auto mt-5 mb-10"
        />

<div className="flex justify-between p-10  text-white min-h-screen">
{/* Left Section */}
<div className="w-1/3 bg-black/80 rounded-xl p-6 shadow-lg">
<h2 className="text-2xl font-mono font-semibold mb-6">Popular Categories</h2>
<ul className="space-y-4">
<li className="flex justify-between items-center border-b border-gray-700 pb-2">
<span>UI/UX Designer</span>
<span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white text-sm px-3 py-1 rounded-full">
6
</span>
</li>
<li className="flex justify-between items-center border-b border-gray-700 pb-2">
<span>Frontend Developer</span>
<span className="bg-gray-800 px-3 py-1 rounded-full">12</span>
</li>
<li className="flex justify-between items-center border-b border-gray-700 pb-2">
<span>Backend Developer</span>
<span className="bg-gray-800 px-3 py-1 rounded-full">14</span>
</li>
<li className="flex justify-between items-center">
<span>Full Stack Developer</span>
<span className="bg-gray-800 px-3 py-1 rounded-full">8</span>
</li>
</ul>
</div>


{/* Right Section */}
<div className="w-2/3 grid grid-cols-2 gap-6 px-6">
<div className="bg-gray-800 hover:bg-gray-700 transition rounded-lg p-6 flex flex-col justify-center items-start cursor-pointer">
<Paintbrush className="w-8 h-8 mb-3" />
<h3 className="text-lg font-medium">UI/UX Designer</h3>
</div>
<div className="bg-gray-800 hover:bg-gray-700 transition rounded-lg p-6 flex flex-col justify-center items-start cursor-pointer">
<Users className="w-8 h-8 mb-3" />
<h3 className="text-lg font-medium">Human Resources</h3>
</div>
<div className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition rounded-lg p-6 flex flex-col justify-center items-start cursor-pointer shadow-lg">
<Laptop className="w-8 h-8 mb-3" />
<h3 className="text-lg font-medium">Software Developers</h3>
</div>
<div className="bg-gray-800 hover:bg-gray-700 transition rounded-lg p-6 flex flex-col justify-center items-start cursor-pointer">
<MenuSquare className="w-8 h-8 mb-3" />
<h3 className="text-lg font-medium">Blockchain Developer</h3>
</div>
<div className="col-span-2 flex justify-center mt-6">
<button className="px-5 border border-white rounded-2xl flex items-center gap-2 hover:bg-white hover:text-black transition">
Get Started →
</button>
</div>
</div>
</div>
        <Image src= "/assets/cat-head2.png"
            alt="heading"
            width={600}
            height={490}
            className="mx-auto mt-5 mb-10"
        />
      
        <Image src= "/assets/cat-head3.png"
            alt="heading"
            width={900}
            height={490}
            className="mx-auto mb-10"
        />
      
    </div>
  )
}

export default Categories
