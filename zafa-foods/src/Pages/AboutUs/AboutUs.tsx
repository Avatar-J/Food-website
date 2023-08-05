import React from "react";
import MeetOurChefs from "./MeetOurChefs/MeetOurChefs";
import VerticalTimeline from "./VerticalTimeline/VerticalTimeline";
import {
  SectionContainer,
  SectionHeader,
  CardSectionWrapper,
  CurvedCard,
  Text,
} from "../../Components/GeneralStyling";

function AboutUs() {
  return (
    <>
      {/* <VerticalTimeline /> */}
      <SectionContainer
        style={{
          height: "auto",
          // backgroundColor: "rgba(84,245,138, 0.7)",
        }}
      >
        <SectionHeader>Our Story</SectionHeader>
        <h4 style={{ fontSize: "25px", color: "green" }}>
          Welcome to <span>Zafa Foods</span> - Where passion meets tradition!
        </h4>

        <Text>
          Join us on a nostalgic culinary journey inspired by Ghanaian-cuisine.
          From secret family recipes to warm hospitality,
          <br /> savor cherished moments in our cozy ambiance. Create lasting
          memories with us at <span>Zafa Foods</span>.
        </Text>

        <Text>Bon appétit!</Text>
      </SectionContainer>

      <SectionContainer>
        <CardSectionWrapper style={{ gridTemplateColumns: "auto auto" }}>
          <CurvedCard>
            <SectionHeader>OUR VISION</SectionHeader>
            <Text>
              our vision at Zafa Foods is to be the ultimate destination for
              unforgettable dining experiences. Through innovation and
              tradition, we aim to inspire our guests with exceptional flavors,
              creating lasting memories in a welcoming ambiance
            </Text>
          </CurvedCard>

          <CurvedCard>
            <SectionHeader>OUR VALUES</SectionHeader>
            <Text>
              We are deeply passionate about food, hospitality, and creating
              memorable dining experiences that delight our guests. We also
              believe in giving back to the community that supports us. We
              actively participate in local initiatives, sourcing locally, and
              contributing to causes close to our heart
            </Text>
          </CurvedCard>
        </CardSectionWrapper>
      </SectionContainer>

      <MeetOurChefs />
    </>
  );
}

export default AboutUs;
