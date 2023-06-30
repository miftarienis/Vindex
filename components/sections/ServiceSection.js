import React from 'react'
import SVG from 'react-inlinesvg'

export default function ServiceSection() {
  return (
    <div className="bg-gray-200">
      <div className="-mt-32 flex justify-center row py-11 ">
        <div className="lg:col-6 col-8 bg-white rounded-2xl p-10 ">
          <div className="row ">
            <div className="lg:col-3 md:mt-16 mt-0 ">
              <SVG src="/svg/meal.svg" className="w-14 h-14 fill-current lg:mx-auto mx-7" />
              <p className="lg:mt-5 uppercase text-green-500 lg:text-center text-start text-xl">
                Meal Plan
              </p>
            </div>
            <div className="lg:col-3 text-center lg:mb-16 mb-0 lg:ml-0 ml-24">
              <SVG src="/svg/workout.svg" className="w-14 h-14 fill-current md:mx-auto mx-7" />
              <p className="mt-5 uppercase text-green-500 lg:text-center text-start text-xl">
                Workout <br />
                Program
              </p>
            </div>
            <div className="lg:col-3 md:mt-16 mt-2 ">
              <SVG src="/svg/trainers-svg.svg" className="w-14 h-14 fill-current lg:mx-auto mx-7" />
              <p className="lg:mt-5 uppercase text-green-500 lg:text-center text-start text-xl">
                Trainers
              </p>
            </div>
            <div className="lg:col-3 text-center lg:mb-16 mb-0 lg:ml-0 ml-24">
              <SVG src="/svg/calendar.svg" className="w-14 h-14 fill-current md:mx-auto mx-7" />
              <p className="mt-5 uppercase text-green-500 lg:text-center text-start text-lg">
                Appointments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
