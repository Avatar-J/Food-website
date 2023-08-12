import React from "react";
import styled from "styled-components";
import { Button, PageOverlay } from "./GeneralStyling";
import { AiFillCloseCircle } from "react-icons/ai";

const ModalContainer = styled.div`
  width: 60%;
  height: 60%;
  background-color: white;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Modals: React.FC<{
  children: React.ReactNode;
  closeModal: () => void;
}> = (props) => {
  const closeModalHandler = () => {
    props.closeModal();
  };
  return (
    <>
      <PageOverlay onClick={closeModalHandler}>
        <ModalContainer>
          <AiFillCloseCircle
            color="green"
            size="3rem"
            style={{ position: "absolute", top: "0", right: "0" }}
            onClick={closeModalHandler}
          />
          <Content>{props.children}</Content>
        </ModalContainer>
      </PageOverlay>
    </>
  );
};

export default Modals;
