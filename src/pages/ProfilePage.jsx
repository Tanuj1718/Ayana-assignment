import React, { useState } from 'react'; 
import Cards from '../components/Cards';
import users from './api';


const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center h-screen overflow-y-scroll bg-gray-200">
      {users.map((user, index) => (
        <Cards key={index} user={user} />
      ))}
    </div>
  );
};

export default ProfileCard;
