import React from 'react'
import PropTypes from 'prop-types'
import HomeLayout from '../includes/layouts/homeLayout'
import Image from 'next/image'
import ExpandablePanel, { ExpandablePanelWrapper } from '../includes/buildingBlocks/expandablePanel'
import generalData from '../data/generalData'


function About(props) {
    let panelsToShow = generalData.pages.about.panels.map(pan => {
        return <ExpandablePanel title={pan.title} classes='bg-white mb-1'>
            <p className='text-sm leading-6' dangerouslySetInnerHTML={{
                __html: pan.text
            }}>
            </p>
        </ExpandablePanel>
    })


    return (
        <HomeLayout title="About | ElegantStone doo Berane">
            <div className="flex flex-col pt-3">
                <div className='websitePadding p-10 flex flex-col items-center'>
                    <h1 className='border-b-2 border-primary-color mb-10 text-center whitespace-nowrap'>O nama</h1>
                </div>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 lg:gap-10 websitePadding pb-6'>
                    <div className='relative pb-[100%]'>
                        <Image className="absolute top-0 object-contain" src="/projects/Oblaganje bazena.jpg" layout='fill' />
                    </div>
                    <div>
                        <ExpandablePanelWrapper panels={panelsToShow} />
                    </div>
                </div>
            </div >
        </HomeLayout >
    )
}

About.propTypes = {
    title: PropTypes.string.isRequired
}


export default About