import React, { useState } from 'react';
import Search from './components/Search';
import UserProfile from './components/UserProfile';
import { fetchGitHubUser } from './services/github';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    try {
      setError('');
      const data = await fetchGitHubUser(username);
      setUser(data);
    } catch (err) {
      setUser(null);
      setError('User not found.');
    }
  };

  return (
    <div className="container">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <UserProfile user={user} />
    </div>
  );
};

export default App;