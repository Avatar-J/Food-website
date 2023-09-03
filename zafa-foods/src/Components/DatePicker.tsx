import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
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

  function getWeeksForMonth(month: number, year: number) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0); // day 0 refers to the last day of the previous month
    const daysInMonth = lastDayOfMonth.getDate();

    const weeksInMonth = Math.ceil(daysInMonth / 7);

    return weeksInMonth;
  }

  function getDaysOfMonth(month: number, year: number) {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    return daysInMonth;
    console.log(daysInMonth);
  }

  function getCurrentMonth() {
    const date = new Date();
    const currentMonth = date.getMonth();
    return currentMonth;
    console.log(currentMonth);
  }

  function convertMonthToString(month: number) {
    return months[month];
  }

  function getCurrentYear() {
    const date = new Date();
    const currentYear = date.getFullYear();

    return currentYear;
  }

  function getStartDayOfMonth(year: number, month: number) {
    const firstDayOfMonth = new Date(year, month, 1);

    const startDay = firstDayOfMonth.getDay();
    return startDay;
    console.log(startDay);
  }

  function renderDaysOfMonth(year: number, month: number) {
    const daysInMonth = getDaysOfMonth(month, year);
    const startDay = getStartDayOfMonth(year, month);
    const totalDays = daysInMonth;
    console.log(totalDays);

    const daysArray = [];

    for (let i = 0; i <= daysInMonth + startDay; i++) {
      if (i < startDay) {
        daysArray.push(<div className="day"></div>);
      } else {
        if (i == 0) {
          const day = i + 1;
          daysArray.push(<div className="day">{day}</div>);
        } else {
          const date = i - startDay + 1;
          daysArray.push(<div className="day">{date}</div>);
        }
      }
    }

    return daysArray;
  }

  const daysToRender = renderDaysOfMonth(getCurrentYear(), getCurrentMonth());

  useEffect(() => {
    getStartDayOfMonth(2023, 0);

    getCurrentMonth();

    getDaysOfMonth(0, 2023);

    renderDaysOfMonth(2023, 0);
  }, []);

  return (
    <>
      <DatePickerContainer>
        <Month>
          <AiOutlineArrowLeft />
          {convertMonthToString(getCurrentMonth())}
          <AiOutlineArrowRight />
        </Month>

        <WeekdayContainer>
          {weekdays.map((day) => {
            return <div className="weekday">{sliceDayHandler(day)}</div>;
          })}
        </WeekdayContainer>

        <DaysOfMonth>
          {daysToRender.map((day) => {
            return <>{day}</>;
          })}
        </DaysOfMonth>
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
  position: absolute;
  top: 50px;
  right: 0;
  left: 0;
  z-index: 99;
`;

const Month = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeekdayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  & .weekday {
    padding: 0.8rem;
    font-size: 1rem;
    text-align: center;
    color: green;
  }
`;

const DaysOfMonth = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  & .day {
    padding: 0.8rem;
    font-size: 1rem;
    text-align: center;
  }
`;
export default DatePicker;
