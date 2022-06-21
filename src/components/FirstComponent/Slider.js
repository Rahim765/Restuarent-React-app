import React, { useState, useEffect } from "react";
import $ from "jquery";
import "react-slideshow-image/dist/styles.css";
import ph from "../images/image1.jpg";
import ph3 from "../images/image3.jpg";
import ph2 from "../images/image2.jpg";
import ph4 from "../images/image4.jpg";
import WOW from "wowjs";
import "animate.css";
import "./Slider.css";

const images = [ph, ph2, ph3, ph4];
const Slider = () => {
  const [currentImage, setCurrentImage] = useState(ph3);
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      $("#image").fadeOut(2000);
      setTimeout(() => {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
      }, 2000);
      $("#image").fadeIn(2000);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mn wow animate__rotateInUpLeft">
      <img id="image" className="photo" src={currentImage} />
    </div>
  );
};

export default Slider;
