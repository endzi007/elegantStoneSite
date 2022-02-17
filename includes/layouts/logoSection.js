import React from 'react'
import { BsFillMapFill } from 'react-icons/bs'
import { FaPaperPlane } from 'react-icons/fa'

export default function LogoSection() {
  return (
    <div className="grid text-primary-color gap-1 h-full bg-white websitePadding py-8 md:justify-center md:grid-cols-3 lg:!py-10">
      <div className="relative h-full flex flex-row items-center justify-items-start">
        <LogoSvg />
        <h2 className="text-3xl text-bg-black font-sans font-bold tracking-wide"> ElegantStone</h2>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex p-3 border mr-2">
          <BsFillMapFill />
        </div>
        <div className="text-sm font-bold">
          <p>tel: <span className="text-gray-900">+382 68 517-422</span></p>
          <p className="text-gray-400 font-thin">email: elegantstone@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex p-3 border mr-2">
          <FaPaperPlane />
        </div>
        <div className="text-sm font-bold">
          <p><span className="text-gray-900">Address:</span></p>
          <p className="text-gray-400 font-thin">Biznis zona, Rudeš, Berane, Crna Gora</p>
        </div>
      </div>

    </div>
  )
}



function LogoSvg(props) {
  return (
    <svg
      id="prefix__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 1080 1080"
      xmlSpace="preserve"
      className="max-h-24 h-full"
      {...props}
    >
      <path
        className="text-primary-color fill-current"
        d="M839.8 236.95V34.56H563.42l.01 251.22 166.24 65.7-.42 190.34-55.28.01v-147L341.62 263.49V136.01h55.27v83.85l110.56 43.63V34.56H231.07v608.73h276.38V487.03l-110.56-43.68.02 98.48h-55.29V356.04l222.47 87.91-.67 199.34H839.8V302.43l-165.83-65.48V136.01h55.27v57.32zM109.8 747.88h66.93v18.99h-44.52v29.26h37.36v18.99h-37.36v22.73h45.92v18.99H109.8V747.88zM231.02 747.88h22.42v89.97h43.74v18.99h-66.16V747.88zM346.17 747.88h66.93v18.99h-44.52v29.26h37.36v18.99h-37.36v22.73h45.92v18.99h-68.33V747.88zM544.6 771.07c-8.56-4.2-16.66-5.76-26.31-5.76-20.39 0-35.96 14.16-35.96 37.05 0 23.35 17.59 37.2 38.45 37.2 4.67 0 9.81-.47 13.39-1.71v-18.37h-22.1v-18.99h44.52v51.21c-11.21 5.14-23.5 7-36.58 7-35.02 0-60.4-22.88-60.4-56.35 0-32.22 24.13-56.35 59.15-56.35 12.3 0 23.35 2.33 32.69 7.32l-6.85 17.75zM674.38 840.65h-47.01l-6.23 16.19H597.8l44.05-108.96h18.06l44.05 108.96H680.6l-6.22-16.19zm-39.85-18.68h32.69l-16.34-42.34-16.35 42.34zM749.06 747.88h16.5l51.83 68.33v-68.33h22.42v108.96h-16.5l-51.83-68.49v68.49h-22.42V747.88zM918.68 766.87h-29.11v-18.99h80.63v18.99h-29.11v89.97h-22.41v-89.97zM228.14 962.32c0-17.59 12.45-29.57 35.02-29.57 10.43 0 21.17 2.8 29.26 7.63l-6.85 17.75c-5.6-3.74-13.07-6.07-20.23-6.07-9.81 0-14.48 3.58-14.48 9.18 0 6.07 4.05 9.73 18.84 16.5 19.07 8.72 28.17 18.37 28.17 34.71 0 20.08-13.7 33-39.38 33-11.36 0-23.5-3.27-32.69-8.87l6.85-18.06c7.01 4.83 16.5 7.63 24.91 7.63 10.9 0 17.59-4.36 17.59-11.91 0-8.02-5.68-12.53-19.07-18.37-21.63-9.42-27.94-19.46-27.94-33.55zM368.2 953.6h-29.11v-18.99h80.63v18.99h-29.11v89.97H368.2V953.6zM520.09 932.75c32.69 0 58.37 23.35 58.37 56.35s-25.68 56.35-58.37 56.35-58.37-23.35-58.37-56.35 25.68-56.35 58.37-56.35zm0 93.39c19.77 0 35.65-15.1 35.65-37.05s-15.88-37.05-35.65-37.05c-19.77 0-35.65 15.1-35.65 37.05s15.88 37.05 35.65 37.05zM628.22 934.61h16.5l51.84 68.33v-68.33h22.41v108.96h-16.5l-51.83-68.49v68.49h-22.42V934.61zM776.52 934.61h66.93v18.99h-44.52v29.26h37.36v18.99h-37.36v22.73h45.92v18.99h-68.33V934.61z"
      />
    </svg>
  )
}

