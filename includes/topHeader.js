import React from 'react'
import { FaFacebookF, FaEnvelope, FaTwitter, FaPaperPlane  } from "react-icons/fa";
import IconButton from './buildingBlocks/iconButton';


function TopHeader() {
    return (
        <div className="websitePadding top-0 right-0 absolute min-w-full flex bg-black text-primary-color h-14 items-center">
            <IconButton icon={<FaPaperPlane />} href="mailto:igraonicadecom@gmail.com" title="igraonicadecom@gmail.com"/>
            <IconButton icon={<FaFacebookF />} href="https://www.google.com" title=""/>
            <IconButton icon={<FaTwitter />} href="https://www.google.com" title=""/>
            <IconButton icon={<FaPaperPlane />} href="https://www.google.com" title=""/>
            <IconButton icon={<FaEnvelope />} href="https://www.google.com" title=""/>
        </div>
    )
}

export default TopHeader
