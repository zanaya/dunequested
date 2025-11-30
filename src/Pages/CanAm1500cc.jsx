import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import CanAm1500cc from '../Components/Activities/CanAm1500cc'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import { Helmet } from "react-helmet-async";


function ActivitiesDetails() {
    return (
        <>
            <Helmet>
                <title>Can-Am 1500cc Buggy | Dubai's Most Extreme Desert Ride</title>
                <meta
                    name="description"
                    content="Ride Dubai's strongest dune buggy - the Can-Am Maverick 1500cc. Pure desert power and unmatched off-road performance."
                />
                <link rel="canonical" href="https://dunequested.com/can-am-1500cc" />
            </Helmet>
            <HeaderTwo />
            <Breadcrumb
                title="Can Am 1500cc Details"
            />
            <CanAm1500cc />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default ActivitiesDetails
