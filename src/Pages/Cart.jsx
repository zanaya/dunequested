import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import CartInner from '../Components/Shop/CartInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function Cart() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title='Cart Page'
            />
            <CartInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Cart
