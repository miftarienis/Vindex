import Image from 'next/image'
import React from 'react'
import SVG from 'react-inlinesvg'

export default function FooterSection() {
  var year = new Date().getFullYear()
  return (
    <div id="contact">
      <div className="bg-black">
        <div className="container py-6">
          <div className="row">
            <div className="col-6">
              <p className="text-white text-xl font-semibold uppercase">
                Ready to reach <br />
                <span className="text-green-500">your</span> goals?
              </p>
            </div>
            <div className="col-6 text-end">
              <div className="inline-flex items-center">
                <a href="https://www.instagram.com/vindexgym/">
                  <SVG src="/svg/insta.svg" className="fill-current w-11 h-11" />
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-10">
            <div className="md:col-6">
              <a
                href="mailto:vindex@gmail.com"
                className="block mt-10 text-white md:text-xl text-lg font-semibold uppercase"
              >
                vindex@gmail.com
              </a>
            </div>
            <div className="md:col-6 md:text-end text-start">
              <p className="block md:mt-10 mt-0 text-white md:text-xl text-lg font-semibold uppercase">
                Brakja Gjinoski , 20 , Gostivar , R. North Macedonia
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="h-px w-full bg-neutral-600"></div>
            <div className="md:px-7 p-12 ">
              <Image
                src="/img/logo-2.png"
                width={218}
                height={123}
                alt="logo"
                className="w-60 h-auto"
              />
            </div>
            <div className="h-px w-full bg-neutral-600"></div>
          </div>
        </div>
        <div className="col-12">
          <p className="mt-5 text-center text-white">
            &copy; {year} Vindex Gym , Made by UpHigh Dev
          </p>
        </div>
      </div>
    </div>
  )
}
