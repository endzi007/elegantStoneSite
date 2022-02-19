import React from 'react'
import ButtonLink from './buildingBlocks/buttonLink'
import slikaZaPocetnu from '../public/images/slika-za-pocetnu-stranicu.jpg'
import Link from 'next/link'


export default function HomeMainSection() {
  //var pictureToDisplay = "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  var pictureToDisplay = "https://images.unsplash.com/photo-1615827157389-991d5b156c37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
  //var pictureToDisplay = ""
  console.log(slikaZaPocetnu)
  return (
    <main className="websitePadding bg-no-repeat bg-cover flex pt-36 pb-36 md:pt-0 md:pb-0 md:min-h-screen 3xl:min-h-[1000px] max-w-full overflow-x-hidden lg:-mt-8" style={{ backgroundImage: `url(${pictureToDisplay})`, backgroundPosition: "top center", backgroundSize: "cover" }}>
      <div className="flex flex-col justify-center px-4 text-white bg-[rgba(0,0,0,0.3)] rounded-lg ">
        <h1 className="text-6xl md:text-8xl font-black uppercase">Elegant Stone</h1>
        <h5 className="py-4 font-bold ">
          ElegantStone pruža najbolji kvalitet proizvoda, korisničku podršku i podršku u regionu<br />
          Kod nas možete naći <span className="text-primary-color underline"><Link href="/materials">dekorativni kamen</Link> </span>u skladu sa vašim ukusom i budžetom <br />
        </h5>
        <div className="flex mt-6">
          <ButtonLink href="/about" backgroudColor="bg-primary-color mr-3 whitespace-nowrap" label="O nama" />
          <ButtonLink href="/contact" label="Kontaktirajte nas" backgroudColor="bg-gray-900 whitespace-nowrap" />
        </div>
      </div>
    </main>

  )
}

//https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
//https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80