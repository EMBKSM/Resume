import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import ResumePage from "./pages/ResumePage.tsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
  const location = useLocation();
  const displayLocation = useRef(location);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (location.pathname !== displayLocation.current.pathname) {
      isAnimating.current = true;
      displayLocation.current = location;
      setTimeout(() => {
        isAnimating.current = false;
      }, 500);
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<ResumePage />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
