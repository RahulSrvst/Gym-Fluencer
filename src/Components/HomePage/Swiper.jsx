import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Michael Field",
    role: "Software Engineer",
    feedback: "I love how user-friendly the app is. Logging workouts has never been easier!",
    image: "https://framerusercontent.com/images/3j6CVVIKDTJFl9GkL39qFFZhBVY.jpg?scale-down-to=1024",
  },
  {
    id: 2,
    name: "David Leo",
    role: "Designer",
    feedback: "I’ve seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!",
    image: "https://framerusercontent.com/images/AUrZKb58SZtY1pfePnYIGJ3feyQ.jpg?scale-down-to=1024",
  },
  {
    id: 3,
    name: "Michael Field",
    role: "Software Engineer",
    feedback: "I love how user-friendly the app is. Logging workouts has never been easier!",
    image: "https://framerusercontent.com/images/3j6CVVIKDTJFl9GkL39qFFZhBVY.jpg?scale-down-to=1024",
  },
  {
    id: 4,
    name: "David Leo",
    role: "Designer",
    feedback: "I’ve seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!",
    image: "https://framerusercontent.com/images/AUrZKb58SZtY1pfePnYIGJ3feyQ.jpg?scale-down-to=1024",
  },
];

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000, // Slow transition speed (5 seconds)
        autoplay: true,
        autoplaySpeed: 0, // Set to 0 for seamless sliding
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear", // Ensures a smooth linear animation
        arrows: false, // Disable arrows for a cleaner look
      };
      

  return (
    <section id="benefits" className="py-10 bg-black">
      <h2 className="text-center text-3xl font-bold text-white mb-10">WHAT PEOPLE SAY</h2>
      <div className=" px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <div
                className="flex flex-col md:flex-row h-80    items-center bg-gray-800 text-white  rounded-lg shadow-lg"
                style={{ fontFamily: "Sans-serif" }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-60 h-80 object-cover rounded-md md:mr-5 mb-4 md:mb-0"
                />
                <div className="" >
                  <p className="text-red-600 text-4xl mb-3">★★★★★</p>
                  <p className="mb-4 text-lg">{testimonial.feedback}</p>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
