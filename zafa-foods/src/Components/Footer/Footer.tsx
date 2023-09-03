import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterContent>
            <h3>AboutUs</h3>
            <Content>Our story</Content>
            <Content>Our Vision</Content>
          </FooterContent>

          <FooterContent>
            <h3>Location</h3>
            <div>
              <h4>Madina</h4>
              <Content>Zongo Zunction, street 21 234</Content>
            </div>
            <Content>
              <h4>Ridge</h4>
              <Content>Opposite Ridge hospital</Content>
            </Content>
          </FooterContent>

          <FooterContent>
            <h3>Contact Us</h3>
            <Content>
              Madina- <span>+233569842022</span>
            </Content>
            <Content>
              Ridge- <span>+233547236477</span>
            </Content>
          </FooterContent>

          <FooterContent>
            <h3>Social</h3>
            <Content>facebook</Content>
            <Content>instagram</Content>
            <Content>Youtube</Content>
            <Content>Threads</Content>
            <Content>X</Content>
            <Content>Tik tok</Content>
          </FooterContent>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.div`
  width: 100vw;
  padding: 20px;
  background-color: #020503;
  /* position: fixed;
  bottom: 0; */
  display: grid;
  place-content: center;
  color: white;
`;
const FooterWrapper = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(4, 1fr);
`;
const FooterContent = styled.div`
  padding: 10px;
`;

const Content = styled.div`
  padding: 5px;
`;

export default Footer;
