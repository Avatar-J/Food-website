import React from "react";
import {
  SectionContainer,
  SectionHeader,
  CardSectionWrapper,
  Card,
} from "../../Components/GeneralStyling";
import { services } from "./servicesData";

function Services() {
  return (
    <>
      <SectionContainer>
        <SectionHeader>Services</SectionHeader>
        <CardSectionWrapper></CardSectionWrapper>
      </SectionContainer>
    </>
  );
}

export default Services;
