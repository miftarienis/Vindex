import { useState } from 'react'
import Calendar from 'react-calendar'

export default function BookingSection() {
  const [date, setDate] = useState(new Date())
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  let filteredDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  let time = `${hours}:${minutes}`
  return (
    <div className="bg-gray-200" id="calendar">
      <div className="container">
        <form name="booking" action="/sucess" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="booking" />
          <input type="hidden" name="Date" value={filteredDate} />
          <input type="hidden" name="Time" value={time} />
          <div className="row my-20">
            <div className="lg:col-8">
              <h2 className="uppercase text-3xl lg:text-start text-center mb-5 lg:mb-0 font-bold">
                Choose a date
              </h2>
              <Calendar onChange={setDate} value={date} />
            </div>
            <div className="lg:col-4 mt-5 lg:mt-0 text-center">
              <h2 className="uppercase text-3xl font-bold text-center">Select time</h2>
              <div className="inline-flex items-center">
                <input
                  type="number"
                  className="w-full text-center text-black bg-green-500 text-6xl"
                  placeholder="12"
                  min="0"
                  max="23"
                  onChange={(e) => setHours(e.target.value)}
                />
                <p className="text-6xl">:</p>
                <input
                  type="number"
                  className="w-full text-center text-black bg-green-500 text-6xl"
                  placeholder="30"
                  min="0"
                  max="59"
                  onChange={(e) => setMinutes(e.target.value)}
                />
              </div>
              <input
                type="text"
                name="Full Name:"
                className="mt-4 w-full py-6 rounded-lg placeholder:text-gray-200 text-center uppercase"
                placeholder="Enter your full name"
              />
              <input
                type="text"
                name="E-mail"
                className="mt-4 w-full py-6 rounded-lg placeholder:text-gray-200 text-center uppercase"
                placeholder="Enter your full name"
              />
              <button className="mt-3 px-10 py-3 bg-green-500 rounded-full uppercase">Book</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
