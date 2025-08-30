"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js의 라우터 훅을 가져옵니다.

export default function NewProductPage() {
  const router = useRouter(); // 라우터 훅을 초기화합니다.

  const [formData, setFormData] = useState({
    sellerName: "",
    sellerPhone: "",
    companyName: "",
    companyAddress: "",
    productName: "",
    productPrice: "",
    productImage: null,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const requiredFields = ["sellerName", "sellerPhone", "productName", "productPrice", "productImage"];
    const isValid = requiredFields.every((field) => {
      const value = formData[field];
      return value !== "" && value !== null;
    });
    setIsFormValid(isValid);
  }, [formData]);

  // 입력 필드 값이 변경될 때 state를 업데이트하는 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // 'productPrice' 필드일 경우, 숫자 이외의 문자를 제거합니다.
    if (name === "productPrice") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, productImage: e.target.files[0] });
    } else {
      setFormData({ ...formData, productImage: null });
    }
  };

  // 폼 제출 시 실행될 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }
    console.log("제출된 데이터:", formData);
    alert("상품이 등록되었습니다! 메인 페이지로 이동합니다.");

    // 메인 페이지('/')로 이동시킵니다.
    router.push("/");
  };

  return (
    // 1. 최상위 div에 position: relative 추가
    <div
      className="relative min-h-screen py-12 px-4 flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')", // 👈 원본 이미지 경로
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 2. 필터 오버레이 div 추가 */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" aria-hidden="true" />

      {/* 3. 콘텐츠 컨테이너에 position: relative 추가 */}
      <div className="relative container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">새 상품 등록</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 판매자 정보 섹션 */}
          <div className="p-8 border rounded-lg bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-6 border-b pb-4">판매자 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="sellerName" className="block text-sm font-medium text-gray-700 mb-1">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  id="sellerName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sage-green focus:border-sage-green"
                  onChange={handleInputChange}
                  value={formData.sellerName}
                />
              </div>
              <div>
                <label htmlFor="sellerPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="sellerPhone"
                  id="sellerPhone"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sage-green focus:border-sage-green"
                  onChange={handleInputChange}
                  value={formData.sellerPhone}
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  회사명
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sage-green focus:border-sage-green"
                  onChange={handleInputChange}
                  value={formData.companyName}
                />
              </div>
              <div>
                <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  회사 주소
                </label>
                <input
                  type="text"
                  name="companyAddress"
                  id="companyAddress"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sage-green focus:border-sage-green"
                  onChange={handleInputChange}
                  value={formData.companyAddress}
                />
              </div>
            </div>
          </div>

          {/* 판매 물품 정보 섹션 */}
          <div className="p-8 border rounded-lg bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-6 border-b pb-4">판매 물품 정보</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                  상품명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sage-green focus:border-sage-green"
                  onChange={handleInputChange}
                  value={formData.productName}
                />
              </div>
              <div>
                <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  판매 가격 (원) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="productPrice"
                  id="productPrice"
                  required
                  placeholder="숫자만 입력"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sage-green focus:border-sage-green"
                  onChange={handleInputChange}
                  value={formData.productPrice}
                />
              </div>
              <div>
                <label htmlFor="productImage" className="block text-sm font-medium text-gray-700 mb-1">
                  상품 이미지 <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="productImage"
                  id="productImage"
                  required
                  accept="image/*"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-sage-green hover:file:bg-gray-200"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>

          {/* 제출 버튼 */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={!isFormValid}
              className="px-12 py-3 bg-dark-charcoal text-white font-semibold rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-gray-700"
            >
              상품 등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
