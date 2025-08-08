// src/components/UserCard.jsx
function UserCard() {
  return (
    <div
      className="
        bg-white
        p-4 sm:p-4 md:p-8
        max-w-xs md:max-w-md
        mx-auto my-20
        rounded-lg shadow-lg
      "
    >
      {/* Profile Section */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          rounded-full
          w-24 h-24 md:w-36 md:h-36
          mx-auto
        "
      />
      <h1
        className="
          text-lg md:text-xl
          text-blue-800
          my-4 text-center
        "
      >
        John Doe
      </h1>
      <p
        className="
          text-sm md:text-base
          text-gray-600
          text-center mb-6
        "
      >
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>

      {/* Extra Card Section */}
      <div
        className="
          bg-gray-100
          p-4 rounded-lg
          text-center
        "
      >
        <h2 className="text-lg font-semibold text-gray-800">
          Latest Project
        </h2>
        <p className="text-gray-600 mt-2">
          Building a modern responsive UI with Tailwind CSS and React.
        </p>
      </div>
    </div>
  );
}

export default UserCard;