// app/layout.jsx

import "./globals.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer"; // Footer 불러오기

// ... metadata는 동일

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Footer 추가 */}
      </body>
    </html>
  );
}
