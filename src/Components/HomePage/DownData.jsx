import React from "react";
import ReactPlayer from "react-player";
import Slider1 from "./Slider";
import Testimonials from "./Swiper";
import Map from "./Map";
import Faq from "./Faq";
import "./style.css";
import Blog from "./Blog";

const DownData = () => {
  const data = [
    {
      time: "463k+",
      text: "Workouts logged and progress tracked every month",
    },
    {
      time: "163k+",
      text: "Workouts logged and progress tracked every month",
    },
    {
      time: "13+",
      text: "Countries where GymFluencer is making an impact",
    },
  ];

  const benefit = [
    {
      logo: "https://framerusercontent.com/images/AjjAxBc5v6SZHOkJzG2bwrSMk.svg",
      title: "Effortless Workout Logging",
      text: "Easily log your workouts and monitor your progress over time with our intuitive logging feature.",
    },
    {
      logo: "https://framerusercontent.com/images/pvxqwt0ZG86WIRPPnHxDCgV7rkQ.svg",
      title: "Personalized Workout Plans",
      text: "AI-powered workout plans tailored to your fitness level, goals, and progress.",
    },
    {
      logo: "https://framerusercontent.com/images/rxSlFR0RyaC3WCayigHX4RPQZs.svg",
      title: "Accurate Rep Counting",
      text: "Count your reps accurately with our app, ensuring consistency and improved performance.",
    },
    {
      logo: "https://framerusercontent.com/images/u8fjSIAgWQzhagulXkIoN7PzI.svg",
      title: "Calorie Calculation & Personalized Diet Plans",
      text: "Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness ",
    },
  ];

  return (
    <div className="flex flex-col space-y-4  ">
     <div
  style={{
    backgroundImage: `url('https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg?scale-down-to=2048')`,
  }}
  className="relative bg-center bg-cover"
  id="home"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center items-center h-screen text-center">
    {/* Trusted Badge */}
    <div className="flex items-center h-14 bg-gray-800 px-4 rounded-full border border-gray-500 mb-8">
      {/* Avatars */}
      <div className="flex mr-4 space-x-2">
        {[
          "https://framerusercontent.com/images/zA7hg7OUnSahgBJcsn7HpCAtY.png",
          "https://framerusercontent.com/images/FW7gdHyIJZUqRX0WLmQwCo53YI4.png",
          "https://framerusercontent.com/images/Bwgwwe4qJCF29kCrDg7c4NMzek.png",
        ].map((item, index) => (
          <img
            key={index}
            src={item}
            alt="avatar"
            className="h-7 w-7 rounded-full"
          />
        ))}
      </div>
      {/* Text */}
      <div className="text-base text-white font-medium">
        Trusted by 3+ million users
      </div>
    </div>

    {/* Main Heading */}
    <h1 className="text-5xl md:text-7xl lg:text-8xl text-[rgb(204,0,0)] font-bold mx-4">
      Track Your Fitness Journey
    </h1>

    {/* Subheading */}
    <p className="text-lg mt-4 text-gray-200 font-semibold max-w-4xl px-4">
      Discover the ultimate fitness companion with GymFluencer. Effortlessly
      log your workouts, count reps, and track calories burned. Stay motivated
      and achieve your goals with ease.
    </p>
  </div>
</div>

      <div className=" py-10">
        {/* Right to Left */}
        <div className="overflow-hidden relative">
          <div className="text-7xl text-white scroll-left">
            Motivation / Fitness / Progress / Transformation / Motivation /
            Fitness / Progress / Transformation / Motivation / Fitness /
            Progress / Transformation / Motivation / Fitness / Progress /
            Transformation /
          </div>
        </div>

        {/* Left to Right */}
        <div className="overflow-hidden relative mt-10">
          <div className="text-7xl text-red-500 mb-20 scroll-right">
            Progress / WORK / Community / Strength / Progress / WORK / Community
            / Strength/ Progress / WORK / Community / Strength / Progress / WORK
            / Community / Strength
          </div>
        </div>
      </div>

      <span
        id="about"
        className="text-7xl text-center text-[rgb(204,0,0)] font-bold   "
      >
        Your Fitness.
      </span>
      <span className="text-7xl text-center text-[rgb(204,0,0)] font-bold   ">
        Our Mission.
      </span>
      <span className="text-lg mt-4 text-gray-200 font-semibold mx-[290px] text-center">
        At GymFluencer, our mission is simple: to provide the tools and support
        you need to reach your fitness goals. We combine innovative technology
        with personalized guidance to make fitness easier, more accessible, and
        more motivating. Join us as we help you transform your fitness journey,
        one workout at a time.
      </span>

      <div className={`text-white flex px-10 space-x-5 pt-20`}>
        {data?.map((item, index) => (
          <div
            className={`flex flex-col text-center ${
              index !== 0 ? "border-l-2 border-white pl-5" : ""
            }  `}
          >
            <div className="text-4xl">
              <div>{item.time}</div>
            </div>
            <div>
              <div>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto py-10">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          className="h-[600]"
        />
      </div>

      <div className="text-4xl text-center text-red-500 font-semibold">
        OUR SERVICES
      </div>

      <div>
        <div className="text-base text-center text-white">
          GymFluencer offers 5 essential services to help you
        </div>
        <div className="text-base text-center text-white ">
          achieve your fitness goals with ease and flexibility.
        </div>
      </div>

      <div className="flex">
        {[
          {
            img: "https://framerusercontent.com/images/QCoTSMtHpimr9lp2CmaQOtriXU.png?scale-down-to=512",
            text: "TRACK",
          },
          {
            img: "https://framerusercontent.com/images/3j6CVVIKDTJFl9GkL39qFFZhBVY.jpg?scale-down-to=2048",
            text: "ANALYZE",
          },
          {
            img: "https://framerusercontent.com/images/ZiSz1ONCwWlZSSTVgpW4sZm1hI.png?scale-down-to=1024",
            text: "TRAIN",
          },
          {
            img: "https://framerusercontent.com/images/H2mFADPlDeJZEZVhsqozg6Yc0.jpg",
            text: "CONNECT",
          },
          {
            img: "https://framerusercontent.com/images/JrDw3jtgKjcQOYfgKW5tggM5U.jpg?scale-down-to=1024",
            text: "CHALLENGE",
          },
        ].map((item, index) => (
          <div key={index} className="relative h-[90vh] w-[50vh] ">
            <img
              src={item.img}
              alt="plans"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out transform "
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <span
              className={`absolute top-1/2 ${
                index === 1 && index === 4 ? "left-20" : "left-24"
              }     text-center text-white text-2xl font-bold`}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* BENIFITS */}

      <div className="text-center space-x-3 pt-10 ">
        <div className="flex justify-center bg-gray-900 rounded-full ">
          <img
            src="https://framerusercontent.com/images/o8k4hpBGZSqpjSgLI7W0kJLJuw4.svg"
            alt="Star"
            className="w-6 h-5 mt-1"
          />
          <div className="text-white font-medium text-lg ml-1  ">
            Our Benifits
          </div>
        </div>
        <div className="text-5xl text-red-600 font-medium py-10">
          Discover GymFluencer Benefits
        </div>

        <div className="text-base text-center mx-[350px] text-white">
          Unlock your full potential with GymFluencer your personal fitness
        </div>

        <div className="text-base text-center mx-[350px] text-white">
          partner for progress and motivation
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20 relative mt-20 mb-20 ">
          {benefit.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-start p-4 bg-gray-900 rounded-lg shadow-md ${
                index === 1 || index === 3 ? "ml-60" : "mr-60"
              }`}
            >
              <div className="pt-2 px-3 my-3 rounded-xl bg-gray-600 ">
                <img src={item.logo} alt="logo" className="w-8 h-8 mb-2" />
              </div>
              <div className="font-semibold text-red-600 text-start text-xl">
                {item.title}
              </div>
              <div className="text-start mb-2 text-white">{item.text}</div>
            </div>
          ))}

          <div className="absolute left-1/2  -ml-48 -mt-10">
            <div className="relative">
              <img
                src="https://framerusercontent.com/images/I9yRU9jEN2S2ol2M7kgT5c6zOrc.png?scale-down-to=1024"
                alt="Error"
                className="h-[80vh] w-[24vw]"
              />

              <div className="absolute top-5">
                <img
                  src="https://framerusercontent.com/images/1UO4LCYbX6UQvXFCBXLY0dAOHU.png"
                  className="h-[75vh] w-[22vw] ml-4 rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('https://framerusercontent.com/images/2AmDHmcEtUuynT8pV9nsBLAMYeU.png?scale-down-to=1444')`,
        }}
        className="h-[90vh] bg-cover bg-center relative px-20 "
      >
      <div className="inset-0 bg-black/50 absolute" ></div>
        <div className=" relative z-10 flex justify-between items-center p-8">
          {/* Left Side - Text */}
          <div className="flex-1 text-white max-w-xs space-y-6">
            <h1 className="text-5xl font-semibold text-red-600 mb-4">
              Your Personalized Fitness Hub
            </h1>
            <p className="text-lg" style={{
              fontFamily: "Space Grotesk, sans-serif",
            }} >
              Personalized workout routines tailored to your goals and
              preferences
            </p>
            <p className="text-lg" style={{
              fontFamily: "Space Grotesk, sans-serif",
            }} >
              Get expert guidance with virtual coaching sessions, available
              anytime, anywhere.
            </p>
            <p className="text-lg" style={{
              fontFamily: "Space Grotesk, sans-serif",
            }} >
              Track your fitness journey with detailed analytics, goal setting,
              and achievements.
            </p>
          </div>

          {/* Right Side - Images */}
          <div className="right-side flex flex-col items-center">
            <div className="image-container">
              <img
                src="https://framerusercontent.com/images/yuM4HjReun2ffEbHgraaGxf4Gl0.png"
                alt="Image 1"
                className="image animate-slide-in h-[60vh] "
              />
              {/* <img
                src="https://framerusercontent.com/images/y3OEsrPpF9ZlVWFn8txqhafXYY.png"
                alt="Image 2"
                className="image animate-slide-in"
              />
              <img
                src="https://framerusercontent.com/images/WaP2lGu3X4zc8d5kCwZyhH3lDI.png"
                alt="Image 3"
                className="image animate-slide-in"
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <marquee className="bg-red-600">
          <div className="bg-red-600 text-white h-12 text-sm pt-3">
            · Workout Routines · Progress Tracking Fitness Plans · Workout
            Routines · Progress Tracking Fitness Plans · Workout Routines ·
            Progress Tracking Fitness Plans · Workout Routines · Progress
            Tracking Fitness Plans · Workout Routines · Progress Tracking
            Fitness Plans · Word
          </div>
        </marquee>
      </div>

      <div className="text-4xl font-medium text-center text-red-600 mx-[400px]">
        TRANSFORMATIONS MADE POSSIBLE WITH GYMFLUENCER
      </div>

      <Slider1 />

      <Testimonials />

      <Map />

      <Blog />

      <Faq />
    </div>
  );
};

export default DownData;
