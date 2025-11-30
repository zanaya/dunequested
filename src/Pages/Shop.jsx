import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ShopInner from '../Components/Shop/ShopInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function Shop() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Shops"
            />
            <ShopInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Shop
