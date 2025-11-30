import React, { useState } from "react";
import { Link } from "react-router-dom";

function DestinationTwo() {
    const destinations = [
        { name: "KTM Bike", image: "destination_2_1.webp", listings: 28 },
        { name: "Buggy 1000cc", image: "destination_2_2.webp", listings: 15 },
        { name: "CAN AM", image: "destination_2_3.webp", listings: 22 },
        { name: "Quad Bikes", image: "destination_2_4.webp", listings: 25 },
    ];

    const [activeIndex, setActiveIndex] = useState(3); // Default active index (Maldives)

    return (
        <div
            className="bg-top-center position-relative space"
            id="destination-sec"
            style={{ backgroundImage: "url('/assets/img/bg/line-pattern2.webp')", backgroundRepeat: "no-repeat" }}
        >
            <div className="container shape-mockup-wrap">
                <div className="title-area text-center">
                    <span className="sub-title">Top Rides</span>
                    <h2 className="sec-title">Our Featured Rides</h2>
                </div>
                <div className="row">
                    <div className="destination-list-area">
                        {destinations.map((item, index) => (
                            <div
                                key={index}
                                className={`destination-list-wrap ${index === activeIndex ? "active" : ""}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div
                                    className="destination-list"
                                    style={{ backgroundImage: `url('/assets/img/destination/${item.image}')` }}
                                >
                                    <div className="destination-content">
                                        <h4 className="box-title">
                                            <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+">{item.name}</Link>
                                        </h4>
                                        {/*<span className="destination-subtitle">{item.listings} Listing</span>*/}
                                    </div>
                                    <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+" className="th-btn style2">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="destination-btn text-center mt-60">
                    <Link to="/activities" className="th-btn style3 th-icon">
                        View All
                    </Link>
                </div>
                {/* Shape Mockups with Inline Styles */}
                <div 
                    className="shape-mockup movingX d-none d-xl-block"
                    style={{ top: "8%", left: "-15%" }}
                >
                    <img src="/assets/img/shape/shape_2_1.webp" alt="shape" />
                </div>
                <div 
                    className="shape-mockup jump d-none d-xl-block"
                    style={{ top: "23%", right: "-14%" }}
                >
                    <img src="/assets/img/shape/shape_2_2.webp" alt="shape" />
                </div>
                <div 
                    className="shape-mockup spin d-none d-xl-block"
                    style={{ bottom: "21%", left: "-14%" }}
                >
                    <img src="/assets/img/shape/shape_2_3.webp" alt="shape" />
                </div>
                <div 
                    className="shape-mockup movingX d-none d-xl-block"
                    style={{ bottom: "12%", right: "-14%" }}
                >
                    <img src="/assets/img/shape/shape_2_4.webp" alt="shape" />
                </div>
            </div>
        </div>
    );
}

export default DestinationTwo;
