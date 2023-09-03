import React, { useState, useEffect } from "react";
import { SectionHeader, ImageAdjust } from "../../Components/GeneralStyling";
import { branchDetails } from "../../Data";
import styled from "styled-components";
import { Button } from "../../Components/GeneralStyling";

function Branches() {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    setCurrentImg((prevIndex) => (prevIndex + 1) % 3);
  };

  useEffect(() => {
    const interval = setInterval(nextImg, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <SectionHeader>Branches</SectionHeader>

      {branchDetails.map((item) => {
        return (
          <>
            <BranchSection isReverse={item.position}>
              <div className="branch-description">
                <SectionHeader>{item.name}</SectionHeader>
                <p>{item.paragraph}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Button>Order Now</Button>
                  <Button>Book Now</Button>
                </div>
              </div>

              <div className="img-container">
                <div className="branch-img-container">
                  <ImageAdjust
                    src={item.img[currentImg]}
                    alt={item.name}
                    // style={{
                    //   clipPath: "circle(0% at 0% 100%)",
                    //   transition: "all 0.7s",
                    // }}
                  />
                </div>
                {/* {item.img.map((img) => {
                  return (
                    <>
                      <div className="branch-img-container">
                        <ImageAdjust src={img} alt={item.name} />
                      </div>
                    </>
                  );
                })} */}
              </div>
            </BranchSection>
          </>
        );
      })}
    </>
  );
}

export default Branches;

interface BranchSectionProps {
  isReverse: boolean;
}

const BranchSection = styled.div<BranchSectionProps>`
  width: 100vw;
  height: 400px;
  margin: 20px;
  display: flex;
  flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};

  &.img-container {
    width: 50%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.5); */
    display: grid;
    grid-auto-flow: column;
    overflow: hidden;
  }

  & .branch-img-container {
    width: 100%;
    height: 100%;
    /* opacity: 1;
    transition: 5s ease-in-out; */
    /* animation: slide-show 8s infinite; */
  }

  & .branch-description {
    width: 50%;
    padding: 30px;
    display: grid;
    place-content: center;
    position: relative;
    z-index: 1;
  }

  & .branch-description::after {
    content: "";
    width: 100px;
    height: 100px;
    position: absolute;
    background-color: yellow;
    top: 5rem;
    left: 25rem;
    border-radius: 50%;
    z-index: -1;
  }
  @keyframes slide-show {
    0% {
      opacity: 0.3;
    }
    10% {
      opacity: 1;
    }
    20%,
    30% {
      opacity: 1;
      scale: 1.03;
    }
  }

  /* @keyframes slide-show1 {
    0%{
      translate: ;
    }
  } */

  /*For mobile phones*/
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    grid-template-columns: auto;

    & .branch-img-container {
      width: 100%;
      height: 300px;
    }
    & .branch-description::after {
      content: "";
      width: 80px;
      height: 80px;
      top: 20%;
      left: 55%;
    }
  }
`;
