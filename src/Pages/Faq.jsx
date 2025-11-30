import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import FaqInner from '../Components/Faq/FaqInner'
import ElementSection from '../Components/Elements/ElementSection'
import FaqContact from '../Components/Faq/FaqContact'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function Faq() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="FAQs"
            />
            <FaqInner />
            <ElementSection />
            <FaqContact />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Faq
