import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const ContactMobile = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const templateParams = {
    from_name: formData.nombre,
    from_email: formData.email,
    message: formData.mensaje,
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert("⚠️ Por favor, completa todos los campos.");
      return;
    }

    const serviceID = "service_wfa98v7";
    const templateID = "template_003smen";
    const publicKey = "_bUS1eViWkO3tnwdF";

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        console.log(templateParams);
        alert("✅ ¡Mensaje enviado con éxito!");
        setFormData({ nombre: "", email: "", mensaje: "" });
      })
      .catch((error) => {
        console.error("❌ Error al enviar el mensaje:", error);
        alert("❌ Hubo un problema al enviar el mensaje. Intenta de nuevo.");
      });
  };

  return (
    <section id="contacto" className="pb-10 md:h-[32rem]">
      <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pr-20 md:flex ">
        <div className="md:w-1/2 py-8 md:pr-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-600 dark:text-[#EAEAEA] font-semibold tracking-wide text-[27.5px] md:text-3xl mb-10 text-center md:text-left"
          >
            Sigamos en contacto.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-500 dark:text-[#cfcfcf] text-center md:text-left"
          >
            La colaboracion y la conexion son fundamentales en este mundo
            digital. Tambien puedes seguirme en mi redes sociales para estar al
            tanto de las novedades.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-black mt-12 text-center md:text-left md:mt-16 text-4xl "
          >
            <i className="devicon-linkedin-plain dark:text-[#c9c9c9] dark:hover:text-white">
              {" "}
              {""}
            </i>
            <i className="devicon-github-original dark:text-[#c9c9c9] dark:hover:text-white "></i>
          </motion.div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 md:px-7 gap-6 md:gap-1 py-8 grid grid-cols-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="bg-[#ffffff] dark:bg-[#c9c9c9] border-[#ececec] hover:border-gray-300 text-gray-800 px-5 placeholder:text-gray-600 h-[150%] md:h-[65%] w-full hover:tracking-wider transition-all duration-300"
              placeholder="Nombre"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#ffffff] dark:bg-[#c9c9c9] border-[#ececec] hover:border-gray-300 text-gray-800 px-5 placeholder:text-gray-600 h-[150%] md:h-[65%] w-full hover:tracking-wide transition-all duration-300"
              placeholder="Correo Electronico"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="bg-[#ffffff] dark:bg-[#c9c9c9] border-[#ececec] hover:border-gray-300 text-gray-800 px-5 placeholder:text-gray-600 h-[250%] md:h-[185%] w-full pt-3  hover:tracking-wide transition-all duration-300 resize-none"
              placeholder="Escribi tu mensaje aca"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
            type="submit"
            className=" mt-20 pt-6 h-[50%] md:mx-0 mx-auto"
          >
            <button className="h-14  bg-gray-700 mr-auto px-16 text-center cursor-pointer hover:scale-105 hover:bg-gray-900 hover:tracking-widest transition-all duration-500 ">
              Enviar
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactMobile;
