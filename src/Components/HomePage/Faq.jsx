import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const faqData = [
  {
    question: "How do I log my workouts?",
    answer:
      "You can log your workouts by accessing the workout tracker in the dashboard.",
  },
  {
    question: "Can I track my calories burned?",
    answer:
      "Yes, the app provides a feature to calculate and display calories burned.",
  },
  {
    question: "Is this application suitable for beginners?",
    answer:
      "Absolutely! The app is designed to be user-friendly and beginner-oriented.",
  },
  {
    question: "What features does the application offer?",
    answer:
      "The app includes workout logging, calorie tracking, goal setting, and progress analytics.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Go to the login page and click on 'Forgot Password' to reset your password.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="contact" className="min-h-screen bg-red-800 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-5xl">
        {/* FAQ Header */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 uppercase">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-red-800 rounded-lg overflow-hidden border border-white shadow-lg"
            >
              <button
                className="flex space-x-8 items-center w-full px-6 py-4 text-lg font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-2xl">
                  {activeIndex === index ? <RxCross2 /> : <FiPlus />}
                </span>
                <span>{item.question}</span>
              </button>
              {/* Toggle Answer */}
              {activeIndex === index && (
                <div
                className={`transition-max-height duration-500 pt-5 p-10 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-60" : "max-h-0"
                }`}
              >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
