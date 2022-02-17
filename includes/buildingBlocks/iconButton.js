import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'


function IconButton(props) {
    return <i><Link href={props.href} passHref><a className="mx-1 flex flex-row items-center p-2 rounded-full bg-gray-400 bg-opacity-30 hover:bg-opacity-60 max-w-full" target="_blank">
        <span className="p-1">{<props.icon />}</span>
        <span className="text-sm">{` ${props.title}` || ""}</span>
    </a>
    </Link>
    </i>
}


IconButton.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.elementType.isRequired
}

export default IconButton

