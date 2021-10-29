import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import ButtonLink from './buttonLink'
import Rive from 'rive-react';
import GridRow from '../layouts/gridRow'
import FlexRow from "../layouts/flexRow";

function Example() {
  return <Rive src="/new_file.riv" />;

}

function PostSection(props) {
    return (
        <FlexRow variantSmall="col" extraClasses="websitePadding justify-center py-6 items-center">
            <h4 className="text-primary-color uppercase font-bold p-3">Our blog</h4>
            <h1>Latest Blog Updates</h1>
            <GridRow md="3" extraClasses="gap-4"> 
                <SinglePostCard />
                <SinglePostCard />
                <SinglePostCard />
                <SinglePostCard />
            </GridRow>
        </FlexRow>
    )
}

SinglePostCard.propTypes = {

}


function SinglePostCard(){
    return  <div className="flex flex-col border items-stretch justify-items-stretch bg-white overflow-hidden shadow">
    <div className="relative max-h-64 overflow-hidden">
        <div className="bg-primary-color text-white absolute bottom-0 left-6 right-auto z-50 py-1 px-2">Absolute</div>
        <Image className="object-cover" src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=640&w=425" layout="responsive" width="100%" height="100%"/>
    </div>
    <div className="flex flex-col p-6">
        <h4 className="mb-5 text-gray-800 font-bold text-2xl">Best for any industrial & business</h4>
        <ButtonLink href="/about" label="Pročitaj dalje" />
    </div>
</div>
}

export default PostSection

