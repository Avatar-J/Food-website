import React, { useState, useContext, useEffect } from "react";
import {
  SectionHeader,
  MenuButton,
  Button,
  Center,
  Input,
} from "../Components/GeneralStyling.js";
import styled from "styled-components";
import { type } from "os";

interface Dish {
  name: string;
  price: number;
  ingredients: string;
  img: string;
  item: number;
}

type Props = {
  children?: React.ReactNode;
  cancel: () => void;
};

export const SideContainer: React.FC<{
  children: React.ReactNode;
  cancel: () => void;
}> = (props) => {
  const [singleOrder, setSingleOrder] = useState<Dish>();

  const singleOrderHandler = (item: Dish) => {
    setSingleOrder(item);
  };
  return (
    <>
      <OrderPopUp>
        <SectionHeader>Place Order</SectionHeader>

        <Center style={{ flexDirection: "column" }}>
          {props.children}

          <OrderForm>
            <label>Name</label>
            <Input type="text" style={{ width: "200px" }} />
          </OrderForm>

          <OrderForm>
            <label>Phone Number</label>
            <Input type="number" style={{ width: "200px" }} />
          </OrderForm>

          <Center>
            <MenuButton style={{ margin: "10px" }}>Order</MenuButton>
            <MenuButton style={{ margin: "10px" }} onClick={props.cancel}>
              Cancel
            </MenuButton>
          </Center>

          <div style={{ padding: "5px 20px" }}>
            You will get a mobile money prompt to make payment
          </div>
        </Center>
      </OrderPopUp>
    </>
  );
};

const OrderPopUp = styled.div`
  width: 500px;
  height: 100vh;
  display: grid;
  place-content: center;
  /* background-color: #6ead83; */
  & img {
    width: 200px;
    height: 200px;
  }

  @media only screen and (max-width: 768px) {
    width: 100vw;
    z-index: 1;
  }
`;

const OrderForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px;

  & label {
    //width: 28%;
    /* display: flex;
    justify-content: flex-end;
    align-items: center; */
    color: black;
  }
`;
