import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import { Link } from 'react-router-dom';

function TourOne() {
  return (
    <section
      className="tour-area position-relative bg-top-center overflow-hidden space bg-no-repeat"
      id="service-sec"
      style={{ backgroundImage: 'url(/assets/img/bg/tour_bg_1.webp)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="title-area text-center">
              <span className="sub-title">Best Prices For You</span>
              <h2 className="sec-title">Most Popular Adventures</h2>
              <p className="sec-text">
Dune Quested brings thrilling desert adventures with quad biking, dune bashing, and breathtaking sunset views for all. fun!              </p>
            </div>
          </div>
        </div>
        <div className="slider-area tour-slider">
          <Swiper
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
            spaceBetween={24}
            grabCursor={true}
            className="swiper th-slider has-shadow slider-drag-wrap"
          >
            <SwiperSlide key="tour1">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_9_1.webp" alt="Buggy 1000cc" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                                      <Link to="/buggy-1000cc">Buggy 1000cc</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                                      <Link to="/buggy-1000cc" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">AED800.00</span>/4 Persons
                  </h4>
                  <div className="tour-action">
                    <span>
                      <i className="fa-light fa-clock" />1 hour
                    </span>
                                      <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+Buggy+1+hour" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour2">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_box_5.webp" alt="Italy Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                                      <Link to="/xrx-can-am">XRX CAN-AM</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                                      <Link to="/xrx-can-am" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">AED1600.00</span>/4 Persons
                  </h4>
                  <div className="tour-action">
                    <span>
                      <i className="fa-light fa-clock" />1 hour
                    </span>
                                      <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+XRX+CAN+AM" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour3">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_box_20.webp" alt="Dubai Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                                      <Link to="/quad-bike-450cc">Quad Bike</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                                      <Link to="/quad-bike-450cc" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">AED300.00</span>/2 Persons
                  </h4>
                  <div className="tour-action">
                    <span>
                      <i className="fa-light fa-clock" />1 hour
                    </span>
                                      <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+Quad+Bike" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour4">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_box_8.webp" alt="Switzerland Tour" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                                      <Link to="/ktm-bike">KTM Bike</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                                      <Link to="/ktm-bike" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">AED750.00</span>/Person
                  </h4>
                  <div className="tour-action">
                    <span>
                      <i className="fa-light fa-clock" />1 hour
                    </span>
                                      <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+KTM+Bike" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour5">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_6_1.webp" alt="Greece Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                                      <Link to="/raptor-750cc">Raptor 750cc</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                                      <Link to="/raptor-750cc" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">AED900.00</span>/1 Person
                  </h4>
                  <div className="tour-action">
                    <span>
                      <i className="fa-light fa-clock" />1 hour
                    </span>
                                      <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+Raptor+750cc" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TourOne;
