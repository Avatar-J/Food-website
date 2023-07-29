import React from "react";
import HerosectionImg from "../../../Images/resimg3.jpg";
import HerosectionImg2 from "../../../Images/hero2.jpg";
import HerosectionImg3 from "../../../Images/hero3.jpg";
import HerosectionImg4 from "../../../Images/hero4.jpg";
import HerosectionImg5 from "../../../Images/hero5.jpg";
import "./Herosection.css";
import { SectionHeader } from "../../../Components/GeneralStyling";

export default function Herosection() {
  return (
    <>
      <div className="Hero-Container">
        <img src={HerosectionImg2} alt="image" />

        <div className="overlay-text">
          <div>
            <h1>Welcome to the food home</h1>
            <p>
              Part of the secret of success is to eat what you like and let the
              food fight it out outside
            </p>
            <p>You don't need a silver fork to eat good food</p>
          </div>
        </div>
      </div>
    </>
  );
}
