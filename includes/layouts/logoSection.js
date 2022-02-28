import React from 'react'
import { BsFillMapFill } from 'react-icons/bs'
import { FaPaperPlane } from 'react-icons/fa'
import Link from "next/link"
import PropTypes from 'prop-types'
export default function LogoSection({email, phone, logoText, logo, address}) {
  return (
    <div className="grid text-primary-color gap-1 h-full websitePadding py-8 md:justify-center md:grid-cols-3 lg:!py-10">
      <Link href="/" >
        <div className="relative h-full flex flex-row items-center justify-items-start cursor-pointer">
          {logo}
          <h2 className="text-3xl text-bg-black font-sans font-bold tracking-wide"> {logoText}</h2>
        </div>
      </Link>
      <div className="flex flex-row items-center">
        <div className="flex p-3 border mr-2">
          <BsFillMapFill />
        </div>
        <div className="text-sm font-bold">
          <p>tel: <span className="text-gray-900">{phone}</span></p>
          <p className="text-gray-400 font-thin">email: {email}</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex p-3 border mr-2">
          <FaPaperPlane />
        </div>
        <div className="text-sm font-bold">
          <p><span className="text-gray-900">Address:</span></p>
          <p className="text-gray-400 font-thin">{address}</p>
        </div>
      </div>

    </div>
  )
}

LogoSection.propTypes = {
    logoText: PropTypes.string.isRequired,
    logo: PropTypes.element,
    address: PropTypes.string.isRequired, 
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}