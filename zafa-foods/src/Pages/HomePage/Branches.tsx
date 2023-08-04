import React from "react";
import {
  SectionHeader,
  BranchSection,
  SectionContainer,
  CardSectionWrapper,
  Card,
  CardImg,
  CardTitle,
  ImageAdjust,
  CardOverlay,
} from "../../Components/GeneralStyling";
import { branchDetails } from "../../Data";

function Branches() {
  return (
    <>
      <SectionHeader>Branches</SectionHeader>
      <BranchSection>
        <div className="branch-description">
          <SectionHeader>{branchDetails[0].name}</SectionHeader>
          <p>{branchDetails[0].paragraph}</p>
        </div>

        <div className="img-box">
          <div className="branch-img-container">
            <ImageAdjust src={branchDetails[0].img} alt="Madina Branch" />
          </div>
        </div>
      </BranchSection>

      {/* <SectionContainer>
        <CardSectionWrapper>
          {branchDetails[0].CardItems.map((items) => {
            return (
              <Card style={{ border: "solid", borderRadius: "20px" }}>
                <ImageAdjust src={items.img} alt={items.img} />

                <CardOverlay>
                  <CardTitle>{items.title}</CardTitle>
                  <p className="card-info"></p>
                </CardOverlay>
              </Card>
            );
          })}
        </CardSectionWrapper>
      </SectionContainer> */}

      <BranchSection>
        <div className="img-box">
          <div className="branch-img-container">
            <ImageAdjust src={branchDetails[1].img} alt="Madina Branch" />
          </div>
        </div>

        <div className="branch-description">
          <SectionHeader>{branchDetails[1].name}</SectionHeader>
          <p>{branchDetails[1].paragraph}</p>
        </div>
      </BranchSection>

      {/* <SectionContainer>
        <CardSectionWrapper>
          {branchDetails[1].CardItems.map((items) => {
            return (
              <Card>
                <ImageAdjust src={items.img} alt={items.img} />

                <CardOverlay>
                  <CardTitle>{items.title}</CardTitle>
                  <p className="card-info"></p>
                </CardOverlay>
              </Card>
            );
          })}
        </CardSectionWrapper>
      </SectionContainer> */}
    </>
  );
}

export default Branches;
