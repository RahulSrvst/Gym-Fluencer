import React from 'react';

const DietPlanForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative" 
         style={{ backgroundImage: 'url("your-background-image.jpg")' }}>
      <div className="bg-black bg-opacity-70 p-8 md:p-12 rounded-md shadow-lg w-full max-w-3xl">
        <h1 className="text-2xl md:text-3xl text-center font-bold text-red-600 mb-6 uppercase">
          Personalized Diet Plan Form
        </h1>

        {/* Personal Details */}
        <section className="mb-6">
          <h2 className="text-red-500 text-lg font-semibold mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-1">Age</label>
              <input
                type="text"
                placeholder="Eg: 25"
                className="w-full bg-gray-800 text-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Gender</label>
              <select className="w-full bg-gray-800 text-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Height</label>
              <input
                type="text"
                placeholder=""
                className="w-full bg-gray-800 text-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Weight</label>
              <input
                type="text"
                placeholder="Eg: 150 lbs or 68 kg"
                className="w-full bg-gray-800 text-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-300 mb-1">Activity Level</label>
              <select className="w-full bg-gray-800 text-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Select</option>
                <option>Sedentary</option>
                <option>Lightly Active</option>
                <option>Moderately Active</option>
                <option>Very Active</option>
              </select>
            </div>
          </div>
        </section>

        {/* Dietary Goals */}
        <section className="mb-6">
          <h2 className="text-red-500 text-lg font-semibold mb-4">Dietary Goals</h2>
          <div>
            <label className="block text-gray-300 mb-1">Goal</label>
            <select className="w-full bg-gray-800 text-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>Select</option>
              <option>Weight Loss</option>
              <option>Muscle Gain</option>
              <option>Improve Digestion</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-gray-300 mb-1">Specific Goal</label>
            <input
              type="text"
              placeholder="Eg: Weight loss, Muscle gain..."
              className="w-full bg-gray-800 text-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </section>

        {/* Dietary Preferences */}
        <section>
          <h2 className="text-red-500 text-lg font-semibold mb-4">Dietary Preferences and Restrictions</h2>
          <div>
            <label className="block text-gray-300 mb-1">Diet Type</label>
            <select className="w-full bg-gray-800 text-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>Diet Type</option>
              <option>Vegan</option>
              <option>Vegetarian</option>
              <option>Keto</option>
              <option>Paleo</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-gray-300 mb-1">Food Allergies or Intolerances</label>
            <input
              type="text"
              placeholder="Eg: Nuts, Dairy, Gluten..."
              className="w-full bg-gray-800 text-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DietPlanForm;
