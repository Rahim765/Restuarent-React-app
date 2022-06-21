import React, { useContext, useEffect, useRef } from "react";
import AuthContext from "../../Context/auth-context";
import Button from "../UI/Button";
import "./Login.css";
import WOW from "wowjs";
import "animate.css";
const Login = (props) => {
  const username = useRef();
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const ctx = useContext(AuthContext);
  function backHome() {
    ctx.setIsLoggedIn(false);
  }
  function toRestuarent() {
    localStorage.setItem("username", username.current.value);
    localStorage.setItem("LoggedIn", "1");
    ctx.setIsRestuarent(true);
  }
  return (
    <div>
      <div id="div" className="box-form">
        <div id="div" className="left">
          <div id="div" className="overlay wow animate__fadeInLeftBig">
            <h1 id="h1">Enjoy the Food.</h1>
            <p id="p">
              A vast number of foods are both healthy and tasty. By filling your
              plate with fruits, vegetables, quality protein sources
            </p>
            <Button onClick={backHome}>Home</Button>
          </div>
        </div>

        <div id="div" className="right">
          <p id="p">
            Don't have an account? <a href="#">Creat Your Account</a> it takes
            less than a minute
          </p>
          <div id="div" className="inputs">
            <input
              ref={username}
              className="wow animate__fadeInRightBig"
              id="input"
              type="text"
              placeholder="user name"
            />
            <br></br>
            <input
              className="wow animate__fadeInRightBig"
              id="input"
              type="password"
              placeholder="password"
            />
          </div>

          <br></br>

          <div id="div" className="remember-me--forget-password">
            <label id="label">
              <input id="input" type="checkbox" name="item" checked />
              <span id="span" className="text-checkbox">
                Remember me
              </span>
            </label>
            <p id="p">forget password?</p>
          </div>

          <br></br>
          <button
            className="wow animate__fadeInUpBig"
            onClick={toRestuarent}
            id="button"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
