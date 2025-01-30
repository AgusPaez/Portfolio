import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, target, time }) => {
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
    >
      <button
        onClick={scrollToTarget}
        className="relative text-center text-gray-500 cursor-pointer hover:text-gray-900 px-3 py-4 pb-1 text-md hover:tracking-widest font-medium link-hover-underline transition-all duration-700"
      >
        {text}
      </button>
    </motion.div>
  );
};

export default Button;
