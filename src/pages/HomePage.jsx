import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Technologies from "../components/Technologies";
import ScrollToTopButton from "../components/ScrollToTopButton";

function HomePage() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="relative h-[100%]">
        <div
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            filter: "blur(2px)",
            backgroundAttachment: "fixed",
          }}
        ></div>

        <div className="relative z-10">
          <AboutMe />
          <Technologies />
          <Projects />
          <Contact />
          <ScrollToTopButton />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
