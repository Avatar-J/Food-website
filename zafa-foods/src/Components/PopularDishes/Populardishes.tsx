import React from "react";
import { dishes } from "./Dishes";
import "./Populardishes.css";

function Populardishes() {
  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div className="food-carousel">
          {dishes.map((dish) => {
            return (
              <div className="food-card">
                <div className="food-img">
                  <img src={dish.image} alt={dish.name} />
                </div>
                <div className="food-name">
                  <h3>{dish.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Populardishes;
