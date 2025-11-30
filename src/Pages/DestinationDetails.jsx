import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import DestinationDetailsMain from '../Components/Destination/DestinationDetailsMain'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function DestinationDetails() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Destination Details"
            />
            <DestinationDetailsMain />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default DestinationDetails
