import React from "react";
import styled from "styled-components";

const weekdays = ["Su", "Sa", "Mo", "Tu", "We", "Th", "Fr"];
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
  return (
    <>
      <DatePickerContainer>
        <Month>{months[6]}</Month>
        <WeekdayContainer>
          {weekdays.map((month) => {
            return <div className="weekday">{month}</div>;
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
`;

const Month = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
