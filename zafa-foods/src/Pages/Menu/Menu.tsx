import React, { useState, useContext, useEffect } from "react";
import "./Menu.css";
import { menulist } from "./Menulist";
import {
  SectionHeader,
  MenuButton,
  Button,
  Center,
  Input,
  Text,
} from "../../Components/GeneralStyling.js";
import styled from "styled-components";
import { MenuContext } from "../../Context/MenuContext";
import { NavbarContext } from "../../Context/NavbarContext";
import { SideContainer } from "../../Components/SideContainer";

interface Dish {
  name: string;
  price: number;
  ingredients: string;
  img: string;
  item: number;
}

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
  const [singleOrder, setSingleOrder] = useState<Dish>();
  const [showOrder, setShowOrder] = useState(false);
  const MenuChangeHandler = (index: number) => {
    setDisplayedData(index);
  };

  const singleOrderHandler = (item: Dish) => {
    setSingleOrder(item);
    if (singleOrder) {
      setShowOrder(true);
    }
  };

  const cancelOrder = () => {
    setShowOrder(false);
  };

  useEffect(() => {
    shownavmenu();
  }, []);

  return (
    <div className="Menu-main-container">
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

                      <FButton onClick={() => singleOrderHandler(item)}>
                        Order Now
                      </FButton>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {showOrder && (
        <SideContainer cancel={cancelOrder}>
          <img src={singleOrder?.img} />

          <h4>{singleOrder?.name}</h4>
          {/* <div>{singleOrder?.ingredients}</div> */}
          <div>
            <span>Price:</span>
            {singleOrder?.price} cedis
          </div>
        </SideContainer>
      )}
    </div>
  );
};

const FButton = styled.button`
  width: 100px;
  padding: 7px;
  border: 1px solid rgb(84, 245, 138);
  background-color: white;
  font-size: 1rem;
  font-weight: 400;
  color: rgb(73, 206, 117);
  margin: 10px;

  &:hover {
    background-color: rgb(84, 245, 138);
    color: black;
  }
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
