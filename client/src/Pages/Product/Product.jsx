import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ProductList from "../../Components/ProductList";
import ProductInfo from "./ProductInfo";

const Product = () => {
  return (
    <div className="bg-white">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      <div className="bodywrapper">
        <ProductInfo />
        <h2 className="text-xl sm:text-2xl tracking-tight text-gray-900 mt-16 px-5 sm:px-0">
          Вместе с этим товаров также купили:
        </h2>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
