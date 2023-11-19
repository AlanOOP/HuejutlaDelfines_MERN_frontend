import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import ScrollTop from './utils/ScrollTop';

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/CourseDetail';
import Courses from './pages/Courses';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Page404 from './pages/Page404';
import Profile from './pages/Profile';
import PrivatePolicy from './pages/PrivatePolicy';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Accesibility from './pages/Accesibility';

// privado

import AdminLayout from './pages/dashboardAdmin/layout/AdminLayout';

function App() {

  return (
    <>

      <BrowserRouter>
        <ScrollTop />
        <Routes>

          {/* public */}

          <Route index path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<Contacto />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/course-detail' element={<ProductDetail />} />
          <Route path='/private-policy' element={<PrivatePolicy />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/cookies' element={<Cookies />} />
          <Route path='/accesibility' element={<Accesibility />} />

          {/* private */}

          <Route path='/admin/dashboard' element={<AdminLayout />} />

          <Route path='*' element={<Page404 />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
