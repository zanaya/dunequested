import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourGuiderDetailsMain from '../Components/Guide/TourGuiderDetailsMain'
import TourGuideTwo from '../Components/Guide/TourGuideTwo'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function TourGuiderDetails() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Tour Guide Details"
            />
            <TourGuiderDetailsMain />
            <TourGuideTwo />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default TourGuiderDetails
