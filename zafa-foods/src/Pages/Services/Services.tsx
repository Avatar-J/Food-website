import {
  SectionContainer,
  SectionHeader,
  CardSectionWrapper,
  Card,
  CardImg,
  ImageAdjust,
  Text,
  CardTitle,
} from "../../Components/GeneralStyling";
import { services } from "./servicesData";

function Services() {
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
                <Card style={{}}>
                  <CardImg>
                    <ImageAdjust src={item.img} />
                  </CardImg>
                  <CardTitle>{item.title}</CardTitle>
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
