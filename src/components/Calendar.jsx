import React from "react";
import Element from "./Element";
// import "./Calendar.css";

function Calendar({
  currentDay,
  setCurrentDay,
  selectedDate,
  setSelectedDate,
  events,
}) {
  const startOfMonth = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth() + 1,
    0
  );
  const prefixDays = startOfMonth.getDay();
  const suffixDays = 6 - endOfMonth.getDay();
  const numDays = endOfMonth.getDate();
  const today = new Date().toDateString();

  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const monthYear = currentDay.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const goToPreviousMonth = () =>
    setCurrentDay(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  const goToNextMonth = () =>
    setCurrentDay(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  const goToPreviousYear = () =>
    setCurrentDay(
      (prev) => new Date(prev.getFullYear() - 1, prev.getMonth(), 1)
    );
  const goToNextYear = () =>
    setCurrentDay(
      (prev) => new Date(prev.getFullYear() + 1, prev.getMonth(), 1)
    );

  return (
    <div className="calendar">
      <Element onClick={goToPreviousYear}>{"<<"}</Element>
      <Element onClick={goToPreviousMonth}>{"<"}</Element>
      <Element className="month">{monthYear}</Element>
      <Element onClick={goToNextMonth}>{">"}</Element>
      <Element onClick={goToNextYear}>{">>"}</Element>

      {daysOfWeek.map((day, idx) => (
        <Element className="dayCell" key={`dow-${idx}`}>
          {day}
        </Element>
      ))}

      {Array.from({ length: prefixDays }).map((_, i) => (
        <Element className="dayCell" key={`pre-${i}`} />
      ))}

      {Array.from({ length: numDays }).map((_, i) => {
        const date = new Date(
          currentDay.getFullYear(),
          currentDay.getMonth(),
          i + 1
        );
        const isToday = date.toDateString() === today;
        const hasEvents = events[date.toDateString()]?.length > 0;

        return (
          <Element
            key={`date-${i + 1}`}
            className={`dayCell ${isToday ? "today" : ""} ${
              hasEvents ? "has-event" : ""
            }`}
            onClick={() => setSelectedDate(date)}
          >
            {i + 1}
          </Element>
        );
      })}

      {Array.from({ length: suffixDays }).map((_, i) => (
        <Element className="dayCell" key={`suf-${i}`} />
      ))}
    </div>
  );
}

export default Calendar;
