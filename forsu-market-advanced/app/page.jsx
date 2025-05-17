"use client";
import { useState } from "react";
import { useCartStore } from "./components/store";

export default function ForsuMarket() {
  const [search, setSearch] = useState("");
  const { addToCart } = useCartStore();
  const products = [
    {
      id: 1,
      name: "올드머니 클래식 셔츠",
      price: 59000,
      description: "세련되고 절제된 무드의 클래식 셔츠",
      image: "/images/shirt.jpg"
    },
    {
      id: 2,
      name: "Forsu 캐주얼 수트 팬츠",
      price: 89000,
      description: "포멀과 캐주얼을 넘나드는 와이드 핏 팬츠",
      image: "/images/pants.jpg"
    },
    {
      id: 3,
      name: "남자의 핏 블레이저",
      price: 149000,
      description: "무게감 있는 실루엣과 정제된 디테일",
      image: "/images/blazer.jpg"
    }
  ];

  const filtered = products.filter(
    (product) =>
      product.name.includes(search) || product.description.includes(search)
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Forsu 온라인 마켓</h1>
      <input
        type="text"
        placeholder="상품 검색..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-4 py-2 w-full mb-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div key={product.id} className="rounded-2xl shadow-md border overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="font-bold text-lg mb-4">₩{product.price.toLocaleString()}</p>
              <button onClick={() => addToCart(product)} className="bg-black text-white w-full py-2 rounded">장바구니에 담기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
