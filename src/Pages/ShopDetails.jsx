import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ShopDetailsMain from '../Components/Shop/ShopDetailsMain'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function ShopDetails() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title='Shop Details'
            />
            <ShopDetailsMain />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default ShopDetails
