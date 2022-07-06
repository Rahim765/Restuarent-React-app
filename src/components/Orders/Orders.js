import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/auth-context";
import Button from "../UI/Button";
import OrderItem from "./OrderItem";
import "./Orders.css";
const test = [
  { name: "First", totalAmount: 25, date: "6/7/2022" },
  { name: "Second", totalAmount: 12.99, date: "6/7/2022" },
  { name: "Third", totalAmount: 18.9, date: "6/7/2022" },
  { name: "Fourth", totalAmount: 120.19, date: "6/7/2022" },
  { name: "Fifth", totalAmount: 35.59, date: "6/7/2022" },
  { name: "First", totalAmount: 25, date: "6/7/2022" },
  { name: "Second", totalAmount: 12.99, date: "6/7/2022" },
  { name: "Third", totalAmount: 18.9, date: "6/7/2022" },
  { name: "Fourth", totalAmount: 120.19, date: "6/7/2022" },
  { name: "Fifth", totalAmount: 35.59, date: "6/7/2022" },
];
var validOrders = [];
const Order = (props) => {
  const [update, setUpdate] = useState(false);
  async function loadOrders() {
    if (localStorage.getItem("intores") == null) {
      try {
        const response = await fetch(
          "http://localhost:4000/order/" + localStorage.getItem("username")
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        validOrders = data.result;
        console.log("INTO SERVER");
        console.log(validOrders);
        setUpdate(!update);
      } catch (error) {
        console.log(error.message);
      }
    } else if (localStorage.getItem("intores") != null) {
      try {
        const response = await fetch(
          "http://localhost:4000/ResOrder/" +
            localStorage.getItem("RestuarentName")
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        validOrders = data.result;
        console.log("INTO SERVER");
        console.log(validOrders);
        setUpdate(!update);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
  useEffect(() => {
    loadOrders();
  }, []);

  const ctx = useContext(AuthContext);
  function backOrderHandler() {
    if (localStorage.getItem("intores") != null) {
      ctx.setIsRestuarent(false);
      ctx.setIsLoggedIn(false);
      ctx.setIsOrder(false);
    } else {
      ctx.setIsOrder(false);
    }
  }
  return (
    <React.Fragment>
      <div className="backorder">
        <Button onClick={backOrderHandler}>Back</Button>
      </div>
      {update && (
        <div className="ord">
          {validOrders.map((test) => (
            <OrderItem
              id={test._id}
              orderList={validOrders}
              name={test.resName}
              totalAmount={test.total}
              date={test.Date.split("@")[0]}
            ></OrderItem>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Order;
