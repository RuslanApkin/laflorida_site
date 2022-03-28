import React, { useState } from "react";
import img1 from "../img/olia-gozha-9A_peGrSbZc-unsplash.jpg";
import { AddButton } from "./AddButton";

const products = [
  {
    id: 1,
    name: "Букет",
    href: "#",
    imageSrc: img1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "₽3500",
  },
  {
    id: 1,
    name: "Букет",
    href: "#",
    imageSrc: img1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "₽3500",
  },
  {
    id: 1,
    name: "Букет",
    href: "#",
    imageSrc: img1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "₽3500",
    color: "Black",
  },
  {
    id: 1,
    name: "Солнечный луч",
    href: "#",
    imageSrc: img1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "₽3500",
    color: "Black",
  },
  // More products...
];

export default function ProductList() {
  return (
    <>
      <div className="mx-auto py-6 w-full px-5 sm:px-0 flex justify-center">
        <div className="grid grid-cols-1 max-w-sm sm:max-w-none gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="w-full min-h-80 aspect-1 rounded-md overflow-hidden bg-gray-200 group-hover:opacity-70 lg:group-hover:opacity-10">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="text-xl text-gray-800 lg:opacity-0 lg:group-hover:opacity-100 lg:absolute lg:bottom-8 lg:left-1.5 lg:text-2xl lg:font-semibold">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="text-lg text-gray-900">{product.price}</p>
              <AddButton classN="absolute bottom-4 lg:-bottom-2 -right-4" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
