import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourGuideInner from '../Components/Guide/TourGuideInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'

function TourGuide() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb
        title="Tour Guide"
      />
      <TourGuideInner />
      <FooterFour />
      <ScrollToTop />
    </>
  )
}

export default TourGuide
