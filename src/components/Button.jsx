import React, { useState } from "react";
import { motion } from "framer-motion";

const Button = ({ text, target, time, active }) => {
  const [deviceType, setDeviceType] = useState(
    window.innerWidth <= 768 ? "mobile" : "desktop"
  );

  const scrollToTarget = () => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {deviceType === "desktop" ? (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: time }}
          className="relative group md:ml-0 ml-2.5"
        >
          <div
            className={`bg-gray-700 rounded-4xl w-[13.5px]  h-[13.5px] absolute bottom-2 left-[-7px] 
        transition-opacity duration-500 ${
          active
            ? "opacity-100 animate-pulse"
            : "opacity-0 group-hover:opacity-100 "
        }`}
          >
            <a className="text-[7px] relative bottom-2 font-extrabold">
              {"</>"}
            </a>
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
      ) : (
        <div className="relative group ml-7.5">
          {active ? (
            <div
              className={`bg-gray-700 rounded-4xl w-[13.5px] h-[13.5px] absolute bottom-[9px] left-[-7px] 
        transition-opacity duration-500`}
            >
              <a className="text-[8px] relative bottom-2 font-extrabold">
                {"</>"}
              </a>
            </div>
          ) : (
            <></>
          )}

          <button
            onClick={scrollToTarget}
            className={`relative text-center text-gray-500 cursor-pointer px-3 py-4 pb-1 text-md hover:tracking-widest font-medium transition-all duration-700     ${
              active
                ? "link-hover-underline-active text-gray-800"
                : "hover:text-gray-800 link-hover-underline"
            }`}
          >
            {text}
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
