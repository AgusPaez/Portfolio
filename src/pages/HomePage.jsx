import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Technologies from "../components/Technologies";
import Experience from "../components/Experience";
import ScrollToTopButton from "../components/ScrollToTopButton";
//mobile
import AboutMeMobile from "../components/mobile/AboutMeMobile";
import TechnologiesMobile from "../components/mobile/TechnologiesMobile";
import ContactMobile from "../components/mobile/ContactMobile";
import ProjectsMobile from "../components/mobile/ProjectsMobile";
import ExperienceMobile from "../components/mobile/ExperienceMobile";
//bg
import fondoImg from "../assets/fondoOpt.jpeg";

function isMobileView() {
  return window.innerWidth <= 768 ? "mobile" : "desktop";
}

const deviceType = isMobileView();

function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-1000 ease-in-out">
      <Navbar />
      <main className="relative h-[100%]">
        {deviceType === "desktop" ? (
          <div
            className="absolute top-0 left-0 w-full h-full z-0 bg-gray-200 dark:bg-[#24242e] transition-colors duration-1000 ease-in-out"
            // style={{
            //   backgroundImage: `url(${fondoImg})`,
            //   filter: "blur(2px)",
            //   backgroundAttachment: "fixed",
            // }}
          ></div>
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-full z-0 bg-gray-200 dark:bg-[#24242e]"
            // style={{
            //   backgroundImage: `url(${fondoImg})`,
            //   filter: "blur(2px)",
            //   backgroundAttachment: "fixed",
            // }}
          ></div>
        )}

        <div className="relative ">
          {deviceType === "mobile" ? (
            <>
              <AboutMeMobile />
              <TechnologiesMobile /> <ExperienceMobile /> <ProjectsMobile />
              <ContactMobile />
            </>
          ) : (
            <>
              <AboutMe /> <Technologies /> <Experience /> <Projects />
              <Contact />
            </>
          )}
          <ScrollToTopButton />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
