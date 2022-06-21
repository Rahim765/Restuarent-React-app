import React, { useContext } from "react";
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
const Order = (props) => {
  const ctx = useContext(AuthContext);
  function backOrderHandler() {
    ctx.setIsOrder(false);
  }
  return (
    <React.Fragment>
      <div className="backorder">
        <Button onClick={backOrderHandler}>Back</Button>
      </div>
      <div className="ord">
        {test.map((test) => (
          <OrderItem
            name={test.name}
            totalAmount={test.totalAmount}
            date={test.date}
          ></OrderItem>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Order;
