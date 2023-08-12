import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {REACT_APP_BASEURL} from "../../base_url"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Registeration = () =>  {
  const Navigate = useNavigate()
  let base_url = REACT_APP_BASEURL();
  // console.log(REACT_APP_BASEURL());

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    contactNumber: '',
    about: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
  });

  let postDataForReg = (data) => {
    axios.post(base_url+"/register", data ).then(res => {
      // console.log(res.data)
      if (res.data.status == 2) {
        toast.success("successfully post updated for regestration")
        Navigate("/user/login")
      }
    }).catch(error => {
      console.log(error)
      toast.error("somthing went wrong")
  })

  }

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).includes('')) {
      toast.info("all required necessary details")
    } else {
      postDataForReg(formData)
    }

    // Implement logic to send formData to the server
    console.log('Form data:', formData);
  };

  

  return (
    <div className="min-h-screen min-w-full flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Form fields */}
        <div className="flex">
          <div className="mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            />
          </div>
          <div className="mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>
        <div className="flex ">
          <div className="mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
            </label>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
            </label>
            <input
              type="text"
              name="password2"
              value={formData.password2}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          Contact
          </label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          About
          </label>
          <textarea
            rows={3}
            type="text"
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex">
          <div className="mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>
        <div className="flex">
          <div className="mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            ZIP
            </label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>
        {/* Add other fields here */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Registeration;
