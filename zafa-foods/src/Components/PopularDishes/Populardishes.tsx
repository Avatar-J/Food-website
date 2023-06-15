import React from "react";
import { dishes } from "./Dishes";
import "./Populardishes.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Populardishes() {
  return (
    <div className="slider-container">
      <h2>Popular Dishes</h2>
      <div className="slider-wrapper">
        <div className="slider-arrow">
          <BsFillArrowLeftCircleFill />
        </div>
        <div className="food-carousel">
          {dishes.map((dish) => {
            return (
              <div className="food-img">
                <img src={dish.image} alt={dish.name} />
              </div>
            );
          })}
        </div>
        <div className="slider-arrow">
          <BsFillArrowRightCircleFill />
        </div>
      </div>
    </div>
  );
}

export default Populardishes;
