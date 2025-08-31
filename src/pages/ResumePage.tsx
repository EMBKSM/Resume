import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import MoreInfo from "../components/MoreInfo";
import Footer from "../components/Footer";

const ResumePage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen pcb-background bg-cover text-light-text py-12 page ${
        visible ? "page-enter-active" : ""
      }`}
    >
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 
                   py-12 bg-dark-card/80 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-black ring-opacity-5"
      >
        <Header />
        <main>
          <Hero />
          <hr className="border-dark-border" />
          <Skills />
          <hr className="border-dark-border" />
          <Projects />
          <hr className="border-dark-border" />
          <MoreInfo />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ResumePage;
