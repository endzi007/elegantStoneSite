import HomeLayout from '../includes/layouts/homeLayout'
import Gallery from '../includes/gallery'
import { useEffect, useState } from 'react'


export default function Projects(props) {

    return (
        <HomeLayout title="Gallery">
            <main className="websitePadding">
                <h1>Projects gallery</h1>
                <Gallery galleryItems={props.galleryItems || []} />
            </main>
        </HomeLayout>

    )

}

export async function getServerSideProps(context) {

    const fs = (await import("fs")).default
    let pictures = {};

    let pics = fs.readdirSync(`${process.cwd()}/public/projects`, (err, data) => {
        if (err) {
            console.log(err, "err")
            return;
        }
    });

    pics.forEach((val, i) => {
        pics[i] = "/projects/" + val
    })


    console.log(pics, "pictures on server")


    return {
        props: {
            galleryItems: pics
        }
    }
}
