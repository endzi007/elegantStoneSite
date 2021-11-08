import HomeLayout from '../includes/layouts/homeLayout'
import Gallery from '../includes/gallery'
import { useEffect, useState } from 'react'


export default function GalleryPage(props) {

  let galleriesToShow = [];
  for (const material in props.galleryItems) {
    galleriesToShow.push(
    <details open>
    <summary className="uppercase font-bold text-xl ">{material}</summary>
            <div>
              <Gallery galleryItems={props.galleryItems[material] || []}/> 
            </div>
    </details>)
  
  }
  
  return (
      <HomeLayout title="Gallery">
        <main className="websitePadding">
          <h1>Picture gallery</h1>
          {galleriesToShow}
        </main> 
      </HomeLayout>

  )

}

export async function getServerSideProps(context){

  const fs = (await import("fs")).default
  let pictures = {};

  let directories =  fs.readdirSync(`${process.cwd()}/public/images/materials`, (err, data)=>{
    if(err){
      return; 
    }
  });
  directories.map(dir => {
    pictures[dir] = []
  })
  
  Object.keys(pictures).map( dir => {
    pictures[dir] = fs.readdirSync(`${process.cwd()}/public/images/materials/${dir}`, (err, data)=>{
      if(err){
        return; 
      }
    });
    pictures[dir].forEach((part, i) => pictures[dir][i] = `/images/materials/${dir}/` + pictures[dir][i], pictures[dir]);
  })

  console.log(pictures, "pictures on server")


  return {
    props: {
      galleryItems: pictures
    }
  }   
}
