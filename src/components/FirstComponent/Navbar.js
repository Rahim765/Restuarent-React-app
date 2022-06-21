import React, { useContext, useEffect } from "react";
import AuthContext from "../../Context/auth-context";
import "./Navbar.css";
import WOW from "wowjs";
import "animate.css";
function Navbar() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const ctx = useContext(AuthContext);

  function loadLogInPage() {
    ctx.setIsLoggedIn(true);
  }
  function loadSignUpPage() {
    console.log("salma");
    ctx.setIsSignUp(true);
  }

  function loadRestuarentLogin() {
    ctx.setIsRestuarentLogin(true);
  }
  return (
    <div className="navigation wow animate__backInDown">
      <nav>
        <ul className="nav-type ullist">
          <li className="active2 lilist" onClick={loadLogInPage}>
            login
          </li>
          <li className="active2 lilist" onClick={loadSignUpPage}>
            SingUp
          </li>
          <li className="active2 lilist" onClick={loadRestuarentLogin}>
            Restuarent
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
