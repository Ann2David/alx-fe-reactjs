import React from "react";

const UserProfile = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-6">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      {/* Profile Details */}
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 transition-colors duration-300 ease-in-out hover:text-blue-500">
          Ann David
        </h2>
        <p className="text-gray-600">Frontend Developer</p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 ease-in-out">
          Follow
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition-colors duration-300 ease-in-out">
          Message
        </button>
      </div>
    </div>
  );
};

export default UserProfile;