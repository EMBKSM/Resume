import React from "react";

export default function JournalSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Journal</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">공간을 채우는 작은 습관들, 그리고 우리의 이야기.</p>
        <div
          className="relative w-full max-w-4xl mx-auto h-80 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('/images/journal-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-dark-charcoal transition-colors">
              Read Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
