import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { authVerified } from '../../libs/utils';
import { REACT_APP_BASEURL } from '../../base_url';
import avatar from "../assets/avatar.png"

const Profile = () => {
  const [user, setUser] = useState({})
  let base_url = REACT_APP_BASEURL();

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${authVerified().token}`,
              'Content-Type': 'application/json',
            },
          };
          const response = await axios.get(`${base_url}/user`, config);
          if (response.data.status) {
            console.log(response.data.data);
            setUser(response.data.data);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
      // window.location.reload();
    }, []);

  return (
    <div className="flex items-center justify-center min-h-screen min-w-full bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src={user ? user.avatarUrl : avatar}
            alt={user ? `${user.name}` : "Image Alt"}
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <h2 className="text-2xl font-semibold my-2">{user ? user.name : ""}</h2>
            <h5 className="">{user && user.role == 0 ? "User" : "Admin"}</h5> 
            <p className="text-gray-600">Email: {user ? user.emailId : ""}</p>
            <p className="text-gray-600">Contact: {user ? user.contactNumber : ""}</p>
            <p className="text-gray-600">Address: {user ? `${user.address} ${user.city} ${user.state} ${user.country} - ${user.zip}`: ""}</p>
            <p className="text-gray-600">ZIP: {user ? user.zip : ""}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium">About : </h3>
          <p className="text-gray-600">{user ? user.about : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
