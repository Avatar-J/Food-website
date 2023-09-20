import React, { useState, useContext } from "react";
import {
  SectionContainer,
  SectionHeader,
  ImageAdjust,
} from "../../Components/GeneralStyling";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import img1 from "../../Images/Banana Bonanza.jpg";
import img2 from "../../Images/ChocolateBananaSmoothie.jpg";
import img3 from "../../Images/Fried-Rice.jpg";
import img4 from "../../Images/Jollof.jpg";
import { MenuContext } from "../../Context/MenuContext";

function Cart() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);

  const {
    selectedItems,
    addToCart,
    displayedData,
    add,
    setAdd,
    totalCostOfItems,
  } = useContext(MenuContext);

  const { total, numberOfItems } = totalCostOfItems();

  const priceHandler = (Price: number) => {
    if (price == 0) {
      setPrice(Price);
    }

    return price;
  };

  const addHandler = (price: number) => {
    setCount((prevState) => prevState + 1);

    // setPrice(price);
    setPrice((prevState) => prevState + price);
  };

  const subHandler = (price: number) => {
    if (count != 1) {
      setCount((prevState) => prevState - 1);

      setPrice((prevState) => prevState - price);
    }
  };
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
                        <div onClick={() => subHandler(data.price)}>
                          <FaMinus color="green" />
                        </div>
                        {count}
                        <div onClick={() => addHandler(data.price)}>
                          <FaPlus color="green" />
                        </div>
                      </Quantity>

                      <td>{priceHandler(data.price)}</td>
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
                <td>{numberOfItems}</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </CartWrapper>
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
`;

const TableHeader = styled.div``;

const ImageDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50% 50%;
`;

const Quantity = styled.td`
  /* display: flex; */
`;

export default Cart;
