import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import clienteAxios from '../config/clientAxios';
import { isEmail, isPassword } from '../utils/Regex';

const Register = () => {


  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    app: '',
    tel: '',
    date: '',
    password: '',
    password_confirmation: ''
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const isValidated = () => {
    if (user.name === '' || user.email === '' || user.password === '' || user.password_confirmation === '' || user.date === '') {
      toast.error('Todos los campos son obligatorios')
      return false
    }
    if (user.password !== user.password_confirmation) {
      toast.error('Las contraseñas no coinciden')
      return false
    }

    if (user.name.length < 2) {
      toast.error('El nombre debe tener 2 caracteres')
      return false;
    }

    if (user.password !== user.password_confirmation) {
      toast.error('Las contraseñas no coinciden')
      return false;
    }

    return true
  }

  const updateState = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidated()) return;

    if (!isEmail(user.email)) {
      toast.error('El email no es valido')
      return;
    }

    if (!isPassword(user.password)) {
      toast.error('La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial')
      return;
    }

    const usuario = {
      name: user.name,
      password: user.password,
      age: user.date,
      email: user.email,
      phone: user.tel
    }


    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(usuario)

      })
      const data = await response.json()

      console.log(data.message)

      if (data.message === 'Usuario creado correctamente') {
        toast.success('Usuario creado correctamente')

        setTimeout(() => {
          navigate('/login')
        }, 2000)

      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.error(error)
    }
  }


  return (

    <div>
      <Layout>
        <div className=''>
          <ToastContainer />
        </div>
        <div className="max-w-max mx-auto my-5 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium text-center">Registrate</h1>
          <p className="text-slate-500">Hola, Bienvenido 👋</p>

          <div className="my-5">

            <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">

              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6 " alt="" /><span>Registrate con Google</span>
            </button>

            <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">

              <img src="https://svgrepo.com/show/448224/facebook.svg" className="w-6 h-6 " alt="" /><span>Registrate con Facebook</span>
            </button>
          </div>

          <form
            className="my-5"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col space-y-5">

              {/* dos columnas nombre y apellido  */}

              <label htmlFor="name">
                <p className="font-medium text-slate-700 pb-2">Nombre Completo:</p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none "
                  placeholder="Ingrese su Nombre"
                  defaultValue={user.name}
                  onChange={updateState}
                />

              </label>


              {/* dos columnas  telefono type number y fecha de nacimiento date*/}
              <div className="flex flex-row w-full justify-between items-end space-x-5">
                <label htmlFor="tel">
                  <p className="font-medium text-slate-700 pb-2">Telefono:</p>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none "
                    placeholder="Ingrese su Numero"
                    defaultValue={user.tel}
                    onChange={updateState}
                  />
                </label>

                <label htmlFor="date">
                  <p className="font-medium text-slate-700 pb-2">Fecha de Nacimiento:</p>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none "
                    placeholder="Fecha de Nacimiento"
                    defaultValue={user.date}
                    onChange={updateState}

                  />
                </label>


              </div>

              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email:</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none "
                  placeholder="Ingrese su Email"
                  defaultValue={user.email}
                  onChange={updateState}
                />
              </label>

              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Contraseña</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none "
                  placeholder="Enter your password"
                  defaultValue={user.password}
                  onChange={updateState}
                />
              </label>

              <label htmlFor="password_confirmation">
                <p className="font-medium text-slate-700 pb-2">Confirmar Contraseña</p>
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none "
                  placeholder="Confirm your password"
                  defaultValue={user.password_confirmation}
                  onChange={updateState}
                />
              </label>

              <div className="flex flex-row justify-between">
                <div>
                  <label htmlFor="remember" className="">
                    <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-blue-600" />
                    Recordar contraseña
                  </label>
                </div>
                <div>
                  <a href="#" className="font-medium text-blue-600">Recuperar Contraseña?</a>
                </div>
              </div>

              <button class="w-full py-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Registrar</span>
              </button>

              <p class="text-center">¿Ya tienes cuenta?{' '}
                <Link to={'/login'}
                  class="text-blue-600 font-medium inline-flex space-x-1 items-center"
                >
                  <span> Inicia Sesion</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </Link>
              </p>

            </div>
          </form>

        </div>
      </Layout>
    </div>
  )
}

export default Register