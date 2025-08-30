import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Footer는 직접 만들어보세요!
import HomePage from "../app/page";
// import ProductListPage from './pages/ProductListPage'; // 상품 목록 페이지

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-off-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* 다른 페이지 라우트 추가 */}
            {/* <Route path="/apparel" element={<ProductListPage />} /> */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
