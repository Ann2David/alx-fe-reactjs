// src/components/UserProfile.jsx
export default function UserProfile() {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/path-to-your-image.jpg"
        alt="User"
        className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
      />
      <h2 className="mt-2 text-lg font-semibold">John Doe</h2>
      <p className="text-gray-500">Frontend Developer</p>
    </div>
  );
}