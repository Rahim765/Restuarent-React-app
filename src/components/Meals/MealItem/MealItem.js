import React, { useState, useContext, useEffect } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import WOW from "wowjs";
import "animate.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Collapse from "@material-ui/core/Collapse";
const MealItem = (props) => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  function showDetail() {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }

  const [isChecked, setIsChecked] = useState(false);
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <React.Fragment>
      <li
        onClick={showDetail}
        className={`wow animate__fadeInTopLeft ${classes.meal}`}
      >
        <div className={classes.avali}>
          <img src={props.foodImage} alt="" className={classes.fimg}></img>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </li>
      <Collapse in={isChecked}>
        <Paper elevation={5} style={{ margin: 5 }}>
          <div className={classes.commentcontainer}>
            <br></br>
            <span className={classes.comment}>very delicious food</span>
            <br></br>
            <br></br>
            <span className={classes.comment}>
              I have Just enjoyed it , prefect{" "}
            </span>
            <br></br>
            <br></br>
            <span className={classes.comment}>not bad at all </span>
            <br></br>
            <br></br>
            <span className={classes.comment}>
              I can say the best ever food I have ever Taste
            </span>
            <br></br>
            <br></br>
            <span className={classes.comment}>
              Awful🤮🤢
            </span>
            <br></br>
            <br></br>
            <span className={classes.comment}>
              😍😎😋😋😍😍😍😍😋😊😋😋😋😋
            </span>
            <br></br>
            <br></br>
          </div>
          <input
            className={classes.commentinput}
            type="text"
            placeholder="Type Your Comment"
          ></input>
        </Paper>
      </Collapse>
    </React.Fragment>
  );
};

export default MealItem;
