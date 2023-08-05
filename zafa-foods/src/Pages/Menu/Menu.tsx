import React, { useState } from "react";
import "./Menu.css";
import { menulist } from "./Menulist";
import {
  SectionHeader,
  MenuButton,
  CardSectionWrapper,
} from "../../Components/GeneralStyling.js";

const Menu = () => {
  const [displayedData, setDisplayedData] = useState(2);

  const MenuChangeHandler = (index: number) => {
    setDisplayedData(index);
  };

  return (
    <div className="Menu-container">
      <SectionHeader>
        Menu List - <span>All dishes are Halal</span>
      </SectionHeader>

      <CardSectionWrapper
        style={{ gridTemplateColumns: "auto auto auto auto auto" }}
      >
        {menulist.map((item, index) => {
          return (
            <>
              <MenuButton onClick={() => MenuChangeHandler(index)}>
                {item.Category}
              </MenuButton>
            </>
          );
        })}
      </CardSectionWrapper>

      <SectionHeader>{menulist[displayedData].Category}</SectionHeader>

      <div className="Menu-wrapper">
        {menulist[displayedData].menu.map((item) => {
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
