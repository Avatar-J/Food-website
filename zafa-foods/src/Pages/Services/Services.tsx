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
import Modals from "../../Components/Modals";

function Services() {
  const [readMore, setReadMore] = useState(false);
  const [moreInfo, setMoreInfo] = useState("");
  const [service, setService] = useState("");

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  const modalInfoHandler = (more: string, title: string) => {
    setMoreInfo(more);
    setService(title);
  };
  return (
    <>
      <SectionContainer>
        <SectionHeader>Services</SectionHeader>
        <CardSectionWrapper
          style={{ gridTemplateColumns: "auto auto auto", columnGap: "40px" }}
        >
          {services.map((item) => {
            return (
              <>
                {readMore ? (
                  <Modals closeModal={readMoreHandler}>
                    <SectionHeader>{service}</SectionHeader>
                    <Text>{moreInfo}</Text>
                    <Button>Book Now</Button>
                  </Modals>
                ) : null}

                <Card>
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
                      <Button
                        onClick={() => {
                          readMoreHandler();
                          modalInfoHandler(item.More, item.title);
                        }}
                      >
                        Read more
                      </Button>
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
