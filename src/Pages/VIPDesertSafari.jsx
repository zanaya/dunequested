import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import VIPDesertSafari from '../Components/Activities/VIPDesertSafari'
import FooterTwo from '../Components/Footer/FooterTwo'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import { Helmet } from "react-helmet-async";

function ActivitiesDetails6() {
    return (
        <>
            <Helmet>
                <title>VIP Desert Safari Dubai | Private Luxury Tour</title>
                <meta
                    name="description"
                    content="Experience Dubai’s VIP desert safari — private camp, premium seating, exclusive shows, and personalized services."
                />
                <link rel="canonical" href="https://dunequested.com/vip-desert-safari" />
            </Helmet>

            <HeaderTwo/>
            <Breadcrumb
                title="VIP Desert Safari Details"
            />
            <VIPDesertSafari />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default ActivitiesDetails6
