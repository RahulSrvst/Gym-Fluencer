import React from "react";

const WorkOutPlan = () => {
  return (
    <div>
      <div className="bg-black text-white pt-48 py-20 ">
        {/* Section 1: WHAT IS THE DIET PLAN? */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-4 uppercase">
            what is the Workout Plan
          </h2>
          <p
            className="text-gray-300 max-w-2xl text-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            A workout plan is a structured schedule of exercises designed to
            help you reach your fitness goals, stay active, and improve your
            health.
          </p>
        </div>

        {/* Section 2: WHAT WE OFFER */}
        <div className="text-center mb-16 px-6">
          <h3 className="text-red-600 text-2xl md:text-3xl font-bold mb-8 uppercase">
            What We Offer:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Customized Meal Plans */}
            <div className="flex flex-col items-center">
              <div className="bg-red-600 p-4 rounded-full mb-4">
                <span className="text-3xl">🍽️</span>
              </div>
              <p
                className="text-gray-300 text-lg"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                Customized Workout Plans
              </p>
            </div>

            {/* Professional Guidance */}
            <div className="flex flex-col items-center">
              <div className="bg-red-600 p-4 rounded-full mb-4">
                <span className="text-3xl">🧑‍⚕️</span>
              </div>
              <p
                className="text-gray-300 text-lg"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                Professional Guidance
              </p>
            </div>

            {/* Holistic Approach */}
            <div className="flex flex-col items-center">
              <div className="bg-red-600 p-4 rounded-full mb-4">
                <span className="text-3xl">🧘‍♂️</span>
              </div>
              <p
                className="text-gray-300 text-lg"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                Holistic Approach
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: WHY CHOOSE OUR DIET PLAN? */}
        <div className="text-center pt-8 px-6">
          <h3 className="text-red-600 text-2xl md:text-4xl font-bold mb-4 uppercase">
          Select Your Workout Plan
          </h3>
          <p
            className="text-gray-300 max-w-md text-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
           Choose a workout plan that fits your goals, whether it’s building strength, losing weight, or staying active. Find the perfect plan for you!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 bg-black bg-b gap-x-8 px-10">
        <div>
          <img
            src="https://framerusercontent.com/images/A7pdLQOKkfozfphlzB5zvvzUSbg.jpg?scale-down-to=2048"
            alt="Error"
            className="h-[90vh]"
          />
          <h1 className="text-3xl py-3 text-red-600 font-medium uppercase">
            beginner
          </h1>
          <p
            className="text-lg text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            Start your fitness journey with simple and effective exercises.
          </p>
        </div>
        <div>
          <img
            src="https://framerusercontent.com/images/KdiY7dNkalDnlUrQOJuxJen0fq4.jpg?scale-down-to=1024"
            alt="Error"
            className="h-[90vh] mt-28 "
          />
          <h1 className="text-3xl py-3 text-red-600 font-medium uppercase">
            Intermediate
          </h1>
          <p
            className="text-lg text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            Start your fitness journey with simple and effective exercises.
          </p>
        </div>
        <div>
          <img
            src="https://framerusercontent.com/images/KdiY7dNkalDnlUrQOJuxJen0fq4.jpg?scale-down-to=1024"
            alt="Error"
            className="h-[90vh]"
          />
          <h1 className="text-3xl py-3 text-red-600 font-medium uppercase">
            Advanced
          </h1>
          <p
            className="text-lg text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            Start your fitness journey with simple and effective exercises.
          </p>
        </div>
        <div>
          <img
            src="https://framerusercontent.com/images/TGaCkXYXttk4cqQM2LYZqA4ZL3o.jpg?scale-down-to=1024"
            alt="Error"
            className="h-[90vh] mt-28"
          />
          <h1 className="text-3xl py-3 text-red-600 font-medium uppercase">
            Personalized Workout Plan
          </h1>
          <p
            className="text-lg text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            Start your fitness journey with simple and effective exercises.
          </p>
        </div>
      </div>

      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/TzaHy2QyUCj51w6LYUB7jevHCA.jpg?scale-down-to=2048')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 bg-black bg-opacity-75 h-[70vh] text-white rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row gap-x-32">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold uppercase text-red-600 mb-6">
              Kickstart Your Fitness Journey <br /> With <br />
              GymFluencer
            </h1>
            <p
              className="text-gray-300 mb-8 leading-relaxed"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              Experience all that GymFluencer has to offer with a free trial.
              Explore our world-class amenities, personalized diet plans, and
              professional training programs—absolutely free.
            </p>
            <div className="flex items-center gap-2 border-t border-gray-300 pt-4">
              <img
                src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg?scale-down-to=512"
                alt="GymFluencer Logo"
                className="h-14 w-40"
              />
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="flex-1">
            <form
              className="space-y-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              <div className="flex gap-4">
                {/* Name */}
                <div className="flex-1">
                  <label className="block text-white mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Kamal Raj"
                    className="w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                {/* Phone Number */}
                <div className="flex-1">
                  <label className="block text-white mb-1">Phone Number</label>
                  <input
                    type="text"
                    placeholder="12024561414"
                    className="w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white mb-1">Email</label>
                <input
                  type="email"
                  placeholder="iam.kamalrajp@gmail.com"
                  className="w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Services */}
              <div>
                <label className="block text-white mb-1">Services</label>
                <select className="w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600">
                  <option> Personalized Diet Plans</option>
                  <option>Personal Training</option>
                  <option>Workout Programs</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-1">Branch</label>
                <select className="w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600">
                  <option> Mumbai</option>
                  <option>Lucknow</option>
                  <option>Sitapur</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOutPlan;
