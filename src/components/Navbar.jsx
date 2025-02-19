import React, { useState, useEffect } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [deviceType, setDeviceType] = useState(
    window.innerWidth <= 768 ? "mobile" : "desktop"
  );

  const getThreshold = () => (window.innerWidth < 768 ? 0.2 : 0.8);

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
    <nav className="bg-[#f0f0f0bb] shadow-lg sticky top-0 z-50 w-full backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pr-20">
        <div className="flex justify-between h-[90px]">
          <div className="relative">
            <div className="absolute left-23 top-8 px-2">
              <a className="w-28 text-black text-3xl relative text-center cursor-pointer hover:text-gray-900 py-4 pb-1 text-md hover:tracking-widest font-medium link-hover-underline transition-all duration-700">
                AP
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 9 }}
              animate={{ opacity: 1, scale: 1, rotate: 9 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 16 }}
              className="bg-[#444444b6] h-12 w-12 rounded-[10px] absolute left-8 top-5"
            >
              <motion.div
                initial={{ opacity: 0, y: -20, rotate: 82 }}
                animate={{ opacity: 1, y: 0, rotate: 82 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 87 }}
                className="bg-[#292929e0] h-[37px] w-[37px] rounded-[10px] mx-auto mt-[6px]"
              >
                <motion.div
                  initial={{ rotate: 90 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-right mt-1"
                >
                  <a className="text-right">{"</>"}</a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {deviceType === "desktop" ? (
            <div className="hidden text-center md:flex py-3 my-3 m-3 p-3 pr-0 mr-0 gap-4">
              <Button
                text={"SOBRE MI"}
                target={"about_me"}
                time={0.1}
                active={activeSection === "about_me"}
              />
              <Button
                text={"TECNOLOGIAS"}
                target={"tecnologias"}
                time={0.3}
                active={activeSection === "tecnologias"}
              />
              <Button
                text={"PROYECTOS"}
                target={"proyectos"}
                time={0.5}
                active={activeSection === "proyectos"}
              />
              <Button
                text={"CONTACTO"}
                target={"contacto"}
                time={0.7}
                active={activeSection === "contacto"}
              />
            </div>
          ) : (
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Abrir menú</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
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
                ) : (
                  <svg
                    className="block h-6 w-6"
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
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Button
            text={"SOBRE MI"}
            target={"about_me"}
            time={0.1}
            active={activeSection === "about_me"}
          />
          <Button
            text={"TECNOLOGIAS"}
            target={"tecnologias"}
            time={0.3}
            active={activeSection === "tecnologias"}
          />
          <Button
            text={"PROYECTOS"}
            target={"proyectos"}
            time={0.5}
            active={activeSection === "proyectos"}
          />
          <Button
            text={"CONTACTO"}
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
