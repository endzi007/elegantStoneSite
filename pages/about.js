import React from 'react'
import PropTypes from 'prop-types'
import HomeLayout from '../includes/layouts/homeLayout'
import { ImLocation } from 'react-icons/im'

function About(props) {
    return (
        <HomeLayout title="About | ElegantStone doo Berane">
            <div className="websitePadding flex flex-col text-center py-8">
               
            </div>
        </HomeLayout>
    )
}

About.propTypes = {
    title: PropTypes.string.isRequired
}

export default About