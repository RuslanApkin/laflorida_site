import React from "react";
import Navbar from "../../Components/Navbar";
import ProductInfo from "./ProductInfo";

const Product = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="bodywrapper">
        <ProductInfo />
      </div>
    </div>
  );
};

export default Product;
