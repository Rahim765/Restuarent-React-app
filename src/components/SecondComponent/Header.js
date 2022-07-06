import React, { useState, useContext } from "react";
import AuthContext from "../../Context/auth-context";
import LogOut from "../../Logo/LogOut";
import Man from "../../Logo/Man";
import Order from "../../Logo/Order";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Collapse from "@material-ui/core/Collapse";

import "./Header.css";
const Header = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  function showDetail() {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }
  function SerchChangeHandler(event) {
    props.onSearch(event.target.value);
  }
  function onOrderHandler() {
    ctx.setIsOrder(true);
  }
  const ctx = useContext(AuthContext);
  function logOutHandler() {
    localStorage.removeItem("LoggedIn");
    localStorage.removeItem("userphonenumber");
    localStorage.removeItem("username");
    ctx.setIsLoggedIn(false);
    ctx.setIsRestuarent(false);
  }

  return (
    <React.Fragment>
      <div className="head">
        <div className="f head">
          <div onClick={onOrderHandler} className="head ordlog">
            <h3>orders</h3>
            <Order className="manlog"></Order>
          </div>
          <div>
            <div
              onMouseEnter={showDetail}
              onMouseLeave={showDetail}
              className="man head"
            >
              <Man className="manlog"></Man>
            </div>
            <Collapse in={isChecked}>
              <Paper elevation={5} style={{ margin: 5 }}>
                <h3 className="usinfo">{localStorage.getItem("username")}</h3>
                <h3 className="usinfo">
                  {localStorage.getItem("userphonenumber")}
                </h3>
              </Paper>
            </Collapse>
          </div>
          <div className="man head" onClick={logOutHandler}>
            <h3>Log out</h3>
            <LogOut className="manlog"></LogOut>
          </div>
        </div>
        <div className="s">
          <input
            onChange={SerchChangeHandler}
            id="Calicon"
            placeholder="Search..."
            className="ser"
            type="text"
          ></input>
        </div>
      </div>
      <div className="line"></div>
    </React.Fragment>
  );
};

export default Header;
