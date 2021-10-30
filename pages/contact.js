import React from 'react'
import PropTypes from 'prop-types'
import HomeLayout from '../includes/layouts/homeLayout'
import data from '../data/generalData';

function Contact(props) {
    return (
        <HomeLayout title="Contact | ElegantStone doo Berane">
            <div className="websitePadding flex flex-col text-center py-8">
                <h5 className="text-primary-color mt-5">CONTACT US</h5>
                <h1>Message us for more details</h1>
                <p className="pb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </p>
                <div className="flex flex-col lg:!flex-row lg:flex-wrap lg:!justify-between">
                    <form className="lg:w-2/3 grid grid-cols-1 overflow-hidden lg:!grid-cols-2 gap-4 items-start justify-start p-12 bg-gray-100">
                        <input className="lg:col-start-1 lg:col-end-2" type="text" placeholder="enter your name"/>
                        <input className="lg:col-start-2 lg:col-end-3" type="text" placeholder="enter your email"/>
                        <input className="lg:col-start-1 lg:col-end-3" type="text" placeholder="Subject"/>
                        <textarea className="lg:col-start-1 lg:col-end-3" type="text" placeholder="Enter your message" cols="40" rows="5" />
                        <input className="bg-primary-color text-primary-contrast-text font-bold py-2 px-4 rounded-lg" type="submit" aria-label="Submit"/>
                    </form>
                    <div className="lg:w-1/3 p-8 space-y-3">
                        {console.log(data)}
                        {Object.keys(data.contact.generalInfo).map((item) => <SingleItem heading={item} text={data.contact.generalInfo[item].text} icon={data.contact.generalInfo[item].icon}/>)}

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
    <div className="flex items-start text-left">
        <div className="bg-gray-100 flex p-4 mr-2 text-primary-color fill-current min-h-full items-center mt-1">
            <props.icon />
        </div>
        <div className="flex flex-col">
            <h5>{props.heading}</h5>
            <p>{props.text}</p>
        </div>
    </div>
    )
}