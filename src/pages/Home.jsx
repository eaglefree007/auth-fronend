// import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center text-2xl border border-[3px solid bg-gray-400] mx-auto my-4 w-2/3 rounded-2xl shadow-md'>
      <div className="flex">      
        <h2 className="font-bold text-center">RBAC: </h2>
        <h2 className=""> &nbsp; Role based Access Control</h2>
      </div>
      <div className="w-[20rem] border mt-1 "></div>
      <div className="p-4 overflow-auto">
        <ul className="space-y-2">
          <li className="flex space-x-3">
            <h2 className="font-bold ">MongoDB:</h2>
            <p>for creating Database of Api</p>
          </li>
          <li className="flex space-x-3">
            <h2 className="font-bold">Express:</h2>
            <p>for creating backend Api</p>
          </li>
          <li className="flex space-x-3">
            <h2 className="font-bold">React: &nbsp;</h2>
            <p>for creating Frontend of Application</p>
          </li>
          <li className="flex space-x-3">
            <h2 className="font-bold">TailwindCSS: &nbsp;</h2>
            <p>for styling of Application</p>
          </li>
          <li className="flex space-x-3">
            <h2 className="font-bold">Node: &nbsp;</h2>
            <p>for runtime</p>
          </li>
          <li className="flex space-x-3">
            <h2 className="font-bold">JWT: &nbsp;</h2>
            <p>JsonWebToken for persisting data and storing token and roles</p>
          </li>
          <li className="flex mt-6 text-xl ">
            {/* <h2 className="font-bold">JWT: &nbsp;</h2> */}
            <p>Many other modules and libraries and framworks ...</p>
          </li>

        </ul>
        
      </div>
    </div>
  )
}

export default Home