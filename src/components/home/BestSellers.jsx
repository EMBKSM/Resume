"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { mockProducts } from "../../data/products";
import { motion } from "framer-motion"; // framer-motion 불러오기

export default function BestSellers() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockProducts.map((product, index) => (
            // motion.div로 감싸고 애니메이션 속성 추가
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }} // 처음엔 투명하고 20px 아래에 위치
              whileInView={{ opacity: 1, y: 0 }} // 화면에 보이면 선명하고 제자리로
              viewport={{ once: true }} // 애니메이션은 한 번만 실행
              transition={{ duration: 0.5, delay: index * 0.1 }} // 0.5초 동안, 각 카드마다 0.1초 지연
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
