import React from "react";
import "./VerticalTimeline.css";

const list = [
  {
    title: "Our Mission",
    info: "",
    clname: "right",
  },
  {
    title: "Our Vision",
    info: "",
    clname: "left",
  },
  {
    title: "Our Values",
    info: "",
    clname: "right",
  },
];
function VerticalTimeline() {
  return (
    <>
      <div className="timeline-container">
        <div className="timeline-wrapper">
          {list.map((item) => {
            return (
              <>
                <div className={`timeline-content-container ${item.clname}`}>
                  <div className="middle-point"></div>

                  <div className="text-box">
                    <h2>{item.title}</h2>
                    <p>
                      &Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis veritatis tempora saepe? Vel, iusto! Voluptates
                      modi molestiae aspernatur libero sunt accusantium
                      repellendus, ratione suscipit hic sequi sed explicabo nemo
                      facere!
                    </p>
                  </div>
                </div>
                {/* <div className="timeline-middle">
                  <div className="timeline-point"></div>
                </div> */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default VerticalTimeline;
