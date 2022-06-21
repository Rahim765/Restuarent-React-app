import React, { useContext, useRef } from "react";
import AuthContext from "../../Context/auth-context";
import "./Restuarent.css";
import backimg from "../images/reslogin.jpg";
import Button from "../UI/Button";

const Restuarent = (props) => {
  /* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/
  var k = 1;
  const resName = useRef();
  const ctx = useContext(AuthContext);
  function backHomeHandler() {
    localStorage.removeItem("RestuarentName");
    ctx.setIsRestuarentLogin(false);
  }
  function cambiar_login() {
    document.querySelector(".cont_forms").className =
      "cont_forms cont_forms_active_login";
    document.querySelector(".cont_form_login").style.display = "block";
    document.querySelector(".cont_form_sign_up").style.opacity = "0";

    setTimeout(function() {
      document.querySelector(".cont_form_login").style.opacity = "1";
    }, 400);

    setTimeout(function() {
      document.querySelector(".cont_form_sign_up").style.display = "none";
    }, 200);

    if (k > 1) {
      console.log("sakan");
      setTimeout(function() {
        ctx.setIsRestuarentPage(true);
        localStorage.setItem("RestuarentName", resName.current.value);
      }, 400);

      console.log("sakan2");
    }
    k = k + 1;
  }

  function cambiar_sign_up(at) {
    document.querySelector(".cont_forms").className =
      "cont_forms cont_forms_active_sign_up";
    document.querySelector(".cont_form_sign_up").style.display = "block";
    document.querySelector(".cont_form_login").style.opacity = "0";

    setTimeout(function() {
      document.querySelector(".cont_form_sign_up").style.opacity = "1";
    }, 100);

    setTimeout(function() {
      document.querySelector(".cont_form_login").style.display = "none";
    }, 400);
    if (k != 1) {
      k = k - 1;
    }
  }

  function ocultar_login_sign_up() {
    document.querySelector(".cont_forms").className = "cont_forms";
    document.querySelector(".cont_form_sign_up").style.opacity = "0";
    document.querySelector(".cont_form_login").style.opacity = "0";

    setTimeout(function() {
      document.querySelector(".cont_form_sign_up").style.display = "none";
      document.querySelector(".cont_form_login").style.display = "none";
    }, 500);
  }

  return (
    <div>
      <div className="cotn_principal">
        <Button onClick={backHomeHandler}>back</Button>
        <div className="cont_centrar">
          <div className="cont_login">
            <div className="cont_info_log_sign_up">
              <div className="col_md_login">
                <div className="cont_ba_opcitiy">
                  <h2>LOGIN</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="btn_login" onClick={cambiar_login}>
                    LOGIN
                  </button>
                </div>
              </div>
              <div className="col_md_sign_up">
                <div className="cont_ba_opcitiy">
                  <h2>SIGN UP</h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <button className="btn_sign_up" onClick={cambiar_sign_up}>
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>

            <div className="cont_back_info">
              <div className="cont_img_back_grey">
                <img src={backimg} alt="" />
              </div>
            </div>
            <div className="cont_forms">
              <div className="cont_img_back_">
                <img src={backimg} alt="" />
              </div>
              <div className="cont_form_login">
                <a href="#" onClick={ocultar_login_sign_up}>
                  <i className="material-icons">&#xE5C4;</i>
                </a>
                <h2>LOGIN</h2>
                <input type="text" placeholder="Email" ref={resName} />
                <input type="password" placeholder="Password" />
                <button className="btn_login" onClick={cambiar_login}>
                  LOGIN
                </button>
              </div>

              <div className="cont_form_sign_up">
                <a href="#" onClick={ocultar_login_sign_up}>
                  <i className="material-icons">&#xE5C4;</i>
                </a>
                <h2>SIGN UP</h2>
                <input type="text" placeholder="Photo" />
                <input type="text" placeholder="Restuarent Name" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Phone Number" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button className="btn_sign_up" onClick={cambiar_sign_up}>
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restuarent;
