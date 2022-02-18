import React from 'react'
import ButtonLink from './buildingBlocks/buttonLink'

export default function HomeMainSection() {
  return (
    <main className="websitePadding bg-no-repeat bg-cover flex pt-36 pb-36 md:pt-0 md:pb-0 md:min-h-screen 3xl:min-h-[1000px] max-w-full overflow-x-hidden lg:-mt-8" style={{ backgroundImage: "url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" }}>
      <div className="flex flex-col justify-center px-4">
        <h1 className="text-6xl md:text-8xl font-black text-white uppercase">Elegant Stone</h1>
        <h5 className="py-4 font-bold text-gray-300">
          ElegantStone pruža najbolji kvalitet proizvoda, korisničku podršku i podršku u regionu<br />
        </h5>
        <div className="flex mt-6">
          <ButtonLink href="/about" backgroudColor="bg-primary-color mr-3" label="O nama" />
          <ButtonLink href="/contact" label="Kontaktirajte nas" />
        </div>
      </div>
    </main>

  )
}
