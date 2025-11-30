import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, A11y, EffectFade, Autoplay, Navigation, Thumbs } from 'swiper/modules'; // Correctly import necessary modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
function BannerTwo() {
  const swiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null); // Reference for the thumbs swiper
  useEffect(() => {
    // Function to add animation classes
    const animationProperties = () => {
      document.querySelectorAll('[data-ani]').forEach((element) => {
        const animationName = element.getAttribute('data-ani');
        element.classList.add(animationName);
      });
      document.querySelectorAll('[data-ani-delay]').forEach((element) => {
        const delayTime = element.getAttribute('data-ani-delay');
        element.style.animationDelay = delayTime;
      });
    };
    animationProperties();
  }, []);
  // Event handler for custom navigation arrows
  const handleSliderNavigation = (direction) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      if (direction === 'prev') {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    }
  };
  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById("destination-sec")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero-2" id="hero">
      <div className="hero2-overlay" style={{ backgroundImage: 'url(/assets/img/bg/line-pattern.webp)'}} />
      {/* Main Swiper */}
      <Swiper
        modules={[Pagination, Navigation, Thumbs, EffectFade, Autoplay]} // Added necessary modules
        className="swiper hero-slider-2"
        id="heroSlide2"
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiperRef.current }} // Using thumbsSwiperRef to link thumbs swiper
        effect="fade"
        pagination={{
          el: '.slider-pagination',
          type: 'progressbar',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        watchSlidesProgress={true}
        ref={swiperRef} // Attach ref to the main swiper
      >
        <SwiperSlide>
          <div className="hero-inner">
            <div className="th-hero-bg" style={{ backgroundImage: 'url(/assets/img/hero/hero_bg_2_1.webp)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />
            <div className="container">
                <div className="hero-style2">
                <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                  Discover <span className="hero-text">Dubai desert magic</span>
                </h1>
                <p className="hero-desc" data-ani="slideinup" data-ani-delay="0.5s">
DuneQuested delivers unmatched desert tour adventures with expert guides and curated experiences perfect for thrill seekers and explorers.                </p>
                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.6s">
                  <Link to="/activities" className="th-btn white-btn th-icon">Explore Tours</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-inner">
            <video autoPlay loop muted>
              <source src="/assets/img/hero/hero-video.webm" type="video/webm" />
            </video>
            <div className="container">
              <div className="hero-style2">
                <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                                  Explore <span className="hero-text">the dunes of Dubai today</span>
                </h1>
                <p className="hero-desc" data-ani="slideinup" data-ani-delay="0.5s">
Experience a guided adventure through Dubai's dunes, featuring scenic routes, exciting activities and carefully planned schedules for every visitor.                </p>
                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.6s">
                  <Link to="/destination" className="th-btn white-btn th-icon">Explore Tours</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-inner">
            <div className="th-hero-bg" style={{ backgroundImage: 'url(/assets/img/hero/hero_bg_2_3.webp)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />
            <div className="container">
              <div className="hero-style2">
                <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                                  Enjoy <span className="hero-text">your thrilling desert escape</span>
                </h1>
                <p className="hero-desc" data-ani="slideinup" data-ani-delay="0.5s">
DuneQuested offers premium desert adventures with skilled professionals and tailored packages designed to elevate every moment of your journey.                </p>
                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.6s">
                  <Link to="/tour" className="th-btn white-btn th-icon">Explore Tours</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Custom Navigation */}
      <div className="th-swiper-custom">
        <div className="slider-pagination" />
        <div className="hero-icon">
          <button data-slider-prev="#heroSlide2" className="hero-arrow slider-prev" onClick={() => handleSliderNavigation('prev')}>
            <img src="/assets/img/icon/hero-arrow-left.svg" alt="" />
          </button>
          <button data-slider-next="#heroSlide2" className="hero-arrow slider-next" onClick={() => handleSliderNavigation('next')}>
            <img src="/assets/img/icon/hero-arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
      {/* Thumbs Swiper */}
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        className="heroThumbs style2"
        id="heroSlide3"
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.slider-next',
          prevEl: '.slider-prev',
        }}
        loop={true}
        watchSlidesProgress={true}
        slideToClickedSlide={true}
        centeredSlidesBounds={true}
        ref={thumbsSwiperRef} // Attach ref to the thumbs swiper
      >
        <SwiperSlide>
          <div className="hero-inner">
            <div className="hero-card">
              <div className="hero-img">
                <img src="/assets/img/hero/hero_1_3.webp" alt="" />
              </div>
              <div className="hero-card_content">
                <h3 className="box-title">Buggy 1000cc</h3>
                <h4 className="hero-card_price"><span className="currency">AED450.00</span>/Person</h4>
                <span className="d-block"><i className="fa-light fa-clock" />30 Minutes</span>
                              <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+" className="th-btn style2">Book Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-inner">
            <div className="hero-card">
              <div className="hero-img">
                <img src="/assets/img/hero/hero_bg_2_2.webp" alt="" />
              </div>
              <div className="hero-card_content">
                <h3 className="box-title">Quad Bike 450cc</h3>
                <h4 className="hero-card_price"><span className="currency">AED250.00</span>/Person</h4>
                <span className="d-block"><i className="fa-light fa-clock" />30 Minutes</span>
                              <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+" className="th-btn style2">Book Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-inner">
            <div className="hero-card">
              <div className="hero-img">
                <img src="/assets/img/hero/hero_bg_2_1.webp" alt="" />
              </div>
              <div className="hero-card_content">
                <h3 className="box-title">Can am 1500cc</h3>
                <h4 className="hero-card_price"><span className="currency">AED700.00</span>/2 Persons</h4>
                <span className="d-block"><i className="fa-light fa-clock" />7 Days</span>
                              <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+" className="th-btn style2">Book Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides here as needed */}
      </Swiper>
      <div className="scroll-down">
        <Link to="/#destination-sec" onClick={handleScroll} className="scroll-wrap">
          <span>
            <img src="/assets/img/icon/down-arrow.svg" alt="" />
          </span>
          Scroll Down
        </Link>
      </div>
    </div>
  );
}
export default BannerTwo;