import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Newslettr from "../components/Newslettr";


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Newslettr />
    </div>
  );
};

export default Home;
