import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import BlogInner from '../Components/Blog/BlogInner'
import ScrollToTop from '../Components/ScrollToTop'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderTwo from '../Components/Header/HeaderTwo'
import { Helmet } from "react-helmet-async";


function Blog() {
    return (
        <>
            <Helmet>
                <title>Blog | Dubai Desert Adventure Guides & Tips</title>
                <meta
                    name="description"
                    content="Read expert guides, tips and adventure stories about Dubai desert safaris, quad biking, dune buggies and more."
                />
                <link rel="canonical" href="https://dunequested.com/blog" />
            </Helmet>

            <HeaderTwo />
            <Breadcrumb
                title="Blog Lists View"
            />
            <BlogInner />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default Blog
