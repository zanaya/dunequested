import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ResortDetailsMain from '../Components/Resort/ResortDetailsMain'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function ResortDetails() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Resort Details"
            />
            <ResortDetailsMain />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default ResortDetails
