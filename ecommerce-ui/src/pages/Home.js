import React from "react";
import Navbar from "../components/Navbar";
import Announment from "../components/Announment";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announment />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
