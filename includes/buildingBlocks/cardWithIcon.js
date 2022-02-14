import React from 'react'
import PropTypes from 'prop-types'



function CardWithIcon(props) {
    return (
        <div className='flex flex-col p-3 text-center bg-primary-color text-bg-black-contrast-text rounded-md items-center'>
            <div>
                <props.icon className="text-4xl" />
            </div>
            <h5 >{props.heading}</h5>
            <p>{props.text}</p>
        </div>
    )
}

CardWithIcon.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired

}

export default CardWithIcon
