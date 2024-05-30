import { useRef } from "react";

import Slider from "react-slick";

import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

import { testimonialsData } from "../../data/TestimonialsData";

import "../../styles/Testimonials.css";
const ShowTestimonial = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    margin: 3,
    loop: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  console.log(testimonialsData.length);

  return (
    <>
      {testimonialsData.length > 0 && (
        <div className="testimonials">
          <div className="testimonials--header">
            <h1>Testimonials</h1>
          </div>
          <div className="testimonials--body">
            <FaQuoteLeft className="quote" style={{ color: "white" }} />
            <div className="testimonials--slider">
              <Slider {...settings} ref={sliderRef}>
                {testimonialsData.map((test) => (
                  <div className="single--testimony" key={test.id}>
                    <div className="testimonials--container">
                      <div
                        className="review--img"
                        style={{
                          backgroundColor: "white",
                        }}
                      >
                        <img src={test.image} alt={test.name} />
                      </div>
                      <div
                        className="review--content"
                        style={{
                          backgroundColor: "red",
                          color: "white",
                        }}
                      >
                        <p>{test.text}</p>
                        <h1>{test.name}</h1>
                        <h4>{test.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <button
                className="prevBtn"
                onClick={gotoPrev}
                // style={{ backgroundColor: "red" }}
              >
                <FaArrowLeft
                  // style={{ color: theme.primary }}
                  aria-label="Previous testimonial"
                />
              </button>
              <button
                className="nextBtn"
                onClick={gotoNext}
                // style={{ backgroundColor: theme.secondary }}
              >
                <FaArrowRight
                  // style={{ color: theme.primary }}
                  aria-label="Next testimonial"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowTestimonial;
