import React from 'react'

function ContactMap() {
    return (
        <div className="">
            <div className="container-fluid">
                <div className="contact-map style2">
                    <iframe
                        title="Contact location map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222828.04233622208!2d55.64341370603819!3d24.921257355607196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef57409a82d01d7%3A0xc58bde21dac220a3!2sAl%20Madam%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sbd!4v1763736535211!5m2!1sen!2sbd%22"
                        allowFullScreen=""
                        loading="lazy"
                    />
                    <div className="contact-icon">
                        <img src="assets/img/icon/location-dot3.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMap
