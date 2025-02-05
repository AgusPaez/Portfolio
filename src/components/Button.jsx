import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, target, time, active }) => {
  const scrollToTarget = () => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: time }}
      className="relative group"
    >
      <div
        className={`bg-gray-700 rounded-4xl w-[13.5px] h-[13.5px] absolute bottom-2 left-[-7px] 
        transition-opacity duration-500 ${
          active
            ? "opacity-100 animate-pulse"
            : "opacity-0 group-hover:opacity-100 "
        }`}
      >
        <a className="text-[7px] relative bottom-2 font-extrabold">{"</>"}</a>
      </div>

      <button
        onClick={scrollToTarget}
        className={`relative text-center text-gray-500 cursor-pointer px-3 py-4 pb-1 text-md hover:tracking-widest font-medium transition-all duration-700
          ${
            active
              ? "link-hover-underline-active text-gray-800"
              : "hover:text-gray-800 link-hover-underline"
          }`}
      >
        {text}
      </button>
    </motion.div>
  );
};

export default Button;
