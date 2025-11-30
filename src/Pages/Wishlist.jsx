import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import WishlistInner from '../Components/Shop/WishlistInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function Wishlist() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Wishlist"
            />
            <WishlistInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Wishlist
