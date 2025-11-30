import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, EffectFade } from "swiper/modules";

function ActivitiesDetailsMain() {
    const images = [
        "/assets/img/tour/ktm_bike_3.webp",
        "/assets/img/tour/ktm_bike_4.webp",
        "/assets/img/tour/ktm_bike_5.webp",
    ];

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <section className="space">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="tour-page-single">
                            <div className="slider-area tour-slider1">
                                {/* Main Slider */}
                                <Swiper
                                    modules={[Navigation, Thumbs, EffectFade]}
                                    effect="fade"
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={{
                                        prevEl: ".slider-prev",
                                        nextEl: ".slider-next",
                                    }}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    className="swiper th-slider mb-25"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="tour-slider-img">
                                                <img src={img} alt={`Slide ${index + 1}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Thumbnail Slider */}
                                <Swiper
                                    modules={[Navigation, Thumbs]}
                                    loop={true}
                                    spaceBetween={25}
                                    slidesPerView={3}
                                    watchSlidesProgress
                                    onSwiper={setThumbsSwiper} // Connect thumbnails to main slider
                                    className="swiper tour-thumb-slider"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="tour-slider-img">
                                                <img src={img} alt={`Thumbnail ${index + 1}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Navigation Buttons */}
                                <button className="slider-arrow style3 slider-prev">
                                    <img src="/assets/img/icon/hero-arrow-left.svg" alt="Prev" />
                                </button>
                                <button className="slider-arrow style3 slider-next">
                                    <img src="/assets/img/icon/hero-arrow-right.svg" alt="Next" />
                                </button>
                            </div>
                            <div className="page-content">
                                <div className="page-meta mb-45">
                                    <Link className="page-tag mr-5" to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+KTMBike">
                                        Inquire Now
                                    </Link>
                                    <span className="ratting">
                                        <i className="fa-sharp fa-solid fa-star" />
                                        <span>4.8</span>
                                    </span>
                                </div>
                                <h2 className="box-title">KTM Activity - DuneQuested - KTM-Style Dirt Bike Desert Adventure</h2>
                                <p className="box-text mb-30">
                                    Push into the heart of the desert on a high-performance KTM-style dirt bike designed for sand, ruts, and long dune runs.
                                    DuneQuested's dirt bike experience is built for riders who love nimble handling, responsive power delivery, and an athletic,
                                    hands-on ride. After a focused orientation and practice loop at base, you'll follow guided routes that suit your 
skill level - from smooth, scenic runs to steep dune climbs and technical sand tracks.</p>                                <p className="box-text mb-50">
                                    {" "}
This ride is perfect for experienced riders craving desert challenges and confident beginners who want to learn fast in a safe, guided environment. Expect panoramic views, adrenaline-filled sprints, and memorable golden-hour moments.</p>                                <div className="tour-snapshot">
                                    <h4 className="box-title">Details</h4>
                                    <div className="tour-snap-wrapp">
                                        <div className="tour-snap">
                                            <div className="icon">
                                                <i className="fa-light fa-clock" />
                                            </div>
                                            <div className="content">
                                                <span className="title">Duration:</span>
                                                <span>30,60,120 minutes</span>
                                            </div>
                                        </div>
                                        <div className="tour-snap">
                                            <div className="icon">
                                                <img src="/assets/img/icon/guide2.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <span className="title">Seating:</span>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div className="tour-snap">
                                            <div className="icon">
                                                <img src="/assets/img/icon/ship.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <span className="title">Pick & Drop</span>
                                                <span>Transportation</span>
                                            </div>
                                        </div>
                                        <div className="tour-snap">
                                            <div className="icon">
                                                <img src="/assets/img/icon/01.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <span className="title">Free Cancellation</span>
                                                <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+cancel+my+booking+for" className="line-btn">
                                                    Contact Us
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="box-title">Overview</h2>
                                <p className="box-text mb-50">
The KTM-style dirt bike offers a direct, connected riding feel - light in the turns, quick on the throttle, and designed to handle shifting sand and sudden changes in terrain.                                </p>
                                <h2 className="box-title">Highlights</h2>
                                <p className="box-text mb-30">
Your guide customizes the route to your comfort-smooth and scenic for beginners, faster-paced for thrill lovers. Midway, enjoy a stunning viewpoint stop where you can take photos, relax, and feel the calm of the open desert.                                </p>
                                <div className="checklist mb-50">
                                    <ul>
                                        <li>Drive high-performance KTM Bikes</li>
                                        <li>Ride purpose-built KTM-style dirt bikes tuned for desert terrain</li>
                                        <li>Guided routes for all skill levels</li>
                                        <li>Open desert riding with scenic viewpoints</li>
                                        <li>Sunset & sunrise prime-time sessions</li>
                                        <li>Includes safety briefing + practice zone</li>
                                        <li>Photo stops on high dune peaks</li>
                                    </ul>
                                </div>
                                <h2 className="box-title">Important Information</h2>
                                <div className="activities-checklist mb-50">
                                    <div className="checklist style3">
                                        <ul>
                                            <li>Minimum age rules apply (given at booking).</li>
                                            <li>All participants must follow guide instructions.</li>
                                            <li>Morning and sunset rides recommended.</li>
                                            <li>Buggies are inspected and maintained before each trip.</li>
                                            <li>Wear comfortable sportswear + closed shoes.</li>
                                            <li>Secure your phone/camera for dune riding.</li>
                                            <li>Ride Experience</li>
                                        </ul>
                                    </div>
                                </div>

                                <h2 className="box-title">Included and Excluded</h2>
                                
                                <div className="destination-checklist">
                                    <div className="checklist style2 style4">
                                        <ul>
                                            <li> KTM-style dirt bike (appropriate engine/size per booking)</li>

                                            <li>Helmet, goggles, gloves (safety kit)</li>

                                            <li> Safety briefing and hands-on orientation session</li>

                                          <li>  Guided desert route with marshal support</li>

                                            <li>Water and light refreshments at the camp</li>

                                            <li>Photo-stop assistance and route guidance</li>

                                            <li> On-site parking & basic amenities at base</li>
                                        </ul>
                                    </div>
                                    <div className="checklist style5">
                                        <ul>
                                            <li>Transport (optional add-on)</li>

                                            <li>Meals</li>

                                            <li>Travel insurance</li>

                                            <li>Personal expenses</li>

                                            <li>GoPro/camera rentals (on request)</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="location-map">
                                <h3 className="page-title mt-45 mb-30">Activity Location</h3>
                                <div className="contact-map">
                                    <iframe
                                        title="Activity location map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222828.04233622208!2d55.64341370603819!3d24.921257355607196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef57409a82d01d7%3A0xc58bde21dac220a3!2sAl%20Madam%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sbd!4v1763736535211!5m2!1sen!2sbd%22"
                                        allowFullScreen=""
                                        loading="lazy"
                                    />
                                    <div className="contact-icon">
                                        <img src="/assets/img/icon/location-dot3.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area style2">

                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Frequently Booked</h3>
                                <ul>
                                    <li>
                                        <Link to="/quad-bike-450cc">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Quad Bike
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/raptor-750cc">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Raptor 750cc
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/can-am-1500cc">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Can-Am 1500cc
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ktm-bike">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            KTM Bike
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget tour-booking  ">
                                <p className="widget_subtitle">
                                    From <span className="widget_price">AED 450</span>
                                </p>
                                <div className="info-list">
                                    <ul>
                                        <li>
                                            <strong>Seating </strong>
                                            <span>1 Seater</span>
                                        </li>

                                    </ul>
                                </div>
                                <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+KTMBike" className="th-btn th-icon">
                                    Book Now
                                </Link>
                                <span className="review">
                                    <i className="fa-light fa-heart" /> 88% of travelers recommend
                                    this experience
                                </span>
                            </div>
                            <div
                                className="widget widget_offer" style={{ background: 'url(/assets/img/bg/widget_bg_1.webp)' }}
                            >
                                <div className="offer-banner">
                                    <div className="offer">
                                        <h6 className="box-title">
                                            Need Help? We Are Here To Help You
                                        </h6>
                                        <div className="banner-logo">
                                            <img src="/assets/img/logo2.svg" alt="DuneQuested" />
                                        </div>
                                        <div className="offer">
                                            <h6 className="offer-title">You Get Online support</h6>
                                            <Link className="offter-num" to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+KTMBike">
                                                +971 56 459 2414
                                            </Link>
                                        </div>
                                        <Link to="/contact" className="th-btn style2 th-icon">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ActivitiesDetailsMain
