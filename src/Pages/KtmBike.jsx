import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import FooterTwo from '../Components/Footer/FooterTwo'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import KtmBike from '../Components/Activities/KtmBike'
import { Helmet } from "react-helmet-async";


function ActivitiesDetails3() {
    return (
        <>
            <Helmet>
                <title>KTM Dirt Bike Rental Dubai | Desert Off-Road Adventures</title>
                <meta
                    name="description"
                    content="Rent a KTM dirt bike in Dubai and conquer the desert terrain with high-performance off-road motorcycles."
                />
                <link rel="canonical" href="https://dunequested.com/ktm-bike" />
            </Helmet>

            <HeaderTwo/>
            <Breadcrumb
                title="KTM Bike"
            />
            <KtmBike/>
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default ActivitiesDetails3
