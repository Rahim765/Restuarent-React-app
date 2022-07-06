import React, { useContext, useRef, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import axios from "axios";
import { formatMs } from "@material-ui/core";
const Cart = (props) => {
  const orderAddress = useRef();
  const cartCtx = useContext(CartContext);
  const [add, setAdd] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function checkBoxHandler() {
    if (!add) {
      cartCtx.totalAmount = cartCtx.totalAmount + 1;
    } else {
      cartCtx.totalAmount = cartCtx.totalAmount - 1;
    }
    setAdd(!add);
  }
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  async function setOrder() {
    const formData = new FormData();
    formData.append("resName", localStorage.getItem("CurrentRestuarant"));
    cartCtx.items.map((res) => {
      formData.append("foodName", res.name);
      formData.append("foodAmount", res.amount);
      formData.append("foodPrice", res.price);
    });
    formData.append("total", totalAmount);
    if (add) {
      formData.append("orderAddress", orderAddress.current.value);
    } else {
      formData.append("orderAddress", "In Restuarant");
    }
    formData.append("userPhoneNumber", localStorage.getItem("userphonenumber"));
    formData.append("UserName", localStorage.getItem("username"));
    var currentdate = new Date();
    var datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    formData.append("Date", datetime);

    try {
      const res = await axios.post("http://localhost:4000/order", formData);
      console.log(res);
      props.onClose();
      alert("Successfully Ordered!");
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        {hasItems && (
          <div>
            <input
              onClick={checkBoxHandler}
              type="checkbox"
              name="bike"
            ></input>
            <label for="bike"> Bike delivery</label>
          </div>
        )}
        <div>
          <span>Total Amount : </span>
          <span>{totalAmount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        {add && (
          <input
            className={classes.addressTxt}
            type="text"
            placeholder="Address"
            ref={orderAddress}
          ></input>
        )}
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button onClick={setOrder} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
