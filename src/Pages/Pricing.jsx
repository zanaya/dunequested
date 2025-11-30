import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import PricingPlan from '../Components/Services/PricingPlan'
import Cta from '../Components/Services/Cta'
import FaqInnerTwo from '../Components/Faq/FaqInnerTwo'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function Pricing() {
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb
                title="Pricing Plan"
            />
            <PricingPlan className="space"/>
            <Cta />
            <FaqInnerTwo />
            <FooterFour />
            <ScrollToTop />
        </div>
    )
}

export default Pricing
