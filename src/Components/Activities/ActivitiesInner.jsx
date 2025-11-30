import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import posts from '../data/data-activities.json';
import ActivitiesCard from './ActivitiesCard';

function ActivitiesInner() {
    const [value, setValue] = useState(30);
    const handleSliderChange = (e) => {
        setValue(e.target.value);
    };
    const priceFrom = ((value / 100) * 1000).toFixed(2);
    const priceTo = 1000;

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;

    // search state
    const [searchTerm, setSearchTerm] = useState('');

    // Keep currentPage reset when searchTerm changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    // filter posts by search term (title, type, seating — adjust as needed)
    const filteredPosts = posts.filter((p) => {
        if (!searchTerm.trim()) return true;
        const q = searchTerm.trim().toLowerCase();
        const title = (p.title || '').toString().toLowerCase();
        const type = (p.type || '').toString().toLowerCase();
        const seating = (p.seating || '').toString().toLowerCase();
        return title.includes(q) || type.includes(q) || seating.includes(q);
    });

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // scroll to top of list for better UX
        window.scrollTo({ top: 200, behavior: 'smooth' });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        // search is already applied on change — keep this to avoid reload on submit
    };

    return (
        <section className="space">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="row gy-24 gx-24">
                            {currentPosts.length > 0 ? (
                                currentPosts.map((data) => (
                                    <div key={data.id} className="col-md-6">
                                        <ActivitiesCard
                                            activitiesImage={data.image}
                                            activitiesTitle={data.title}
                                            activitiesPrice={data.price}
                                            activitiesDuration={data.duration}
                                            activitiesRating={data.rating}
                                            activitiesSeating={data.seating}
                                            activitiesType={data.type}
                                            activitiesLinks={data.activitiesLinks}  // Don't forget this!
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="col-12">
                                    <p>No activities found for "{searchTerm}".</p>
                                </div>
                            )}

                            <div className="th-pagination text-center mt-60 mb-0">
                                <ul>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li key={i}>
                                            <Link
                                                className={currentPage === i + 1 ? 'active' : ''}
                                                to="#"
                                                onClick={() => handlePageChange(i + 1)}
                                            >
                                                {i + 1}
                                            </Link>
                                        </li>
                                    ))}
                                    {currentPage < totalPages && (
                                        <li>
                                            <Link className="next-page" to="#" onClick={() => handlePageChange(currentPage + 1)}>
                                                Next <img src="/assets/img/icon/arrow-right4.svg" alt="" />
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            <div className="widget widget_search  ">
                                <form className="search-form" onSubmit={handleSearchSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    <button type="submit">
                                        <i className="far fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Activity Type</h3>
                                <ul>
                                    <li>
                                        <Link to="/buggy-1000cc">
                                            <i className="fa-light fa-square-check" />
                                            Buggy 1000cc
                                        </Link>

                                    </li>
                                    <li>
                                        <Link to="/quad-bike-450cc">
                                            <i className="fa-light fa-square-check" />
                                            Quad Bike
                                        </Link>

                                    </li>
                                    <li>
                                        <Link to="/can-am-1500cc">
                                            <i className="fa-light fa-square-check" />
                                            CAN AM 1500cc
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/raptor-750cc">
                                            <i className="fa-light fa-square-check" />
                                            Raptor 750cc
                                        </Link>

                                    </li>
                                    <li>
                                        <Link to="/ktm-bike">
                                            <i className="fa-light fa-square-check" />
                                            KTM Bike
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/vip-desert-safari">
                                            <i className="fa-light fa-square-check" />
                                            Safari Night
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget_price_filter  ">
                                <h4 className="widget_title">Filter By Price</h4>
                                <div className="price_slider_wrapper">
                                    <div className="price_label">
                                        Price: <span className="from">AED{priceFrom} </span> — <span className="to">AED{priceTo}</span>
                                    </div>
                                    <div className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                        {/* Slider Range */}
                                        <div
                                            className="ui-slider-range ui-corner-all ui-widget-header"
                                            style={{ left: '0%', width: `${value}%` }}
                                        ></div>

                                        {/* First Handle */}
                                        <span
                                            tabIndex="0"
                                            className="ui-slider-handle ui-corner-all ui-state-default"
                                            style={{ left: '0%' }}
                                        ></span>

                                        {/* Second Handle */}
                                        <span
                                            tabIndex="0"
                                            className="ui-slider-handle ui-corner-all ui-state-default"
                                            style={{ left: `${value}%` }}
                                        ></span>

                                        {/* Hidden Input range to control the slider */}
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={value}
                                            onChange={handleSliderChange}
                                            className="slider-input"
                                            style={{ opacity: 0, position: 'absolute', zIndex: '1', top: '-22px', padding: '0', cursor: 'pointer' }}  // Hides the input
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Duration</h3>
                                <ul>
                                    <li>
                                        <Link to="#">
                                            <i className="fa-light fa-square-check" />
                                            30 minutes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa-light fa-square-check" />1 hour
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa-light fa-square-check" />2 hours
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ActivitiesInner