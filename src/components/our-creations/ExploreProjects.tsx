import Image from "next/image";

function ExploreProjects() {
  const projects = [
    {
      title: "Mount Kenya Wildlife Conservancy",
      type: "Website",
      img: "/assets/explore-project1.png",
      desc: "An organization committed to safeguarding our planet’s biodiversity while paving the way for future generations.",
    },
    {
      title: "African Congress on Conservation",
      type: "Web Application",
      img: "/assets/explore-project2.png",
      desc: "A congress for building a resilient future in Africa through Conservation Agriculture and Sustainable Mechanisation.",
    },
    {
      title: "Paya",
      type: "Mobile Application (iOS, Android)",
      img: "/assets/explore-project5.png",
      desc: "A simple, completely open-bank account to pay, save and manage your money in a single place.",
    },
    {
      title: "QNET Say NO! campaign",
      type: "Website",
      img: "/assets/explore-project4.png",
      desc: "A website to mobilize stakeholder action and awareness against human trafficking and illegal migration schemes.",
    },
    {
      title: "The Newmark Group Limited",
      type: "Web Application",
      img: "/assets/explore-project5.png",
      desc: "A leading African integrated marketing communications agency that helps brands achieve maximum reach.",
    },
  ];

  return (
    <div className="relative overflow-hidden text-white py-16">
        <div
        className="absolute -top-32 -right-32 w-[450px] h-[400px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-20 pointer-events-none"
      />
      <div
        className="absolute -top-32 -left-32 w-[450px] h-[400px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-20 pointer-events-none"
      />
         <div
        className="absolute -bottom-32 -right-32 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-40 pointer-events-none"
      />
       <div
        className="absolute bottom-[700px] left-32 w-[660px] h-[800px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto text-center mb-16">
        <Image src= "/assets/ideas-head.png"
              alt="heading"
              width={600}
              height={490}
              className="mx-auto mt-5"
              />
        
        <p className="mt-5 text-md text-gray-300">Explore Our Popular Projects</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-24">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center md:items-start gap-8`}
          >
            {/* Image */}
            <div className="z-10 w-full md:w-1/2">
              <Image
                src={p.img}
                alt={p.title}
                width={600}
                height={400}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-sm text-blue-300 uppercase tracking-wide">
                {p.type}
              </p>
              <h3 className="text-2xl font-semibold mt-2">{p.title}</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreProjects;
