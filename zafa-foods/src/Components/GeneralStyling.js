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
`;

export const SectionContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
  padding: 20px;
  height: 400px;
  display: grid;
  place-content: center;
`;

export const CardSectionWrapper = styled.div`
  width: 100%,
  height: 350px;
  display: grid;
  place-content: center;
  grid-template-columns: auto auto auto auto;
  column-gap: 25px;
  position: relative;
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

  &:nth-child(1) {
    background-color: rgb(84, 245, 138);
  }
  &:nth-child(2) {
    background-color: rgb(84, 245, 138);
  }
  &:nth-child(3) {
    background-color: #fcea64;
  }
`;

export const CardImg = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.div`
  text-align: center;
  font-weight: 300px;
  font-size: 28px;
  color: rgba(10, 167, 23, 1);
  transform: translateY(0);
`;

export const ImageAdjust = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.5s ease;

  & .card-info {
    display: none;
  }
`;

export const BranchSection = styled.div`
  width: 100%;
  height 400px;
  margin: 20px;
  display: grid;
  grid-template-columns: auto auto;

  & .img-box :nth-child(even) {
    grid-row-start: 1;
  }

  & .left{

  }
  & .right{
    
  }
  

  & .branch-img-container{
     width: 600px;
     height:500px;
     background-color: rgba(0,0,0,0.5);
  }

  & .branch-description{
     padding: 30px;
     display: grid;
     place-content: center;
     position: relative;
     z-index: 1;
  }

  & .branch-description::after{
   content: "";
   width: 100px;
   height: 100px;
   position: absolute;
   background-color: yellow;
   top:30%;
   left: 60%;
   border-radius: 50%;
   z-index: -1;
 }

  &.img-box{
    width: 50%
  }

`;
