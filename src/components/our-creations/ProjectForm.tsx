import { ArrowRight, CircleCheckBig } from "lucide-react";

function ProjectForm() {
  return (
    <div className="relative overflow-hidden text-white px-6 py-16">
       {/* <div
        className="absolute -top-32 -right-32 w-[550px] h-[200px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-40 pointer-events-none"
      /> */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left text area */}
        <div>
          <h4 className="text-sm uppercase tracking-wide border-b border-blue-500 inline-block pb-1">
            Get In Touch
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
            Let’s Talk For your <br />
            <span className="bg-gradient-to-b from-purple-800 to-blue-500
             bg-clip-text text-transparent">Next Projects</span>
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Discuss a project or just want to say hi? Connect with me via email
            or through a phone call.
          </p>

          <ul className="mt-6 space-y-3 text-gray-200">
            {[
              "1.5+ Years of Experience",
              "Professional App & Web Designers",
              "Mobile Apps Developers",
              "Fullstack Developers",
              "Technical Mentors",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
<CircleCheckBig className="text-indigo-500"/>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right form area */}
        <form
          className="bg-white/15 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                placeholder="Aarushi"
                className="w-full bg-transparent border border-gray-500 rounded-full px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Mehta"
                className="w-full bg-transparent border border-gray-500 rounded-full px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Aarushimehta@123"
                className="w-full bg-transparent border border-gray-500 rounded-full px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="xxxxxxxxxx"
                className="w-full bg-transparent border border-gray-500 rounded-full px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Message For Us!</label>
            <textarea
              placeholder="Feel free to Connect"
              rows={4}
              className="w-full bg-transparent border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-400"
            />
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full font-medium hover:from-blue-400 hover:to-purple-500 transition"
          >
            Let’s Connect
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProjectForm;
