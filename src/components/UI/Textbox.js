import React from "react";
import "./Textbox.css";
const Textbox = (props) => {
  return (
    <input className={`txt ${props.animate}`} type="text">
      {props.children}
    </input>
  );
};

export default Textbox;
