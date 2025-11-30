import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom'

function GalleryInner() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    // list of gallery files (provided)
    const images = [
        "gallery_3_4.webp",
        "gallery_15_2.webp",
        "gallery_1_4.webp",
        "gallery_1_5.webp",
        "gallery_2_5.webp",
        "gallery_14_2.webp",
        "gallery_14_3.webp",
        "gallery_14_4.webp",
        "gallery_14_5.webp",
        "gallery_15_1.webp",
        "gallery_15_3.webp",
        "gallery_15_4.webp",
        "gallery_15_5.webp",
        "gallery_15_5.webp",
        "gallery_15_6.webp",
        "gallery_0_1.webp",
        "gallery_1_1.webp",
        "gallery_1_2.webp",
        "gallery_1_3.webp",
        "gallery_1_6.webp",
        "gallery_1_7.webp",
        "gallery_2_1.webp",
        "gallery_2_2.webp",
        "gallery_2_3.webp",
        "gallery_2_4.webp",
        "gallery_2_6.webp",
        "gallery_3_1.webp",
        "gallery_3_2.webp",
        "gallery_3_3.webp",
        "gallery_3_5.webp",
        "gallery_3_6.webp",
        "gallery_4_1.webp",
        "gallery_4_2.webp",
        "gallery_4_3.webp",
        "gallery_4_4.webp",
        "gallery_4_5.webp",
        "gallery_5_1.webp",
        "gallery_5_2.webp",
        "gallery_5_3.webp",
        "gallery_5_4.webp",
        "gallery_5_5.webp",
        "gallery_6_1.webp",
        "gallery_6_2.webp",
        "gallery_6_3.webp",
        "gallery_6_4.webp",
        "gallery_7_1.webp",
        "gallery_7_2.webp",
        "gallery_7_3.webp",
        "gallery_7_4.webp",
        "gallery_7_5.webp",
        "gallery_7_6.webp",
        "gallery_7_7.webp",
        "gallery_7_8.webp",
        "gallery_7_9.webp",
        "gallery_8_1.webp",
        "gallery_8_2.webp",
        "gallery_8_3.webp",
        "gallery_8_4.webp",
        "gallery_8_5.webp",
        "gallery_8_6.webp",
        "gallery_8_7.webp",
        "gallery_8_8.webp",
        "gallery_9_1.webp",
        "gallery_9_2.webp",
        "gallery_9_3.webp",
        "gallery_9_4.webp",
        "gallery_9_5.webp",
        "gallery_9_6.webp",
        "gallery_10_1.webp",
        "gallery_10_2.webp",
        "gallery_10_3.webp",
        "gallery_10_4.webp",
        "gallery_10_5.webp",
        "gallery_10_6.webp",
        "gallery_11_1.webp",
        "gallery_11_2.webp",
        "gallery_11_3.webp",
        "gallery_11_4.webp",
        "gallery_12_1.webp",
        "gallery_12_2.webp",
        "gallery_12_3.webp",
        "gallery_12_4.webp",
        "gallery_12_5.webp",
        "gallery_12_6.webp",
        "gallery_13_1.webp",
        "gallery_13_2.webp",
        "gallery_13_3.webp",
        "gallery_13_4.webp",
        "gallery_13_5.webp",
        "gallery_13_6.webp",
        "gallery_14_1.webp"
    ];

    // Function to open the modal with the selected image
    const openModal = (imageSrc, event) => {
        event.preventDefault(); // Prevent default link behavior
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="overflow-hidden space" id="gallery-sec">
            <div className="container-fuild">
                <div className="title-area mb-30 text-center">
                    <span className="sub-title">Explore Us</span>
                    <h2 className="sec-title">A truly exceptional experience</h2>
                </div>

                <div className="row gy-4 gallery-row4">
                    {images.map((file, idx) => {
                        const src = `/assets/img/gallery/${file}`;
                        return (
                            <div key={idx} className="col-auto">
                                <div className="gallery-box style5">
                                    <div className="gallery-img global-img">
                                        <img src={src} alt={`gallery ${idx + 1}`} />
                                        <Link
                                            to={src}
                                            className="icon-btn popup-image"
                                            onClick={(e) => openModal(src, e)}
                                        >
                                            <i className="fal fa-magnifying-glass-plus" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>
    )
}

export default GalleryInner