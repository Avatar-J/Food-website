import React from "react";
import {
  SectionHeader,
  BranchSection,
  ImageAdjust,
} from "../../Components/GeneralStyling";
import branch1 from "../../Images/branch1.jpg";
import branch2 from "../../Images/branch2 (1).jpg";
import branch3 from "../../Images/branch2 (2).jpg";
import branch4 from "../../Images/branch2 (3).jpg";

const Data = [
  {
    name: "Madina branch",
    description: "",
    img: branch1,
    alt: "madina branch",
    imgstart: false,
    clname: "left",
  },
  {
    name: "Ridge branch",
    description: "",
    img: branch2,
    alt: "ridge branch",
    imgstart: true,
    clname: "right",
  },
];

function Branches() {
  return (
    <>
      {Data.map((branch) => {
        return (
          <BranchSection>
            <div className="branch-description">
              <SectionHeader>{branch.name}</SectionHeader>
              <p>
                &Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi eveniet veniam reprehenderit consectetur praesentium
                doloribus at vitae distinctio illo temporibus velit quod dicta
                laudantium cumque nisi molestias, officia vel ipsa!
              </p>
            </div>

            <div className="img-box">
              <div className="branch-img-container">
                <img src={branch.img} alt={branch.alt} />
              </div>
            </div>
          </BranchSection>
        );
      })}
    </>
  );
}

export default Branches;
