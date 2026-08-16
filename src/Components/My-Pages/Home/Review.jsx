import React from "react";
import { Link } from "react-router-dom";

// Necessary Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Necessary Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/swiper-bundle.css";

// The swiper.js required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Review() {
  return (
    <section>
      <section className="review">
        <div className="review-container">
          <h1>What Our Clients Say</h1>
          <div className="review-split">
            <div className="split1">
              <img
                src={"/Project Image/Home Images/Klaviyo lg.png"}
                alt=""
                width="100%"
              />
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <div className="hor">
                <hr />
                <hr />
              </div>
              <p>Our Customer Ratings and Reviews Say It All</p>
              <Link to="/contact">Contact Us</Link>
            </div>

            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={50}
                  centeredSlides={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  style={{
                    "--swiper-pagination-color": "#110614",
                    "--swiper-pagination-bullet-inactive-color": "#f5f5f5",
                    "--swiper-pagination-bullet-inactive-opacity": "0.7",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="split2">
                        <div className="review-content">
                          <div className="review-img">
                            <img
                              src={"/Project Image/Home Images/Girl review.png"}
                              alt=""
                            />
                          </div>
                          <div className="review-txt">
                            <h3>First Name, Last</h3>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <hr />
                            <h2>Very specialized assistance</h2>
                            <p>
                              We recently worked with this team for an AMPscript
                              email project and they did a fantastic job. This
                              wasn't my area of expertise and the team was still
                              able to do great work with limited information.
                              They were responsive and helpful and finished the
                              project in short order. Thanks!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="split2">
                        <div className="review-content">
                          <div className="review-img">
                            <img
                              src={"/Project Image/Home Images/Girl review.png"}
                              alt=""
                            />
                          </div>
                          <div className="review-txt">
                            <h3>First Name, Last</h3>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <hr />
                            <h2>Very specialized assistance</h2>
                            <p>
                              We recently worked with this team for an AMPscript
                              email project and they did a fantastic job. This
                              wasn't my area of expertise and the team was still
                              able to do great work with limited information.
                              They were responsive and helpful and finished the
                              project in short order. Thanks!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="split2">
                        <div className="review-content">
                          <div className="review-img">
                            <img
                              src={"/Project Image/Home Images/Girl review.png"}
                              alt=""
                            />
                          </div>
                          <div className="review-txt">
                            <h3>First Name, Last</h3>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <hr />
                            <h2>Very specialized assistance</h2>
                            <p>
                              We recently worked with this team for an AMPscript
                              email project and they did a fantastic job. This
                              wasn't my area of expertise and the team was still
                              able to do great work with limited information.
                              They were responsive and helpful and finished the
                              project in short order. Thanks!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Review;
