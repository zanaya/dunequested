import { Link } from 'react-router-dom'

function AboutFour() {
   return (
      <div className="about-area position-relative overflow-hidden overflow-hidden space" id="about-sec">
         <div className="container shape-mockup-wrap">
            <div className="row">
               <div className="col-xl-7">
                  <div className="img-box3">
                     <div className="img1">
                        <img src="/assets/img/normal/about_8_1.webp" alt="About" />
                     </div>
                     <div className="img2">
                        <img src="/assets/img/normal/about_8_2.webp" alt="About" />
                     </div>
                     <div className="img3 movingX">
                        <img src="/assets/img/normal/about_8_3.webp" alt="About" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="ps-xl-4">
                     <div className="title-area mb-20">
                        <span className="sub-title style1 ">Welcome To DuneQuested</span>
                        <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                                   We are the best adventure safari agency in Dubai
                        </h2>
                     </div>
                     <p className="pe-xl-5">
                               At DuneQuested, we focus on delivering authentic and unforgettable desert adventures. Every ride, every journey, and every moment is crafted with care, ensuring our guests enjoy a safe, comfortable, and thrilling experience in the heart of the Arabian desert.
                     </p>
                     <p className="mb-30 pe-xl-5">
                        {" "}
                               From dune bashing and quad biking to sunset views and cultural highlights, we strive to create memories that last a lifetime. Our team follows the highest standards of service and safety, ensuring each guest enjoys a smooth and enjoyable adventure.
                           </p>
                           <p className="mb-30 pe-xl-5">
                               {" "}
Choose DuneQuested for trusted, premium, and truly remarkable desert experiences, where every trip is designed with passion and excellence.                           </p>
                     <div className="about-item-wrap">
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_1.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Exclusive Rides</h5>
                              <p className="about-item_text">
                                 There are many variations of passages of available but the
                                 majority.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_2.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Safety First Always</h5>
                              <p className="about-item_text">
                                 There are many variations of passages of available but the
                                 majority.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_3.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Professional Guide</h5>
                              <p className="about-item_text">
                                 There are many variations of passages of available but the
                                 majority.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="mt-35">
                               <Link to="https://api.whatsapp.com/send?phone=971564592414&text=Hi+DuneQuested%2C%0AI+want+to+make+booking+for+" className="th-btn style3 th-icon">
                           Contact With Us
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div
               className="shape-mockup movingX d-none d-xxl-block"
               style={{ top: '0%', left: '-18%' }}
            >
               <img src="/assets/img/shape/shape_2_1.webp" alt="shape" />
            </div>
            <div
               className="shape-mockup jump d-none d-xxl-block"
               style={{ top: '28%', right: '-15%' }}
            >
               <img src="/assets/img/shape/shape_2_2.webp" alt="shape" />
            </div>
            <div
               className="shape-mockup spin d-none d-xxl-block"
               style={{ top: '18%', left: '-112%' }}
            >
               <img src="/assets/img/shape/shape_2_3.webp" alt="shape" />
            </div>
            <div
               className="shape-mockup movixgX d-none d-xxl-block"
               style={{ bottom: '18%', right: '-12%' }}
            >
               <img src="/assets/img/shape/shape_2_4.webp" alt="shape" />
            </div>
         </div>
      </div>
   )
}

export default AboutFour
