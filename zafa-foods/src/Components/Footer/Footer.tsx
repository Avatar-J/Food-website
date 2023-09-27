import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterContent>
            <Fheader>AboutUs</Fheader>
            <Content>Our story</Content>
            <Content>Our Vision</Content>
          </FooterContent>

          <FooterContent>
            <Fheader>Location</Fheader>
            <div>
              {/* <h4>Madina</h4> */}
              <Content>Zongo Zunction, street 21 234</Content>
            </div>
            <Content>
              {/* <h4>Ridge</h4> */}
              <Content>Opposite Ridge hospital</Content>
            </Content>
          </FooterContent>

          <FooterContent>
            <Fheader>Contact Us</Fheader>
            <Content>
              Madina- <span>+233569842022</span>
            </Content>
            <Content>
              Ridge- <span>+233547236477</span>
            </Content>
          </FooterContent>

          <FooterContent>
            <Fheader>Social</Fheader>

            <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
              <Content>
                <Socials>
                  <BsFacebook
                    size="1.5rem"
                    color="white"
                    style={{ paddingRight: "5px" }}
                  />
                  facebook
                </Socials>
              </Content>

              <Content>
                <Socials>
                  <AiFillInstagram
                    size="1.5rem"
                    color="white"
                    style={{ paddingRight: "5px" }}
                  />
                  instagram
                </Socials>
              </Content>

              <Content>
                <Socials>
                  <AiFillYoutube
                    size="1.5rem"
                    color="white"
                    style={{ paddingRight: "5px" }}
                  />
                  Youtube
                </Socials>
              </Content>

              <Content>
                <Socials>
                  <AiFillTwitterCircle
                    size="1.5rem"
                    color="white"
                    style={{ paddingRight: "5px" }}
                  />
                  Threads
                </Socials>
              </Content>

              <Content>
                <Socials>
                  <FaTiktok
                    size="1.5rem"
                    color="white"
                    style={{ paddingRight: "5px" }}
                  />
                  Tik tok
                </Socials>
              </Content>
            </div>
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

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FooterContent = styled.div`
  padding: 10px;
`;

const Content = styled.div`
  padding: 5px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Socials = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Fheader = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
