import React from 'react'
import PropTypes from 'prop-types'
import HomeLayout from '../includes/layouts/homeLayout'

function About(props) {
    return (
        <HomeLayout title="About | ElegantStone doo Berane">
            <div className="websitePadding flex flex-col text-center py-8">
                This is about us page
            </div>
        </HomeLayout>
    )
}

About.propTypes = {
    title: PropTypes.string.isRequired
}

export default About