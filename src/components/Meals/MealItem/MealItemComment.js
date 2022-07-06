import React from "react";
import classes from "./MealItem.module.css";
const MealItemComment = (props) => {
  console.log("Jannnnnnnnnnnn");
  console.log(props.comment);
  return (
    <div>
      <span className={classes.comment}>{props.comment}</span>
      <br></br>
      <br></br>
    </div>
  );
};

export default MealItemComment;
