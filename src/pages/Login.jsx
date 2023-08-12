import axios from 'axios';
import React, { useState } from 'react';
import { REACT_APP_BASEURL } from '../../base_url';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authVerified } from '../../libs/utils';


const LoginForm = () => {
  let base_url = REACT_APP_BASEURL();
  const Navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let postDataForLogin = async (data) => {
    try {
      let url = `${base_url}/login`
      const response = await axios.post(url, data);
      // console.log(response.data, 42);
      if (response.data.status !== 1) {
        return toast.error(response.data.msg);
      }
      // toast.success("login", response.data.msg);
      if (response.data){
        localStorage.removeItem("User-token");
        // console.log("old user token removed");
      }
      const userToken = JSON.stringify({ token: response.data.token, role: response.data.role })
      localStorage.setItem("User-token", userToken );
      console.log("new user token set");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const formData = {
    email, password
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(formData).includes('')) {
      toast.info("all required details are not valid")
    }
      // console.log('Form data:', formData);
      postDataForLogin(formData)

      if (authVerified().role == 1){
        Navigate("/admin/all-profiles")
      } else {
        Navigate("/user/profile")
      }
      toast.success("Login successful")
  };
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
