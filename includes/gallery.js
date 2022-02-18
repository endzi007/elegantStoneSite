import React from 'react'
import PropTypes from 'prop-types'
import { SRLWrapper } from "simple-react-lightbox";
import Image from 'next/image';
import SimpleReactLightbox from 'simple-react-lightbox'

function Gallery(props) {
    return (
        <div className="p-8">
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-4">
                        {props.galleryItems.map(item => <SingleGalleryItem src={item} caption="enis" />)}
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>

    )
}

Gallery.propTypes = {

}


function SingleGalleryItem(props) {
    let splitIntoArray = props.src.split("/");
    let getName = splitIntoArray[splitIntoArray.length - 1].slice(0, -5);
    return <a className="block relative w-full h-40 overflow-hidden" href={props.src}>
        <Image className="object-cover !w-full !h-full" src={props.src} alt={getName} layout="fill" />
        <h6 className="absolute bottom-0 text-xl text-bg-black-contrast-text bg-bg-black w-full text-center SRLCustomCaption bg-opacity-50">{getName}</h6>
    </a>
}
export default Gallery


