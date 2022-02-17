import React from 'react'
import PropTypes from 'prop-types'
import CardWithIcon from './buildingBlocks/cardWithIcon'
import BusinessDealSVG from './icons/businessDealSVG'
import { FcIdea, FcMoneyTransfer, FcAlarmClock, FcSupport, FcApproval, FcCopyright } from 'react-icons/fc'

function SplitSection(props) {
    return (
        <div className="websitePadding grid sm:grid-cols-1 md:grid-cols-2">

            <div className="p-8 grid grid-cols-2 gap-5">
                <CardWithIcon icon={FcIdea} heading='Ideja' text='Vrlo je važno doći do jasne ideje prilikom kupovine materijala' />
                <CardWithIcon icon={FcCopyright} heading='Kvalitet' text='Sarađujemo sa dobavljačima, koji nude besprekoran kvalitet' />
                <CardWithIcon icon={FcMoneyTransfer} heading='Povoljnost' text='Najpovoljnije cijene u regionu' />
                <CardWithIcon icon={FcApproval} heading='Garancija' text='Kvalitet bez premca' />
                <CardWithIcon icon={FcAlarmClock} heading='Efikasnost' text='Isporuku i ugradnju garantujemo u dogovorenom roku.' />
                <CardWithIcon icon={FcSupport} heading='Podrška' text='Naš tim stoji na raspolaganju 24/7' />
            </div>
            <div className="flex content-center flex-col justify-center min-h-[400px] ">

                <BusinessDealSVG />
            </div>
        </div>
    )
}

SplitSection.propTypes = {

}

export default SplitSection

