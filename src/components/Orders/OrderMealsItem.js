import React from "react";
import "./OrderMealsItem.css";
import classes from "../Cart/CartItem.module.css";
const OrderMealsItem = (props) => {
  return (
    <React.Fragment>
      <li className={classes["cart-item"]}>
        <h2>{props.foodName}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </li>
    </React.Fragment>
  );
};

export default OrderMealsItem;
