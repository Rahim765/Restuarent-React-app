import React, { useEffect, useContext, useRef } from "react";
import "./SignUp.css";

import Button from "../UI/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AuthContext from "../../Context/auth-context";
const SignUp = (props) => {
  const ctx = useContext(AuthContext);

  var validUsers;
  useEffect(() => {
    loadUsers();
  });
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

  const userName = useRef();
  const phoneNumber = useRef();
  const passWord = useRef();
  const repeatedPassword = useRef();
  const city = useRef();

  async function signup() {
    console.log(validUsers);

    var repeat = false;

    const uname = userName.current.value;
    const pnumber = phoneNumber.current.value;
    const ps = passWord.current.value;
    const rps = repeatedPassword.current.value;
    const cit = city.current.value;
    console.log(ps === rps);
    console.log(uname.length > 2);
    console.log(uname.length);
    console.log(pnumber.length);
    console.log(cit);

    if (validUsers != null) {
      validUsers.map((user) => {
        if (user.name === uname) {
          repeat = true;
          alert("The User Name Has Already Taken!");
        }
      });
    }
    if (
      !repeat &&
      ps === rps &&
      uname.length > 2 &&
      pnumber.length === 11 &&
      cit.length > 0
    ) {
      const user = {
        name: uname,
        phoneNumber: pnumber,
        password: ps,
        city: cit,
      };
      const respone = await fetch("http://localhost:4000/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = respone.json;

      console.log(data);
      backHome();
    } else {
      if (!repeat) {
        alert("Wrong Data");
      }
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
