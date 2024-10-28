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
import Contacto from './pages/Galery';
import Page404 from './pages/Page404';
import Profile from './pages/Profile';
import PrivatePolicy from './pages/PrivatePolicy';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Accesibility from './pages/Accesibility';
import OlvidePassword from './pages/OlvidePassword';
import NewPassword from './pages/NewPassword';
import OTPVerification from './pages/OTPVerification';
import Confirmar from './pages/Confirmar';
import Payment from './pages/Payment';

import { HomeProvider } from './context/homeProvider';
import { AuthProvider } from './context/authProvider';

// privado

import AdminLayout from './pages/dashboardAdmin/layout/AdminLayout';
import HomeAdmin from './components/admin/HomeAdmin';

import CoursesAdmin from './pages/dashboardAdmin/CoursesAdmin';
import Instructor from './pages/dashboardAdmin/Instructor';
import AddCourse from './pages/dashboardAdmin/AddCourse';
import AddInstructor from './pages/dashboardAdmin/AddInstructor';
import PageError from './pages/PageError';
import FaqsAdmin from './pages/dashboardAdmin/FaqsAdmin';

function App() {

  return (
    <>

      <BrowserRouter>

        <HomeProvider>
          <AuthProvider>
            <ScrollTop />
            <Routes>

              {/* public */}

              <Route index path='/' element={<HomePage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/about' element={<AboutMe />} />
              <Route path='/galeria' element={<Contacto />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/course-detail/:id' element={<ProductDetail />} />
              <Route path='/private-policy' element={<PrivatePolicy />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/cookies' element={<Cookies />} />
              <Route path='/accesibility' element={<Accesibility />} />
              <Route path='/olvide-password' element={<OlvidePassword />} />
              <Route path='/olvide-password/:token' element={<NewPassword />} />
              <Route path='/otp-verification' element={<OTPVerification />} />
              <Route path='/confirmar/:token' element={<Confirmar />} />
              <Route path='/checkout' element={<Payment />} />
              {/* private */}

              <Route path='/admin/dashboard' element={<HomeAdmin />} />
            
              <Route path='/admin' element={<PageError
                codigo={"403"}
                error={"Acceso denegado"}
                des={"No tienes acceso a esta pagina"}
              />} />
              <Route path='/admin/servidor' element={<PageError
                codigo={"500"}
                error={"Error del servidor"}
                des={"Estamos teniendo problemas con el servidor"}
              />} />
              <Route path='/admin/dashboard/courses' element={<CoursesAdmin />} />
              <Route path='/admin/dashboard/addCourse' element={<AddCourse />} />
              <Route path='/admin/dashboard/intructor' element={<Instructor />} />
              <Route path='/admin/dashboard/addInstructor' element={<AddInstructor />} />
           
              {/* 404 */}

              <Route path='*' element={<Page404 />} />



            </Routes>
          </AuthProvider>

        </HomeProvider>

      </BrowserRouter >

    </>
  )
}

export default App
