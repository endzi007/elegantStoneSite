import React from 'react'
import PropTypes from 'prop-types'
import HomeLayout from '../includes/layouts/homeLayout'
import data from '../data/generalData';
import GoogleMap from '../includes/googleMap';

function Contact(props) {
    return (
        <HomeLayout title={data.pages.contact.pageTitle}>
            <div className="websitePadding flex flex-col text-center py-8">
                <h5 className="text-primary-color mt-5">{data.pages.contact.pageTitle}</h5>
                <h1>{data.pages.contact.mainHedding}</h1>
                <p className="pb-4">{data.pages.contact.paragraphText}</p>
                <div className="flex flex-col lg:!flex-row lg:flex-wrap lg:!justify-between lg:!">
                    <form action="https://formsubmit.co/elegantstone.ba@gmail.com" method="POST" className="lg:w-2/3 grid grid-cols-1 overflow-hidden lg:!grid-cols-2 gap-4 items-start justify-start p-12 bg-gray-100">
                        <input name="name" className="lg:col-start-1 lg:col-end-2" type="text" placeholder={data.pages.contact.contactForm.nameText} />
                        <input name="email" className="lg:col-start-2 lg:col-end-3" type="text" placeholder={data.pages.contact.contactForm.emailText} />
                        <input name="subject" className="lg:col-start-1 lg:col-end-3" type="text" placeholder={data.pages.contact.contactForm.subjectText} />
                        <textarea name="message" className="lg:col-start-1 lg:col-end-3" type="text" placeholder={data.pages.contact.contactForm.messageText} cols="40" rows="5" />
                        <button name="submit" className="bg-primary-color text-primary-contrast-text font-bold py-2 px-4 rounded-lg" type="submit">{data.pages.contact.contactForm.buttonText}</button>
                    </form>
                    <div className="lg:w-1/3 p-8 space-y-3">
                        {Object.keys(data.contact.generalInfo).map((item) => <SingleItem text={data.contact.generalInfo[item].text} icon={data.contact.generalInfo[item].icon} />)}
                    </div>
                </div>
            </div>
            <div className="h-96 overflow-hidden">
                <GoogleMap />
            </div>
        </HomeLayout>
    )
}

Contact.propTypes = {
    title: PropTypes.string.isRequired
}

export default Contact

function SingleItem(props) {
    return (
        <div className="flex items-center text-left">
            <div className="bg-gray-100 flex p-4 mr-2 text-primary-color fill-current min-h-full items-center mt-1">
                <props.icon />
            </div>
            <div className="flex flex-col">
                <p>{props.text}</p>
            </div>
        </div>
    )
}
