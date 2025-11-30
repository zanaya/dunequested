import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeTwo from './HomeTwo'
import About from './About'
import LoadTop from '../Components/LoadTop'
import Destination from './Destination'
import DestinationDetails from './DestinationDetails'
import Service from './Service'
import ServiceDetails from './ServiceDetails';
import Activities from './Activities'
import CanAm1500cc from './CanAm1500cc'
import Buggy1000cc from './Buggy1000cc'
import Shop from './Shop'
import ShopDetails from './ShopDetails'
import Cart from './Cart'
import Checkout from './Checkout'
import Wishlist from './Wishlist'
import Gallery from './Gallery'
import Tour from './Tour'
import TourDetails from './TourDetails'
import Resort from './Resort'
import ResortDetails from './ResortDetails'
import TourGuide from './TourGuide'
import TourGuiderDetails from './TourGuiderDetails'
import Faq from './Faq'
import Pricing from './Pricing'
import Error from './Error'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Contact from './Contact'
import Raptor750cc from './Raptor750cc'
import KtmBike from './KtmBike'
import QuadBike450cc from './QuadBike450cc'
import XrxCanAm from './XrxCanAm'
import StandardDesertSafari from './StandardDesertSafari'
import PremiumDesertSafari from './PremiumDesertSafari'
import VIPDesertSafari from './VIPDesertSafari'
function RouterPage() {
  return (
    <div>
      <Router>
        <LoadTop />
        <Routes>
          <Route path="/" element={<HomeTwo />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/service" element={<Service />}></Route>
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/activities" element={<Activities />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:id" element={<ShopDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/tour" element={<Tour />}></Route>
          <Route path="/tour-details" element={<TourDetails />}></Route>
          <Route path="/resort" element={<Resort />}></Route>
          <Route path="/resort/:id" element={<ResortDetails />}></Route>
          <Route path="/tour-guide" element={<TourGuide />}></Route>
          <Route path="/tour-guide/:id" element={<TourGuiderDetails />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/price" element={<Pricing />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
                  <Route path="/blog/:slug" element={<BlogDetails />}></Route>

          <Route path="/contact" element={<Contact />}></Route> 
          <Route path="/can-am-1500cc" element={<CanAm1500cc />}></Route>
          <Route path="/buggy-1000cc" element={<Buggy1000cc />}></Route>
          <Route path="/raptor-750cc" element={<Raptor750cc />}></Route>  
          <Route path="/ktm-bike" element={<KtmBike />}></Route>
          <Route path="/quad-bike-450cc" element={<QuadBike450cc />}></Route>
          <Route path="/xrx-can-am" element={<XrxCanAm />}></Route>
                  <Route path="/Standard-desert-safari" element={<StandardDesertSafari />}></Route>
                  <Route path="/premium-desert-safari" element={<PremiumDesertSafari />}></Route>
                  <Route path="/vip-desert-safari" element={<VIPDesertSafari />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default RouterPage