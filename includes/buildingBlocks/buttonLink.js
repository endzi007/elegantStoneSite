import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function ButtonLink(props) {
    return <Link href={props.href} passHref><a className={`${props.backgroudColor || "bg-black"} ${props.textColor || "text-white"} rounded py-2 px-6 self-start uppercase font-bold`}>{props.label}</a></Link>
}

ButtonLink.propTypes = {
    label: PropTypes.string.isRequired,
    backgroudColor: PropTypes.string,
    textColor: PropTypes.string,
    href: PropTypes.string.isRequired
}

export default ButtonLink

