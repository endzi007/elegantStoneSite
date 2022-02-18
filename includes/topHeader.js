import React from 'react'
import IconButton from './buildingBlocks/iconButton';
import PropTypes from 'prop-types'


function TopHeader(props) {
    const { socialLinks } = props;
    const { email } = props;
    return (
        <div className="websitePadding top-0 right-0 absolute min-w-full flex bg-black text-primary-color h-14 items-center">
            <IconButton icon={email.icon} href={"mailto:" + email.text} title={email.text} />
            {socialLinks.map((link, i) => <IconButton classes='bg-gray-300' key={`headerLink_${i}`} icon={link.icon} href={link.href} title="" />)}
        </div>
    )
}
TopHeader.propTypes = {
    socialLinks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    email: PropTypes.shape({
        href: PropTypes.string
    }).isRequired

}

export default TopHeader






