import React from "react";
import Navbar from "../components/Navbar";
import Announment from "../components/Announment";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <Announment />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
