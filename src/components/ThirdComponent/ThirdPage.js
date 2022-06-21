import React, { useState } from "react";
import ResProfile from "./ResProfile";
import CartProvider from "../../store/CartProvider";
import Cart from "../Cart/Cart";
import Header from "../Layout/Header";
import Meals from "../Meals/Meals";
import Button from "../UI/Button";
const ThirdPage = (props) => {
  const [search, setSearch] = useState("");

  const [cartIsShowen, setCartIsShowen] = useState(false);
  const showCartHandler = () => {
    setCartIsShowen(true);
  };

  const hideCartHandler = () => {
    setCartIsShowen(false);
  };

  return (
    <CartProvider>
      <ResProfile
        ResName={props.ResName}
        ResImage={props.ResImage}
        ResAddress={props.ResAddress}
        onSearch={setSearch}
      ></ResProfile>

      {cartIsShowen && <Cart onClose={hideCartHandler}></Cart>}

      <Header onShowCart={showCartHandler}></Header>
      <Meals ResName={props.ResName} search={search}></Meals>
    </CartProvider>
  );
};

export default ThirdPage;
