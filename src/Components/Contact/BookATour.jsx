import React, { useState } from 'react';
import NiceSelect from '../Header/NiceSelect';
import Modal from 'react-modal';
import TikTokVideo from './TikTokVideo';
Modal.setAppElement('#root');

function BookATour() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rideType, setRideType] = useState('');
    const [message, setMessage] = useState('');

    // Replace with your WhatsApp number in international format without "+" or leading zeros.
    // Example for UAE: '971501234567'
    const WHATSAPP_NUMBER = '971564592414';

    const countryOptions = [
        { value: "", label: "Select Ride Type" },
        { value: "Quad Bike", label: "Quad Bike" },
        { value: "CAN-AM", label: "CAN-AM" },
        { value: "Buggy", label: "Buggy" },
        { value: "KTM Bike", label: "KTM Bike" },
        { value: "Raptor", label: "Raptor" },
        { value: "Desert Safari", label: "Desert Safari" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        // minimal validation
        if (!name.trim() || !email.trim() || !rideType.trim() || !message.trim()) {
            window.alert('Please fill in name, email, ride type and message.');
            return;
        }

        // build message
        const text =
            `New booking request:%0A` +
            `Name: ${name}%0A` +
            `Email: ${email}%0A` +
            `Ride: ${rideType}%0A` +
            `Message: ${message}`;

        // prefer wa.me (opens WhatsApp or web.whatsapp)
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(decodeURIComponent(text))}`;

        // open in new tab/window
        window.open(url, '_blank');

        // optional: clear form
        setName('');
        setEmail('');
        setRideType('');
        setMessage('');
    };

    return (
        <div
            className="space-extra2-top space-extra2-bottom"
            style={{ background: "url(/assets/img/bg/video_bg_1.webp)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        >
            <div className="container">
                <div className="row flex-row-reverse justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="video-box1">
                            <button className="play-btn style2 popup-video" onClick={() => setModalIsOpen(true)}>
                                <i className="fa-sharp fa-solid fa-play" />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <form
                                className="contact-form style2 ajax-contact"
                                onSubmit={handleSubmit}
                            >
                                <h3 className="sec-title mb-30 text-capitalize">Book a tour</h3>

                                <div className="row">
                                    <div className="col-12 form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name3"
                                            placeholder="First Name"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <img src="assets/img/icon/user.svg" alt="" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email3"
                                            id="email3"
                                            placeholder="Your Mail"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <img src="assets/img/icon/mail.svg" alt="" />
                                    </div>
                                    <div className="form-group col-12">
                                        <NiceSelect
                                            options={countryOptions}
                                            defaultValue="Select Ride Type"
                                            onChange={(val) => setRideType(val)}
                                        />
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols={30}
                                            rows={3}
                                            className="form-control"
                                            placeholder="Your Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                        <img src="assets/img/icon/chat.svg" alt="" />
                                    </div>
                                    <div className="form-btn col-12 mt-24">
                                        <button type="submit" className="th-btn style3">
                                            Send message
                                            <img src="assets/img/icon/plane.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                                <p className="form-messages mb-0 mt-3" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Video Popup"
                className="video-modal"
                overlayClassName="video-modal-overlay"
            >
                <button className="close-btn" onClick={() => setModalIsOpen(false)}>&times;</button>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <TikTokVideo />
                </div>
            </Modal>
        </div>
    )
}

export default BookATour