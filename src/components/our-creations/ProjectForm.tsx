import { ArrowRight } from "lucide-react";

function ProjectForm() {
  return (
    <div 
      className="relative overflow-hidden text-white px-6 py-16"
      style={{
        backgroundImage: "url('/assets/images/home-page/bg.png')",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        {/* Left section - Promotional content */}
        <div className="space-y-8 md:col-span-2">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span 
              style={{
                background: 'linear-gradient(90deg, #C21CF9 0%, #4A14FE 50%, #01EFFE 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Let's Create together
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Book our services and let us render your universe
          </p>

          <button className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
            Let's Connect
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Right section - Contact form */}
        <div 
          className="p-6"
          style={{
            borderRadius: '28.458px',
            border: '2.134px solid rgba(88, 130, 193, 0.49)',
            background: 'rgba(88, 130, 193, 0.28)',
            backdropFilter: 'blur(8.893229484558105px)'
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
          
          <form className="space-y-6 px-2">
            <div>
              <label className="block text-white text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Aarushi Mehta"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/60"
                defaultValue=""
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="+91 8976542367"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/60"
                defaultValue=""
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-2">Message For Us!</label>
              <textarea
                placeholder="Fee free to Connect"
                rows={4}
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/60 resize-none"
                defaultValue=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;
