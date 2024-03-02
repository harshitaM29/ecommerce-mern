import React from "react";
import Navbar from "../components/Navbar";
import Announment from "../components/Announment";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Announment />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
};

export default Home;
