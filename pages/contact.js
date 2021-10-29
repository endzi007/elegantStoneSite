import React from 'react'
import PropTypes from 'prop-types'
import HomeLayout from '../includes/layouts/homeLayout'
import { ImLocation } from 'react-icons/im'

function Contact(props) {
    return (
        <HomeLayout title="Contact | ElegantStone doo Berane">
            <div className="websitePadding flex flex-col text-center py-8">
                <h5 className="text-primary-color mt-5">CONTACT US</h5>
                <h1>Message us for more details</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </p>
                <div className="flex flex-row">
                    <form className="w-2/3 grid overflow-hidden grid-cols-2 gap-4 items-start justify-start p-12 bg-gray-100">
                        <input className="" type="text" placeholder="enter your name"/>
                        <input className="" type="text" placeholder="enter your email"/>
                        <input className="col-start-1 col-end-3" type="text" placeholder="Subject"/>
                        <textarea className="col-start-1 col-end-3" type="text" placeholder="Enter your message" cols="40" rows="5" />
                        <input className="bg-primary-color text-primary-contrast-text font-bold py-2 px-4 rounded-lg" type="submit" aria-label="Submit"/>
                    </form>
                    <div className="w-1/3 p-8">
                        <SingleItem icon={ImLocation} heading="Heading 1" text="some thext"/>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

Contact.propTypes = {
    title: PropTypes.string.isRequired
}

export default Contact

function SingleItem(props){
    return (
    <div className="flex items-start">
        <div className=" bg-gray-100 flex p-3 border mr-2 text-primary-color fill-current flex-grow-0">
            <props.icon />
        </div>
        <div className="flex flex-col">
            <h5>{props.heading}</h5>
            <p>{props.text}</p>
        </div>
    </div>
    )
}