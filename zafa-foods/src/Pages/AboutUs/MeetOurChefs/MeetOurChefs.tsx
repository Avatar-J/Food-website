import React from "react";
import Derrick from "../../../Images/derrick.jpg";
import Amidu from "../../../Images/Amidu.jpg";
import John from "../../../Images/John.jpg";
import "./MeetOurChefs.css";
import { SectionHeader } from "../../../Components/GeneralStyling";

const chefs = [
  {
    name: "Derrick",
    img: Derrick,
    info: "Cooking comes natural to me. I hate to brag, but my food is out of this world and you can only enjoy it at Zafa foods",
  },
  {
    name: "Amidu",
    img: Amidu,
    info: "I believe that food is life and the key to happiness.Only Zafa foods can provide that",
  },
  {
    name: "John",
    img: John,
    info: "Here at Zafa food, we treat everyone like family and that is why we cook with love",
  },
  {
    name: "Afia",
    img: Amidu,
    info: "Our food takes you down memory lane. It tatses just like how mama makes it",
  },
];

function MeetOurChefs() {
  return (
    <>
      <div className="chefs-section-container">
        <SectionHeader>Meet Our Chefs</SectionHeader>

        <div className="chefs-section-wrapper">
          {chefs.map((chef) => {
            return (
              <div className="chef-img-container">
                <img src={chef.img} alt={chef.name} />

                <div className="chefs-intro-overlay">
                  <h2>{chef.name}</h2>
                  <p className="chef-intro-det">{chef.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MeetOurChefs;

{
  /* 
                

                
              </div> */
}
