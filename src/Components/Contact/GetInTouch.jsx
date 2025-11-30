import React from 'react'

function GetInTouch() {
    return (
        <div className="space">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Get In Touch</span>
                    <h2 className="sec-title">Our Contact Information</h2>
                </div>
                <div className="row gy-4 justify-content-center">
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid style2">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/location-dot2.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Our Address</h6>
                                <p className="about-contact-details-text">
                                    Dubai,
                                </p>
                                <p className="about-contact-details-text">United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/call.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Phone Number</h6>
                                <p className="about-contact-details-text">
                                    <a href="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+">+971 56 459 2414</a>
                                </p>
                                <p className="about-contact-details-text">
                                    <a href="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+">+971 52 996 0884</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/mail.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Email Address</h6>
                                <p className="about-contact-details-text">
                                    <a href="mailto:info@dunequested.com">info@dunequested.com</a>
                                </p>
                                <p className="about-contact-details-text">
                                    <a href="mailto:booking@dunequested.com">booking@dunequested.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GetInTouch
