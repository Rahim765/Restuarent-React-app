import { Modal } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import "./OrderItem.css";
import WOW from "wowjs";
import "animate.css";
import OrderMeals from "./OrderMeals";
const OrderItem = (props) => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const [isShowCart, setIsShowCart] = useState("");
  function hideCartHandler() {
    setIsShowCart(false);
  }
  function showCartHandler() {
    setIsShowCart(true);
  }
  return (
    <React.Fragment>
      <div className="orderItem wow animate__flipInY" onClick={showCartHandler}>
        <div className="itemName">{props.name}</div>
        <div className="itemAmount"> Amount : {props.totalAmount}</div>
        <div className="itemAmount">Date : {props.date}</div>
      </div>
      {isShowCart && (
        <OrderMeals
          id={props.id}
          orderList={props.orderList}
          onClose={hideCartHandler}
          resName={props.name}
        ></OrderMeals>
      )}
    </React.Fragment>
  );
};

export default OrderItem;
