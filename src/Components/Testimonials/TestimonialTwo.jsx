import React, { useState } from 'react';

const TestimonialTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonial-area2 overflow-hidden space" id="testi-sec">
      <div className="container shape-mockup-wrap">
        <div className="title-area text-center">
          <span className="sub-title">Testimonial</span>
          <h2 className="sec-title">What Client Say About us</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="testi-review" style={{ backgroundImage: "url('/assets/img/bg/map.webp')" }}>
              {/* Testimonial 1 */}
              <div
                className={`testi-box hover-item ${activeIndex === 0 ? 'item-active' : ''}`}
                onMouseOver={() => handleMouseOver(0)}
              >
                <div className="testi-box_content feature-card-active-wrap">
                  <p className="testi-box_text">
                    “Amazing experience! The dune bashing and sunset views were unforgettable. Highly recommend Dune Quested!”
                  </p>
                  <div className="testi-box_review">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="testi-box_profile">
                  <div className="testi-box_avater">
                    <span></span>
                    <img src="/assets/img/testimonial/testi_2_1.webp" alt="testimonial" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Andrew Simon</h3>
                    <span className="testi-box_desig">Traveller</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div
                className={`testi-box hover-item ${activeIndex === 1 ? 'item-active' : ''}`}
                onMouseOver={() => handleMouseOver(1)}
              >
                <div className="testi-box_content feature-card-active-wrap">
                  <p className="testi-box_text">
                    “Super professional team! Loved the quad biking—safe, fun, and thrilling from start to finish.”
                  </p>
                  <div className="testi-box_review">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="testi-box_profile">
                  <div className="testi-box_avater">
                    <span></span>
                    <img src="/assets/img/testimonial/test_2_2.webp" alt="testimonial" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Maria Doe</h3>
                    <span className="testi-box_desig">Traveller</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div
                className={`testi-box hover-item ${activeIndex === 2 ? 'item-active' : ''}`}
                onMouseOver={() => handleMouseOver(2)}
              >
                <div className="testi-box_content feature-card-active-wrap">
                  <p className="testi-box_text">
“One of the best desert safari experiences I’ve ever had. Great hospitality and smooth service!”                  </p>
                  <div className="testi-box_review">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="testi-box_profile">
                  <div className="testi-box_avater">
                    <span></span>
                    <img src="/assets/img/testimonial/test_3_3.webp" alt="testimonial" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Angelina Rose</h3>
                    <span className="testi-box_desig">Traveller</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div
                className={`testi-box hover-item ${activeIndex === 3 ? 'item-active' : ''}`}
                onMouseOver={() => handleMouseOver(3)}
              >
                <div className="testi-box_content feature-card-active-wrap">
                  <p className="testi-box_text">
“The vibes, the adventure, the scenery—everything was perfect. Dune Quested made our day!”                  </p>
                  <div className="testi-box_review">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="testi-box_profile">
                  <div className="testi-box_avater">
                    <span></span>
                    <img src="/assets/img/testimonial/test_4_4.webp" alt="testimonial" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Michel Carlos</h3>
                    <span className="testi-box_desig">Traveller</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div
                className={`testi-box hover-item ${activeIndex === 4 ? 'item-active' : ''}`}
                onMouseOver={() => handleMouseOver(4)}
              >
                <div className="testi-box_content feature-card-active-wrap">
                  <p className="testi-box_text">
“Top safari! Our guide was friendly and the whole tour felt premium. Totally worth it!”                  </p>
                  <div className="testi-box_review">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="testi-box_profile">
                  <div className="testi-box_avater">
                    <span></span>
                    <img src="/assets/img/testimonial/test_5_5.webp" alt="testimonial" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Michel Smith</h3>
                    <span className="testi-box_desig">Traveller</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shapes */}
        <div className="shape-mockup movingX d-none d-xl-block" style={{ top: '30%', left: '-9%' }}>
          <img className="gmovingX" src="/assets/img/shape/shape_7.webp" alt="shape" />
        </div>
        <div className="shape-mockup spin d-none d-xl-block" style={{ bottom: '30%', right: '-10%' }}>
          <img src="/assets/img/shape/shape_2_5.webp" alt="shape" />
        </div>
        <div className="shape-mockup jump d-none d-xl-block" style={{ bottom: '0%', left: '-5%' }}>
          <img src="/assets/img/shape/shape_2_2.webp" alt="shape" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;
