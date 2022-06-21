import React, { useContext, useRef } from "react";
import "./SignUp.css";

import Button from "../UI/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AuthContext from "../../Context/auth-context";
const SignUp = (props) => {
  const ctx = useContext(AuthContext);

  const userName = useRef();
  const phoneNumber = useRef();
  const passWord = useRef();
  const repeatedPassword = useRef();
  const city = useRef();

  function signup() {
    const uname = userName.current.value;
    const pnumber = phoneNumber.current.value;
    const ps = passWord.current.value;
    const rps = repeatedPassword.current.value;
    const cit = city.current.value;
    console.log(ps === rps);
    console.log(uname.length > 5);
    console.log(uname.length);
    console.log(pnumber.length);
    console.log(cit);

    if (
      ps === rps &&
      uname.length > 5 &&
      pnumber.length === 11 &&
      cit.length > 0
    ) {
      const user = {
        name: uname,
        phoneNumber: pnumber,
        password: ps,
        city: cit,
      };
      console.log(user);
    } else {
      window.prompt("Wrong Data");
    }
  }

  function backHome() {
    ctx.setIsSignUp(false);
  }
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

  return (
    <div className="backSignUp">
      <div id="login-box">
        <div className="chap">
          <h1 id="h1">Sign up</h1>

          <input
            ref={userName}
            id="input"
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            ref={phoneNumber}
            id="input"
            type="text"
            name="email"
            placeholder="Phone Number"
          />
          <input
            ref={passWord}
            id="input"
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            ref={repeatedPassword}
            id="input"
            type="password"
            name="password2"
            placeholder="Retype password"
          />
          <div>
            <Autocomplete
              options={options}
              style={{ width: 230, height: 70 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="City"
                  variant="outlined"
                  inputRef={city}
                />
              )}
            />
          </div>
          <div className="btnHome">
            <Button onClick={signup}>sign me up</Button>
            <Button onClick={backHome}>Home</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
