import HomeLayout from '../includes/layouts/homeLayout'
import Gallery from '../includes/gallery'

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

export async function getStaticProps(context) {

    const fs = (await import("fs")).default
    let pictures = {};

    let pics = fs.readdirSync(`${process.cwd()}/public/projects`, (err, data) => {
        if (err) {
            return;
        }
    });

    pics.forEach((val, i) => {
        pics[i] = "/projects/" + val
    })


    return {
        props: {
            galleryItems: pics
        }
    }
}
