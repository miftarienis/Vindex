import Image from 'next/image'
import React from 'react'

export default function MerchandiseSection() {
  return (
    <div className="bg-gray-200">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="inline-block mt-20 text-center uppercase md:text-6xl text-3xl font-bold border-l-8 pl-7 border-green-500">
              Merchandise
            </h1>
          </div>
          <div className="col-12 mt-10 mb-20  ">
            <Image
              src="/img/merchandise-bg.png"
              width={1432}
              height={627}
              alt="merchandise-bg"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
