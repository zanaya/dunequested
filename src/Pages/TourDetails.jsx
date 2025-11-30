import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourDetailsMain from '../Components/Tour/TourDetailsMain'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function TourDetails() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Tour Details"
            />
            <TourDetailsMain />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default TourDetails
