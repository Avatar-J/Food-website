import React from "react";
import MeetOurChefs from "./MeetOurChefs/MeetOurChefs";
import VerticalTimeline from "./VerticalTimeline/VerticalTimeline";
import {
  SectionContainer,
  SectionHeader,
  CardSectionWrapper,
  Text,
} from "../../Components/GeneralStyling";
import styled from "styled-components";
import NewsletterSub from "./NewsletterSub";

const TextCard = styled.div`
  width: 350px;
  height: 300px;
  padding: 20px;

  &:nth-child(1):hover {
    background-color: rgb(210, 245, 84);
  }
  &:nth-child(2):hover {
    background-color: rgb(84, 245, 138);
  }
  &:nth-child(3):hover {
    background-color: #fcea64;
  }
`;

const CardHeader = styled.div`
  font-size: 1.5rem;
  color: rgba(10, 167, 23, 1);
  font-weight: 500;
  display: flex;
  justify-content: center;
  text-align: center;
`;

function AboutUs() {
  return (
    <>
      {/* <VerticalTimeline /> */}
      <SectionContainer
        style={{
          height: "auto",
          // backgroundColor: "rgba(84,245,138, 0.7)",
          background:
            "linear-gradient(45deg, rgb(255, 255, 255) 50%, rgba(84,245,138, 0.7) 50%) ",
        }}
      >
        <SectionHeader>Our Story</SectionHeader>
        <CardHeader>
          Welcome to Zafa Foods - Where passion meets tradition!
        </CardHeader>

        <Text>
          Join us on a nostalgic culinary journey inspired by Ghanaian-cuisine.
          From secret family recipes to warm hospitality,
          <br /> savor cherished moments in our cozy ambiance. Create lasting
          memories with us at <span>Zafa Foods</span>.
        </Text>

        <Text>Bon appétit!</Text>
      </SectionContainer>

      <MeetOurChefs />

      <SectionContainer>
        <CardSectionWrapper style={{ gridTemplateColumns: "auto auto auto" }}>
          <TextCard>
            <CardHeader>OUR VISION</CardHeader>
            <Text>
              our vision at Zafa Foods is to be the ultimate destination for
              unforgettable dining experiences. Through innovation and
              tradition, we aim to inspire our guests with exceptional flavors,
              creating lasting memories in a welcoming ambiance
            </Text>
          </TextCard>

          <TextCard>
            <CardHeader>OUR VALUES</CardHeader>
            <Text>
              We are deeply passionate about food, hospitality, and creating
              memorable dining experiences that delight our guests. We also
              believe in giving back to the community that supports us. We
              actively participate in local initiatives, sourcing locally, and
              contributing to causes close to our heart
            </Text>
          </TextCard>

          <TextCard>
            <CardHeader>OUR MISSION</CardHeader>
            <Text>
              We unite exceptional ingredients, culinary artistry, and a
              welcoming setting to create memorable experiences for our guests.
              We're dedicated to transforming dining into a celebration of
              flavors and connections, one plate at a time.
            </Text>
          </TextCard>
        </CardSectionWrapper>
      </SectionContainer>
      <NewsletterSub />
    </>
  );
}

export default AboutUs;
