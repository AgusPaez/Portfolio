const techs = [
  {
    name: "react-original",
    gradient: "from-blue-600 to-cyan-800",
    nombre: "React",
    time: 0.3,
  },
  {
    name: "javascript-plain",
    gradient: "from-yellow-600 to-yellow-700",
    nombre: "JavaScript",
    time: 0.7,
  },
  {
    name: "typescript-plain",
    gradient: "from-blue-400 to-blue-700",
    nombre: "TypeScript",
    time: 1.1,
  },
  {
    name: "mongodb-plain",
    gradient: "from-green-400 to-green-700",
    nombre: "MongoDB",
    time: 1.5,
  },
  {
    name: "html5-plain",
    gradient: "from-orange-500 to-red-500",
    nombre: "HTML",
    time: 1.9,
  },
  {
    name: "css3-plain",
    gradient: "from-blue-500 to-indigo-500",
    nombre: "CSS",
    time: 2.3,
  },
  {
    name: "tailwindcss-original",
    gradient: "from-teal-400 to-teal-600",
    nombre: "TailwindCss",
    time: 2.7,
  },
  {
    name: "angularjs-plain",
    gradient: "from-red-500 to-red-700",
    nombre: "Angular",
    time: 3.1,
  },
  {
    name: "nodejs-plain",
    gradient: "from-green-500 to-green-700",
    nombre: "Node.Js",
    time: 3.5,
  },
];

const projects = [
  {
    id: 1,
    title: "Psico App",
    description: "Un sitio web que permite el manejo de pacientes",
    image:
      "https://blog.magezon.com/wp-content/uploads/2022/03/image-32-1024x526.png",
    image2:
      "https://i.pinimg.com/736x/bd/e7/01/bde701ce79f7ddda2dfb7b6886eb221b.jpg",
    link: "https://tuecommerce.com",
    techs: ["react-original", "tailwindcss-original", "firebase-plain"],
    time: 0.4,
  },
  {
    id: 2,
    title: "Dashboard de Análisis",
    description: "Panel de control con gráficos interactivos y API.",
    image:
      "https://blog.magezon.com/wp-content/uploads/2022/03/image-32-1024x526.png",
    image2:
      "https://i.pinimg.com/736x/bd/e7/01/bde701ce79f7ddda2dfb7b6886eb221b.jpg",
    link: "https://tudashboard.com",
    techs: [
      "react-original",
      "typescript-plain",
      "nodejs-plain",
      "mongodb-plain",
    ],
    time: 0.7,
  },
  {
    id: 3,
    title: "Blog Personal",
    description: "Un blog moderno con Next.js y CMS integrado.",
    image:
      "https://blog.magezon.com/wp-content/uploads/2022/03/image-32-1024x526.png",
    image2:
      "https://i.pinimg.com/736x/bd/e7/01/bde701ce79f7ddda2dfb7b6886eb221b.jpg",
    link: "https://tublog.com",
    techs: ["nextjs-original", "typescript-plain", "tailwindcss-original"],
    time: 0.9,
  },
];

const ProjectsMobile = () => {
  return (
    <section
      id="proyectos"
      className="relative py-12 bg-gray-800 bg-fixed bg-center bg-cover bg-no-repeat"
    >
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          filter: "blur(2px)",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="relative h-full w-full max-w-7xl mx-auto px-8 sm:px-6 lg:px-10 lg:pr-20 z-10">
        <h2 className="text-gray-600 font-semibold text-center tracking-wide text-3xl mb-10">
          Mis Proyectos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-100 h-[32rem] shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={project.image2}
                  alt={project.title}
                  className="w-full h-64 object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="px-3 pb-1 pt-0.5 m-2 mb-1 min-h-11 h-1/2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 my-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 ">
                  {project.techs.map((techName) => {
                    const tech = techs.find((t) => t.name === techName);
                    return tech ? (
                      <div
                        key={techName}
                        className={`px-1 py-0.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r ${tech.gradient} flex items-center gap-2`}
                      >
                        <i
                          className={`devicon-${tech.name} colored text-lg`}
                        ></i>
                        {tech.nombre}
                      </div>
                    ) : null;
                  })}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 absolute bottom-3 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-900 transition-all hover:scale-105"
                >
                  Ver Proyecto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMobile;
