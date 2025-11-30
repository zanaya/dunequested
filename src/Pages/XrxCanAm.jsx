import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import XRXCanAm from '../Components/Activities/XRXCanAm'
import FooterTwo from '../Components/Footer/FooterTwo'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import { Helmet } from "react-helmet-async";

function ActivitiesDetails5() {
    return (
        <>
            <Helmet>
                <title>XRX Can-Am Buggy Dubai | Premium Dune Adventure Ride</title>
                <meta
                    name="description"
                    content="Book the XRX Can-Am buggy for a premium dune adventure in Dubai. High torque, rugged build and unmatched control."
                />
                <link rel="canonical" href="https://dunequested.com/xrx-can-am" />
            </Helmet>

            <HeaderTwo/>
            <Breadcrumb
                title="Xrx Can Am Details"
            />
            <XRXCanAm />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default ActivitiesDetails5
