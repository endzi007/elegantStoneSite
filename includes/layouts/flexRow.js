import React from 'react'
import PropTypes from 'prop-types'

function FlexRow(props) {
    return (
        <div className={`flex flex-${props.variantSmall || "col"} md:flex-${props.variantMd || "col"} lg:flex-${props.variantLg || "col"} xs:flex-${props.variantXs || "col"} ${props.extraClasses}`}>
            {props.children}
        </div>
    )
}

FlexRow.propTypes = {
    variantSmall: PropTypes.string,
    variantLg: PropTypes.string,
    variantMd: PropTypes.string, 
    variantLg: PropTypes.string,
    extraClasses: PropTypes.string
}

export default FlexRow

