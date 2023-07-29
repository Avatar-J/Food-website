import React from "react";
import Derrick from "../../../Images/derrick.jpg";
import Amidu from "../../../Images/Amidu.jpg";
import John from "../../../Images/John.jpg";
import Afia from "../../../Images/afia.jpg";
import Hamza from "../../../Images/Hamza.jpg";
import Akosua from "../../../Images/Akosua.jpg";
import "./MeetOurChefs.css";
import {
  SectionHeader,
  SectionContainer,
  CardSectionWrapper,
  Card,
  CardImg,
  CardTitle,
  ImageAdjust,
  CardOverlay,
} from "../../../Components/GeneralStyling";

const chefs = [
  {
    name: "Chef Derrick",
    img: Derrick,
    info: "Meet Chef Derrick Smith, a culinary virtuoso with a passion for French cuisine, creating dishes that leave a lasting impression with delightful fusion of classic techniques and contemporary twists",
  },
  {
    name: "Chef Amidu",
    img: Hamza,
    info: "Discover the culinary brilliance of Chef Amidu Alhassan, whose passion for farm-to-table cooking shines through in every dish, offering a delightful symphony of flavors that celebrate the freshest seasonal ingredients",
  },
  {
    name: "Chef Mary",
    img: Akosua,
    info: "Introducing Chef Akosua Agyapong, an award-winning culinary artist renowned for her exquisite pastry creations, infusing flavors from around the world into delightful desserts that captivate every diner's palate",
  },
  {
    name: "Chef Afia",
    img: Afia,
    info: "Introducing Chef Afia Danso, a rising star in the culinary world, known for her artistic presentations and a mastery of bold flavors that awaken the senses, offering a dining experience that is as visually stunning as it is delicious",
  },
];

function MeetOurChefs() {
  return (
    <>
      <SectionContainer style={{ marginTop: "20px" }}>
        <SectionHeader>Meet Our Chefs</SectionHeader>

        <CardSectionWrapper>
          {chefs.map((chef) => {
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

{
  /* 
                

                
              </div> */
}
