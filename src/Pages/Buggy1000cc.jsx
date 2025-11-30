import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import FooterTwo from '../Components/Footer/FooterTwo'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import Buggy1000cc from '../Components/Activities/Buggy1000cc'
import { Helmet } from "react-helmet-async";


function ActivitiesDetails1() {
    return (
        <>
            <Helmet>
                <title>1000cc Dune Buggy Dubai | Polaris / Can-Am Rentals</title>
                <meta
                    name="description"
                    content="Book a 1000cc dune buggy in Dubai - safe, powerful and perfect for extreme dune adventures. Polaris & Can-Am models available."
                />
                <link rel="canonical" href="https://dunequested.com/buggy-1000cc" />
            </Helmet>

            <HeaderTwo/>
            <Breadcrumb
                title="Buggy 1000cc Details"
            />
            <Buggy1000cc />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default ActivitiesDetails1
