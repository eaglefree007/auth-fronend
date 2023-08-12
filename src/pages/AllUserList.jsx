import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../libs/api';
import axios from 'axios';
import { REACT_APP_BASEURL } from '../../base_url';
import { toast } from 'react-toastify';
import { authVerified } from '../../libs/utils';
import { Link, useNavigate } from 'react-router-dom';

const AllUserList = () => {
  let base_url = REACT_APP_BASEURL();
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setRefresh(false)
        const response = await getAllUsers("user-list");
        // console.log(response.data, 37);
        setUsers(response.data ? response.data : []);
      } catch (error) {
        console.log(err)
        // Handle error
      }
    }
    
    fetchData();
  }, [refresh]);


  function editHandler(id) {
    console.log('edit clicked', id)
    useNavigate("/user/update")
  }
  function deleteHandler(id) {
    let config = {
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${authVerified().token}`
      }
    } 
    
    // console.log('delete clicked', id)
    axios.delete(base_url+"/user/"+id, config).then(res => {
      
      if (res.data.status != 1  ) {
        return toast.error(res.data.msg)
      }
      localStorage.setItem("User-token",JSON.stringify({ token: res.data.token, role: res.data.role}))
      // Navigate("/user/profile")
      console.log("res.data remove")
      setRefresh(true)
      toast.success(res.data.msg)
    }).catch(error => {
      // console.log(error)
      toast.error("somthing went wrong")
  })
  }
  function accessHandler(id) {
    console.log('view clicked', id)
    useNavigate('/user/profile/'+id)
  }
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">User Details</h2>
        <ul className="space-y-4">
          {/* {users && users.map(user => console.log(user))} */}
          {users && users.map((user, i) => (
            <li key={i} className="border p-4 rounded-md flex justify-between">
              <div className="">
                <h3 className="text-lg font-medium">{user.name}</h3>
              <p className="text-gray-600">Email: {user.emailId}</p>
              <p className="text-gray-600">Contact: {user.contactNumber}</p>
              <p className="text-gray-600">Location: {user.address}</p>
              </div>
              <div className="flex flex-col">
                <button className="text-gray-600 border py-1 px-3 rounded-3xl my-2 overflow-hidden" onClick={() => editHandler(user._id)}> <Link to={`/user/update/${user._id}`}>Edit</Link> </button>
                <button className="text-gray-600 border py-1 px-3 rounded-3xl my-2 overflow-hidden" onClick={() => deleteHandler(user._id)}> delete </button>
                <button className="text-gray-600 border py-1 px-3 rounded-3xl my-2 overflow-hidden" onClick={() => accessHandler(user._id)}> <Link to={`/user/profile/${user._id}`}>View</Link> </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllUserList;
