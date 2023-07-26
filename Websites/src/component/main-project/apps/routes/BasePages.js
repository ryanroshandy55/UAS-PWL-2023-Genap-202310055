import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../module/navbar/component/home/Home'
import Download from '../../module/navbar/component/download/Download'
import PageMain from '../../module/navbar/component/logo/Main'
import Layout from '../../layout/Layout'
import Content1 from '../../module/navbar/component/download/component/Content1'
import Discover from '../../module/navbar/component/discover/Discover'
import AboutUs from '../../module/navbar/component/about/AboutUs'
import Login from '../../layout/component/auth/Login'
import Register from '../../module/navbar/component/auth/Register'
// import SignUp from '../../layout/component/auth/Signup'

export default function BasePages() {
  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route path='/' element={<PageMain />} />
      <Route path='/home' element={<Home />} />
      <Route path='/download' element={<Download />} >
        <Route path='/download' element={<Content1 />} />
      </Route>
      <Route path='/discover' element={<Discover />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}
