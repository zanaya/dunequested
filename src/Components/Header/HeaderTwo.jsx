import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import NiceSelect from './NiceSelect';
import MobileMenu from './MobileMenu';
import LoginForm from './LoginForm';

function HeaderTwo() {
    const { t } = useTranslation();
    const languageOptions = [
        { value: "en", label: "Eng" },
        { value: "ar", label: "Arabic" },
        { value: "ru", label: "Russian" },
        { value: "zh", label: "Chinese" },
        { value: "ur", label: "Urdu" },
        { value: "hi", label: "Hindi" },
        { value: "it", label: "Italian" },
        { value: "fr", label: "French" },
    ];
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <header className="th-header header-layout1 header-layout2">
                <div className="header-top">
                    <div className="container th-container">
                        <div className="row justify-content-center justify-content-lg-between align-items-center">
                            <div className="col-auto d-none d-md-block">
                                <div className="header-links">
                                    <ul>
                                        <li className="d-none d-xl-inline-block">
                                            <i className="fa-sharp fa-regular  fa-location-dot" />
                                            <span>Dubai, UAE</span>
                                        </li>
                                        <li className="d-none d-xl-inline-block">
                                            <i className="fa-regular fa-clock" />
                                            <span>24/7</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="header-right">
                                    <div className="currency-menu">
                                        <NiceSelect 
                                            options={languageOptions} 
                                            defaultValue="Eng" 
                                            isLanguageSelect={true}
                                        />
                                    </div>
                                    <div className="header-links">
                                        <ul>
                                            <li className="d-none d-md-inline-block">
                                                <Link to="/faq">FAQ</Link>
                                            </li>
                                            <li className="d-none d-md-inline-block">
                                                <Link to="/contact">Support</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
                    {/* Main Menu Area */}
                    <div className="menu-area" style={{ backgroundImage: "url('')" }}>
                        <div className="container th-container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <Link to="/">
                                            <img src="/assets/img/logo2.png" alt="Dune Quested" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <nav className="main-menu d-none d-xl-inline-block">
                                        <ul>
                                            <li className="mega-menu-wrap">
                                                <Link to="/">
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/about">{t('header.about')}</Link>
                                            </li>
                                            {/** <li className="menu-item-has-children">
                                                <Link to="#">{t('header.destination')}</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/destination">Destination</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/destination/1">Destination Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="#">Service</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/service">Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service/1">Service Details</Link>
                                                    </li>
                                                </ul>
                                            </li>*/}
                                            <li >
                                                <Link to="/activities">Activities</Link>
                                               
                                            </li>
                                            <li>
                                                <Link to="/gallery">Gallery</Link>
                                            </li>
                                            {/* <li className="menu-item-has-children">
                                                <Link to="#">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item-has-children">
                                                        <Link to="#">Shop</Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link to="/shop">Shop</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/shop/1">Shop Details</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/cart">Cart Page</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/checkout">Checkout</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/wishlist">Wishlist</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    
                                                    <li>
                                                        <Link to="/tour">Our Tour</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/tour-details">Tour Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/resort">Resort page</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/resort/1">Resort Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/tour-details">Tour Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/tour-guide">Tour Guider</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/tour-guide/1">Tour Guider Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/faq">Faq Page</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/price">Price Package</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/error">Error Page</Link>
                                                    </li>
                                                </ul>
                                            </li>*/}
                                            <li >
                                                <Link to="/blog">Blog</Link>
                                                
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <button
                                        type="button"
                                        className="th-menu-toggle d-block d-xl-none"
                                        onClick={() => setIsMobileMenuOpen(true)}
                                    >
                                        <i className="far fa-bars" />
                                    </button>
                                </div>
                                <div className="col-auto d-none d-xl-block">
                                    <div className="header-button">
                                        <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+" className="th-btn style3 th-icon">
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            <LoginForm isOpen={isLoginFormOpen} onClose={() => setIsLoginFormOpen(false)} />
        </>
    )
}

export default HeaderTwo
