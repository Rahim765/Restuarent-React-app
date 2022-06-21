import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  
  return (
    <Fragment>
      <AvailableMeals ResName={props.ResName} search={props.search} />
    </Fragment>
  );
};

export default Meals;
