import React from 'react'
import PropTypes from 'prop-types'

function SplitSection(props) {
    return (
        <div className="gradient websitePadding grid grid-cols-2">
            <div className="flex content-center flex-col text-primary-contrast-text justify-center min-h-[400px]">
                <h1>ENIS</h1>
                <h4>Read what peopla are saying about us on the social networks</h4>
            </div>
            <div className="text-bg-black-contrast-text p-8">
                enis
            </div>
        </div>
    )
}

SplitSection.propTypes = {

}

export default SplitSection

