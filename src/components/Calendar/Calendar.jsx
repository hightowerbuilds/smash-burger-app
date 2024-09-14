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

    {/**

        create object of month with key pairs
        that are date and day of week

        if there are 31 days in a month and the 
        first day of the week is tuesday the algo
        will begin by assigning 1st to Tuesday (thus
        putting it in the appropraite place on 
        a common calendar) once the pirs are made 
        the calendar can be created

        so it finds the end of the week and continues 
        until we reach the end of the month

        new thought:

        find first day of the month
        that will be X many days from sunday 
        eg. 0=sun 2=tue etc

    */}




const week = () => { 
    return (
   newDays.friday.map((day) => (
    day[1] < 1 || day[1] > 31 ? <div className='calendarDayBox' key={day[1]}>{day[0]}</div> : <div className='calendarDayBox' key={day.keys}>{day}</div>
   )))}

  return (
    <div className="calendarMainBox">
        <p className='calendarHeading'>Calendar</p>

<div className='calendarSubBox'>
    {week()}

    {console.log(week())}
</div>
{console.log(newDays.sunday)}
{console.log(newDays.monday)}
    </div>
  )
}
