import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

function Header(props) {
    return (
        <div className="websitePadding z-50 bg-bg-black lg:!bg-transparent lg:-mt-7">
            <div className= "text-white grid grid-flow-col auto-cols-min gap-4 lg:bg-bg-black">
                <LinkComp href="/" label="Home" />
                <LinkComp href="/gallery" label="gallery" />
                <LinkComp href="/contact" label="contact" />
                <LinkComp href="/projects" label="projects" />
            </div>
        </div>
    )
}

function LinkComp(props){ 
    const router = useRouter();
    const bgColor = router.pathname === props.href? "bg-primary-color": "bg-transparent";
    return <Link href={props.href}>
        <a className={`uppercase p-4 text-base ${bgColor}`}>{props.label}</a>
    </Link>;
}

Header.propTypes = {

}

export default Header

