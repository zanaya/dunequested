import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import QuadBike450cc from '../Components/Activities/QuadBike450cc'
import FooterTwo from '../Components/Footer/FooterTwo'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import { Helmet } from "react-helmet-async";

function ActivitiesDetails4() {
    return (
        <>
            <Helmet>
                <title>450cc Quad Bike Dubai | High-Power ATV Adventure Ride</title>
                <meta
                    name="description"
                    content="Ride the powerful 450cc quad bike across Dubai's golden dunes. Perfect for thrill-seekers wanting a high-speed desert adventure."
                />
                <link rel="canonical" href="https://dunequested.com/quad-bike-450cc" />
            </Helmet>

            <HeaderTwo/>
            <Breadcrumb
                title="Quad Bike 450cc Details"
            />
            <QuadBike450cc />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default ActivitiesDetails4
