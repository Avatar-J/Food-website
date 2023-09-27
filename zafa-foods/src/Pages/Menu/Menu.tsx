import React, { useState, useContext, useEffect } from "react";
import "./Menu.css";
import { menulist } from "./Menulist";
import {
  SectionHeader,
  MenuButton,
  CardSectionWrapper,
  Button,
} from "../../Components/GeneralStyling.js";
import styled from "styled-components";
import { MenuContext } from "../../Context/MenuContext";
import { NavbarContext } from "../../Context/NavbarContext";

const Menu = () => {
  const {
    addToCart,
    removeFromCart,
    displayedData,
    setDisplayedData,
    add,
    setAdd,
  } = useContext(MenuContext);

  const { navmenu, setNavmenu, shownavmenu } = useContext(NavbarContext);

  const MenuChangeHandler = (index: number) => {
    setDisplayedData(index);
  };

  useEffect(() => {
    shownavmenu();
  }, []);

  return (
    <div className="Menu-container">
      <SectionHeader>
        Menu List - <span>All dishes are Halal</span>
      </SectionHeader>

      <MenuWrapper>
        {menulist.map((item, index) => {
          return (
            <>
              <MenuButton onClick={() => MenuChangeHandler(index)}>
                {item.Category}
              </MenuButton>
            </>
          );
        })}
      </MenuWrapper>

      <SectionHeader>{menulist[displayedData].Category}</SectionHeader>

      <div className="Menu-wrapper">
        {menulist[displayedData].menu.map((item, index) => {
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

                  <div>
                    {add[index] ? (
                      <FButton onClick={() => removeFromCart(item, index)}>
                        Added
                      </FButton>
                    ) : (
                      <FButton onClick={() => addToCart(item, index)}>
                        Add to cart
                      </FButton>
                    )}

                    <FButton>Order Now</FButton>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

const FButton = styled.button`
  width: 100px;
  padding: 7px;
  border: none;
  background-color: rgb(84, 245, 138);
  font-size: 1rem;
  font-weight: 400;
  margin: 10px;
`;

const MenuWrapper = styled.div`
  height: auto;
  display: grid;
  place-content: center;
  grid-template-columns: auto auto auto auto auto;
  column-gap: 25px;
  row-gap: 50px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto auto;
  }
`;

export default Menu;
