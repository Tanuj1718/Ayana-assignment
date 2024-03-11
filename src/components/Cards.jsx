import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Cards = ({ user }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 m-12">
      <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
        <img
          src={user.image}
          alt={`${user.name}'s profile`}
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-4">{user.bio}</p>
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-semibold ml-2">{user.followers}</p>
            <p className="text-sm text-gray-500 m-2">Followers</p>
          </div>
          <div>
            <p className="font-semibold ml-2">{user.following}</p>
            <p className="text-sm text-gray-500 m-2">Following</p>
          </div>
        </div>
        <div className="flex space-x-4 mb-4">
          <a href={user.twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-blue-500" />
          </a>
          <a href={user.youtube} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
          </a>
          <a href={user.instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
