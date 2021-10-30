import HomeLayout from '../includes/layouts/homeLayout'
import Gallery from '../includes/gallery'
import { useEffect, useState } from 'react'

export default function Home(props) {
  const [galleryItems, setGalleryItems] = useState([]);
  useEffect(() => {
    fetch("/api/hello").then(data => data.json()).then(items => {
      setGalleryItems(items);
      console.log(items.materials);
    })
  }, [])  
  return (
      <HomeLayout>
        <main className="websitePadding">
          <h1>Picture gallery</h1>
            {/* <Gallery galleryItems={galleryItems?.materials || []}/> */}
        </main> 
      </HomeLayout>

  )
}

export async function getServerSideProps(context){

  return {
    props: {
      galleryItems: []
    }
  }   
}
