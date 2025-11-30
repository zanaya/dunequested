import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import GalleryInner from '../Components/Gallery/GalleryInner'
import FooterTwo from '../Components/Footer/FooterTwo'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import { Helmet } from "react-helmet-async";


function Gallery() {
    return (
        <>
            <Helmet>
                <title>Gallery | Dubai Desert Safari & Adventure Photos</title>
                <meta
                    name="description"
                    content="View exciting photos of quad biking, dune buggy rides, safaris, and other DuneQuested adventures in Dubai."
                />
                <link rel="canonical" href="https://dunequested.com/gallery" />
            </Helmet>

            <HeaderTwo />
            <Breadcrumb
                title="Gallery"
            />
            <GalleryInner />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default Gallery
