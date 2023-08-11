import Link from 'next/link'
import React from 'react'
import SVG from 'react-inlinesvg'

import Layout from '@/components/layout/Layout2'

export default function success() {
  return (
    <Layout title="Sucess Form">
      <div className="container py-20">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col">
            <SVG src="./svg/confirm.svg" className="w-16 h-14 fill-current" />
          </div>
          <div className="flex flex-col">
            <h2 className="ml-2 text-6xl text-green-500 uppercase font-semibold">Success</h2>
          </div>
        </div>
        <div className="row justify-center">
          <div className="lg:col-8 text-center">
            <p className="lg:mt-5 mt-3 text-2xl">Thank you for your request</p>
            <p className="lg:mt-5 mt-3 text-xl">
              Thank you for your request. <br />
              We are working hard to find the best service and deals for you.{' '}
            </p>
            <p className="lg:mt-5 mt-3 text-2xl font-semibold">
              Shortly you will find a confirmation in your email.
            </p>
            <Link
              href="/"
              className="inline-block mt-3 px-10 py-3 bg-green-500 rounded-full uppercase"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
