
import React, { useState } from 'react';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUserData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      fetchUserData();
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {userData && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <img src={userData.avatar_url} alt="avatar" className="w-24 h-24 rounded-full mx-auto" />
          <h2 className="text-center text-xl mt-2">{userData.name || userData.login}</h2>
          <p className="text-center text-gray-600">{userData.location}</p>
          <p className="text-center text-gray-600">Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default Search;