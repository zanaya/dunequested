import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import DestinationInner from '../Components/Destination/DestinationInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function Destination() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Destination"
            />
            <DestinationInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Destination
