import React from 'react'
import PropTypes from 'prop-types'
import HomeLayout from '../includes/layouts/homeLayout'

function Contact(props) {
    return (
        <HomeLayout title="Projects | ElegantStone doo Berane">
            <div className="websitePadding">
                Projects Page
            </div>
        </HomeLayout>
    )
}

Contact.propTypes = {
    title: PropTypes.string.isRequired
}

export default Contact

