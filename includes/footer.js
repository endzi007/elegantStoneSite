import React from 'react'
import data from '../data/generalData'
import IconButton from './buildingBlocks/iconButton'
import { FaPaperPlane } from "react-icons/fa";
import { MdArrowForwardIos } from 'react-icons/md'

export default function Footer() {
    return (
    <footer className="bg-black flex flex-col">
      <div className= "websitePadding text-white grid md:grid-cols-4">
        <WidgetAbout title={data.footer.widgets.about.headingText} text={data.footer.widgets.about.paragraphTekst} links={data.contact.socialLinks}/>
        <Links links={data.footer.widgets.links} />
      </div>
      <div 
        className="footerCredit bg-primary-color w-full min-h-full h-20 websitePadding text-bg-black-contrast-text items-center gap-2"
      >
        <div>Copyright 2021 All rights reserved | This website is made by <span> <a className="text-bg-black font-bold" href="https://www.enisjasarovic.com">Enis J.</a></span></div>
        <div></div>

      </div>
    </footer>
    )
}

const WidgetAbout = (props)=>{

  return <div className="flex flex-col p-3">
    <h3>{props.title}</h3>
    <p className="text-gray-400 mb-4">{props.text}</p>
    <div className="flex">{props.links.map(link => <IconButton key={"key_"+link.href} href={link.href} icon={link.icon} title="" />)}</div>
  </div>
}

const Links = (props)=>{
  return <div className="flex flex-col p-3">
    <h3>Links</h3>
    <div className="flex flex-col">{props.links.map(link => <a key={"key_" + link.href} className="flex flex-row items-center text-gray-400 mb-1" href={link.href}>
      <span><MdArrowForwardIos /></span>{link.label}</a>)}</div>
  </div>
}