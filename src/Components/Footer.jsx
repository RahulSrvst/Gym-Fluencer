import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg?scale-down-to=512" /* Replace with your logo */
            alt="GymFluencer Logo"
            className="h-14 w-40"
          />
        </div>

        {/* Tagline */}
        <p className="text-2xl font-semibold max-w-sm text-center mx-auto mb-6">
          Where Fitness Meets Social Connection!
        </p>

        {/* Email */}
        <a
          href="mailto:hello@gym.birlaventures.com"
          className="inline-flex items-center bg-gray-900 px-4 py-2 rounded-lg text-white mb-6"
          style={{
              fontFamily: "Space Grotesk, sans-serif",
            }} >
          📧 hello@gym.birlaventures.com
        </a>

        {/* Navigation Links */}
        <ul className="flex justify-center space-x-8 my-4 text-lg">
          <li>
            <a href="#home" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#diet" className="hover:text-white">
              Diet Plan
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#faqs" className="hover:text-white">
              FAQ's
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        

        {/* Copyright */}
        <div className="flex justify-between px-10 border-t" >
        <div>
        <p className="text-lg mt-6">
          © 2024 GymFluencer. All rights reserved.
        </p>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-2 rounded-xl" >
            <img src="https://framerusercontent.com/images/e29n3ck4a9kvBPgl9YhDr9UrVe0.svg" alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"  className="bg-gray-900 p-2 rounded-xl">
            <img src="https://framerusercontent.com/images/1z5NCIcMnM2ERwz5QuTnWfDS1uc.svg" alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer"  className="bg-gray-900 p-2 rounded-xl">
            <img src="https://framerusercontent.com/images/4I0uO5WpISDay2aPXHK8Kb9HAc.svg" alt="X" className="h-6 w-6" />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
