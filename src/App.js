import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

import FirstPage from "./components/FirstComponent/FirstPage";
import Login from "./components/LogIn/Login";
import SecondPage from "./components/SecondComponent/SecondPage";
import SignUp from "./components/SignUp/SignUp";
import ThirdPage from "./components/ThirdComponent/ThirdPage";
import AuthContext from "./Context/auth-context";
import Orders from "./components/Orders/Orders";
import Restuarent from "./components/FirstComponent/Restuarent";
import ResPage from "./components/RestuarentPage/ResPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isRestuarent, setIsRestuarent] = useState(false);
  const [restuarentImage, setRestuarentImage] = useState("");
  const [restuarentName, setRestuarentName] = useState("");
  const [restuarentAddress, setRestuarentAdress] = useState("");
  const [isOrder, setIsOrder] = useState(false);
  const [isRestuarentLogin, setIsRestuarentLogin] = useState(false);
  const [isRestuarentPage, setIsRestuarentPage] = useState(false);
  const [data, setData] = React.useState(null);
  const getApiData = async () => {
    const url = "http://localhost:4000/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  const fetchMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:4000/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data.jsonStringExample["name"]);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    // fetchMoviesHandler();

    const isUserLoggedIn = localStorage.getItem("LoggedIn");
    if (isUserLoggedIn === "1") {
      setIsLoggedIn(true);
      setIsRestuarent(true);
    }
  }, []);

  function setRestuarentInfo(image, name, address) {
    setRestuarentImage(image);
    setRestuarentName(name);
    setRestuarentAdress(address);
  }

  return (
    <div>
      <AuthContext.Provider
        value={{
          setIsLoggedIn: setIsLoggedIn,
          setIsRestuarent: setIsRestuarent,
          setRestuarentInfo: setRestuarentInfo,
          setIsSignUp: setIsSignUp,
          setIsOrder: setIsOrder,
          setIsRestuarentLogin: setIsRestuarentLogin,
          setIsRestuarentPage: setIsRestuarentPage,
        }}
      >
        {!isRestuarent && !isLoggedIn && !isSignUp && !isRestuarentLogin && (
          <FirstPage></FirstPage>
        )}
        {!isRestuarent && isLoggedIn && <Login></Login>}
        {!isLoggedIn && isSignUp && <SignUp></SignUp>}
        {!isLoggedIn &&
          !isSignUp &&
          !isRestuarent &&
          isRestuarentLogin &&
          !isRestuarentPage && <Restuarent></Restuarent>}

        {!isLoggedIn &&
          !isSignUp &&
          !isRestuarent &&
          isRestuarentLogin &&
          isRestuarentPage && <ResPage></ResPage>}

        {isRestuarent &&
          isLoggedIn &&
          !isOrder &&
          restuarentImage === "" &&
          restuarentName === "" &&
          restuarentAddress === "" && <SecondPage></SecondPage>}
        {isLoggedIn && isRestuarent && isOrder && <Orders></Orders>}
        {isLoggedIn &&
          isRestuarent &&
          restuarentImage != "" &&
          restuarentName != "" &&
          restuarentAddress != "" && (
            <ThirdPage
              ResImage={restuarentImage}
              ResName={restuarentName}
              ResAddress={restuarentAddress}
            ></ThirdPage>
          )}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
