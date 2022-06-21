import React, { useContext } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import AuthContext from "../../Context/auth-context";
import Button from "../UI/Button";

//we can access to the restuaren name in
// here to loading data from database using props.ResName
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    foodImage: "restuarentFoods/food1.jpg",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    foodImage: "restuarentFoods/food2.jpg",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    foodImage: "restuarentFoods/food3.jpg",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    foodImage: "restuarentFoods/food4.jpg",
  },
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    foodImage: "restuarentFoods/food1.jpg",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    foodImage: "restuarentFoods/food2.jpg",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    foodImage: "restuarentFoods/food3.jpg",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    foodImage: "restuarentFoods/food4.jpg",
  },
];

const AvailableMeals = (props) => {
  const ctx = useContext(AuthContext);
  function homeHandler() {
    ctx.setIsRestuarent(true);
    ctx.setRestuarentInfo("", "", "");
    console.log("salam");
  }
  const mealsList = DUMMY_MEALS.map(
    (meal) =>
      meal.name.includes(props.search.trim()) && (
        <div>
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            foodImage={meal.foodImage}
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
