import React from "react";
import image from "../../assets/image.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 },
  },
};

const AboutMeMobile = () => {
  return (
    <section id="about_me" className="section-divider ">
      <div className="w-full h-auto max-w-6xl mx-auto pb-16 pt-6 px-6 md:flex-row gap-5 flex flex-col-reverse">
        {" "}
        <motion.div
          className="md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-[36px] font-bold text-gray-900 dark:text-[#EAEAEA]"
            variants={containerVariants}
          >
            Hola, soy{" "}
            <span className="text-blue-900 dark:text-blue-400">
              Agustin Paez
            </span>
          </motion.h2>
          <motion.h3
            className="text-[23px] text-gray-700 dark:text-[#cfcfcf] mt-0"
            variants={containerVariants}
          >
            Desarrollador Frontend.
          </motion.h3>
          <motion.p
            className="text-md text-gray-600 dark:text-[#c9c9c9] mt-4"
            variants={containerVariants}
          >
            Desarrollador frontend recientemente egresado con conocimientos en
            tecnologias como: {""}
            <span className="font-semibold text-blue-900 dark:text-blue-400">
              React.js, Angular y TypeScript
            </span>
            . Apasionado por la creación de interfaces intuitivas, accesibles y
            de alto rendimiento.
          </motion.p>
          <motion.p
            className="text-md text-gray-600 mt-4 dark:text-[#c9c9c9] "
            variants={containerVariants}
          >
            Estoy en busqueda de nuevas oportunidades para aplicar mis
            habilidades, aprender de un equipo experimentado y seguir creciendo
            como profesional. Tengo experiencia desarrollando proyectos
            personales y académicos que integran tecnologías como{" "}
            <span className="font-semibold text-blue-900 dark:text-blue-400">
              Node.js, MongoDB y MariaDB {""}
            </span>
            entre otras.
          </motion.p>
          <motion.p
            className="text-md text-gray-600 mt-4 dark:text-[#c9c9c9]"
            variants={containerVariants}
          >
            Comprometido con mi constante crecimiento, me mantengo actualizado
            con las últimas tendencias del desarrollo web, valorando el código
            limpio y escalable.
          </motion.p>
          <div className="flex gap-4 ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-black flex gap-2 mt-6 text-4xl"
            >
              <a
                href="https://www.linkedin.com/in/agustin-paez/"
                target="_blank"
                className="pr-1 mr-1 scale-110 transition-transform hover:scale-125 duration-300 dark:text-[#c9c9c9] dark:hover:text-white"
              >
                <i className="devicon-linkedin-plain text-[32px]"></i>
              </a>
              <a
                href="https://github.com/AgusPaez"
                target="_blank"
                className="pr-1 mr-1  scale-110 transition-transform hover:scale-125 dark:text-[#c9c9c9] dark:hover:text-white"
              >
                <i className="devicon-github-original text-[32px] "></i>
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.img
          src={image}
          alt="Foto de perfil"
          className=" h-60 object-cover rounded-lg shadow-lg"
          loading="lazy"
          variants={containerVariants}
          whileHover={{ scale: 1.05 }}
        />
      </div>
    </section>
  );
};

export default AboutMeMobile;
