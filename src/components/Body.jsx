import React from "react";
import s from "../styles/Body.module.css";
import Card from "./Card";
import CardInfo from "../helpers/CardInfo";

function Body() {
  const cardElement = CardInfo.map((cardItem) => (
    <Card key={cardItem.key} item={cardItem} />
  ));
  return <section className={s.body}>{cardElement}</section>;
}

export default Body;
