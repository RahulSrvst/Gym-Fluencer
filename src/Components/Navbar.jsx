import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();
  return (
    <div className="fixed flex justify-between h-20 w-[72%] items-center bg-[rgb(38,38,38)] mx-52 rounded-full px-6 border border-gray-700 mt-10 z-50">
      <div>
        <img
          src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg?scale-down-to=512"
          alt="logo"
          className="h-10 w-40 hover:cursor-pointer "
          onClick={()=>navigate("/")}
        />
      </div>

      <div className="flex space-x-8 text-gray-400">
        {/* Main Navbar Items */}
        {["Home", "About"].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase().replace(" ", "")}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-lg font-medium hover:text-[rgb(204,0,0)] cursor-pointer"
          >
            {item}
          </Link>
        ))}

        {/* Dropdown Menu for Our Services */}
        <div className="relative">
          <div
            onMouseEnter={handleDropdown}
            className="text-lg font-medium hover:text-[rgb(204,0,0)] cursor-pointer flex items-center"
          >
            Our Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`w-4 h-4 ml-2 transform ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Dropdown Items */}
          {isDropdownOpen && (
            <div className="absolute mt-2 bg-gray-800 text-gray-400 rounded-md shadow-lg">
              <Link
                to="workoutplan"
                smooth={true}
                duration={500}
                offset={-70}
                className="block px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer"
                onClick={() => { navigate("/workoutplan") ; setIsDropdownOpen(false) }}
                >
                Workout Plan
              </Link>
              <Link
                to="dietplan"
                smooth={true}
                duration={500}
                offset={-70}
                className="block px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer"
                onClick={()=>{navigate("/dietplan") ; setIsDropdownOpen(false) }}
              >
                Diet Plan
              </Link>
            </div>
          )}
        </div>

        {/* Other Navbar Items */}
        {["Benefits", "Blogs", "Contact"].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase().replace(" ", "")}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-lg font-medium hover:text-[rgb(204,0,0)] cursor-pointer"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="text-white bg-[rgb(204,0,0)] px-6 py-3 text-lg font-medium rounded-full">
        <button>Join us now</button>
      </div>
    </div>
  );
};

export default Navbar;
