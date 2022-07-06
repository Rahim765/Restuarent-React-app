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
  console.log(props.orderList);
  return (
    <Modal onClose={props.onClose}>
      <div className="ordmeals">
        <div className="mealTitle">{props.resName}</div>
        <div className="maindiv">
          {props.orderList.map(
            (food) =>
              props.id == food._id && (
                <div>
                  <div className="maindiv">
                    <div className="maindivmember">
                      <h2>Food Name</h2>
                      {food.foodName.map((foodname) => (
                        <h5 className="foodsec">{foodname}</h5>
                      ))}
                    </div>
                    <div className="maindivmember">
                      <h2>Food Amount</h2>
                      {food.foodAmount.map((foodamount) => (
                        <h5 className="foodsec">{foodamount}</h5>
                      ))}
                    </div>
                    <div className="maindivmember">
                      <h2>Food Price</h2>
                      {food.foodPrice.map((foodprice) => (
                        <h5 className="foodsec">{foodprice}</h5>
                      ))}
                    </div>
                  </div>
                  <div className="maindivmember">
                    <h2>Address</h2>
                    <h5>{food.orderAddress}</h5>
                  </div>
                  <div className="maindivmember">
                    <h2>Phone Number</h2>
                    <h5>{food.userPhoneNumber}</h5>
                  </div>
                  <div className="maindivmember">
                    <h2>User Name</h2>
                    <h5>{food.UserName}</h5>
                  </div>
                  <div className="maindivmember">
                    <h2>Order Time</h2>
                    <h5>{food.Date.split("@")[1]}</h5>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div>
        <Button onClick={props.onClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default OrderMeals;
