import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ActivitiesInner from '../Components/Activities/ActivitiesInner'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import FooterTwo from '../Components/Footer/FooterTwo'
import { Helmet } from "react-helmet-async";
function Activities() {
    return (
        <>
            <Helmet>
                <title>Activities | Quad Biking, Dune Buggy, Dirt Bikes in Dubai</title>
                <meta
                    name="description"
                    content="Explore all DuneQuested activities — dune buggy rentals, quad bikes, dirt bikes, and desert safari adventure experiences."
                />
                <link rel="canonical" href="https://dunequested.com/activities" />
            </Helmet>

            <HeaderTwo />
            <Breadcrumb
                title="Activities"
            />
            <ActivitiesInner />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default Activities
