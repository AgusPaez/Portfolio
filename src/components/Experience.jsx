import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../hooks/useDarkMode";
import suinfiImg from "../assets/suinfi.jpg";
const Experience = () => {
  const [hover, setHover] = useState(false);
  return (
    <section
      id="experience"
      className="text-gray-800 h-auto pb-20 md:h-[40rem] pt-[50px]  text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pr-20 border-b-[1.5px] border-[#89898940]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
        className=" tracking-wide font-light mt-5 flex justify-center mb-8 text-[32px] text-gray-700"
      >
        <a className="bg-gradient-to-br from-[#efefef] via-[#ffffff] to-[#efefef]  dark:bg-gradient-to-br dark:from-[#364050] dark:via-[#3a4455] dark:to-[#364050] border-[0.5px] shadow border-gray-300 dark:border-gray-700 rounded-2xl py-0.5 px-4 dark:text-[#EAEAEA]">
          {" "}
          Experiencia
        </a>
      </motion.div>

      <motion.div
        className=" relative brightness-105 dark:flex hidden justify-between rounded-2xl shadow-lg text-left mx-[15%] h-[16rem] py-3 px-2 border border-gray-600 border-solid overflow-hidden"
        initial={{
          opacity: 0,
          y: 50,
          background:
            "linear-gradient(to bottom right, #364050, #d4d6e4, #364050)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          background: hover
            ? "linear-gradient(to bottom right,#384253, #242d38, #384253) "
            : "linear-gradient(to bottom right, #252d38, #272f3b, #252d38 )",
        }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.4 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileHover={{ scale: 1.001 }}
      >
        <div className="w-[25%] h-full flex flex-col items-center">
          {/* Título principal con mayor jerarquía */}
          <div className="h-[16%]">
            <h1 className="text-3xl font-bold text-[#EAEAEA] mt-4">Suinfi</h1>
          </div>

          <div className="h-[75%] flex justify-center items-center">
            <img
              src={suinfiImg}
              className="rounded-full w-[93px] h-[93px] object-cover border-2 border-gray-600 brightness-90"
              alt="Suinfi"
            />
          </div>
        </div>

        <div className="w-[55%] mt-5 text-gray-800">
          <h2 className="text-xl font-semibold text-[#EAEAEA]">
            Programador Frontend{" "}
            <span className="text-gray-500 text-sm ">(pasantía)</span>
          </h2>
          <ul className="py-6 px-2 space-y-2">
            <li className="flex items-center space-x-1 last:border-b-0">
              <span className="text-[#cfcfcf] font-medium">
                🔹 Trabajo realizado: diseño y codigo de eccomerce, landing
                page.
              </span>
            </li>
            <li className="flex items-center space-x-1 last:border-b-0">
              <span className="text-[#cfcfcf] font-medium">
                🔹Tecnologias utilizadas: Angular, React, Tailwindcss, figma
              </span>
            </li>
          </ul>
        </div>
        <div className="w-[20%] flex mt-5.5 justify-start text-gray-400 text-sm">
          <span>Febr 2024 - mar 2024</span>
        </div>
      </motion.div>

      <motion.div
        className="relative dark:hidden brightness-105 hover:brightness-105 flex justify-between rounded-2xl shadow-lg text-left mx-[15%] h-[16rem] py-3 px-2 border border-white overflow-hidden"
        initial={{
          opacity: 0,
          y: 50,
          background:
            "linear-gradient(to bottom right, #d6d7ee, #d4d6e4, #d6d7ee)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          background: hover
            ? "linear-gradient(to bottom right, #dfdff5, #e1e1fa, #dfdff5)"
            : "linear-gradient(to bottom right, #e9e9fc, #ededfd, #e9e9fc)",
        }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.4 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileHover={{ scale: 1.001 }}
      >
        <div className="w-[25%] h-full flex flex-col items-center">
          {/* Título principal con mayor jerarquía */}
          <div className="h-[16%]">
            <h1 className="text-3xl font-bold text-gray-900 mt-4">Suinfi</h1>
          </div>

          <div className="h-[75%] flex justify-center items-center">
            <img
              src={suinfiImg}
              className="rounded-full w-[93px] h-[93px] object-cover border-2 border-white"
              alt="Suinfi"
            />
          </div>
        </div>

        <div className="w-[55%] mt-5 text-gray-800">
          <h2 className="text-xl font-semibold text-gray-800">
            Programador Frontend{" "}
            <span className="text-gray-600 text-sm ">(pasantía)</span>
          </h2>
          <ul className="py-6 px-2 space-y-2">
            <li className="flex items-center space-x-1 last:border-b-0">
              <span className="text-gray-700 font-medium">
                🔹 Trabajo realizado: diseño y codigo de eccomerce, landing
                page.
              </span>
            </li>
            <li className="flex items-center space-x-1 last:border-b-0">
              <span className="text-gray-700 font-medium">
                🔹Tecnologias utilizadas: Angular, React, Tailwindcss, figma
              </span>
            </li>
          </ul>
        </div>
        <div className="w-[20%] flex mt-5 justify-start text-gray-600 text-sm">
          <span>Febr 2024 - mar 2024</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
