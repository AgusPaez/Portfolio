import React, { useState } from "react";
import { motion } from "framer-motion";
//import constants
import { projects, techs } from "../../constants/constants";
import Modal from "../Modal";

const ProjectsMobile = () => {
  // States
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Open modal function and set Project to send
  const OpenModal = (project) => {
    setModal(!modal);
    setSelectedProject(project);
  };
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
          backgroundAttachment: "scroll",
        }}
      ></div>

      <div className="relative h-full w-full max-w-7xl mx-auto px-8 sm:px-6 lg:px-10 lg:pr-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-600 font-semibold text-center tracking-wide text-3xl mb-10"
        >
          Mis Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="bg-gray-100 h-auto shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
                <div className="grid grid-cols-1 gap-3 mb-3 mt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 flex bottom-3 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-900 transition-all hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                      className="rotate-180"
                    >
                      <path
                        fill="currentColor"
                        d="M6.325 12.85q-.225-.15-.337-.375T5.874 12t.113-.475t.337-.375l8.15-5.175q.125-.075.263-.112T15 5.825q.4 0 .7.288t.3.712v10.35q0 .425-.3.713t-.7.287q-.125 0-.262-.038t-.263-.112z"
                      />
                    </svg>
                    <a className="my-auto">Ver proyecto</a>
                  </a>
                  <a
                    onClick={() => OpenModal(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500 flex gap-2 cursor-pointer bottom-3 left-4 text-white px-6 py-2.5 rounded-lg text-sm hover:bg-gray-700 transition-all hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                      />
                    </svg>
                    <a className="my-auto">Más información</a>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {modal && <Modal onClose={OpenModal} project={selectedProject} />}
    </section>
  );
};

export default ProjectsMobile;
