import React from "react";
import "./Informations.css";
const Informations = (props) => {
  return (
    <div className="cont">
      <div className="one">
        <div>
          <h2>LOCATIONS</h2>
          <br></br>
        </div>
        <div className="onecont">
          <div className="onecont1">
            <h4>198 West 21th Street, Suite 721 New York NY 10016</h4>
          </div>
          <div className="onecont2">
            <h4>198 West 21th Street, Suite 721 New York NY 10016</h4>
          </div>
        </div>
      </div>
      <div className="two">
        <div>
          <h2>OPEN HOURS</h2>
          <br></br>
        </div>
        <div className="onecont">
          <div className="onecont1">
            <h4>Monday - Thursday</h4>
            <h4>5:30pm - 10:00pm</h4>
          </div>
          <div className="onecont2">
            <h4>Friday - Sunday</h4>
            <h4> 5:30pm - 10:00pm</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;
