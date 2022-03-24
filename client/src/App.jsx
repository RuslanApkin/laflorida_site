import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Product from "./Pages/Product";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
