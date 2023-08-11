import { useState } from "react";
import {
  SectionContainer,
  SectionHeader,
  CardSectionWrapper,
  Card,
  CardImg,
  ImageAdjust,
  Text,
  CardTitle,
  Button,
  PageOverlay,
} from "../../Components/GeneralStyling";
import { services } from "./servicesData";

function Services() {
  const [readMore, setReadMore] = useState(false);

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };
  return (
    <>
      {readMore ? <PageOverlay onClick={readMoreHandler}></PageOverlay> : ""}

      <SectionContainer>
        <SectionHeader>Services</SectionHeader>
        <CardSectionWrapper
          style={{ gridTemplateColumns: "auto auto auto", columnGap: "40px" }}
        >
          {services.map((item) => {
            return (
              <>
                <Card style={{}}>
                  <CardImg>
                    <ImageAdjust src={item.img} />
                  </CardImg>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardTitle>{item.title}</CardTitle>
                    <div>
                      <Button onClick={readMoreHandler}>Read more</Button>
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </CardSectionWrapper>
      </SectionContainer>
    </>
  );
}

export default Services;
