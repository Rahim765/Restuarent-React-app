import React, { useContext } from "react";
import Button from "../UI/Button";
import "./ResProfile.css";
import AuthContext from "../../Context/auth-context";
const ResProfile = (props) => {
  const ctx = useContext(AuthContext);
  function SerchChangeHandler(event) {
    props.onSearch(event.target.value);
  }

  return (
    <React.Fragment>
      <div className="resProf">
        <div className="resP1">
          <div className="resdiv">
            <img className="resim" src={props.ResImage} alt=""></img>
          </div>
          <div className="resdiv">
            <h1 className="resTitle">{props.ResName}</h1>
          </div>
          <div className="resdiv">
            <h5 className="resAd">{props.ResAddress}</h5>
          </div>
        </div>
        <div className="foodser">
          <input
            onChange={SerchChangeHandler}
            id="Calicon"
            placeholder="Search..."
            className="ser"
            type="text"
          ></input>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResProfile;
