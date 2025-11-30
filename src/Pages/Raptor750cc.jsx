import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import FooterTwo from '../Components/Footer/FooterTwo'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import Raptor750cc from '../Components/Activities/Raptor750cc'
import { Helmet } from "react-helmet-async";


function ActivitiesDetails2() {
    return (
        <>
            <Helmet>
                <title>Yamaha Raptor 750cc | Extreme Quad Bike Ride Dubai</title>
                <meta
                    name="description"
                    content="Experience the legendary Yamaha Raptor 750cc on Dubai's dunes. Fast, aggressive, and built for professionals."
                />
                <link rel="canonical" href="https://dunequested.com/raptor-750cc" />
            </Helmet>

            <HeaderTwo/>
            <Breadcrumb
                title="Raptor 750cc Details"
            />
            <Raptor750cc />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default ActivitiesDetails2
