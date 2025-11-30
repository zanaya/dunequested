import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const guides = [
  { id: 1, name: "Manan Satti", image: "team_1_1.webp" },
  { id: 2, name: "Aqib Ahmad", image: "team_1_2.webp" },
  { id: 3, name: "Shahid Khan", image: "team_1_3.webp" },
  { id: 4, name: "Osama Yousafzai", image: "team_1_4.webp" },
  { id: 5, name: "Manan Satti", image: "team_1_1.webp" },
  { id: 6, name: "Aqib Ahmad", image: "team_1_2.webp" },
  { id: 7, name: "Shahid Khan", image: "team_1_3.webp" },
    { id: 8, name: "Osama Yousafzai", image: "team_1_4.webp" },
];

function TourGuide() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (swiperInstance && paginationRef.current) {
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  return (
    <section
      className="bg-smoke space overflow-hidden"
      style={{ backgroundImage: "url(/assets/img/bg/team_bg_4.webp)" }}
    >
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title">Meet with Guide</span>
          <h2 className="sec-title">Tour Guide</h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            speed={1200}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="th-slider teamSlider1 has-shadow"
            onSwiper={setSwiperInstance} // Save Swiper instance
          >
            {guides.map((guide) => (
              <SwiperSlide key={guide.id}>
                <div className="th-team team-box">
                  <div className="team-img">
                    <img src={`/assets/img/team/${guide.image}`} alt={guide.name} />
                  </div>
                  <div className="team-content">
                    <div className="media-body">
                      <h3 className="box-title">
                        <Link to="">{guide.name}</Link>
                      </h3>
                      <span className="team-desig">Tourist Guide</span>
                                {/* <div className="th-social">
                        {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                          <Link key={platform} target="_blank" rel="noopener noreferrer" to={`https://${platform}.com/`}>
                            <i className={`fab fa-${platform}`} />
                          </Link>
                        ))}
                      </div>*/}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TourGuide;
