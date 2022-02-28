import React from 'react'
import data from '../data/generalData'
import IconButton from './buildingBlocks/iconButton'
import { MdArrowForwardIos } from 'react-icons/md'
import { FcCheckmark, FcOvertime, FcCellPhone, FcAddressBook, FcSms } from 'react-icons/fc'

export default function Footer() {
  return (
    <footer className="bg-black flex flex-col pt-5">
      <div className="websitePadding text-white grid  md:grid-cols-2 md:justify-center lg:grid-cols-4">
        <WidgetAbout title={data.footer.widgets.about.headingText} text={data.footer.widgets.about.paragraphTekst} links={data.contact.socialLinks} />
        <Links links={data.footer.widgets.links} />
        <div className='p-3'>
          <h3 className='pb-6'> Servisi </h3>
          {data.footer.widgets.services.map(serv => <p className='flex items-center'> <FcCheckmark className='mr-3' />{serv}</p>)}

        </div>
        <div className='p-3'>
          <h3 className='pb-6'> Info </h3>
          <p className='flex items-center'> <FcOvertime className='mr-3' /> {data.contact.generalInfo.workTime.label} : {data.contact.generalInfo.workTime.text}</p>
          <p className='flex items-center'> <FcSms className='mr-3' /> <a href={data.contact.generalInfo.email.text}>{data.contact.generalInfo.email.text}</a>  </p>
          <p className='flex items-center'> <FcCellPhone className='mr-3' />  {data.contact.generalInfo.phone.text} </p>
          <p className='flex items-center'> <FcOvertime className='mr-3' /> {data.contact.generalInfo.address.text} </p>
        </div>
      </div>
      <div
        className="footerCredit bg-primary-color w-full min-h-full h-20 websitePadding text-bg-black-contrast-text items-center gap-2"
      >
        <div className='px-5'>Copyright {new Date().getFullYear()}. - All rights reserved | This website is made by <span> <a className="text-bg-black font-bold" href="https://www.enisjasarovic.com">Enis J.</a></span></div>
        <div></div>

      </div>
    </footer>
  )
}

const WidgetAbout = (props) => {

  return <div className="flex flex-col p-3">
    <h3 className='pb-6'>{props.title}</h3>
    <p className="text-white mb-4">{props.text}</p>
    <div className="flex">{props.links.map(link => <IconButton classes='bg-gray-300' key={"key_" + link.href} href={link.href} icon={link.icon} title="" />)}</div>
  </div>
}

const Links = (props) => {
  return <div className="flex flex-col p-3">
    <h3 className='pb-6'>Links</h3>
    <div className="flex flex-col">{props.links.map(link => <IconButton icon={MdArrowForwardIos} title={link.label} key={"key_" + link.href} className="flex flex-row items-center mb-1" href={link.href}></IconButton>)}</div>
  </div>
}