import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import GetInTouch from '../Components/Contact/GetInTouch'
import BookATour from '../Components/Contact/BookATour'
import ContactMap from '../Components/Contact/ContactMap'
import FooterTwo from '../Components/Footer/FooterTwo'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import { Helmet } from "react-helmet-async";


function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact DuneQuested | Book Your Dubai Adventure</title>
                <meta
                    name="description"
                    content="Contact DuneQuested for bookings, inquiries and support. We're here to plan your perfect desert adventure in Dubai."
                />
                <link rel="canonical" href="https://dunequested.com/contact" />
            </Helmet>

            <HeaderTwo />
            <Breadcrumb
                title='Contact Us'
            />
            <GetInTouch />
            <BookATour />
            <ContactMap />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default Contact
