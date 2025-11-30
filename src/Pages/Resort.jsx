import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ResortInner from '../Components/Resort/ResortInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function Resort() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Resort"
            />
            <ResortInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Resort
