import React from "react";
import "./Menu.css";
import { menulist } from "./Menulist";
import { SectionHeader } from "../../../Components/GeneralStyling.js";

const Menu = () => {
  return (
    <div className="Menu-container">
      <SectionHeader>
        Menu List <span>All dishes are Halal</span>
      </SectionHeader>
      <div className="Menu-wrapper">
        {menulist.map((item) => {
          return (
            <>
              <div className="Menu-item">
                <div className="menu-image">
                  <img src={item.img} alt="food-img" />
                </div>
                <div className="menu-details">
                  <div className="menu-name">
                    {item.name} ---------------
                    <span>{item.price} cedis</span>
                  </div>
                  <div className="menu-ingredient">{item.ingredients}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
