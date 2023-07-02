import 'react-calendar/dist/Calendar.css'

import { useState } from 'react'
import Calendar from 'react-calendar'

export default function BookingSection() {
  const [date, setDate] = useState(new Date())
  return (
    <div className="bg-gray-200">
      <div className="container">
        <div className="row my-20">
          <div className="col-8">
            <h2 className="uppercase text-3xl font-bold">Choose a date</h2>
            <Calendar onChange={setDate} value={date} className="mt-7 w-full" />
          </div>
          <div className="col-4 text-center">
            <h2 className="uppercase text-3xl font-bold text-start">Select time</h2>
            <input
              type="text"
              className="mt-4 w-full py-6 rounded-lg placeholder:text-gray-200 text-center uppercase"
              placeholder="Enter your full name"
            />
            <input
              type="text"
              className="mt-4 w-full py-6 rounded-lg placeholder:text-gray-200 text-center uppercase"
              placeholder="Enter your full name"
            />
            <button className="mt-3 px-10 py-3 bg-green-500 rounded-full uppercase">Book</button>
          </div>
        </div>
      </div>
    </div>
  )
}
