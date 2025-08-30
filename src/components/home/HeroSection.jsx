import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* 기존 오버레이 (어둡게 처리) */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0" style={{ backdropFilter: "blur(3px)" }}></div> {/* 여기! */}
      <div className="relative z-10 px-4">
        <h1 className="font-serif text-4xl md:text-6xl font-bold">오늘, 당신의 무드는 어떤가요?</h1>
        <p className="mt-4 text-lg md:text-xl">일상을 채우는 감각적인 선택</p>
        <button className="mt-8 px-8 py-3 bg-off-white text-dark-charcoal font-semibold rounded-full hover:bg-gray-200 transition-colors">
          Shop New Collection
        </button>
      </div>
    </section>
  );
}
