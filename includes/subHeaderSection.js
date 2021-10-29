import React from 'react'
import PropTypes from 'prop-types'
import { BsAwardFill } from 'react-icons/bs'


function SubHeaderSection(props) {
    return (
        <div className="websitePadding grid md:grid-cols-3 lg:-mt-28">
            <SingleCard variant="dark" icon={BsAwardFill} heading="Quality Construction" text="A sm river named Duden flows by their place and supplies it with the necessary regelialia."/>
            <SingleCard icon={BsAwardFill} heading="Quality Construction" text="A sm river named Duden flows by their place and supplies it with the necessary regelialia."/>
            <SingleCard variant="dark" icon={BsAwardFill} heading="Quality Construction" text="A sm river named Duden flows by their place and supplies it with the necessary regelialia."/>

        </div>
    )
}

SubHeaderSection.propTypes = {

}

export default SubHeaderSection

function SingleCard(props){
    let classesWrapper = props.variant === "dark"? "bg-bg-black text-bg-black-contrast-text": "bg-primary-color text-primary-contrast-text";
    let classesInner = props.variant === "dark"? "bg-primary-color text-white": "bg-bg-black text-bg-black-contrast-text";

    return <div className={`grid grid-cols-1-2 sm:grid-cols-1 p-7 sm:px-4 ${classesWrapper} text-bg-black-contrast-text relative overflow-hidden`}>
        <div className={`flex self-center justify-self-center rounded-full p-2 ${classesInner}`}>{<props.icon className="border-current text-5xl"/>}</div>
        <div style={{ width: "150%", height: "150%"}} className="top-0 left-0 absolute bg-white opacity-10 h- transform translate-x-1/3 translate-y-3 rotate-12"></div>
        <div>
            <h4 className="text-3xl mb-5 text-white">{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    </div>
}
