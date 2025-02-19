import { motion, time } from "framer-motion";
import React from "react";
import { techs } from "../constants/constants";
import { tools } from "../constants/constants";

const Technologies = () => {
  return (
    <>
      <section
        id="tecnologias"
        className="bg-gradient-to-b  from-[#dfdfdf] to-[#cbcbcb]"
      >
        <div className="text-gray-800 pb-28 pt-[90px]  text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pr-20 border-b-[0.5px] border-[#ebebebda]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-600 font-semibold tracking-wide text-3xl mb-16"
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
                  className="relative flex flex-col items-center hover:brightness-125 p-3 rounded-lg shadow-lg transition transform hover:scale-110 duration-200 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-35`}
                  ></div>

                  <i
                    className={`devicon-${tech.name} colored text-5xl relative`}
                  ></i>
                </motion.div>

                <motion.a
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
                  className="relative text-center flex flex-col items-center p-2 m-1 text-md overflow-hidden"
                >
                  {tech.nombre}
                </motion.a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="tecnologias"
        className="bg-gradient-to-b  from-[#cbcbcb]  to-[#dfdfdf] border-b-2 border-[#ebebebda]"
      >
        <div className="text-gray-800 pb-28 pt-[90px] text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pr-20 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-600 font-semibold tracking-wide text-3xl mb-16 "
          >
            Herramientas
          </motion.div>
          <div className="grid grid-cols-6  gap-0 justify-center items-center">
            {tools.map((tool, index) => (
              <div key={index} className="relative">
                <motion.div
                  key={index}
                  custom={tool.time}
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
                  className="relative flex flex-col items-center p-3 mx-[22%] hover:brightness-125 rounded-lg shadow-lg transition transform hover:scale-110 duration-200 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-35 `}
                  ></div>
                  {tool.nombre === "Render" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3.1em"
                      height="3em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082c-.018.138-.045.272-.067.405c-.696 3.703-3.936 6.507-7.827 6.507a7.9 7.9 0 0 1-3.825-.979a.202.202 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244c-.12-3.084-2.61-5.603-5.682-5.75"
                      />
                    </svg>
                  ) : (
                    <i className={`devicon-${tool.name} text-5xl relative`}></i>
                  )}
                </motion.div>

                <motion.a
                  key={index}
                  custom={tool.time}
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
                  className="relative text-center flex flex-col items-center p-2 text-md overflow-hidden m-1"
                >
                  {tool.nombre}
                </motion.a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
