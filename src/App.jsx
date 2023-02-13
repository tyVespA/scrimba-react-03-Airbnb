import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Body />
    </>
  );
}

export default App;
