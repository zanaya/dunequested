import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ServiceDetailsMain from '../Components/Services/ServiceDetailsMain'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function ServiceDetails() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Service Details"
            />
            <ServiceDetailsMain />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default ServiceDetails
