import React, { useContext, useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import AuthContext from "../../Context/auth-context";
import Button from "../UI/Button";

//we can access to the restuaren name in
// here to loading data from database using props.ResName
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//     foodImage: "restuarentFoods/food1.jpg",
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//     foodImage: "restuarentFoods/food2.jpg",
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//     foodImage: "restuarentFoods/food3.jpg",
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//     foodImage: "restuarentFoods/food4.jpg",
//   },
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//     foodImage: "restuarentFoods/food1.jpg",
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//     foodImage: "restuarentFoods/food2.jpg",
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//     foodImage: "restuarentFoods/food3.jpg",
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//     foodImage: "restuarentFoods/food4.jpg",
//   },
// ];
var DUMMY_MEALS = [];
const AvailableMeals = (props) => {
  console.log(props.ResName);
  const [update, setUpdate] = useState(false);
  const ctx = useContext(AuthContext);
  function homeHandler() {
    ctx.setIsRestuarent(true);
    ctx.setRestuarentInfo("", "", "");
    console.log("salam");
    localStorage.removeItem("CurrentRestuarant");
  }

  useEffect(() => {
    loadRestuarant();
  });
  async function loadRestuarant() {
    try {
      const response = await fetch(
        "http://localhost:4000/restuarantfood/" + props.ResName
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      DUMMY_MEALS = data.result;
      console.log(DUMMY_MEALS);
      setUpdate(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  const mealsList = DUMMY_MEALS.map(
    (meal) =>
      meal.foodName.includes(props.search.trim()) && (
        <div>
          <MealItem
            ResName={props.ResName}
            key={meal._id}
            id={meal._id}
            name={meal.foodName}
            description={meal.foodDescription}
            price={meal.foodPrice}
            foodImage={
              "restuarent/" +
              meal.resName +
              "/" +
              meal.foodName +
              meal.path.split(meal.foodName)[1]
            }
          ></MealItem>
        </div>
      )
  );
  console.log(mealsList.length);

  return (
    <div className={classes.mealsback}>
      <section className={classes.meals}>
        <div className={classes.card}>
          <ul>{mealsList}</ul>
        </div>
        <Button onClick={homeHandler}>Home</Button>
      </section>
    </div>
  );
};

export default AvailableMeals;
