import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import StandardDesertSafari from '../Components/Activities/StandardDesertSafari'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import { Helmet } from "react-helmet-async";

function ActivitiesDetails6() {
    return (
        <>
            <Helmet>
                <title>Standard Desert Safari Dubai | Affordable Adventure Package</title>
                <meta
                    name="description"
                    content="Enjoy Dubai's famous desert safari - dune bashing, camel ride, BBQ dinner, and entertainment at the best price."
                />
                <link rel="canonical" href="https://dunequested.com/standard-desert-safari" />
            </Helmet>

            <HeaderTwo/>
            <Breadcrumb
                title="Standard Desert Safari Details"
            />
            <StandardDesertSafari />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default ActivitiesDetails6
