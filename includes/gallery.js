import React from 'react'
import PropTypes from 'prop-types'
import { SRLWrapper } from "simple-react-lightbox";
import Image from 'next/image';

function Gallery(props) {
    return (
        <div className="p-8">
            <SRLWrapper>
                <div className="grid grid-cols-4 gap-6">
                    { props.galleryItems.map(item => <SingleGalleryItem src={`/images/materijali/${item}`}/>)}
                </div>
            </SRLWrapper>
        </div>

    )
}

Gallery.propTypes = {

}


function SingleGalleryItem (props){
    return <a className="block relative w-full h-40 overflow-hidden" href={props.src}>
                <Image className="object-cover !w-full !h-full" src={props.src} layout="fill"/>
            </a>
}
export default Gallery


