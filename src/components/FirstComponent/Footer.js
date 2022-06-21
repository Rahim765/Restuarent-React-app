import React, { useEffect } from "react";
import "./Footer.css";
import ph5 from "../images/img_1.png";
import $ from "jquery";
import WOW from "wowjs";
import "animate.css";
function Footer() {
  
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div id="main" className="foot wow slideInLeft">
      <div className="first">
        <h1 className="font">Discover</h1>
        <h2>OUR STORE</h2>
        <br />

        <h3 className="font">***</h3>
        <h3>
          Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
          molestiae enim a voluptate totam natus modi debitis dicta impedit
          labore et illum suscipit
        </h3>
        <br></br>
        <h2>About us </h2>
      </div>
      <div className="second">
        <img src={ph5} alt="cool guys arount the table" className="photof" />
      </div>
    </div>
  );
}

export default Footer;
