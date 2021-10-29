import React from 'react'
import PropTypes from 'prop-types'

function GridRow(props) {
    let sm = props.sm? `sm:grid-cols-${props.sm}`:"";
    let lg = props.lg? `lg:grid-cols-${props.lg}`:"";
    let md = props.md? `md:grid-cols-${props.md}`:"";
    let xl = props.xl? `xl:grid-cols-${props.xl}`:"";
    return (
        <div className={`grid w-full place-items-stretch ${sm} ${md} ${xl} ${lg} ${props.extraClasses}`}>
            {props.children}
        </div>
    )
}

GridRow.propTypes = {
    sm: PropTypes.string,
    lg: PropTypes.string,
    md: PropTypes.string, 
    xl: PropTypes.string,
    extraClasses: PropTypes.string
}

export default GridRow

