import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import image from "../assets/image.png";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const AboutMe = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <section id="about_me" className="section-divider">
        <div className="w-full h-auto md:h-[37rem] max-w-6xl mx-auto py-18 px-6 flex flex-col md:flex-row gap-20 ">
          {" "}
          <m.div
            className="flex-1 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <m.h2
              className="text-[40px] font-bold dark:font-semibold text-gray-900 dark:text-[#EAEAEA]"
              variants={containerVariants}
            >
              Hola, soy{" "}
              <span className="text-blue-900 dark:text-blue-400">
                Agustin Paez
              </span>
            </m.h2>
            <m.h3
              className="text-[28px] text-gray-700 dark:text-[#cfcfcf] mt-0"
              variants={containerVariants}
            >
              Desarrollador Frontend.
            </m.h3>
            <m.p
              className="text-md text-gray-600 dark:text-[#c9c9c9] mt-4 "
              variants={containerVariants}
            >
              Desarrollador frontend recientemente egresado con conocimientos en
              tecnologias como: {""}
              <span className="font-semibold text-blue-900 dark:text-blue-400">
                React.js, Angular y TypeScript
              </span>
              . Apasionado por la creación de interfaces intuitivas, accesibles
              y de alto rendimiento.
            </m.p>
            <m.p
              className="text-md text-gray-600 dark:text-[#c9c9c9] mt-4 "
              variants={containerVariants}
            >
              Estoy en busqueda de nuevas oportunidades para aplicar mis
              habilidades, aprender de un equipo experimentado y seguir
              creciendo como profesional. Tengo experiencia desarrollando
              proyectos personales y académicos que integran tecnologías como{" "}
              <span className="font-semibold text-blue-900 dark:text-blue-400">
                Node.js, MongoDB y MariaDB {""}
              </span>
              entre otras.
            </m.p>
            <m.p
              className="text-md text-gray-600 mt-4 dark:text-[#c9c9c9]"
              variants={containerVariants}
            >
              Comprometido con mi constante crecimiento, me mantengo actualizado
              con las últimas tendencias del desarrollo web, valorando el código
              limpio y escalable.
            </m.p>
            <div className="flex gap-4 ">
              <m.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-black flex gap-2 mt-6 text-4xl"
              >
                <a
                  href="https://www.linkedin.com/in/agustin-paez/"
                  className="pr-1 mr-1 scale-110 transition-transform hover:scale-125 duration-300"
                >
                  <i className="devicon-linkedin-plain text-[32px] dark:text-[#c9c9c9] dark:hover:text-white"></i>
                </a>
                <a
                  href="https://github.com/AgusPaez"
                  className="pr-1 mr-1  scale-110 transition-transform hover:scale-125"
                >
                  <i className="devicon-github-original text-[32px] dark:text-[#c9c9c9] dark:hover:text-white"></i>
                </a>
              </m.div>
            </div>
          </m.div>
          <m.img
            src={image}
            alt="Foto de perfil"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
            loading="lazy"
            variants={containerVariants}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </section>
    </LazyMotion>
  );
};

export default AboutMe;
