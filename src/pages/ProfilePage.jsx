import React, { useState } from 'react'; 
import Cards from '../components/Cards';
import users from './api';
const ProfileCard = () => {
  // data for user profiles
  // const users = [
  //   {
  //     name: 'Ellyse Perry',
  //     image: 'https://images.pexels.com/photos/920377/pexels-photo-920377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     bio: 'Cricketer',
  //     followers: 100,
  //     following: 200,
  //     twitter: 'https://twitter.com/johndoe',
  //     youtube: 'https://youtube.com/johndoe',
  //     instagram: 'https://instagram.com/johndoe',
  //   },
  //   {
  //     name: 'Adam Mysic',
  //     image: 'https://images.pexels.com/photos/1059039/pexels-photo-1059039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     bio: 'Designer',
  //     followers: 1500,
  //     following: 250,
  //     twitter: 'https://twitter.com/janesmith',
  //     youtube: 'https://youtube.com/janesmith',
  //     instagram: 'https://instagram.com/janesmith',
  //   },
  //     {
  //       name: 'Richa Ghosh',
  //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFAfzWbMOA437SolUau49KOxGI9wSwW86yibO9sptTEuT3eowyPoLAy9O5TBNnaSB0Pno&usqp=CAU',
  //       bio: 'Cricketer',
  //       followers: 500,
  //       following: 200,
  //       twitter: 'https://twitter.com/johndoe',
  //       youtube: 'https://youtube.com/johndoe',
  //       instagram: 'https://instagram.com/johndoe',
  //     },
  // ];

  return (
    <div className="flex flex-col items-center h-screen overflow-y-scroll bg-gray-200">
      {users.map((user, index) => (
        <Cards key={index} user={user} />
      ))}
    </div>
  );
};

export default ProfileCard;
