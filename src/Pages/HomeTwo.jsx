import React from 'react'
import BannerTwo from '../Components/Banner/BannerTwo'
import HeaderTwo from '../Components/Header/HeaderTwo'
import DestinationTwo from '../Components/Destination/DestinationTwo'
import CategoryTwo from '../Components/Category/CategoryTwo'
import OfferOne from '../Components/Offer/OfferOne'
import PopularDestination from '../Components/Destination/PopularDestination'
import CounterTwo from '../Components/Counter/CounterTwo'
import GalleryTwo from '../Components/Gallery/GalleryTwo'
import TourGuide from '../Components/Guide/TourGuide'
import TestimonialTwo from '../Components/Testimonials/TestimonialTwo'
import BrandOne from '../Components/Brand/BrandOne'
import FooterTwo from '../Components/Footer/FooterTwo'
import ElementSection from '../Components/Elements/ElementSection'
import ScrollToTop from '../Components/ScrollToTop'
import TourOne from '../Components/Tour/TourOne'
import AboutTwo from '../Components/About/AboutTwo'
import { Helmet } from "react-helmet-async";

function HomeTwo() {
  return (
      <div>
          <Helmet>
              <title>DuneQuested | Dubai Desert Safaris, Quad Biking & Adventure Tours</title>
              <meta
                  name="description"
                  content="Experience Dubai's best quad biking, dune buggy rides, desert safaris, dirt bikes and adventure tours. Book your desert adventure with DuneQuested."
              />
              <link rel="canonical" href="https://dunequested.com" />
              <meta property="og:title" content="DuneQuested | Dubai Desert Adventures" />
              <meta
                  property="og:description"
                  content="Dubai’s most thrilling quad biking, dune buggies and desert safaris."
              />
              <meta property="og:url" content="https://dunequested.com" />
              <meta property="og:type" content="website" />
          </Helmet>

      <HeaderTwo />
      <BannerTwo />
      <DestinationTwo />
      <CategoryTwo />
      <AboutTwo />
      <TourOne />
      <OfferOne />
      <PopularDestination />
      <CounterTwo />
      <GalleryTwo />
      <TourGuide />
      <TestimonialTwo />
      <BrandOne className="space-bottom"/>
      <ElementSection className="bg-smoke"/>
      <FooterTwo />
      <ScrollToTop />
    </div>
  )
}

export default HomeTwo
