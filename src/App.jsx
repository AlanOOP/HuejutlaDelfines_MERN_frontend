import { useEffect, useState } from 'react'

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
import Progress from './pages/dashboardUser/Progress';
import PaymentsUser from './pages/dashboardUser/PaymentsUser';
import PrivatePolicy from './pages/PrivatePolicy';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Accesibility from './pages/Accesibility';
import OlvidePassword from './pages/OlvidePassword';
import RecoverPassword from './pages/RecoverPassword';
import NewPassword from './pages/NewPassword';
import RecoverPasswordSecret from './pages/RecoverPasswordSecret';
import OTPVerification from './pages/OTPVerification';
import Confirmar from './pages/Confirmar';
import Payment from './pages/Payment';
import PurchaseSummary from './pages/PurchaseSummary';

import { HomeProvider } from './context/homeProvider';
import { AuthProvider } from './context/authProvider';


// Instructor
import ProfileInstructor from './pages/dashboardInstructor/ProfileInstructor';
import CourseInstructor from './pages/dashboardInstructor/CourseInstructor';
import StudentEvaluation from './pages/dashboardInstructor/StudentEvaluation';
import Notifications from './pages/dashboardInstructor/Notifications';

// privado

import AdminLayout from './pages/dashboardAdmin/layout/AdminLayout';
import HomeAdmin from './components/admin/HomeAdmin';

import CoursesAdmin from './pages/dashboardAdmin/CoursesAdmin';
import AddCourse from './pages/dashboardAdmin/AddCourse';
import CourseDetailA from './pages/dashboardAdmin/CourseDetailA';
import Amount from './pages/dashboardAdmin/Amount';

import Noticias from './pages/dashboardAdmin/Noticias';

import AdminGalery from './pages/dashboardAdmin/galery/AdminGalery';


import PageError from './pages/PageError';
import AdminInstructors from './pages/dashboardAdmin/instructors/AdminInstructors';
import AdminAddInstructor from './pages/dashboardAdmin/instructors/AdminAddInstructor';
import AddNews from './pages/dashboardAdmin/news/AddNews';
import AdminFaqs from './pages/dashboardAdmin/faqs/AdminFaqs';
import AdminAddFaq from './pages/dashboardAdmin/faqs/AdminAddFaq';
import AdminEditFaq from './pages/dashboardAdmin/faqs/AdminEditFaq';
import AdminCompetence from './pages/dashboardAdmin/competence/AdminCompetence';
import AdminAddCompetence from './pages/dashboardAdmin/competence/AdminAddCompetence';
import AdminEditCompetence from './pages/dashboardAdmin/competence/AdminEditCompetence';
import AdminSchedule from './pages/dashboardAdmin/schedule/AdminSchedule';
import AdminAddSchedule from './pages/dashboardAdmin/schedule/AdminAddSchedule';
import BlogDetail from './components/blog/BlogDetail';
import PredictInstructor from './pages/dashboardInstructor/PredictInstructor';


// Función para solicitar permisos de notificación
async function askNotificationPermission() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    console.log('Permiso concedido para notificaciones');
    subscribeUser();  // Llama a la suscripción si los permisos son concedidos
  } else {
    console.log('Permiso denegado');
  }
}

// Función para suscribir al usuario a las notificaciones
async function subscribeUser() {
  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array('BFqF9D2BByNesBz3cMr77s8MXdLNbdHYW-gYNwGNEWMMFE9OFAsOfTnvjFTt2AaA0sf82ld1cuuByeVB2JgaWio')
  });

  // Enviar la suscripción al backend
  await fetch('http://localhost:3000/api/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log('Suscripción enviada al backend:', data))
    .catch(error => console.error('Error al enviar la suscripción:', error));
}

// Convertir clave VAPID de base64 a Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  return new Uint8Array([...rawData].map(char => char.charCodeAt(0)));
}

function App() {

  useEffect(() => {
    // Registrar el Service Worker y solicitar permisos
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/pushNotification.js')
        .then(registration => {
          console.log('Service Worker registrado:', registration);
          askNotificationPermission();  // Solicitar permisos aquí
        })
        .catch(error => console.error('Error al registrar el Service Worker:', error));
    }
  }, []);

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
              <Route path='/profile/progress' element={<Progress />} />
              <Route path='/profile/payments' element={<PaymentsUser />} />
              <Route path='/about' element={<AboutMe />} />
              <Route path='/galeria' element={<Contacto />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog-detail/:id' element={<BlogDetail />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/course-detail/:id' element={<ProductDetail />} />
              <Route path='/private-policy' element={<PrivatePolicy />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/cookies' element={<Cookies />} />
              <Route path='/accesibility' element={<Accesibility />} />
              <Route path='/recover-password' element={<RecoverPassword />} />
              <Route path='/recover-password-secret-question' element={<RecoverPasswordSecret />} />
              <Route path='/olvide-password' element={<OlvidePassword />} />
              <Route path='/olvide-password/:token' element={<NewPassword />} />
              <Route path='/otp-verification' element={<OTPVerification />} />
              <Route path='/confirmar/:token' element={<Confirmar />} />
              <Route path='/checkout/:id' element={<Payment />} />
              <Route path='/capture-order' element={<PurchaseSummary />} />


              {/* Instructor */}
              <Route path='/instructor/dashboard' element={<ProfileInstructor />} />
              <Route path='/instructor/course/:id' element={< CourseInstructor />} />
              <Route path='/instructor/progress/:id' element={<StudentEvaluation />} />
              <Route path='/instructor/notifications' element={<Notifications />} />
              <Route path='/instructor/predict' element={<PredictInstructor />} />


              {/* private */}

              <Route path='/admin/dashboard' element={<HomeAdmin />} />


              <Route path='/admin/dashboard/courses' element={<CoursesAdmin />} />
              <Route path='/admin/dashboard/courses/curso-detail/:id' element={<CourseDetailA />} />
              <Route path='/admin/dashboard/membership' element={<Amount />} />

              <Route path='/admin/dashboard/noticias' element={<Noticias />} />
              <Route path='/admin/dashboard/add-news' element={<AddNews />} />


              <Route path='/admin/dashboard/instructors' element={<AdminInstructors />} />
              <Route path='/admin/dashboard/add-instructor' element={<AdminAddInstructor />} />

              <Route path='/admin/dashboard/galery' element={<AdminGalery />} />

              <Route path='/admin/dashboard/faqs' element={<AdminFaqs />} />
              <Route path='/admin/dashboard/add-faq' element={<AdminAddFaq />} />
              <Route path='/admin/dashboard/edit-faq/:id' element={<AdminEditFaq />} />

              {/* 404 */}
              <Route path='/admin/dashboard/addCourse' element={<AddCourse />} />

              <Route path='/admin/dashboard/competence' element={<AdminCompetence />} />
              <Route path='/admin/dashboard/add-competence' element={<AdminAddCompetence />} />
              <Route path='/admin/dashboard/edit-competence/:id' element={<AdminEditCompetence />} />

              <Route path='/admin/dashboard/schedule' element={<AdminSchedule />} />
              <Route path='/admin/dashboard/add-schedule' element={<AdminAddSchedule />} />


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
