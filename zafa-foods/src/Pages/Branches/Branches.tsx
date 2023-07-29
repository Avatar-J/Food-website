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
import Madina from "../../Images/branch1.jpg";
import Ridge from "../../Images/branch2 (1).jpg";
import branch3 from "../../Images/branch2 (2).jpg";
import branch4 from "../../Images/branch2 (3).jpg";
import MD_exterior from "../../Images/MD_exteriorView.jpg";
import RD_exterior from "../../Images/RD_exteriorView.jpg";
import MD_employee from "../../Images/MD_employee_of_the_year.jpg";
import RD_employee from "../../Images/RD_employee_of_the_year.jpg";
import MD_customers from "../../Images/customers.jpg";

const branchDetails = [
  {
    name: "Madina Branch",
    paragraph:
      "Step into our exquisite restaurant branch and indulge in a culinary experience like no other, as our chef's special dishes offer mouthwatering and flavorful delights that are both savory and delectable",
    img: Madina,

    CardItems: [
      {
        img: MD_exterior,
        title: "exterior view",
      },
      {
        img: MD_employee,
        title: "employee of the year",
      },
      {
        img: MD_customers,
        title: "Customers",
      },
    ],
  },
  {
    name: "Ridge Branch",
    paragraph:
      "Experience the warm hospitality and vibrant atmosphere of our authentic restaurant branch, where you can savor the luscious and unforgettable flavors of our handcrafted gourmet dishes.",
    img: Ridge,

    CardItems: [
      {
        img: RD_exterior,
        title: "exterior view",
      },
      {
        img: RD_employee,
        title: "employee of the year",
      },
    ],
  },
];

function Branches() {
  return (
    <>
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

      <SectionContainer>
        <CardSectionWrapper>
          {branchDetails[0].CardItems.map((items) => {
            return (
              <Card>
                <CardImg>
                  <ImageAdjust src={items.img} alt={items.img} />
                </CardImg>
                <CardOverlay>
                  <CardTitle>{items.title}</CardTitle>
                  <p className="card-info"></p>
                </CardOverlay>
              </Card>
            );
          })}
        </CardSectionWrapper>
      </SectionContainer>

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

      <SectionContainer>
        <CardSectionWrapper>
          {branchDetails[1].CardItems.map((items) => {
            return (
              <Card>
                <CardImg>
                  <ImageAdjust src={items.img} alt={items.img} />
                </CardImg>
                <CardOverlay>
                  <CardTitle>{items.title}</CardTitle>
                  <p className="card-info"></p>
                </CardOverlay>
              </Card>
            );
          })}
        </CardSectionWrapper>
      </SectionContainer>
    </>
  );
}

export default Branches;
