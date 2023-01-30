import { useState } from 'react';
import './App.css';
import Element from './components/Element';
import { startOfMonth, endOfMonth } from 'date-fns/esm';
import { differenceInDays } from 'date-fns';

function App() {
  const [currentDay, setCurrentDay] = useState(new Date())

  const startDate = startOfMonth(currentDay)
  const endDate = endOfMonth(currentDay)
  const numDays = differenceInDays(endDate, startDate) + 1
  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  let date = new Date().toDateString();
  let daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

  console.log(prefixDays)
  return (
    <div className="App">
      <div>My REACT Calendar</div>

      <div className="calendar">
        <Element >{"<<"}</Element>
        <Element >{"<"}</Element>
        <Element className='month'>January 2023</Element>
        <Element >{">"}</Element>
        <Element >{">>"}</Element>

        {daysOfWeek.map(day => (<Element className='dayCell'>{day}</Element>))}
      
        {Array.from({length:prefixDays}).map((_,i)=>{
          return <Element className='dayCell'/>
        })}

        {Array.from({length:numDays}).map((_,i)=>{
          const date = i + 1
          return <Element className='dayCell' key={date}>{date}</Element>
        })}
      
        {Array.from({length:suffixDays}).map((_,i)=>{
            return <Element className='dayCell'/>
          })}
      
      </div>
    </div>
  );
}

export default App;
