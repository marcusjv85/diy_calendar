import { useState } from "react";
import "./App.css";
import Element from "./components/Element";
import {
  startOfMonth,
  endOfMonth,
  differenceInDays,
  addMonths,
  subMonths,
  startOfYear,
  endOfYear,
} from "date-fns";

function App() {
  const [currentDay, setCurrentDay] = useState(new Date());

  const startDate = startOfMonth(currentDay);
  const endDate = endOfMonth(currentDay);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const monthYear = currentDay.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const goToPreviousMonth = () => setCurrentDay((prev) => subMonths(prev, 1));
  const goToNextMonth = () => setCurrentDay((prev) => addMonths(prev, 1));
  const goToPreviousYear = () => setCurrentDay((prev) => subMonths(prev, 12));
  const goToNextYear = () => setCurrentDay((prev) => addMonths(prev, 12));

  return (
    <div className="App">
      <div>My REACT Calendar</div>

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
          const date = i + 1;
          const isToday =
            new Date().toDateString() ===
            new Date(
              currentDay.getFullYear(),
              currentDay.getMonth(),
              date
            ).toDateString();
          return (
            <Element
              className={`dayCell ${isToday ? "today" : ""}`}
              key={`date-${date}`}
            >
              {date}
            </Element>
          );
        })}

        {Array.from({ length: suffixDays }).map((_, i) => (
          <Element className="dayCell" key={`suf-${i}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
