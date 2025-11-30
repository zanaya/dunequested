import React from 'react'
import { Link } from 'react-router-dom'

function FooterTwo() {
    return (
        <footer className="footer-wrapper bg-title footer-layout2">
            <div className="widget-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo">
                                        <Link to="/">
                                            <img src="/assets/img/logo-white.svg" alt="Dune Quested" />
                                        </Link>
                                    </div>
                                    <p className="about-text">
                                        Your trusted partner for premium desert safaris, adventure rides, and real Arabian experiences.
                                    </p>
                                    <div className="th-social">
                                        <Link to="https://www.facebook.com/dunequested">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to="https://www.tiktok.com/@dunequested">
                                            <i className="fab fa-tiktok" />
                                        </Link>
                                        <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for">
                                            <i className="fab fa-whatsapp" />
                                        </Link>
                                        <Link to="https://instagram.com/dunequested">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Quick Links</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About us</Link>
                                        </li>
                                        <li>
                                            <Link to="/activities">Activities</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Get In Touch</h3>
                                <div className="th-widget-contact">
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/phone.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                <Link to="/tel:+971564569414" className="info-box_link">
                                                    +971 56 456 9414
                                                </Link>
                                            </p>
                                            <p>
                                                <Link to="/tel:+971529960884" className="info-box_link">
                                                    +971 52 996 0884
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/envelope.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                <a href="mailto:info@dunequested.com" className="info-box_link">
                                                    info@dunequested.com
                                                </a>
                                            </p>
                                            <p>
                                                <a href="mailto:booking@dunequested.com" className="info-box_link">
                                                    booking@dunequested.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/location-dot.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>Dubai, United Arab Emirates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Instagram Post</h3>
                                <div className="sidebar-gallery">
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_1.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/dunequested"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_2.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/dunequested"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_3.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/dunequested"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_4.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/dunequested"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_5.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/dunequested"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/widget/gallery_1_6.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/dunequested"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                                <p className="copyright-text">
                                Copyright 2025 <a href="/">DuneQuested</a>. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-end d-none d-md-block">
                            <div className="footer-card">
                                <span className="title">We Accept</span>
                                <img src="/assets/img/shape/cards.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="shape-mockup movingX d-none d-xxl-block"
                style={{
                    top: "24%",
                    left: "5%",
                }}
            >
                <img src="/assets/img/shape/shape_8.webp" alt="shape" />
            </div>
        </footer>

    )
}

export default FooterTwo
