import React from "react";
import s from "../styles/Body.module.css";
import Card from "./Card";

function Body() {
  return (
    <div className={s.body}>
      <Card />
    </div>
  );
}

export default Body;
