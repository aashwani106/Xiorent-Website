import Image from "next/image";

const CreateTogether = () => {

  return (
    <div className="mt-10 flex justify-center items-center gap-20 bg-center bg-no-repeat bg-cover"
    style={{ backgroundImage: "url('/assets/wave-bg.png')" }}
    >
<div className="text-center">

         <Image src= "/assets/ceate-head1.png"
                                  alt="heading"
                                  width={600}
                                  height={490}
                                  className="mx-auto mt-5 mb-10"
                                  />

              <button className="border px-5 py-2 rounded-full">
                let&apos;s Connect 
              </button>
                                  </div>

        <div>
            <form className="bg-white/15 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl space-y-6">
  {/* Name */}
  <div>
    <label className="block text-sm mb-2">Full Name</label>
    <input
      type="text"
      placeholder="Aarushi Mehta"
      className="w-full bg-transparent border border-gray-500 rounded-full px-4 py-2 focus:outline-none focus:border-blue-400"
    />
  </div>

  {/* Phone */}
  <div>
    <label className="block text-sm mb-2">Phone Number</label>
    <input
      type="text"
      placeholder="9876543210"
      className="w-full bg-transparent border border-gray-500 rounded-full px-4 py-2 focus:outline-none focus:border-blue-400"
    />
  </div>

  {/* Resume Upload */}
  <div>
    <label className="block text-sm mb-2">Upload Resume</label>
    <input
      type="file"
      accept=".pdf,.doc,.docx"
      className="w-full bg-transparent border border-gray-500 rounded-full px-4 py-2
                 text-gray-300 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:bg-gradient-to-r file:from-blue-500 file:to-purple-600
                 file:text-white file:cursor-pointer
                 focus:outline-none focus:border-blue-400"
    />
  </div>

  
</form>

        </div>
        

    </div>
  );
};

export default CreateTogether;