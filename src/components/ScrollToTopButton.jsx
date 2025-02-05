import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // Muestra la flecha si el scroll es mayor a 300px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-12 right-10 bg-gray-800 text-gray-300 hover:text-black cursor-pointer rounded-full shadow-lg hover:bg-gray-300 transition-all duration-500"
      aria-label="Volver arriba"
    >
      {/* Flecha SVG (sin necesidad de instalar react-icons) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3.7em"
        height="3.7em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.5 10.473v4.412q0 .212.144.356t.357.144t.365-.15t.153-.37v-4.392l1.766 1.766q.14.14.344.13t.344-.15t.14-.347t-.14-.341l-2.388-2.37q-.243-.242-.566-.242t-.565.243L9.065 11.55q-.14.14-.14.335q0 .194.14.334t.348.14t.34-.14zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
        />
      </svg>
    </motion.button>
  );
};

export default ScrollToTopButton;
