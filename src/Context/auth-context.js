import React from "react";

const AuthContext = React.createContext({
  setIsLoggedIn: () => {},
  setIsRestuarent: () => {},
  setRestuarentInfo: () => {},
  setIsSignUp: () => {},
  setIsOrder: () => {},
  setIsRestuarentLogin: () => {},
  setIsRestuarentPage: () => {},
});

export default AuthContext;
