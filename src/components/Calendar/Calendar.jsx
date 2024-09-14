import { useState } from 'react'
import './Calendar.css'

export default function Calendar() {

{/**
    
how to build a calendar

- need to set month
- need to have a first day of the month ie, tues, fri...
- need length of month
- need numbers presented
- cycle through days of week until reach end of month
    
*/}

const [ month, setMonth ] = useState('')
const [ firstDay, setFirstDay ] = useState('');
const [ monthLength, setMonthLength ] = useState(0);
const [selectedMonth, setSelectedMonth] = useState('');

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

const monthDays = {
    "January": 31,
    "February": 29, // Leap year in 2024
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31
  };
  const days = [
    ["sunday", 1], 
    ["monday", 2], 
    ["tuesday", 3], 
    ["wednesday", 4], 
    ["thursday", 5], 
    ["friday", 6], 
    ["saturday", 7], 
    ["sunday", 8], 
    ["monday", 9], 
    ["tuesday", 10], 
    ["wednesday", 11], 
    ["thursday", 12], 
    ["friday", 13], 
    ["saturday", 14], 
    ["sunday", 15], 
    ["monday", 16], 
    ["tuesday", 17], 
    ["wednesday", 18], 
    ["thursday", 19], 
    ["friday", 20], 
    ["saturday", 21], 
    ["sunday", 22], 
    ["monday", 23], 
    ["tuesday", 24], 
    ["wednesday", 25], 
    ["thursday", 26], 
    ["friday", 27], 
    ["saturday", 28], 
    ["sunday", 29], 
    ["monday", 30], 
    ["tuesday", 31],
    ["wednesday", 32],
    ["thursday", 33],
    ["friday", 34],
    ["saturday", 35],
    ["sunday", 36],
    ["monday", 37]
];

const newDays = {
    sunday: days.map(dayData => [dayData[0], dayData[1]]),
    monday: days.map(dayData => [dayData[0], dayData[1] - 1] ),
    tuesday: days.map(dayData => [dayData[0], dayData[1] - 2] ),
    wednesday: days.map(dayData => [dayData[0], dayData[1] - 3] ),
    thursday: days.map(dayData => [dayData[0], dayData[1] - 4] ),
    friday: days.map(dayData => [dayData[0], dayData[1] - 5] ),
    saturday: days.map(dayData => [dayData[0], dayData[1] - 6] ),
}

const week = () => { 
    return (
   newDays.sunday.map((day) => (
    day[1] < 1 || day[1] > 31 ? 
    <div className='calendarDayBox' key={day[1]}>{day[0]} <br /> {'X'}</div> : 
    <div className='calendarDayBox' key={day.keys}>{day[0]} <br /> {day[1]}</div>
   )))}

const handleInputChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="calendarMainBox">
    <p className='calendarHeading'>{selectedMonth}</p>
    <div>
        <input
          type="text"
          list="months"
          value={selectedMonth}
          onChange={handleInputChange}
          placeholder="Select a month"
        />
        <datalist id="months">
          {months.map((month) => (
            <option key={month} value={month} />
          ))}
        </datalist>
      </div>
    <input type="text" placeholder='starts on...'/>
    <div className='calendarSubBox'>
        {week()}
        {console.log(week())}
    </div>
 
    </div>


  )
}


