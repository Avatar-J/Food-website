import React, { useState, useContext, useEffect } from "react";
import {
  SectionContainer,
  SectionHeader,
  ImageAdjust,
  Button,
} from "../../Components/GeneralStyling";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

import { MenuContext } from "../../Context/MenuContext";

function Cart() {
  const {
    selectedItems,
    add,
    setAdd,
    totalCostOfItems,
    totalNumberOfItems,
    increaseItems,
    decreaseItems,
    totalPrice,
    totalItems,
  } = useContext(MenuContext);

  useEffect(() => {
    // const { total } = totalCostOfItems();
    totalCostOfItems();
    totalNumberOfItems();
  }, []);

  return (
    <>
      <SectionContainer>
        <SectionHeader>Cart Items</SectionHeader>

        <CartWrapper>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {selectedItems.map((data, index) => {
                return (
                  <>
                    <tr>
                      <td>
                        <ImageDiv>
                          <ImageAdjust
                            src={data.img}
                            style={{ borderRadius: "50%" }}
                          />
                        </ImageDiv>
                      </td>
                      <td>{data.name}</td>

                      <Quantity>
                        <div onClick={() => decreaseItems(index)}>
                          <FaMinus color="green" />
                        </div>
                        {data.item}
                        <div onClick={() => increaseItems(index)}>
                          <FaPlus color="green" />
                        </div>
                      </Quantity>

                      <td>{data.price}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Number of Item</th>
                <th>Total Price</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{totalItems}</td>
                <td>{totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </CartWrapper>

        <div style={{ display: "grid", placeContent: "center" }}>
          <Button>ORDER</Button>
        </div>
      </SectionContainer>
    </>
  );
}

const CartWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  place-content: center;
  /* grid-template-columns: repeat(4, 1fr); */

  & th,
  td {
    padding: 10px 40px;
    text-align: center;
    border: 1px solid #ddd;
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;

    & th,
    td {
      padding: 10px 10px;
    }
  }
`;

const TableHeader = styled.div``;

const ImageDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50% 50%;

  @media only screen and (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

const Quantity = styled.td`
  /* display: flex; */
`;

export default Cart;
