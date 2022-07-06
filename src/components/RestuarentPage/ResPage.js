import React, { useState, useRef, useEffect, useContext } from "react";
import "../ThirdComponent/ResProfile.css";
import resimg from "../images/image1.jpg";
import Meals from "../Meals/Meals";
import CartProvider from "../../store/CartProvider";
import ResFoods from "./ResFoods";
import "./ResPage.css";
import Label from "../UI/Label";
import Button from "../UI/Button";
import axios from "axios";
import AuthContext from "../../Context/auth-context";
// var DUMMY_MEALS = [
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
const ResPage = (props) => {
  localStorage.setItem("intores", "1");
  const [file, setFile] = useState();
  const [update, setUpdate] = useState(false);
  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  const [isChange, setIsChange] = useState(true);
  function changeFoodHandler() {
    if (isChange) {
      setIsChange(false);
    } else {
      setIsChange(true);
    }
  }
  const ctx = useContext(AuthContext);

  useEffect(() => {
    loadRestuarant();
  }, []);

  const [addItem, setAddItem] = useState(false);
  const foodName = useRef();
  const foodDescription = useRef();
  const foodPrice = useRef();
  var validRestuarants = [];
  async function loadRestuarant() {
    try {
      const response = await fetch(
        "http://localhost:4000/restuarantfood/" +
          localStorage.getItem("RestuarentName")
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      validRestuarants = data.result;
      console.log("INTO SERVER");
      console.log(validRestuarants);
      DUMMY_MEALS = validRestuarants;

      setUpdate(!update);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function signUpHandler() {
    const sName = localStorage.getItem("RestuarentName");
    const fName = foodName.current.value;
    const fDescription = foodDescription.current.value;
    const fPrice = foodPrice.current.value;

    const restuarantFood = {
      resImg: <img src={file}></img>,
      resName: sName,
      foodName: fName,
      foodDescription: fDescription,
      foodPrice: fPrice,
    };
    console.log(restuarantFood);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("resName", sName);
    formData.append("foodName", fName);
    formData.append("foodDescription", fDescription);
    formData.append("foodPrice", fPrice);

    try {
      const res = await axios.post(
        "http://localhost:4000/restuarantfood",
        formData
      );
      console.log(res);
      loadRestuarant();
    } catch (ex) {
      console.log(ex);
    }
  }

  function addItems() {
    signUpHandler();
    console.log(file);
    foodName.current.value = "";
    foodDescription.current.value = "";
    foodPrice.current.value = "";
  }

  function onDeletHandler(foodName) {
    // var index = -1;
    // let i = 0;
    // let obj = DUMMY_MEALS.find((o, i) => {
    //   if (o.name === foodName) {
    //     index = i;
    //     return true; // stop searching
    //   }
    // });

    // console.log(index);

    // if (index != -1) {
    //   DUMMY_MEALS.splice(index, 1);
    // }

    loadRestuarant();
    // changeFoodHandler();
  }
  function onOrderHandler() {
    ctx.setIsRestuarent(true);
    ctx.setIsLoggedIn(true);
    ctx.setIsOrder(true);
  }

  return (
    <div>
      <div className="resProf">
        <div className="resP1">
          <Button onClick={onOrderHandler}>Orders</Button>
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
      {(console.log("MEALS : "), console.log(DUMMY_MEALS))}
      {
        <div className="foodcontain">
          {DUMMY_MEALS.map((meal) => (
            <div className="dfodcon">
              <ResFoods
                resName={meal.resName}
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
                deleteFood={onDeletHandler}
              ></ResFoods>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default ResPage;
