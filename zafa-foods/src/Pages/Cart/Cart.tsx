import React from "react";
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

const dummyData = [
  {
    Item: img1,
    Name: "Banana Bonanza",
    Quantity: 1,
    Price: 30,
  },
  {
    Item: img2,
    Name: "Chocolate Banana Smoothie",
    Quantity: 1,
    Price: 30,
  },
  {
    Item: img3,
    Name: "Fried Rice",
    Quantity: 1,
    Price: 30,
  },
  {
    Item: img4,
    Name: "Jollof",
    Quantity: 1,
    Price: 30,
  },
];

function Cart() {
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
              {dummyData.map((data, index) => {
                return (
                  <>
                    <tr>
                      <td>
                        <ImageDiv>
                          <ImageAdjust
                            src={data.Item}
                            style={{ borderRadius: "50%" }}
                          />
                        </ImageDiv>
                      </td>
                      <td>{data.Name}</td>

                      <Quantity>
                        <div>
                          <FaMinus color="green" />
                        </div>
                        {data.Quantity}
                        <div>
                          <FaPlus color="green" />
                        </div>
                      </Quantity>

                      <td>{data.Price}</td>
                    </tr>
                  </>
                );
              })}
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
