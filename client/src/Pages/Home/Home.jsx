import React from "react";
import Carusel from "./Carusel";
import CategoryList from "./CategoryList";
import Footer from "../../Components/Footer";
import MainSearch from "./MainSearch";
import Navbar from "./NavBar";
import ProductList from "../../Components/ProductList";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      <div className="bodywrapper">
        <MainSearch />
        <CategoryList />
        <Carusel />
        <h3 className="text-xl tracking-tight text-gray-900 mt-16 px-8 sm:px-0 sm:text-2xl">
          Популярные товары
        </h3>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
