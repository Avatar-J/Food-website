import styled from "styled-components";
import {
  SectionContainer,
  SectionHeader,
  Text,
} from "../../Components/GeneralStyling";
import { reviewsData } from "./reviewsData";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import React from "react";

function Reviews() {
  return (
    <>
      <SectionContainer>
        <SectionHeader>Reviews</SectionHeader>

        <ReviewWrapper>
          {reviewsData[0].map((review, index) => {
            return (
              <>
                <Review tabIndex={index}>
                  <Quotation style={{ left: "0", top: "0" }}>
                    <FaQuoteLeft />
                  </Quotation>

                  <h3 style={{ color: "rgba(10, 167, 23, 1)" }}>
                    {review.name}
                  </h3>
                  <Text>{review.msg}</Text>

                  <Quotation style={{ right: "0", bottom: "0" }}>
                    <FaQuoteRight />
                  </Quotation>
                </Review>
              </>
            );
          })}
        </ReviewWrapper>
      </SectionContainer>
    </>
  );
}

const ReviewWrapper = styled.div`
  display: flex;
  overflow: hidden;
  color: black;
  padding: 20px;
  justify-content: space-between;
`;

const Review = styled.div`
  width: 300px;
  height: 220px;
  padding: 10px;
  position: relative;
`;

const Quotation = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export default Reviews;
