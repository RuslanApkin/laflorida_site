import React from "react";
import Carusel from "../../Components/Carusel";
import CategoryList from "../../Components/CategoryList";
import Footer from "../../Components/Footer";
import MainSearch from "./MainSearch";
import Navbar from "./NavBar";

const Home = () => {
  return (
    <div className="bg-white">
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
