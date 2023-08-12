import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllUserList from './pages/AllUserList'
import Home from './pages/Home'
import Registeration from './pages/Regestration'
import LoginForm from './pages/Login'
import Profile from './pages/Profile'
import { authVerified } from '../libs/utils'
import EditUser from './pages/EditUser'
import ViewUserProfile from './pages/ViewUserProfile'

const AppRouter = () => {
  return (
    // <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        {authVerified().role == 1 
          &&
          <Route path="/admin/all-profiles" element={<AllUserList />}/> 
        }
        <Route path="/user/register" element={<Registeration />} />

        <Route path="/user/update/:id" element={<EditUser />} />

        <Route path="/user/login" element={<LoginForm /> } />

        <Route path="/user/profile" element={<Profile /> } />
        <Route path="/user/profile/:id" element={<ViewUserProfile /> } />
        
      </Routes>
    // </BrowserRouter>
    )
}

export default AppRouter