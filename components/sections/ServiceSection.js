import Link from 'next/link'
import React from 'react'
import SVG from 'react-inlinesvg'

export default function ServiceSection() {
  return (
    <div className="bg-gray-200">
      <div className="container">
        <div className="-mt-32 justify-center row py-11 ">
          <div className="lg:col-6 col-8 bg-white rounded-2xl p-10 ">
            <div className="row ">
              <div className="lg:col-3 md:mt-16 mt-5 ">
                <Link href="/#dietplan">
                  <SVG src="/svg/meal.svg" className="w-14 h-14 fill-current mx-auto" />
                  <p className="lg:mt-5 uppercase text-green-500 text-center text-xl">Meal Plan</p>
                </Link>
              </div>
              <div className="lg:col-3 text-center lg:mb-16 mb-0 mt-5 md:mt-0">
                <Link href="/#workoutplan">
                  <SVG src="/svg/workout.svg" className="w-14 h-14 fill-current mx-auto" />
                  <p className="lg:mt-5 uppercase text-green-500 text-center text-xl">
                    Workout <br />
                    Program
                  </p>
                </Link>
              </div>
              <div className="lg:col-3 md:mt-16 mt-5 ">
                <Link href="/#staffMembers">
                  <SVG src="/svg/trainers-svg.svg" className="w-14 h-14 fill-current mx-auto" />
                  <p className="lg:mt-5 uppercase text-green-500 text-center text-xl">Trainers</p>
                </Link>
              </div>
              <div className="lg:col-3 text-center lg:mb-16 mb-0 mt-5 md:mt-0">
                <Link href="/#calendar">
                  <SVG src="/svg/calendar.svg" className="w-14 h-14 fill-current mx-auto" />
                  <p className="lg:mt-5 uppercase text-green-500 text-center text-lg">
                    Appointments
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
