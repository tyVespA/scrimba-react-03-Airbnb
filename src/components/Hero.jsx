import React from "react";
import s from "../styles/Hero.module.css";
import HeroImg from "../assets/Group77.jpg";

function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.heroImg}>{/* <img src={HeroImg} alt="" /> */}</div>
      <div className={s.heroText}>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
