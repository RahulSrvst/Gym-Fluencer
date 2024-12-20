import React from "react";
import "./index.css";

const BeginnerDiet = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Goal Section */}
      <div className="text-center mb-8">
        <h1 className="text-red-500 font-bold text-3xl">GOAL</h1>
        <p className="text-gray-300">
          Build basic strength, improve mobility, and establish workout consistency.
        </p>
      </div>

      {/* Schedule Section */}
      <div className="text-center mb-8">
        <h2 className="text-red-500 font-bold text-2xl">SCHEDULE</h2>
        <p className="text-gray-300">3 days per week (e.g., Monday, Wednesday, Friday).</p>
      </div>

      {/* Workout Routine */}
      <section>
        <h3 className="text-red-500 font-bold text-2xl mb-4">
          DAY 1: FULL BODY (STRENGTH & CORE)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Push-Ups Card */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={pushUps} alt="Push-Ups" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-red-500 font-bold text-lg">PUSH-UPS</h3>
              <p className="text-white text-sm">Beginner Workout Plan</p>
            </div>
          </div>

          {/* Squats Card */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={squats} alt="Squats" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-red-500 font-bold text-lg">SQUATS</h3>
              <p className="text-white text-sm">Beginner Workout Plan</p>
            </div>
          </div>

          {/* Glute Bridges Card */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={gluteBridges}
              alt="Glute Bridges"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-red-500 font-bold text-lg">GLUTE BRIDGES</h3>
              <p className="text-white text-sm">Beginner Workout Plan</p>
            </div>
          </div>
        </div>

        {/* Warm-Up Section */}
        <div className="mt-8 bg-gray-900 p-6 rounded-lg">
          <p className="text-white font-bold mb-2">Warm-up:</p>
          <ul className="text-gray-300 list-disc list-inside">
            <li>5 mins brisk walk or light jog</li>
            <li>Push-Ups: 3 sets of 8-10 reps</li>
            <li>Bodyweight Squats: 3 sets of 12 reps</li>
            <li>Glute Bridges: 3 sets of 12 reps</li>
            <li>Plank Hold: 3 sets of 20 seconds</li>
            <li>Mountain Climbers: 3 sets of 15 seconds</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BeginnerDiet;
