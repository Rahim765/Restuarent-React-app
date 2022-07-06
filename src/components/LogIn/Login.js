import React, { useContext, useEffect, useRef } from "react";
import AuthContext from "../../Context/auth-context";
import Button from "../UI/Button";
import "./Login.css";
import WOW from "wowjs";
import "animate.css";
const Login = (props) => {
  var validUsers;
  async function loadUsers() {
    try {
      const response = await fetch("http://localhost:4000/users");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      validUsers = data.result;
      //console.log(data.result["name"]);
    } catch (error) {
      console.log(error.message);
    }
  }

  const username = useRef();
  const pass = useRef();

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

    loadUsers();
  }, []);

  const ctx = useContext(AuthContext);
  function backHome() {
    ctx.setIsLoggedIn(false);
  }
  function toRestuarent() {
    const uname = username.current.value;
    const ps = pass.current.value;
    var flag = false;
    validUsers.map((user) => {
      if (user.name === uname && user.password === ps) {
        localStorage.setItem("username", username.current.value);
        localStorage.setItem("userphonenumber", user.phoneNumber);
        localStorage.setItem("LoggedIn", "1");
        ctx.setIsRestuarent(true);
        flag = true;
      }
    });
    if (!flag) {
      alert("Wrong Username or Password!");
    }
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
              ref={pass}
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
