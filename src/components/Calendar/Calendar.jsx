import { useState } from 'react'
import './Calendar.css'

export default function Calendar() {


const [ day, setDay ] = useState('')
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

const week = () => {
   return (
   days.map((day) => (
    <div key={day}>{day}</div>
   ))
   )}

  return (
    <div className="calendarMainBox">

        <p className='calendarHeading'>
            Calendar
        </p>

<div className='calendarSubBox'>
    {week()}
    {console.log(week())}
</div>


    </div>
  )
}
