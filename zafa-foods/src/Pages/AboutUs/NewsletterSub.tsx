import React from "react";
import styled from "styled-components";
import {
  SectionContainer,
  SectionHeader,
  Text,
  Input,
  FormElement,
  Button,
} from "../../Components/GeneralStyling";

function NewsletterSub() {
  return (
    <>
      <NewsletterContainer>
        <SectionHeader>Subscribe to our Newsletter</SectionHeader>
        <Text>
          Subscribe to our exclusive newletter and be the first to know about
          exclusive offers and deals
        </Text>

        <FormElement>
          <label>Email</label>
          <Input type="email" />
          <Button style={{ marginLeft: "20px" }}>Subscribe</Button>
        </FormElement>
      </NewsletterContainer>
    </>
  );
}

const NewsletterContainer = styled.div`
  width: 100%;
  padding: 20px;
  height: auto;
  display: grid;
  place-content: center;
  background-color: rgba(84, 245, 138, 0.7);
`;

export default NewsletterSub;
