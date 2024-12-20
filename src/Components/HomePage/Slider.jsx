import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example data to be displayed in the slider
const sliderData = [
  {
    id: 1,
    name: "Rahul",
    age: 21,
    weightBefore: "74 Kg",
    weightAfter: "85 Kg",
  },
  { id: 2, name: "John", age: 25, weightBefore: "80 Kg", weightAfter: "70 Kg" },
  {
    id: 3,
    name: "Alice",
    age: 28,
    weightBefore: "68 Kg",
    weightAfter: "60 Kg",
  },
  { id: 4, name: "Bob", age: 22, weightBefore: "90 Kg", weightAfter: "80 Kg" },
];

const Slider1 = () => {
  // Settings for the react-slick carousel
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scroll
    speed: 500, // Slide speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Slide change interval (in milliseconds)
  };

  return (
    <div className="px-20 py-10">
      <h2 className="text-center text-3xl mb-8">Before and After</h2>

      <Slider {...settings}>
        {sliderData.map((item) => (
          <div key={item.id}
            className="relative  px-20 space"
            style={{ fontFamily: "serif" }}
          >
            <div className="grid grid-cols-2" >
            <div
              className="absolute top-0 left-0 right-0 bottom-0  bg-no-repeat scale-150 rotate-12 mt-32 ml-56 opacity-10"
              style={{
                backgroundImage: `url(https://framerusercontent.com/images/zs0FGyKaaDiChLyd7RnEOiW5ZgM.svg)`,
              }}
            ></div>
            <div className="relative z-10 text-white text-3xl">
              <div className="border-l-4 border-red-600 pl-6 my-16">
                <div className="text-[48px]">Name : {item.name}</div>
                <div className="text-[48px] pt-2">Age : {item.age}</div>
              </div>

              <div className="flex space-x-6 py-5 border-b w-[50%]">
                <div className="text-2xl border p-1">24 weeks</div>
                <div className="text-2xl p-2 pl-6">After</div>
                <div className="text-2xl p-2">Before</div>
              </div>
              <div className="flex space-x-6 py-3">
                <div className="text-2xl text-gray-300">Weight</div>
                <div className="pl-11">{item.weightAfter}</div>
                <div className="pl-1">{item.weightBefore}</div>
              </div>
              <div className="flex space-x-6 py-2">
                <div className="text-2xl text-gray-300">Body Fat</div>
                <div className="pl-4">35%</div>
                <div className="pl-6">15%</div>
              </div>
            </div>

            {/* Images */}
            <div className="flex gap-8 pt-8">
              <div>
                <img
                  src="https://framerusercontent.com/images/62A7xQmdViJaqb0zdQf0alCGBgE.png?scale-down-to=1024"
                  alt="fitness"
                  className="w-[20vw] h-[50vh]"
                />
                <div className="text-3xl text-red-600 text-center pt-6">
                  Before
                </div>
              </div>
              <div>
                <img
                  src="https://framerusercontent.com/images/DfZVAWUharKP1TLVdrdGLWV1Y.png?scale-down-to=512"
                  alt="fitness"
                  className="w-[20vw] h-[50vh]"
                />
                <div className="text-3xl text-red-600 text-center pt-6">
                  After
                </div>
              </div>
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider1;
