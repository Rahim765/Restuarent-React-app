import React, { useEffect, useState } from "react";
import "./List.css";
import Restuarent from "./Restuarent";

const list = [
  {
    path: "restuarent/res1.jpg",
    name: "First",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res2.jpg",
    name: "Second",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res3.jpg",
    name: "Third",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res4.jpg",
    name: "Fourth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res5.jpg",
    name: "Fifth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res6.jpg",
    name: "Sixth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res7.jpg",
    name: "Seventh",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res8.jpg",
    name: "Eigth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res9.jpg",
    name: "Ninth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res10.jpg",
    name: "Tenth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res1.jpg",
    name: "First",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res2.jpg",
    name: "Second",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res3.jpg",
    name: "Third",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res4.jpg",
    name: "Fourth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res5.jpg",
    name: "Fifth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res6.jpg",
    name: "Sixth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res7.jpg",
    name: "Seventh",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res8.jpg",
    name: "Eigth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res9.jpg",
    name: "Ninth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
  {
    path: "restuarent/res10.jpg",
    name: "Tenth",
    address: "SUITE 5A-120 4799 E DRAGRAM TUCSON AZ 85705 ",
  },
];

var validRestuarants = [];

const List = (props) => {
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    loadRestuarant();
  }, []);

  async function loadRestuarant() {
    try {
      const response = await fetch("http://localhost:4000/restuarant");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      validRestuarants = data.result;
      console.log(validRestuarants[0].path);
      console.log(validRestuarants);
      console.log(`restuarent/${validRestuarants[0].resName}`);
      setUpdate(!update);
    } catch (error) {
      console.log(error.message);
    }
  }

  console.log(validRestuarants);
  return (
    <div className="res">
      {validRestuarants.map(
        (res) =>
          (res.resName.includes(props.search) ||
            res.resAddress.includes(props.search)) && (
            <Restuarent
              photo={`restuarent/${res.resName}.jpg`}
              name={res.resName}
              address={res.resAddress}
            ></Restuarent>
          )
      )}
    </div>
  );
};

export default List;
