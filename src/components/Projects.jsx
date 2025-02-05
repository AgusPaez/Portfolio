import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Un sitio de compras con React, Tailwind y Firebase.",
    image: "https://source.unsplash.com/400x300/?ecommerce,website",
    link: "https://tuecommerce.com",
  },
  {
    id: 2,
    title: "Dashboard de Análisis",
    description: "Panel de control con gráficos interactivos y API.",
    image: "https://source.unsplash.com/400x300/?dashboard,analytics",
    link: "https://tudashboard.com",
  },
  {
    id: 3,
    title: "Blog Personal",
    description: "Un blog moderno con Next.js y CMS integrado.",
    image: "https://source.unsplash.com/400x300/?blog,website",
    link: "https://tublog.com",
  },
];

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="relative py-12 bg-gray-800 bg-fixed bg-center bg-cover bg-no-repeat"
    >
      {/* Fondo con desenfoque y fijo */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          filter: "blur(2px)",
          backgroundAttachment: "fixed", // Mantener la imagen fija al hacer scroll
        }}
      ></div>

      {/* Contenido de la sección */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pr-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-600 font-semibold text-center tracking-wide text-3xl mb-10"
        >
          Mis Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gray-800 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-900 transition-all"
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

export default Projects;
