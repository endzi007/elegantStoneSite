
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

function TextPictureHalfHalf(props) {
    return (
        <div className='websitePadding flex flex-row p-2'>
            <div className={`flex px-10 flex-col items-center w-1/2 justify-center ${props.left && "order-2"}`}>
                <h5> {props.heading}</h5>
                <p>
                    {props.text}
                </p>
            </div>
            <div className="flex-grow-1 w-1/2 p-20 bg-primary-color bg-opacity-30 rounded-lg">
                <div className='relative w-full h-[500px]'>
                    <Image src={props.picture} alt="image" layout='fill' />
                </div>
            </div>
        </div>
    )
}

TextPictureHalfHalf.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    left: PropTypes.bool
}

export default TextPictureHalfHalf