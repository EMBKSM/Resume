import React from "react";
import Link from "next/link";
import Image from "next/image"; // next/image 사용

export default function ProductCard({ product }) {
  return (
    // group 클래스는 그대로 두고, transition 효과 추가
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-w-1 aspect-h-1 w-full">
          {/* 이미지는 public 폴더에 있다고 가정 */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain", objectPosition: "right" }} // 👈 여기를 변경
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="mt-2 text-md text-dark-charcoal">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-dark-charcoal">{product.price.toLocaleString()}원</p>
        </div>
      </Link>
    </div>
  );
}
