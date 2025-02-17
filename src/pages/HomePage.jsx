import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Technologies from "../components/Technologies";
import ScrollToTopButton from "../components/ScrollToTopButton";
//mobile
import AboutMeMobile from "../components/mobile/AboutMeMobile";
import TechnologiesMobile from "../components/mobile/TechnologiesMobile";
import ContactMobile from "../components/mobile/ContactMobile";
import ProjectsMobile from "../components/mobile/ProjectsMobile";
//bg
import fondoImg from "../assets/fondoOpt.jpeg";

function isMobileView() {
  return window.innerWidth <= 768 ? "mobile" : "desktop";
}

const deviceType = isMobileView();

function HomePage() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="relative h-[100%]">
        {deviceType === "desktop" ? (
          <div
            className="absolute top-0 left-0 w-full h-full z-0"
            style={{
              backgroundImage: `url(${fondoImg})`,
              filter: "blur(2px)",
              backgroundAttachment: "fixed",
            }}
          ></div>
        ) : (
          <></>
        )}

        <div className="relative ">
          {deviceType === "mobile" ? (
            <>
              <AboutMeMobile />
              <TechnologiesMobile /> <ProjectsMobile /> <ContactMobile />
            </>
          ) : (
            <>
              <AboutMe /> <Technologies /> <Projects />
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
