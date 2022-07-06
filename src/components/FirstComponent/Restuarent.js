import React, { useContext, useRef, useState, useEffect } from "react";
import AuthContext from "../../Context/auth-context";
import "./Restuarent.css";
import backimg from "../images/reslogin.jpg";
import Button from "../UI/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import { AlertTitle } from "@material-ui/lab";
const Restuarent = (props) => {
  /* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/
  const options = [
    "Alborz",
    "Ardabil",
    "Azerbaijan, East",
    "Azerbaijan, West",
    "Bushehr",
    "Chahar Mahaal and Bakhtiari",
    "Fars",
    "Gilan",
    "Golestan",
    "Hamadan",
    "Hormozgān",
    "Ilam",
    "Isfahan",
    "Kerman",
    "Kermanshah",
    "Khorasan, North",
    "Khorasan, Razavi",
    "Khorasan, South",
    "Khuzestan",
    "Kohgiluyeh and Boyer-Ahmad",
    "Kurdistan",
    "Lorestan",
    "Markazi",
    "Mazandaran",
    "Qazvin",
    "Qom",
    "Semnan",
    "Sistan and Baluchestan",
    "Tehran",
    "Yazd",
    "Zanjan",
  ];

  var RestaurantImage;
  const signupName = useRef();
  const signupAddress = useRef();
  const signupNumber = useRef();
  const signupPassword = useRef();
  const signupRpassword = useRef();
  const signupCity = useRef();

  const signinName = useRef();
  const signinPassword = useRef();

  var validRestuarants = [];

  useEffect(() => {
    loadRestuarant();
  });
  async function loadRestuarant() {
    try {
      const response = await fetch("http://localhost:4000/restuarant");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      validRestuarants = data.result;
      console.log(validRestuarants);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function signInHandler() {
    const sName = signinName.current.value;
    const sPassword = signinPassword.current.value;

    var islog = false;
    validRestuarants.map((res) => {
      if (res.resName === sName && res.resPassword === sPassword) {
        ctx.setIsRestuarentPage(true);
        localStorage.setItem("RestuarentName", sName);
        islog = true;
      }
    });
    if (islog === false) {
      alert("Wrong Name or Password ");
    }
  }
  async function signUpHandler() {
    const sName = signupName.current.value;
    const sAddress = signupAddress.current.value;
    const sNumber = signupNumber.current.value;
    const sPassword = signupPassword.current.value;
    const sRpassword = signupRpassword.current.value;
    const scity = signupCity.current.value;

    var notvalid = 0;
    validRestuarants.map((res) => {
      if (res.resName === sName) {
        alert("The Name has already taken!");
        notvalid = 1;
        return;
      }
    });
    if (sPassword != sRpassword) {
      alert("Enter the same password!");
      notvalid = 1;
    }
    if (scity.length === 0) {
      alert("Select your city !");
      notvalid = 1;
    }
    if (sNumber.length != 11) {
      alert("Wrong Phone number");
      notvalid = 1;
    }

    if (notvalid === 0) {
      const restuarant = {
        resImg: <img src={RestaurantImage}></img>,
        resName: sName,
        resphoneNumber: sNumber,
        resAddress: sAddress,
        resPassword: sPassword,
        resCiy: scity,
      };
      console.log(restuarant);

      const formData = new FormData();
      formData.append("file", RestaurantImage);
      formData.append("resName", sName);
      formData.append("resphoneNumber", sNumber);
      formData.append("resAddress", sAddress);
      formData.append("resPassword", sPassword);
      formData.append("resCiy", scity);

      try {
        const res = await axios.post(
          "http://localhost:4000/restuarant",
          formData
        );
        console.log(res.status);
        if (res.status === 200) {
          signupName.current.value = "";
          signupAddress.current.value = "";
          signupNumber.current.value = "";
          signupPassword.current.value = "";
          signupRpassword.current.value = "";
          signupCity.current.value = "";
          alert("Successfully signed up !");
        }
      } catch (ex) {
        console.log(ex);
      }
    }

    // const respone = await fetch("http://localhost:4000/restuarant", {
    //   method: "POST",
    //   body: JSON.stringify(restuarant),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = respone.json;

    // console.log(data);
  }

  function handleImage(e) {
    RestaurantImage = e.target.files[0];
  }

  var k = 1;
  var k2 = 1;
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
        signInHandler();
      }, 400);

      console.log("sakan2");
    }
    k = k + 1;

    if (k2 != 1) {
      k2 = k2 - 1;
    }
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

    if (k2 > 1) {
      console.log("sakan");
      setTimeout(function() {
        k2 = k2 - 1;
        signUpHandler();
      }, 400);

      console.log("sakan2");
    }
    k2 = k2 + 1;
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
                <input type="text" placeholder="Name" ref={signinName} />
                <input
                  type="password"
                  placeholder="Password"
                  ref={signinPassword}
                />
                <button className="btn_login" onClick={cambiar_login}>
                  LOGIN
                </button>
              </div>

              <div className="cont_form_sign_up">
                <a href="#" onClick={ocultar_login_sign_up}>
                  <i className="material-icons">&#xE5C4;</i>
                </a>
                <h2>SIGN UP</h2>
                <div class="button-wrap">
                  <label class="chooseimglabel" for="upload">
                    Upload Image
                  </label>
                  <input
                    className="phupload chooseimg"
                    id="upload"
                    type="file"
                    onChange={handleImage}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Restuarent Name"
                  ref={signupName}
                />
                <input type="text" placeholder="Address" ref={signupAddress} />

                <input
                  type="text"
                  placeholder="Phone Number"
                  ref={signupNumber}
                />
                <input
                  type="password"
                  placeholder="Password"
                  ref={signupPassword}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  ref={signupRpassword}
                />
                <div className="comboxcity">
                  <Autocomplete
                    options={options}
                    style={{ width: 260, height: 40 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="State"
                        variant="outlined"
                        inputRef={signupCity}
                      />
                    )}
                  />
                </div>
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
