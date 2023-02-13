import React from "react";
import s from "../styles/Card.module.css";
import Star from "../assets/Star.svg";

function Card({ item }) {
  return (
    <div className={s.card}>
      <div className={s.img}>
        {item.bannerValue && <p className={s.banner}>{item.bannerValue}</p>}
        <img src={`../images/${item.image}.jpg`} alt="" />
      </div>
      <div className={s.rating}>
        <img src={Star} alt="" />
        <span className={s.ratingValue}>{item.ratingValue}</span>
        <span className={s.ratingAmout}>({item.ratingAmout})</span>
        <span className={s.divider}>·</span>
        <span className={s.ratingLocation}>{item.ratingLocation}</span>
      </div>
      <p className={s.title}>{item.title}</p>
      <p className={s.price}>
        <span>From $</span>
        <span className={s.priceValue}>{item.priceValue}</span>
        <span className={s.perPerson}> / person</span>
      </p>
    </div>
  );
}

export default Card;
