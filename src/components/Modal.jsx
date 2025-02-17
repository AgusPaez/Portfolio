import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { techs } from "../constants/constants";

const Modal = ({ onClose, project }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);
  const images = isMobile
    ? [
        project.image2m,
        project.image3m,
        project.image4m,
        project.image5m,
        project.image6m,
        project.image7m,
      ]
    : [
        project.image2,
        project.image3,
        project.image4,
        project.image5,
        project.image6,
        project.image7,
      ];

  const filteredImages = images.filter(Boolean);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center w-full h-full bg-[#2c2c2cbe] bg-opacity-50">
      <div className="text-gray-700 relative w-[100%] h-[94vh] md:w-[85%] md:h-[90%] overflow-auto md:p-6 py-14 md:py-12 bg-white rounded-lg shadow-lg z-50 bg-gradient-to-b from-[#cacacafb] to-[#f1f1f1fd]">
        <button
          className="absolute top-4 right-8 text-xl hover:scale-125 transition-all duration-300 cursor-pointer"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.4em"
            height="1.5em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M960 1024H832q-27 0-45.5-19T768 960V576q0-27-19-45.5T704 512H512v229q0 11-13.5 19t-32 7.5T437 755L18 427Q0 409 0 383.5T18 340L437 13Q448 1 466.5.5t32 7.5T512 28v228h256q106 0 181 75t75 181v448q0 26-19 45t-45 19"
            />
          </svg>
        </button>

        {/* Swiper Carrusel */}
        {filteredImages.length > 0 && (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-full max-h-[100%] md:h-auto mb-0 md:mb-4"
          >
            {filteredImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-[97%] md:w-[70%] mx-auto  md:h-1/5 md:max-h-1/5 md:object-cover  rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Título y descripción */}
        <div className="mx-[5%] md:mx-[15%]">
          <h2 className="text-[26px] font-semibold mb-2 ">{project.title} </h2>
          <p className="mb-4 text-[17px]">{project.description}</p>
          <p className="mb-4 text-[15px]">{project.description2}</p>

          {/* Tecnologías */}
          <h2 className="text-[20px] font-semibold mb-2 ">
            Tecnologias utilizadas
          </h2>
          <div className="flex flex-wrap gap-1.5 ">
            {project.techs.map((techName) => {
              const tech = techs.find((t) => t.name === techName);
              return tech ? (
                <div
                  key={techName}
                  className={`px-2 py-1 text-sm font-medium text-white rounded-lg bg-gradient-to-r ${tech.gradient} flex items-center gap-2`}
                >
                  <i className={`devicon-${tech.name} colored text-lg`}></i>
                  {tech.nombre}
                </div>
              ) : null;
            })}
          </div>
          <div className=" mt-9 md:flex md:justify-between grid grid-cols-1 gap-4">
            <a
              href="https://github.com/AgusPaez/PsicoApp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-500 flex cursor-pointer text-white px-5 py-3 rounded-lg text-sm hover:bg-gray-700 transition-all hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.35 16.88c0 .07-.07.12-.17.12S9 17 9 16.88s.08-.12.17-.12s.18.05.18.12m-1-.15c0 .07 0 .15.14.17a.15.15 0 0 0 .2-.07c0-.07 0-.14-.14-.17s-.18 0-.2.07m1.42-.05c-.09 0-.15.08-.14.16s.09.11.19.09s.15-.09.14-.16s-.09-.1-.19-.09M11.9 4A7.83 7.83 0 0 0 4 12.07A8.29 8.29 0 0 0 9.47 20c.41.07.56-.19.56-.4v-2s-2.26.5-2.74-1c0 0-.36-1-.89-1.21c0 0-.74-.52.05-.51a1.67 1.67 0 0 1 1.24.85a1.69 1.69 0 0 0 2.36.69a1.83 1.83 0 0 1 .51-1.11c-1.8-.21-3.62-.47-3.62-3.66A2.54 2.54 0 0 1 7.7 9.7a3.2 3.2 0 0 1 .08-2.24c.68-.22 2.23.89 2.23.89a7.46 7.46 0 0 1 4.05 0s1.55-1.11 2.23-.89a3.14 3.14 0 0 1 .08 2.24a2.6 2.6 0 0 1 .83 1.95c0 3.2-1.9 3.45-3.7 3.66a2 2 0 0 1 .5 1.5v2.77a.42.42 0 0 0 .56.4A8.22 8.22 0 0 0 20 12.07A8 8 0 0 0 11.9 4M7.14 15.41v.17a.12.12 0 0 0 .17 0s0-.11 0-.18s-.13-.03-.17.01m-.35-.27s0 .1.07.13a.09.09 0 0 0 .14 0s0-.1-.07-.13s-.12-.03-.14 0m1 1.18v.21c0 .07.17.08.21 0s0-.14 0-.21s-.13-.05-.17 0Zm-.37-.49v.2c0 .08.14.11.19.08a.16.16 0 0 0 0-.21c-.05-.08-.13-.11-.19-.07"
                />
              </svg>
              <a className="my-auto"> Código </a>
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 flex text-white px-5 py-3 rounded-lg text-sm hover:bg-gray-900 transition-all hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="rotate-180"
              >
                <path
                  fill="currentColor"
                  d="M6.325 12.85q-.225-.15-.337-.375T5.874 12t.113-.475t.337-.375l8.15-5.175q.125-.075.263-.112T15 5.825q.4 0 .7.288t.3.712v10.35q0 .425-.3.713t-.7.287q-.125 0-.262-.038t-.263-.112z"
                />
              </svg>
              <a className="my-auto">Ver Proyecto</a>
            </a>
            <a
              onClick={onClose}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 cursor-pointer  flex gap-2 text-white px-6 py-3 rounded-lg text-sm hover:bg-gray-900 transition-all hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 1024 1024"
                className="my-auto"
              >
                <path
                  fill="currentColor"
                  d="M960 1024H832q-27 0-45.5-19T768 960V576q0-27-19-45.5T704 512H512v229q0 11-13.5 19t-32 7.5T437 755L18 427Q0 409 0 383.5T18 340L437 13Q448 1 466.5.5t32 7.5T512 28v228h256q106 0 181 75t75 181v448q0 26-19 45t-45 19"
                />
              </svg>
              <a className="my-auto">Volver</a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
