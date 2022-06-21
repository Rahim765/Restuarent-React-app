import React from "react";
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

const List = (props) => {
  return (
    <div className="res">
      {list.map(
        (res) =>
          (res.name.includes(props.search) ||
            res.address.includes(props.search)) && (
            <Restuarent
              photo={res.path}
              name={res.name}
              address={res.address}
            ></Restuarent>
          )
      )}
    </div>
  );
};

export default List;
