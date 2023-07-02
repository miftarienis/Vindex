import { useState } from 'react'
import Calendar from 'react-calendar'

export default function BookingSection() {
  const [date, setDate] = useState(new Date())
  return (
    <div className="bg-gray-200" id="calendar">
      <div className="container">
        <div className="row my-20">
          <div className="lg:col-8">
            <h2 className="uppercase text-3xl lg:text-start text-center font-bold">
              Choose a date
            </h2>
            <Calendar onChange={setDate} value={date} />
          </div>
          <div className="lg:col-4 mt-5 text-center">
            <h2 className="uppercase text-3xl font-bold text-center lg:text-start">Select time</h2>
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
