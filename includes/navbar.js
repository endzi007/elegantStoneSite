import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import ExpandablePanel from './buildingBlocks/expandablePanel';
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'



function NavBar(props) {
    return (
        <>
            <div className="websitePadding z-50 bg-bg-black sm:block lg:-mt-7 lg:!bg-transparent">
                <div className="text-white grid-flow-col auto-cols-min gap-4 lg:bg-bg-black hidden md:!grid ">
                    {props.pages.map(page => <LinkComp key={"key" + page.url} href={page.url} label={page.label} />)}
                </div>
                <div className='block md:!hidden'>
                    <ExpandablePanel IconOpen={<AiOutlineMenu />} IconClose={<AiOutlineClose />} title='Menu' classes='text-white'>
                        <div className="text-white flex flex-col lg:bg-bg-black">
                            {props.pages.map(page => <LinkComp key={"key" + page.url} href={page.url} label={page.label} />)}
                        </div>
                    </ExpandablePanel>
                </div>

            </div>
        </>


    )
}

function LinkComp(props) {
    const router = useRouter();
    const bgColor = router.pathname === props.href ? "bg-primary-color" : "bg-transparent";
    return <Link href={props.href}>
        <a className={`uppercase p-4 text-base whitespace-nowrap ${bgColor}`}>{props.label}</a>
    </Link>;
}

NavBar.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })),

}

export default NavBar

