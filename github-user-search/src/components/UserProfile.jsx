import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="profile">
      <img src={user.avatar_url} alt={user.login} width={100} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank">View GitHub Profile</a>
    </div>
  );
};

export default UserProfile;