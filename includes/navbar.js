import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';


function NavBar(props) {
    return (
        <div className="websitePadding z-50 bg-bg-black lg:!bg-transparent lg:-mt-7">
            <div className= "text-white grid grid-flow-col auto-cols-min gap-4 lg:bg-bg-black">
                {props.pages.map(page => <LinkComp key={"key" + page.url} href={page.url} label={page.label} />)}
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

NavBar.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })),

}

export default NavBar

