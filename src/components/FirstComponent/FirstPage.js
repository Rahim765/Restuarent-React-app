import React, { useState } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Informations from "./Informations";
import Navbar from "./Navbar";
import Slider from "./Slider";
import "./FirstPage.css";
const FirstPage = (props) => {
  return (
    <div>
      <Navbar ></Navbar>
      <Slider></Slider>
      <Footer></Footer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Contact></Contact>
      <Informations></Informations>
    </div>
  );
};

export default FirstPage;
