import Image from 'next/image'
import React from 'react'
import SVG from 'react-inlinesvg'

export default function FooterSection() {
  var year = new Date().getFullYear()
  return (
    <div className="bg-black">
      <div className="container py-6">
        <div className="row">
          <div className="col-6">
            <p className="text-white text-xl font-semibold uppercase">
              Ready to reach <br />
              <span className="text-green-500">your</span> goals?
            </p>
            <a
              href="mailto:vindex@gmail.com"
              className="block mt-10 text-white text-xl font-semibold uppercase"
            >
              vindex@gmail.com
            </a>
          </div>
          <div className="col-6 text-end">
            <div className="inline-flex items-center">
              <a href="https://instagram.com">
                <SVG src="/svg/insta.svg" className="fill-current w-11 h-11" />
              </a>
              <a href="https://instagram.com">
                <SVG src="/svg/mail.svg" className="ml-5 fill-current w-11 h-11" />
              </a>
            </div>
            <p className="block mt-10 text-white text-xl font-semibold uppercase">
              ST. 69 , Dallas ,TX
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="h-px w-full bg-neutral-600"></div>
          <div className="px-7 md:p-12">
            <Image
              src="/img/logo.png"
              width={218}
              height={123}
              alt="logo"
              className="w-full h-auto"
            />
          </div>
          <div className="h-px w-full bg-neutral-600"></div>
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
