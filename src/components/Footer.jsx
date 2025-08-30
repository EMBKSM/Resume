import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="font-serif text-xl font-bold text-dark-charcoal mb-2 inline-block">
              오늘의 무드
            </Link>
            <p className="text-sm text-gray-600">일상을 채우는 감각적인 선택.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">고객 지원</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/faq" className="hover:underline">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  1:1 문의
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:underline">
                  배송 및 반품 안내
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">소셜 미디어</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* 실제 소셜 미디어 링크로 교체하세요 */}
              <a href="#" className="text-gray-500 hover:text-dark-charcoal">
                Instagram
              </a>
              <a href="#" className="text-gray-500 hover:text-dark-charcoal">
                Facebook
              </a>
              <a href="#" className="text-gray-500 hover:text-dark-charcoal">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Oneul's Mood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
