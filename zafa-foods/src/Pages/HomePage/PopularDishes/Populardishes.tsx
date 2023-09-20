import React, { useEffect, useRef, useState } from "react";
import { dishes } from "./Dishes";
import "./Populardishes.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { SectionHeader, Button } from "../../../Components/GeneralStyling";

function PopularDishes() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isdragging, setIsdragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const startScrollLeftRef = useRef<number | null>(null);

  const MousemoveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isdragging) return;
    event.preventDefault();

    console.log(event.pageX);

    if (!carouselRef.current || startScrollLeftRef.current === null) return;
    carouselRef.current.scrollLeft =
      startScrollLeftRef.current - (event.pageX - startX);
  };

  const MousedownHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsdragging(true);

    setStartX(event.pageX);

    if (!carouselRef.current) return;

    startScrollLeftRef.current = carouselRef.current.scrollLeft;
  };

  const MouseupHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsdragging(false);
  };

  const scrollPrevious = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  const scrollNext = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  return (
    <div className="slider-container">
      <SectionHeader>Popular Dishes</SectionHeader>
      <div className="slider-wrapper">
        <div className="slider-arrow" onClick={scrollPrevious}>
          <BsFillArrowLeftCircleFill />
        </div>
        <div
          className={`food-carousel ${isdragging ? "dragging" : ""}`}
          ref={carouselRef}
          onMouseMove={MousemoveHandler}
          onMouseDown={MousedownHandler}
          onMouseUp={MouseupHandler}
        >
          {dishes.map((dish, index) => {
            return (
              <div className="food-img">
                <img src={dish.image} alt={dish.name} />
              </div>
            );
          })}
        </div>
        <div className="slider-arrow" onClick={scrollNext}>
          <BsFillArrowRightCircleFill />
        </div>
      </div>
    </div>
  );
}

export default PopularDishes;
