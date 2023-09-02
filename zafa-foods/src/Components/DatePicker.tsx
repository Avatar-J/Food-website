import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const weekdays = [
  "Sunday",
  "Saturday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const months = [
  "January",
  "Febraury",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DatePicker() {
  const sliceDayHandler = (day: string) => {
    return day.slice(0, 2);
  };

  // function getWeeksForMonth = (month: number, year: number)=>{

  // }

  return (
    <>
      <DatePickerContainer>
        <Month>
          <AiOutlineArrowLeft />
          {months[6]}
          <AiOutlineArrowRight />
        </Month>
        <WeekdayContainer>
          {weekdays.map((day) => {
            return <div className="weekday">{sliceDayHandler(day)}</div>;
          })}
        </WeekdayContainer>
      </DatePickerContainer>
    </>
  );
}

const DatePickerContainer = styled.div`
  width: 300px;
  max-width: 100%;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Month = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeekdayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & .weekday {
    padding: 0.8rem;
    font-size: 1rem;
    text-align: center;
    color: green;
  }
`;

export default DatePicker;
