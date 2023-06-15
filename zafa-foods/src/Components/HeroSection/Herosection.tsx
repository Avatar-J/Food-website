import React from "react";
import HerosectionImg from "../../Images/Herosection.jpg";
import "./Herosection.css";

export default function Herosection() {
  return (
    <div className="Container">
      <div>
        <img src={HerosectionImg} />
      </div>
    </div>
  );
}
