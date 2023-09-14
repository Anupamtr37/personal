import React from "react";
import AVTR1 from "../../assets/assets_avatar1.jpg";
import AVTR2 from "../../assets/assets_avatar2.jpg";

import AVTR3 from "../../assets/assets_avatar3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import AVTR4 from "../../assets/assets_avatar4.jpg";
import "./testimonials.css";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="container testimonials_container"
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="avatar1" />
          </div>
          <h5>John Smith</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quisquam sapiente pariatur illum ducimus error, minus dolore nulla.
            Voluptates error laborum reiciendis dolorem deserunt, magni aperiam
            minima nesciunt cupiditate exercitationem!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR2} alt="avatar1" />
          </div>
          <h5>John Smith</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quisquam sapiente pariatur illum ducimus error, minus dolore nulla.
            Voluptates error laborum reiciendis dolorem deserunt, magni aperiam
            minima nesciunt cupiditate exercitationem!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR3} alt="avatar1" />
          </div>
          <h5>John Smith</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quisquam sapiente pariatur illum ducimus error, minus dolore nulla.
            Voluptates error laborum reiciendis dolorem deserunt, magni aperiam
            minima nesciunt cupiditate exercitationem!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="avatar1" />
          </div>
          <h5>John Smith</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quisquam sapiente pariatur illum ducimus error, minus dolore nulla.
            Voluptates error laborum reiciendis dolorem deserunt, magni aperiam
            minima nesciunt cupiditate exercitationem!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Testimonials;
