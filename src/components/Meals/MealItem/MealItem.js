import React, { useState, useContext, useEffect, useRef } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import WOW from "wowjs";
import "animate.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Collapse from "@material-ui/core/Collapse";
import Button from "../../UI/Button";
import MealItemComment from "./MealItemComment";
var validComments = [];
const MealItem = (props) => {
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  loadComment();
  const commentref = useRef();

  async function loadComment() {
    console.log("Restuarant Name ");
    console.log(props.ResName);
    console.log("Restuarant Food Name ");
    console.log(props.name);
    try {
      const response = await fetch(
        "http://localhost:4000/comment/" + props.ResName + "/" + props.name
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      validComments = data.result;
      console.log("Valid :");
      console.log(validComments);
      //console.log(data.result["name"]);
      // setUpdate(!update);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function sendcomment() {
    const cmt = commentref.current.value;
    if (cmt.length > 0) {
      const comm = {
        seen: "0",
        resName: props.ResName,
        foodName: props.name,
        comment: cmt,
      };
      const respone = await fetch("http://localhost:4000/comment", {
        method: "POST",
        body: JSON.stringify(comm),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = respone.json;

      console.log(data);
      commentref.current.value = "";
    } else {
      alert("Enter a valid Comment!");
    }
  }

  function showDetail() {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }

  const [isChecked, setIsChecked] = useState(false);
  const cartCtx = useContext(CartContext);

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
      <li className={`wow animate__fadeInTopLeft ${classes.meal}`}>
        <div className={classes.avali}>
          <img src={props.foodImage} alt="" className={classes.fimg}></img>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{props.price}</div>
        </div>
        <div>
          <Button onClick={showDetail}>Comments</Button>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </li>

      {(console.log("Yessss"), console.log(validComments))}
      <Collapse in={isChecked}>
        <Paper elevation={5} style={{ margin: 5 }}>
          <div className={classes.commentcontainer}>
            <br></br>
            {validComments.map(
              (cmt) =>
                cmt.resName === props.ResName &&
                cmt.foodName === props.name && (
                  <MealItemComment comment={cmt.comment}></MealItemComment>
                )
            )}
          </div>
          <input
            className={classes.commentinput}
            type="text"
            placeholder="Type Your Comment"
            ref={commentref}
          ></input>
          <Button onClick={sendcomment}>Send</Button>
        </Paper>
      </Collapse>
    </React.Fragment>
  );
};

export default MealItem;
