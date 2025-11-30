import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import CheckoutInner from '../Components/Shop/CheckoutInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function Checkout() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title='Checkout'
            />
            <CheckoutInner />
            <FooterFour/>
            <ScrollToTop />
        </>
    )
}

export default Checkout
