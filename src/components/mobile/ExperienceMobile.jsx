import React, { useState } from "react";
import { motion } from "framer-motion";
import suinfiImg from "../../assets/suinfi.jpg";

const Experience = () => {
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
        <a className=" bg-gradient-to-br from-[#efefef] via-[#ffffff] to-[#efefef] border-[0.5px] shadow border-gray-300 rounded-2xl py-0.5 px-4 dark:bg-gradient-to-br dark:from-[#364050] dark:via-[#3a4455] dark:to-[#364050] dark:border-gray-700 dark:text-[#EAEAEA]">
          {" "}
          Experiencia
        </a>
      </motion.div>
      <motion.div
        className="dark:bg-gradient-to-br dark:from-[#384253] dark:via-[#28333f] dark:to-[#384253] dark:border-gray-600 dark:border-solid relative brightness-105 hover:brightness-105 bg-gradient-to-br from-[#e9e9fc] via-[#ededfd] to-[#e9e9fc] grid rounded-2xl shadow-lg text-left h-[28rem] border border-white overflow-hidden"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.4 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="w-[100%] h-full items-center">
          <div className="h-[16%]">
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-[#EAEAEA] mt-5">
              Suinfi
            </h1>
          </div>

          <div className="h-[75%] flex justify-center items-center">
            <img
              src={suinfiImg}
              className="rounded-full w-[93px] h-[93px] object-cover border-2 border-white dark:border-gray-600 dark:brightness-90"
              alt="Suinfi"
            />
          </div>
        </div>

        <div className="w-[100%] mt-5 text-gray-800">
          <h2 className="text-xl text-center font-semibold text-gray-800 dark:text-[#EAEAEA]">
            Programador Frontend <br></br>
            <span className="text-gray-500 text-sm dark:text-gray-500 ">
              (pasantía)
            </span>
          </h2>
          <ul className="py-6 px-2 space-y-2 text-center">
            <li className="flex items-center space-x-1 last:border-b-0 ">
              <span className="text-gray-700 dark:text-[#cfcfcf] font-medium">
                🔹 Trabajo realizado: diseño y codigo de eccomerce, landing
                page.
              </span>
            </li>
            <li className="flex items-center space-x-1 last:border-b-0">
              <span className="text-gray-700 dark:text-[#cfcfcf] font-medium">
                🔹Tecnologias utilizadas: Angular, React, Tailwindcss, figma
              </span>
            </li>
          </ul>
        </div>
        <div className="w-[100%]  mt-1 mb-10 text-center text-gray-600 dark:text-gray-400 text-sm">
          <span>Febr 2024 - mar 2024</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
