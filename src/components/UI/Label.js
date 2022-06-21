import React from "react";
import "./Label.css";
const Label = (props) => {
  return <label className="lab">{props.children}</label>;
};

export default Label;
