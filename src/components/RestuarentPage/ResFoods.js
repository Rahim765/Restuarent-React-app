import React from "react";
import Button from "../UI/Button";
import "./ResFoods.css";
const ResFoods = (props) => {
  const price = props.price;
  async function deleteItem() {
    const del = {
      resName: props.resName,
      foodName: props.name,
    };
    const respone = await fetch("http://localhost:4000/delete", {
      method: "POST",
      body: JSON.stringify(del),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = respone.json;

    console.log(data);
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
