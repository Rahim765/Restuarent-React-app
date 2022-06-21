import React from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import OrderMealsItem from "./OrderMealsItem";
import "./OrderMeals.css";
const orderedFood = [
  { name: "one", amount: "1", price: 12.99 },
  { name: "two", amount: "2", price: 22 },
  { name: "two", amount: "3", price: 32.53 },
  { name: "one", amount: "1", price: 12.99 },
  { name: "two", amount: "2", price: 22 },
  { name: "two", amount: "3", price: 32.53 },
];
const OrderMeals = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="ordmeals">
        <div className="mealTitle">{props.resName}</div>
        {orderedFood.map((food) => (
          <OrderMealsItem
            foodName={food.name}
            amount={food.amount}
            price={food.price}
          ></OrderMealsItem>
        ))}
      </div>
      <div>
        <Button onClick={props.onClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default OrderMeals;
