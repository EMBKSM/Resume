import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import MoreInfo from "../components/MoreInfo"; // 1. 여기서 MoreInfo를 불러와서
import Footer from "../components/Footer";

// src/pages/ResumePage.tsx

const ResumePage = () => {
  return (
    // 1. 이 div에 py-12 (상하 안쪽 여백) 클래스를 추가합니다.
    <div className="min-h-screen pcb-background bg-cover text-light-text py-12">
      <div
        // 2. 여기서 my-12 (상하 바깥 여백) 클래스를 삭제합니다.
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 
                   py-12 bg-light-card/80 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-black ring-opacity-5"
      >
        <Header />
        <main>
          <Hero />
          <hr className="border-light-border" />
          <Skills />
          <hr className="border-light-border" />
          <Projects />
          <hr className="border-light-border" />
          <MoreInfo />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ResumePage;
