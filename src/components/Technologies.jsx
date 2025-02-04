import { motion, time } from "framer-motion";
import React from "react";

const Technologies = () => {
  const techs = [
    {
      name: "react-original",
      gradient: "from-blue-500 to-cyan-500",
      nombre: "React",
      time: 0.3,
    },
    {
      name: "javascript-plain",
      gradient: "from-yellow-400 to-yellow-600",
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

  return (
    <section id="tecnologias" className="bg-[#dfdfdf]">
      <div className="text-gray-800 py-14 pb-28 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pr-20 border-y-2 border-[#ebebebda]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-600 font-semibold tracking-wide text-3xl mb-10"
        >
          Tecnologias
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-9 gap-10 justify-center items-center">
          {techs.map((tech, index) => (
            <div key={index} className="relative">
              <motion.div
                key={index}
                custom={tech.time}
                variants={{
                  hidden: (i) => ({
                    scale: 0.82,
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                      delay: i * 0.2,
                    },
                  }),
                  visible: (i) => ({
                    scale: 0.9,
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                      ease: "easeOut",
                      delay: i * 0.3,
                    },
                  }),
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex flex-col items-center p-3 rounded-lg shadow-lg transition transform hover:scale-110 duration-200 overflow-hidden"
              >
                {/* ZOOM */}
                {/* <motion.div
                  hidden: (i) => ({
                    scale: 0.5, // Comienza más pequeño
                    opacity: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: i * 0.2,
                    },
                  }),
                  visible: (i) => ({
                    scale: 1, // Llega a su tamaño normal
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: i * 0.2,
                    },
                  }),
                }}
                 */}
                {/* DCHA A IZQ */}
                {/* 
                  hidden: (i) => ({
                    x: 100,
                    opacity: 0,
                    transition: {
                      duration: 1,
                      ease: "easeOut",
                      delay: i * 0.12,
                    },
                  }),
                  visible: (i) => ({
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                      delay: i * 0.12,
                    },
                  }),
                }}
                */}
                {/* <div
                className={`relative flex flex-col items-center p-3 rounded-lg shadow-lg transition transform hover:scale-110 duration-200 overflow-hidden `}
              > */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-35`}
                ></div>

                <i
                  className={`devicon-${tech.name} colored text-5xl relative`}
                ></i>
                {/* </div> */}
              </motion.div>

              <a className="text-center">{tech.nombre}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
