import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import AboutFour from '../Components/About/AboutFour'
import OfferTwo from '../Components/Offer/OfferTwo'
import ElementSection from '../Components/Elements/ElementSection'
import TestimonialTwo from '../Components/Testimonials/TestimonialTwo'
import BrandOne from '../Components/Brand/BrandOne'
import GalleryFive from '../Components/Gallery/GalleryFive'
import FooterTwo from '../Components/Footer/FooterTwo'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import TourGuide from '../Components/Guide/TourGuide'

import { Helmet } from "react-helmet-async";

function About() {
    return (
        <>
            <Helmet>
                <title>About DuneQuested | Dubai Desert Adventure Experts</title>
                <meta
                    name="description"
                    content="Discover the story behind DuneQuested — Dubai’s trusted adventure tour operator specializing in quad biking, dune buggies and desert safaris."
                />
                <link rel="canonical" href="https://dunequested.com/about" />
                <meta property="og:title" content="About DuneQuested" />
                <meta
                    property="og:description"
                    content="Learn about Dubai’s leading desert adventure company."
                />
                <meta property="og:url" content="https://dunequested.com/about" />
            </Helmet>


            <HeaderTwo />
            <Breadcrumb title="About Us" />
            <AboutFour />
            <OfferTwo />
            <ElementSection />
            <TourGuide />
            <TestimonialTwo />
            <BrandOne />
            <GalleryFive />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default About
