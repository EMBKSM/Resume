import { Routes, Route } from "react-router-dom";
import ResumePage from "./pages/ResumePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ResumePage />} />
      <Route path="/project/:projectId" element={<ProjectDetailPage />} />
    </Routes>
  );
}

export default App;
