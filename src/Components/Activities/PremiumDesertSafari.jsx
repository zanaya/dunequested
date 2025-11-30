import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, EffectFade } from "swiper/modules";

function ActivitiesDetailsMain() {
    const images = [
        "/assets/img/tour/Premium_desert_safari_2.webp",
        "/assets/img/tour/Premium_desert_safari_1.webp",
        "/assets/img/tour/Premium_desert_safari_3.webp",
        "/assets/img/tour/Premium_desert_safari_4.webp",
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
                                    <Link className="page-tag mr-5" to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+Premium+Desert+Safari">
                                        Inquire Now
                                    </Link>
                                    <span className="ratting">
                                        <i className="fa-sharp fa-solid fa-star" />
                                        <span>4.8</span>
                                    </span>
                                </div>
                                <h2 className="box-title">Premium Desert Safari (DuneQuested Premium)</h2>
                                <p className="box-text mb-30">
                                    The Premium Desert Safari is DuneQuested's classic evening experience - high-energy dune bashing, short sandboarding, a brief camel walk, sunset photo stop and a relaxed BBQ dinner with cultural entertainment. It's a balanced mix of thrills and lounge-time that suits couples, families and groups.                             </p>
                                <p className="box-text mb-50">
                                    {" "}
                                    Enjoy an authentic desert evening with dune bashing, sandboarding, a camel walk and a BBQ under the stars - perfect for first-timers and families.                              </p>
                                <div className="tour-snapshot">
                                    <h4 className="box-title">Details</h4>
                                    <div className="tour-snap-wrapp">
                                        <div className="tour-snap">
                                            <div className="icon">
                                                <i className="fa-light fa-clock" />
                                            </div>
                                            <div className="content">
                                                <span className="title">Duration:</span>
                                                <span>4 - 6 Hours</span>
                                            </div>
                                        </div>
                                        <div className="tour-snap">
                                            <div className="icon">
                                                <img src="/assets/img/icon/guide2.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <span className="title">Seating:</span>
                                                <span>1 Person</span>
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
                                <h2 className="box-title">Included and Excluded</h2>

                                <div className="destination-checklist">
                                    <div className="checklist style4">
                                        <ul>
                                            <li> Dune bashing in a 4x4 (driver included)</li>

                                            <li> Sunset photo stop on a high dune</li>

                                            <li>Sandboarding and a short camel walk</li>

                                            <li>BBQ buffet (veg + non-veg options) and soft drinks</li>

                                            <li> Cultural entertainment (music / dance) and photo stops</li>

                                            <li> Safety briefing and on-site assistance</li>
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
                                    From <span className="widget_price">AED 230</span>
                                </p>
                                <div className="info-list">
                                    <ul>
                                        <li>
                                            <strong>Seating </strong>
                                            <span>1 Person</span>
                                        </li>

                                    </ul>
                                </div>
                                <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+Premium+Desert+Safari" className="th-btn th-icon">
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
                                            <Link className="offter-num" to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+Premium+Desert+Safari">
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
