import React from 'react'
import PropTypes from 'prop-types'

function ButtonLink(props) {
    return <a href={props.href} className={`${props.backgroudColor || "bg-black"} ${props.textColor|| "text-white"} rounded py-2 px-6 self-start uppercase font-bold`}>{props.label}</a>
}

ButtonLink.propTypes = {
    label: PropTypes.string.isRequired,
    backgroudColor: PropTypes.string,
    textColor: PropTypes.string,
    href: PropTypes.string.isRequired
}

export default ButtonLink

