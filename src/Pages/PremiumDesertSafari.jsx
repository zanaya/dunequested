import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import PremiumDesertSafari from '../Components/Activities/PremiumDesertSafari'
import FooterTwo from '../Components/Footer/FooterTwo'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import { Helmet } from "react-helmet-async";

function ActivitiesDetails6() {
    return (
        <>
            <Helmet>
                <title>Premium Desert Safari Dubai | Luxury Desert Experience</title>
                <meta
                    name="description"
                    content="Upgrade your Dubai safari with a premium adventure: VIP seating, gourmet dinner, private transfer, and exclusive activities."
                />
                <link rel="canonical" href="https://dunequested.com/premium-desert-safari" />
            </Helmet>

            <HeaderTwo/>
            <Breadcrumb
                title="Premium Desert Safari Details"
            />
            <PremiumDesertSafari />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default ActivitiesDetails6
