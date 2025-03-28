import React, { useState, useEffect } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [deviceType, setDeviceType] = useState(
    window.innerWidth <= 768 ? "mobile" : "desktop"
  );

  const getThreshold = () => (window.innerWidth < 768 ? 0.3 : 0.8);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(window.innerWidth <= 768 ? "mobile" : "desktop");
    };

    window.addEventListener("resize", handleResize);

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: getThreshold() }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("resize", handleResize);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="bg-[#f0f0f0bb] dark:bg-[#18181893] border-b-[1px] dark:border-b-[#ffffff15] dark:backdrop-blur-[19px] sticky top-0 z-50 w-full  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pr-20 ">
        <div className="flex justify-between h-[90px] ">
          <div className="relative dark:">
            <div className="absolute left-23 top-8 px-2 ">
              <a className="w-28 text-black dark:text-[#f0f0f0f1] text-[26px] opacity-0 md:opacity-100 md:text-3xl relative text-center cursor-pointer hover:text-gray-900 py-4 pb-1 text-md hover:tracking-widest font-medium link-hover-underline transition-all duration-700">
                AP
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 9 }}
              animate={{ opacity: 1, scale: 1, rotate: 9 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 16 }}
              className="bg-[#444444b6] dark:bg-[#bbbbbbb6] h-12 w-12 rounded-[10px] absolute md:left-8 left-4 md:top-5 top-6"
            >
              <motion.div
                initial={{ opacity: 0, y: -20, rotate: 82 }}
                animate={{ opacity: 1, y: 0, rotate: 82 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 87 }}
                className="bg-[#292929e0] dark:bg-[#dfdfdfb6] h-[37px] w-[37px] rounded-[10px] mx-auto mt-[6px]"
              >
                <motion.div
                  initial={{ rotate: 90 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-right mt-1"
                >
                  <a className="text-right dark:text-black dark:font-extrabold">
                    {"</>"}
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {deviceType === "desktop" ? (
            <div className="hidden text-center md:flex py-3 my-3 m-3 p-3 pr-0 mr-0 gap-4">
              <Button
                text={"Sobre mi"}
                target={"about_me"}
                time={0.1}
                active={activeSection === "about_me"}
              />
              <Button
                text={"Tecnologias"}
                target={"tecnologias"}
                time={0.3}
                active={activeSection === "tecnologias"}
              />
              <Button
                text={"Experiencia"}
                target={"experience"}
                time={0.5}
                active={activeSection === "experience"}
              />
              <Button
                text={"Proyectos"}
                target={"proyectos"}
                time={0.7}
                active={activeSection === "proyectos"}
              />
              <Button
                text={"Contacto"}
                target={"contacto"}
                time={0.9}
                active={activeSection === "contacto"}
              />
              <ThemeSwitcher />
            </div>
          ) : (
            <div className="-mr-2 flex justify-spac md:hidden ">
              <div className="my-auto w-full pr-22">
                <ThemeSwitcher />
              </div>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none "
              >
                <span className="sr-only">Abrir menú</span>
                {isOpen ? (
                  <div className="pr-4">
                    <svg
                      className="block h-7 w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="pr-4">
                    <svg
                      className="block h-7 w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Button
            text={"Sobre mi"}
            target={"about_me"}
            time={0.1}
            active={activeSection === "about_me"}
          />
          <Button
            text={"Tecnologias"}
            target={"tecnologias"}
            time={0.3}
            active={activeSection === "tecnologias"}
          />
          <Button
            text={"Experiencia"}
            target={"experience"}
            time={0.5}
            active={activeSection === "experience"}
          />
          <Button
            text={"Proyectos"}
            target={"proyectos"}
            time={0.5}
            active={activeSection === "proyectos"}
          />
          <Button
            text={"Contacto"}
            target={"contacto"}
            time={0.7}
            active={activeSection === "contacto"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
