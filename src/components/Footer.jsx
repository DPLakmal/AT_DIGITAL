import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-primary_color px-5 py-10 sm:p-10  lg:px-20 text-white ">
      <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-20">
        <div className="flex flex-col gap-4 w-430px">
          <Logo />
          <p className="font-Lato">
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve
            single objective - your business results.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col md:justify-between md:gap-20 gap-10">
          <div className="flex flex-col gap-3 w-56">
            <h1 className="font-semibold text-21px md:text-2xl">Our Technologies</h1>
            <p>ReactJS</p>
            <p>Gatsby</p>
            <p>NextJS</p>
            <p>NodeJS</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-21px md:text-2xl">Our Services</h1>
            <p>Social Media Marketing</p>
            <p>web & Mobile App Development</p>
            <p>Data & Analytics</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <div className="flex flex-row gap-2 w-[630px] border-t border-white items-center justify-center pt-1">
          <Link>
            <p>Privacy Policy</p>
          </Link>
          <span className="inline">|</span>
          <Link>
            <p>Terms & Conditions</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
