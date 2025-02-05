import React from "react";
import { motion } from "framer-motion";
import image from "../assets/image.png";

const AboutMe = () => {
  return (
    <section
      id="about_me"
      className="section w-full h-auto md:h-[40rem] bg-[#d4d4d4] py-10 md:py-16 bg-fixed bg-center bg-cover bg-no-repeat  max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pr-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <motion.img
          src={image}
          alt="Foto de perfil"
          className="w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] object-cover rounded-full  shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />

        <motion.span
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Frontend Developer
        </motion.span>

        <motion.span
          className="text-lg font-medium text-gray-700 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Hola, soy Agustin Paez 👋
        </motion.span>

        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          Soy un Frontend Developer con pasión por el código limpio y las
          interacciones fluidas. Mi objetivo es crear sitios web que no solo se
          vean bien, sino que también se sientan increíbles al usarlos. Cuando
          no estoy programando, me encuentras explorando nuevas herramientas o
          disfrutando de un buen café. ☕
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMe;
