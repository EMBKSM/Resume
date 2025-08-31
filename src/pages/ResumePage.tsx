import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import MoreInfo from "../components/MoreInfo"; // 1. 여기서 MoreInfo를 불러와서
import Footer from "../components/Footer";

const ResumePage = () => {
  return (
    <div className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          <Hero />
          <hr className="border-light-border dark:border-dark-border" />
          <Skills />
          <hr className="border-light-border dark:border-dark-border" />
          <Projects />
          <hr className="border-light-border dark:border-dark-border" />

          {/* 2. 여기에 <MoreInfo />를 실제로 사용해야 합니다. */}
          <MoreInfo />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ResumePage;
