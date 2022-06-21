import React, { useContext, useEffect } from "react";
import "./Restuarent.css";
import WOW from "wowjs";
import "animate.css";
import AuthContext from "../../Context/auth-context";

const Restuarent = (props) => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  const ctx = useContext(AuthContext);

  const im = props.photo;
  const fullname = props.name;
  const addr = props.address;
  function onRestuarentInfo() {
    ctx.setRestuarentInfo(im, fullname, addr);
  }
  return (
    <div
      className="restuarent wow wow animate__rotateIn"
      onClick={onRestuarentInfo}
    >
      <div className="">
        <img src={props.photo} alt="" className="resPh" />
      </div>
      <div className="resName">
        <h2>{props.name}</h2>
      </div>
      <div className="resAdd">
        <h5 className="h5">{props.address}</h5>
      </div>
    </div>
  );
};

export default Restuarent;
