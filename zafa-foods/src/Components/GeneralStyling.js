import styled from "styled-components";

export const SectionHeader = styled.h2`
  text-align: center;
  font-weight: 500px;
  font-size: 32px;
  padding: 10px;
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
  width: 100%;
  padding: 20px;
`;

export const ImageAdjust = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BranchSection = styled.div`
  width: 100%;
  height 400px;
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto;

  & .img-box :nth-child(even) {
    grid-row-start: 1;
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

  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
