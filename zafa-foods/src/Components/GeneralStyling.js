import styled from "styled-components";

export const SectionHeader = styled.h2`
  text-align: center;
  font-weight: 500px;
  font-size: 32px;
  padding: 5px;
  background-color: rgba(10, 167, 23, 1);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-stroke: 0.5px black;
  -webkit-background-clip: text;
  animation: colorslide linear 2s infinite;

  @keyframes colorslide {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }

  /*For mobile phones*/
  @media only screen and (max-width: 768px) {
    font-weight: 300px;
    font-size: 25px;
  }
`;

export const Content = styled.div`
  margin-top: 50px;
`;

export const SectionContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
  padding: 20px;
  height: auto;
  display: grid;
  place-content: center;
`;

export const CardSectionWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-content: center;
  grid-template-columns: auto auto auto auto;
  column-gap: 25px;
  row-gap: 50px;
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.5);
  position: relative;

  &:hover {
    scale: 1.1;
  }

  &:hover .card-info {
    display: block;
    color: white;
    height: 100%;
  }
`;

export const Text = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: 25px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  flex-wrap: wrap;
`;
export const CurvedCard = styled.div`
  width: 350px;
  height: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  border-top-left-radius: 160px;
  border-top-right-radius: 160px;
  border: 2px solid rgb(84, 245, 138);

  /* &:nth-child(1) {
    background-color: rgb(84, 245, 138);
  }
  &:nth-child(2) {
    background-color: rgb(84, 245, 138);
  }
  &:nth-child(3) {
    background-color: #fcea64;
  } */
`;

export const CardImg = styled.div`
  width: 100%;
  height: 70%;
`;

export const CardTitle = styled.div`
  text-align: center;
  font-weight: 300px;
  font-size: 25px;
  color: rgba(10, 167, 23, 1);
  transform: translateY(0);
`;

export const ImageAdjust = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const CardOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.5s ease;
  padding: 10px;

  & .card-info {
    display: none;
  }
`;

export const MenuButton = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  border-radius: 7px;
  border: none;
  background-color: rgb(84, 245, 138);
  font-size: 1rem;
  font-weight: 400;
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px;
  border: none;
  background-color: rgb(84, 245, 138);
  font-size: 1rem;
  font-weight: 400;
  margin: 20px;
`;

export const PageOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormElement = styled.div`
  margin: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  & label {
    width: 28%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Input = styled.input`
  outline: none;
  border: none;
  border: 1px solid black;
  padding: 10px;
  width: 300px;
  border-radius: 5px;
`;
