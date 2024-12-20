import React from "react";

const fitnessCenters = [
  {
    name: "Iron Fitness",
    phone: "+91 1234567890",
    location: "Nerul, Navi Mumbai",
    image:
      "https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg?scale-down-to=512",
  },
  {
    name: "Hydropower Fitness & Gym",
    phone: "+91-22-0001-0211",
    location: "Nerul, Navi Mumbai",
    image:
      "https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg?scale-down-to=512",
  },
  {
    name: "Yuva Fitness",
    phone: "+91 1234567890",
    location: "Nerul, Navi Mumbai",
    image:
      "https://framerusercontent.com/images/LMf0H8b1MNKO0RwpkoYqfCtUaOg.jpeg?scale-down-to=512",
  },
];

const Map = () => {
  return (
    <div className="bg-black" >
      <h1 className="text-2xl text-red-600 text-center font-bold mb-4 uppercase">
        Find Your Nearest Gym
      </h1>
      <h1 className="text-xl font-bold  text-center text-white">
        Easily discover gyms near your location to kickstart{" "}
      </h1>
      <h1 className="text-xl font-bold mb-8 text-center text-white">
        your fitness journey today!
      </h1>


      <div className="flex min-h-screen pl-48 bg-black text-white">
        {/* Left Section: Fitness Centers */}
        <div className="w-full md:w-1/2 h-full lg:w-2/5 bg-gray-800 p-6 overflow-y-auto rounded-l-3xl  ">
          {fitnessCenters.map((center, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-900 rounded-lg my-4 overflow-hidden"
            >
              {/* Image */}
              <img
                src={center.image}
                alt={center.name}
                className="w-32 h-32 object-cover"
              />

              {/* Details */}
              <div className="p-4 flex-1">
                <h2 className="text-lg font-bold">{center.name}</h2>
                <p className="text-sm mt-1">
                  📞 {center.phone} <br /> 📍 {center.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Google Map */}
        <div className="w-full md:w-1/2 lg:w-3/5 h-screen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1885.8133305108383!2d73.01796!3d19.036166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c354f67d1355%3A0xfa47dd182e4524b7!2sCakepoint%20-%20The%20Baker&#39;s%20Hub!5e0!3m2!1sen!2sus!4v1734530701533!5m2!1sen!2sus"
            width="600"
            height="495"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className=" rounded-r-3xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
