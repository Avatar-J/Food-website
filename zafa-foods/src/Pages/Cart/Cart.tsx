import React, { useState, useContext, useEffect } from "react";
import {
  SectionContainer,
  SectionHeader,
  ImageAdjust,
  Button,
  Text,
  FormElement,
  Input,
  Center,
} from "../../Components/GeneralStyling";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import Modals from "../../Components/Modals";
import { MenuContext } from "../../Context/MenuContext";

function Cart() {
  const [showModal, setShowModal] = useState(false);

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

  const closeModalHandler = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    // const { total } = totalCostOfItems();
    totalCostOfItems();
    totalNumberOfItems();
  }, []);

  return (
    <>
      {showModal && (
        <Modals closeModal={closeModalHandler}>
          <Center style={{ flexDirection: "column" }}>
            <Text>You will receive a mobile money prompt to make payment</Text>
            <FormElement>
              <label>Phone Number</label>
              <Input type="number" />
            </FormElement>
            <Button onClick={closeModalHandler}>Done</Button>
          </Center>
        </Modals>
      )}
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
          <Button onClick={closeModalHandler}>ORDER</Button>
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
    padding: 5px;

    & th,
    td {
      padding: 10px 2px;
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
