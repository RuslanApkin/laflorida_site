import React from "react";
import Carusel from "./Carusel";
import CategoryList from "./CategoryList";
import Footer from "../../Components/Footer";
import MainSearch from "./MainSearch";
import Navbar from "./NavBar";

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
      </div>
      <Footer />
    </div>
  );
};

export default Home;
