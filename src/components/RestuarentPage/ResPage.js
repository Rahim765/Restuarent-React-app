import React, { useState, useRef } from "react";
import "../ThirdComponent/ResProfile.css";
import resimg from "../images/image1.jpg";
import Meals from "../Meals/Meals";
import CartProvider from "../../store/CartProvider";
import ResFoods from "./ResFoods";
import "./ResPage.css";
import Label from "../UI/Label";
import Button from "../UI/Button";
var DUMMY_MEALS = [
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
const ResPage = (props) => {
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [isChange, setIsChange] = useState(true);
  function changeFoodHandler() {
    if (isChange) {
      setIsChange(false);
    } else {
      setIsChange(true);
    }
  }

  const [addItem, setAddItem] = useState(false);
  const foodName = useRef();
  const foodDescription = useRef();
  const foodPrice = useRef();

  function addItems() {
    DUMMY_MEALS = [
      ...DUMMY_MEALS,
      {
        id: "m5",
        name: foodName.current.value,
        description: foodDescription.current.value,
        price: +foodPrice.current.value,
        foodImage: file,
      },
    ];

    foodName.current.value = "";
    foodDescription.current.value = "";
    foodPrice.current.value = "";
    changeFoodHandler();
  }

  function onDeletHandler(foodName) {
    var index = -1;
    let i = 0;
    let obj = DUMMY_MEALS.find((o, i) => {
      if (o.name === foodName) {
        index = i;
        return true; // stop searching
      }
    });

    console.log(index);

    if (index != -1) {
      DUMMY_MEALS.splice(index, 1);
    }
    changeFoodHandler();
    console.log(DUMMY_MEALS.length);
  }

  return (
    <div>
      <div className="resProf">
        <div className="resP1">
          <div className="resdiv">
            <img className="resim" src={resimg} alt=""></img>
          </div>
          <div>
            <div className="resdiv">
              <h1 className="resTitle">
                {localStorage.getItem("RestuarentName")}
              </h1>
            </div>
            <div className="resdiv">
              <h5 className="resAd">
                SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div class="containerupload">
        <div class="button-wrap">
          <label class="bupload" for="upload">
            Upload File
          </label>
          <input
            className="phupload"
            id="upload"
            type="file"
            onChange={handleChange}
          />
        </div>

        <div className="newfood">
          <div>
            <input
              id="foodpro"
              type="text"
              placeholder="Food Name"
              ref={foodName}
            ></input>
          </div>
          <div>
            <input
              id="foodpro"
              type="text"
              placeholder="Discreption"
              ref={foodDescription}
            ></input>
          </div>
          <div>
            <input id="foodproprice" type="number" ref={foodPrice}></input>
          </div>
          <Button onClick={addItems}>ADD</Button>
        </div>
      </div>

      <div className="foodcontain">
        {DUMMY_MEALS.map((meal) => (
          <div className="dfodcon">
            <ResFoods
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              foodImage={meal.foodImage}
              deleteFood={onDeletHandler}
            ></ResFoods>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResPage;
