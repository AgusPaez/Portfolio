import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Agustin Paez. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/AgusPaez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-3 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/agustin-paez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-3 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:agus.123.paez@gmail.com"
            className="text-gray-400 hover:text-white mx-3 transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
