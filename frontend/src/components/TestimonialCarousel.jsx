// src/TestimonialCarousel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TestimonialCarousel.css';
import { author_03,author_02,author_01,underline } from "../../public/assets";

import Heading from "./Heading";

const testimonials = [
    {
        name: "Mike Klein",
        title: "Manager at restaurant",
        message: "Donec euismod facilisis placerat. Mauris mi risus, dictum nec ornare vitae, iaculis lacinia augue. Fusce efficitur risus ante, sit amet bibendum.",
        rating: 5,
        img: author_03
    },
    {
        name: "John Duo",
        title: "Manager at restaurant",
        message: "Donec euismod facilisis placerat. Mauris mi risus, dictum nec ornare vitae, iaculis lacinia augue. Fusce efficitur risus ante, sit amet bibendum.",
        rating: 5,
        img: author_02
    },
    {
        name: "Jhon kennedy",
        title: "Manager at restaurant",
        message: "Donec euismod facilisis placerat. Mauris mi risus, dictum nec ornare vitae, iaculis lacinia augue. Fusce efficitur risus ante, sit amet bibendum.",
        rating: 5,
        img: author_01
    },
    {
        name: "Curl Markes",
        title: "Manager at restaurant",
        message: "Donec euismod facilisis placerat. Mauris mi risus, dictum nec ornare vitae, iaculis lacinia augue. Fusce efficitur risus ante, sit amet bibendum.",
        rating: 5,
        img: author_03
    },
    {
        name: "Curl Markes",
        title: "Manager at restaurant",
        message: "Donec euismod facilisis placerat. Mauris mi risus, dictum nec ornare vitae, iaculis lacinia augue. Fusce efficitur risus ante, sit amet bibendum.",
        rating: 5,
        img: author_02
    },
    {
        name: "Adithya Rao",
        title: "Manager at restaurant",
        message: "Donec euismod facilisis placerat. Mauris mi risus, dictum nec ornare vitae, iaculis lacinia augue. Fusce efficitur risus ante, sit amet bibendum.",
        rating: 5,
        img: author_01
    },
    {
        name: "Jhony Ks",
        title: "Manager at restaurant",
        message: "Donec euismod facilisis placerat. Mauris mi risus, dictum nec ornare vitae, iaculis lacinia augue. Fusce efficitur risus ante, sit amet bibendum.",
        rating: 5,
        img: author_02
    }
];

const TestimonialCarousel = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      customPaging: i => (
          <div className="dot" />
      ),
      appendDots: dots => (
          <div>
              <ul className="dots-container"> {dots} </ul>
          </div>
      ),
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 640,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          }
      ]
  };

  return (
    <div className="testimonial-carousel w-full overflow-hidden p-5 mb-7 bgimgg">
       <div className="relative mt-9">
       <Heading title="What Our Clients Are Saying " img={underline} />
       </div>
      <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card-wrapper  text-white px-4">
                  <div className="testimonial-card box-shadoww rounded-[50px]  p-6 text-center  min-h-80">
                    <div className="testimonial-img mx-auto mb-4">
                      <img src={testimonial.img} alt={testimonial.name} className="rounded-full w-20 h-20 object-cover" />
                    </div>
                    <h3 className="mt-4">{testimonial.name}</h3>
                    <h4 className="title text-orange-500 mb-4">{testimonial.title}</h4>
                    <p>{testimonial.message}</p>
                    <div className="rating mt-4">
                          {Array(testimonial.rating).fill().map((_, i) => (
                              <span key={i}>⭐</span>
                          ))}
                    </div>
                  </div>
              </div>
          ))}
      </Slider>
      </div>
  );
};

export default TestimonialCarousel;
