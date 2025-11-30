import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourInner from '../Components/Tour/TourInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function Tour() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Popular Tours"
            />
            <TourInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Tour
