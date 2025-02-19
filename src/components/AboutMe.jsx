import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import image from "../assets/image.png";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 },
  },
};

const AboutMe = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <section
        id="about_me"
        className="section w-full h-auto md:h-[42rem] bg-[#cecece] py-10 md:py-16 bg-fixed bg-center bg-cover bg-no-repeat max-w-[81rem] mx-auto px-4 sm:px-6 lg:px-10 lg:pr-20  2xl:max-w-[86.5rem]"
      >
        <m.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <m.img
            src={image}
            alt="Foto de perfil"
            className="w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] object-cover rounded-full shadow-lg mb-6"
            loading="lazy"
            variants={containerVariants}
            whileHover={{ scale: 1.1 }}
          />

          <m.span
            className="text-2xl font-semibold text-gray-800 mb-4"
            variants={containerVariants}
          >
            Frontend Developer
          </m.span>

          <m.span
            className="text-lg font-medium text-gray-700 mb-6"
            variants={containerVariants}
          >
            Hola, soy Agustin Paez 👋
          </m.span>

          <m.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            Soy un Frontend Developer con pasión por el código limpio y las
            interacciones fluidas. Mi objetivo es crear sitios web que no solo
            se vean bien, sino que también se sientan increíbles al usarlos.
            Cuando no estoy programando, me encuentras explorando nuevas
            herramientas o disfrutando de un buen café. ☕
          </m.p>
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default AboutMe;
