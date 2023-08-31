import React from "react";
import { chefData } from "../../../Data";
import {
  SectionHeader,
  SectionContainer,
  CardSectionWrapper,
  Card,
  CardTitle,
  ImageAdjust,
  CardOverlay,
} from "../../../Components/GeneralStyling";

function MeetOurChefs() {
  return (
    <>
      <SectionContainer>
        <SectionHeader>Meet Our Chefs</SectionHeader>

        <CardSectionWrapper>
          {chefData.map((chef) => {
            return (
              <Card>
                <ImageAdjust src={chef.img} alt={chef.name} />

                <CardOverlay>
                  <CardTitle>{chef.name}</CardTitle>
                  <p className="card-info">{chef.info}</p>
                </CardOverlay>
              </Card>
            );
          })}
        </CardSectionWrapper>
      </SectionContainer>
    </>
  );
}

export default MeetOurChefs;
