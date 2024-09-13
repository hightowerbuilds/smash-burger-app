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
    'monday', 
    'tuesday', 
    'wednesday', 
    'thursday', 
    'friday', 
    'saturday', 
    'sunday'
    ];

const week = () => { 
    return (
   days.map((day) => (
    <div className='calendarDayBox' key={day}>{day}</div>
   )))}

  return (
    <div className="calendarMainBox">
        <p className='calendarHeading'>Calendar</p>

<div className='calendarSubBox'>
    {week()}
    {console.log(week())}
</div>


    </div>
  )
}
