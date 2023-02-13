import React from "react";
import s from "../styles/Card.module.css";
import ImgBike from "../assets/mountain-bike.jpg";

function Card() {
  return (
    <div className={s.card}>
      <div className={s.img}>
        <p className={s.banner}>SOLD OUT</p>
        <img src={ImgBike} alt="" />
      </div>
      <div className={s.rating}></div>
      <p className={s.title}></p>
      <p className={s.price}>
        <span className={s.priceValue}></span>
      </p>
    </div>
  );
}

export default Card;
