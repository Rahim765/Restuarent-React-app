import React from "react";
import { Label } from "reactstrap";
import Textbox from "../UI/Textbox";
import "./Contact.css";
import Button from "../UI/Button";
import WOW from "wowjs";
import "animate.css";
const Contact = (props) => {
  const wow = new WOW.WOW();
  wow.init();

  return (
    <div className="main">
      <div className="first wow animate__rotateInUpRight">
        <h2 className="font">Contact</h2>
        <h2>LET'S CHAT</h2>
        <br></br>
        <br></br>
        <h3>
          Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
          molestiae enim a voluptate totam natus modi debitis dicta impedit
          voluptatum quod sapiente illo saepe explicabo quisquam perferendis
          labore et illum suscipit
        </h3>
      </div>
      <div className="second">
        <form>
          <Label>Your Name</Label>
          <Textbox animate="wow slideInLeft"></Textbox>
          <Label>Your Email</Label>
          <Textbox animate="wow animate__backInRight"></Textbox>
          <Label>Your message</Label>
          <textarea className="msg wow animate__lightSpeedInLeft"></textarea>
          <Button>Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
