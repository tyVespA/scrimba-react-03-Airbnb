import React from "react";
import Logo from "../assets/airbnb.svg";
import s from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={s.navbar}>
      <img src={Logo} alt="" />
    </div>
  );
}

export default Navbar;
