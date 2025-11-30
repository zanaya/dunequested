import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu({ isOpen, onClose }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const menuRefs = useRef({});

    // Toggle dropdown menu
    const toggleMenu = (index) => {
        if (index !== 6) {
            setActiveMenu(activeMenu === index ? null : index);
        }
    };

    // Handle Shop menu separately
    // Shop submenu handled via state; no separate toggle function needed here

    // Apply height animation when activeMenu changes
    useEffect(() => {
        Object.keys(menuRefs.current).forEach((key) => {
            const submenu = menuRefs.current[key];
            if (submenu) {
                submenu.style.height = activeMenu === Number(key) ? `${submenu.scrollHeight}px` : "0px";
            }
        });
    }, [activeMenu]);

    return (
        <div className={`th-menu-wrapper onepage-nav ${isOpen ? "th-body-visible" : ""}`}
            style={{ visibility: isOpen ? "visible" : "hidden" }}>

            <div className="th-menu-area text-center">
                <button className="th-menu-toggle" onClick={onClose} aria-label="Close">
                    <i className="fal fa-times" />
                </button>

                <div className="mobile-logo">
                    <Link to="/">
                        <img src="/assets/img/logo2.svg" alt="DuneQuested" />
                    </Link>
                </div>

                <div className="th-mobile-menu">
                    <ul>
                        {/* Home */}
                        <li className={` mega-menu-wrap th-item-has-children ${activeMenu === 1 ? "th-active" : ""}`}>
                            <Link to="/" onClick={() => toggleMenu(1)}>Home
                            </Link>
       
                        </li>

                        {/* About Us */}
                        <li><Link to="/about">About Us</Link></li>
                        {/* Activities */}
                        <li className={`th-item-has-children ${activeMenu === 4 ? "th-active" : ""}`}>
                            <Link to="/activities" onClick={() => toggleMenu(4)}>Activities</Link>
                        </li>

                        {/* Pages */}

                        <li className={` th-item-has-children ${activeMenu === 5 ? "th-active" : ""}`}>
                            <Link to="gallery" onClick={() => toggleMenu(5)}>Gallery</Link>
                        </li>


                        {/* Blog */}
                        <li className={` th-item-has-children ${activeMenu === 7 ? "th-active" : ""}`}>
                            <Link to="/blog" onClick={() => toggleMenu(7)}>Blog</Link>
                            <ul
                                ref={(el) => (menuRefs.current[7] = el)}
                                className="th-submenu"
                                style={{ height: "0px", overflow: "hidden", transition: "height 0.3s ease-in-out" }}
                            >
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </li>

                        {/* Contact */}
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
