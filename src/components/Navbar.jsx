import React from 'react'
import { Link } from 'react-router-dom'
import { authVerified } from '../../libs/utils'
// import { authVerified } from '../libs/utils'


const Navbar = () => {
  return (
    // <div className="flex min-h-screen bg-gray-100 ">
    <div className="flex ">
      <div className=" bg-blue-300 text-white p-4 w-full">
        <nav className="flex justify-around ">
          <h1 className="">RBAC</h1>

          <ul className="text-center flex items-center justify-between w-auto space-x-4 md:w-[30rem]">
            <li>
              <Link to="/">Home</Link>
            </li>
              {/* {console.log(authVerified().role == 1)} */}
            {authVerified()
            ? (
              <>
                {
                  authVerified().role == 1 
                  &&
                      <li>
                        <Link to="/admin/all-profiles">Manage</Link>
                      </li> 
                }

                <li>
                  <Link to="/user/profile">Profile</Link>
                </li>

                <button onClick={()=> localStorage.removeItem("User-token")}>
                  <Link to="/">Logout</Link>
                </button>
              </>
            )
            // console.log("varified")
            : <>
                <li>
                  <Link to="/user/register">Register</Link>
                </li>
                <li>
                  <Link to="/user/login">Login</Link>
                </li>
              </>
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar