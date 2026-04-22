import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";

const filters = [
  "Todos",
  "Landing Pages",
  "Websites",
  "Tarjetas Digitales",
  "Aplicaciones",
];

export const projects = [
  {
    title: "WebSite con autogestión",
    client: "Automotores Acosta",
    image: "/acosta.png",
    url: "https://automotoresacosta.com",
    category: "Websites",
    type: "Sistema",
    description:
      "Plataforma web con sistema de gestión de contenido, consumo de APIs y lógica frontend personalizada.",
    features: [
      "Autogestión de contenido",
      "Consumo de APIs",
      "Arquitectura frontend",
    ],
    tech: ["React", "Node.js", "API REST"],
    highlight: true,
  },
  {
    title: "WebSite UX/UI",
    client: "Geely Grupo Acosta",
    image: "/geely.png",
    url: "https://geely-grupoacosta.com",
    category: "Websites",
    type: "UX/UI",
    description:
      "Diseño y desarrollo enfocado en experiencia de usuario, optimización visual y conversión.",
    features: ["Diseño responsive", "Optimización UX", "Identidad visual"],
    tech: ["React", "Tailwind"],
  },
  {
    title: "Web UX/UIs",
    client: "Pedernal Argentina",
    image: "/pedernal.png",
    url: "https://pedernalargentina.com",
    category: "Websites",
    type: "UX/UI",
    description:
      "Desarrollo de sitio moderno centrado en identidad visual y experiencia de usuario.",
    features: ["Diseño adaptable", "UI moderna", "Branding"],
    tech: ["React", "CSS"],
  },
  {
    title: "Landing page con sistema de autogestión",
    client: "TRG San Juan",
    image: "/trg.png",
    url: "https://trgsj.com",
    category: "Landing Pages",
    type: "Sistema",
    description:
      "Sistema web con funcionalidades dinámicas, formularios personalizados y lógica de gestión.",
    features: [
      "Formularios dinámicos",
      "Gestión de contenido",
      "Lógica personalizada",
    ],
    tech: ["JavaScript", "Backend"],
  },
  {
    title: "Tarjeta Digital: 18 años",

    client: "Eventos personalizados",
    image: "/18.png",
    category: "Tarjetas Digitales",
    type: "App",
    description:
      "Tarjeta digital con sistema RSVP e integración con Google Scripts para almacenamiento.",
    features: [
      "Confirmación de asistencia (RSVP)",
      "Integración con Google Scripts",
      "Diseño interactivo",
    ],
    tech: ["React", "Google Scripts"],
    url: "https://invitacion-18-octavio.vercel.app",
  },
  {
    title: "Tarjeta Digital: 15 años",

    client: "Eventos personalizados",
    image: "/15.png",
    category: "Tarjetas Digitales",
    type: "App",
    description:
      "Tarjeta digital con sistema RSVP e integración con Google Scripts para almacenamiento.",
    features: [
      "Confirmación de asistencia (RSVP)",
      "Integración con Google Scripts",
      "Diseño interactivo",
    ],
    tech: ["React", "Google Scripts"],
    url: "https://invitacion-xv-daira.vercel.app/",
  },
];
export default function Proyectos() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
    <section className="relative w-full min-h-screen bg-[#020617] text-white px-6 py-20 overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          filter: "blur(5px)",
        }}
      />

      {/* Oscurecer para contraste */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold mb-3">Proyectos Destacados</h2>
          <p className="text-gray-100 text-sm">
            Una selección de mis trabajos más recientes en diferentes categorías
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14 px-2">
          {filters.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(item)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition whitespace-nowrap cursor-pointer hover:shadow-[0_0_10px_rgba(0,119,181,0.8)] ${
                activeFilter === item
                  ? "bg-[rgba(0,141,218,0.8)] text-black shadow-[0_0_10px_rgba(0,119,181,0.8)]"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] gap-6 max-w-6xl mx-auto min-h-[830px]">
          <AnimatePresence mode="popLayout">
            {(activeFilter === "Todos"
              ? projects
              : projects.filter((p) => p.category === activeFilter)
            ).map((project, index) => {
              const layouts = [
                "col-span-2",
                "col-span-1",
                "col-span-1 row-span-2",
                "col-span-2",
              ];

              const layout = layouts[index % layouts.length];

              return (
                <m.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  whileHover={{ scale: 1.03 }}
                  className={`relative rounded-lg hover:border-[1px] hover:border-[rgba(0,141,218,0.8)] overflow-hidden group cursor-pointer lg:${layout}`}
                >
                  {/* Imagen */}
                  <img
                    src={project.image}
                    className="w-full h-full scale-108  sm:h-full object-cover transition duration-500 group-hover:scale-115 group-hover:blur-[2px]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-500" />

                  {/* CONTENIDO */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="text-lg font-semibold opacity-100 md:translate-y-10 group-hover:-translate-y-0 transition duration-500">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-300 mt-1 line-clamp-2 md:opacity-0 group-hover:opacity-100   transition duration-700">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3 md:opacity-0 group-hover:opacity-100   transition duration-700">
                      {project.tech.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-1 bg-black/40 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      target="blank"
                      href={project.url}
                      className="mt-3 text-xs text-teal-300 hover:underline cursor-pointer md:opacity-0 group-hover:opacity-100  transition duration-700"
                    >
                      Ver proyecto →
                    </a>
                  </div>
                </m.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
