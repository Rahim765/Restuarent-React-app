import React from "react";
import Button from "../UI/Button";
import "./ResFoods.css";
const ResFoods = (props) => {
  const price = props.price;
  function deleteItem() {
    props.deleteFood(props.name);
  }
  return (

      <li className="resfoods">
        <img src={props.foodImage} alt="" className="resfoodsimg"></img>
        <h3>{props.name}</h3>
        <div className="resfoodsdescription">{props.description}</div>
        <div className="resfoodsprice">{price}</div>
        <Button onClick={deleteItem}>Delete</Button>
      </li>
   
  );
};

export default ResFoods;
