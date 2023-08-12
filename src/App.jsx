import React from 'react'
import Registeration from './pages/Regestration'
import LoginForm from './pages/Login'
import AllUserList from './pages/AllUserList'
import Profile from './pages/Profile'
import { ToastContainer } from 'react-toastify';
import AppRouter from './AppRouter'
import Navbar from './components/Navbar'
// import { role } from '../libs/utils'
// import { Routes } from 'react-router-dom';
// import Home from './pages/Home.jsx'

// import '/App.css'

const App = () => {
  return (
    <div className=''>
      <ToastContainer />
      {/* <Routes> */}
      <div className="flex flex-col ">
        <Navbar />
        <AppRouter />
      </div>
        
        
        {/* <AllUserList /> */}
        
      {/* </Routes> */}
    </div>
  )
}

export default App

///////////////////////////////////
// import React from 'react';
// import Home from './pages/Home';
// import AllUserList from './pages/AllUserList';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';


// function App() {
//   return (
//     <BrowserRouter>
      
//         <Navbar />
//         <div className="flex h-screen bg-gray-100">
//         <div className="flex-grow p-4">
//           <Routes >
//             <Route exact path="/" element={<Home />} />
//             {/* <Route path="/admin/dashboard" element={<AllUserList/>} />
//             <Route path="/users" element={<Home />}>
//               <Route path="me" element={<Home />} />
//               <Route path=":id" element={<Home />} />
//             </Route> */}
//             {/* <Route path="/admin/profile" component={AdminProfile} /> */}
//             {/* <Route path="/user/profile" component={UserProfile} /> */}
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
