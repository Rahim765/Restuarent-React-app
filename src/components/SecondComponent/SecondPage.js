import React, { useState } from "react";
import Description from "./Description";
import Header from "./Header";
import List from "./List";

const SecondPage = (props) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      
      <Header onSearch={setSearch} uName={props.userName}></Header>
      <Description></Description>
      <List search={search}></List>
    </div>
  );
};

export default SecondPage;
