import React from 'react'
import { Link } from 'react-router-dom';

function ActivitiesCard(props) {
    const {
        activitiesImage,
        activitiesTitle,
        activitiesPrice,
        activitiesDuration,
        activitiesRating,
        activitiesSeating,
        activitiesType,
        activitiesLinks  // Add this prop
    } = props;

    return (
        <>
            <div className="tour-box th-ani">
                <div className="tour-box_img global-img">
                    <img src={`/assets/img/tour/${activitiesImage}`} alt="" />
                </div>
                <div className="tour-content">
                    <h3 className="box-title">
                        <Link to={activitiesLinks || "/buggy-1000cc"}>
                            {activitiesTitle || 'Buggy 1000 cc'}
                        </Link>
                    </h3>
                    <div className="tour-rating">
                        <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                        >
                            <span style={{ width: "100%" }}>
                                Rated
                                <strong className="rating">5.00</strong> out of 5 based on{" "}
                                <span className="rating">4.8 </span>(4.8 Rating)
                            </span>
                        </div>
                        <Link
                            to={activitiesLinks || "/buggy-1000cc"}
                            className="woocommerce-review-link"
                        >
                            <span className="count">{activitiesRating} </span>
                            Rating
                        </Link>
                    </div>
                    <h4 className="tour-box_price">
                        <span className="currency">{activitiesPrice || 'AED350.00'} </span>
                        <i className="fa-light fa-person-seat" />
                        {activitiesSeating || 'Single Seater'}
                    </h4>
                    <div className="tour-action">
                        <span>
                            <i className="fa-light fa-cactus" />
                            {activitiesType || 'Standard Safari'}
                        </span>
                        <span>
                            <i className="fa-light fa-clock" />
                            {activitiesDuration || '30 Minutes'}
                        </span>
                        <Link
                            to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+"
                            className="th-btn style3"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivitiesCard