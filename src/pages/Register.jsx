import { useState } from 'react';
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import clienteAxios from '../config/clientAxios';
import { isEmail, isPassword, isAge, requirementsPassword } from '../utils/Regex';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";
import { IoIosEyeOff } from "react-icons/io";
import Spinner from '../components/Spinner';
import Breadcrumb from '../components/Breadcrumb';


const Register = () => {


  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState('');
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    app: '',
    tel: '',
    date: '',
    password: '',
    password_confirmation: ''
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const [terms, setTerms] = useState(false);
  const [msg, setMsg] = useState("");
  const [progress, setProgress] = useState("");


  const isDisabled = () => [user.name, user.lastName, user.email, user.password, user.password_confirmation, user.date, user.tel].includes('');

  const isValidated = () => {
    if (user.name === '' || user.lastName === '' || user.email === '' || user.password === '' || user.password_confirmation === '' || user.date === '' || user.tel === '') {
      setError(true)
      setMessage('Todos los campos son obligatorios')
      return false;
    }
    if (user.password !== user.password_confirmation) {
      setError(true)
      setMessage('Las contraseñas no coinciden')
      return false;
    }

    if (user.name.length < 2) {
      setError(true)
      setMessage('El nombre debe tener al menos 2 caracteres')
      return false;
    }

    if (user.password !== user.password_confirmation) {
      setError(true)
      setMessage('Las contraseñas no coinciden')
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

  const password = () => {
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = user.password.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(user.password);
    strengthChecks.hasLowerCase = /[a-z]+/.test(user.password);
    strengthChecks.hasDigit = /[0-9]+/.test(user.password);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(user.password);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength =
      verifiedList.length == 5
        ? "Fuerte"
        : verifiedList.length >= 2
          ? "Media"
          : "Debil";

    // setPassword(user.password);
    setProgress(`${(verifiedList.length / 5) * 100}%`);
    setMsg(strength);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    if (!isValidated()) {
      setLoading(false)
      return;
    }

    if (!isAge(user.date)) {
      setError(true)
      setLoading(false)
      setMessage('La fecha de nacimiento no es valida')
      return;
    }

    if (!isEmail(user.email)) {
      setError(true)
      setMessage('El email no es valido')
      setLoading(false)
      return;
    }


    if (!isPassword(user.password)) {
      setError(true)
      setMessage('La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial')
      setLoading(false)
      return;
    }

    if (!terms) {
      setError(true)
      setMessage('Debe aceptar los terminos y condiciones')
      setLoading(false)
      return;
    }

    const usuario = {
      name: user.name,
      lastName: user.lastName,
      password: user.password,
      age: user.date,
      email: user.email,
      phone: user.tel
    }


    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/singIn`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(usuario)

      })
      const data = await response.json()

      setLoading(false)
      // console.log(data.message)

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


  const getActiveColor = (type) => {
    if (type === "Fuerte") return "#22c55e";
    if (type === "Media") return "#f59e0b";
    return "#FF0054";
  };

  return (

    <Layout>

      <div className='flex container mx-auto justify-center'>
        <Breadcrumb
          path={'Registro'}
        />
      </div>

      <div className="max-w-[800px] container  my-5  p-8 rounded-xl shadow shadow-slate-300 mx-auto">
        <h1 className="text-4xl font-medium text-center">Registrate</h1>
        <p className="text-slate-500">Hola, Bienvenido 👋</p>

        <div className="my-5 flex gap-x-2 sm:flex-row flex-col ">
          <button className="btn-auth">
            <FcGoogle className="w-6 h-6 " /><span>Registrate con Google</span>
          </button>
          <button className="btn-auth">

            <FaFacebook className="w-6 h-6 text-blue-700" /><span>Registrate con Facebook</span>
          </button>
        </div>

        <form
          className="my-5"
          onSubmit={handleSubmit}
          noValidate
        >

          {
            error &&
            <div className='my-2'>
              <p className='bg-[#FED7D7] p-4 border-l-4 border-solid border-[#C53030] text-red-700'>{message}</p>
            </div>
          }

          <div className="flex flex-col space-y-5">
            {/* dos columnas nombre y apellido  */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2'>
              <div >
                <label htmlFor="name" className="font-medium text-slate-700 pb-2">Nombre Completo:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className='input-auth'
                  placeholder="Ingrese su Nombre"
                  defaultValue={user.name}
                  onChange={updateState}
                />
              </div>
              <div >
                <label htmlFor="lastName" className="font-medium text-slate-700 pb-2">Apellidos:</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className='input-auth'
                  placeholder="Ingrese su Apellido"
                  defaultValue={user.lastName}
                  onChange={updateState}
                />
              </div>
            </div>

            {/* dos columnas  telefono type number y fecha de nacimiento date*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2">
              <div >
                <label htmlFor="tel" className="font-medium text-slate-700 pb-2">Telefono:</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  className='input-auth'
                  placeholder="Ingrese su Numero"
                  defaultValue={user.tel}
                  onChange={updateState}
                />
              </div>
              <div>
                <label htmlFor="date" className="font-medium text-slate-700 pb-2">Fecha de Nacimiento:</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className='input-auth'
                  placeholder="Fecha de Nacimiento"
                  defaultValue={user.date}
                  onChange={updateState}

                />
              </div>
            </div>

            <div >
              <label htmlFor="email" className="font-medium text-slate-700 pb-2">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className='input-auth'
                placeholder="Ingrese su Email"
                defaultValue={user.email}
                onChange={updateState}
              />
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              <div className=''>
                <label htmlFor="password" className="font-medium text-slate-700 pb-2">Contraseña:</label>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    className='input-auth'
                    placeholder="Enter your password"
                    defaultValue={user.password}
                    onChange={updateState}
                    onKeyUp={password}
                  />
                  <IoIosEyeOff
                    className={`absolute top-1/2 right-3 transform -translate-y-1/3 hover:cursor-pointer hover:scale-110 ${showPassword ? 'text-blue-600' : 'text-slate-500'}`}
                    onClick={togglePassword}

                  />
                </div>
                {
                  user.password.length === 0 ? null :
                    <div
                      className="relative h-2 w-2 bg-[#fbfbfb] rounded-md"
                      style={{
                        width: progress,
                        backgroundColor: getActiveColor(msg),
                      }}
                    >
                    </div>
                }
                {user.password.length !== 0 ? (
                  <p className="font-medium leading-relaxed" style={{ color: getActiveColor(msg) }}>
                    Tu contraseña es {msg}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="password_confirmation" className=" font-medium text-slate-700 pb-2">Confirmar Contraseña:</label>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password_confirmation"
                    id="password_confirmation"
                    className='input-auth pr-10'
                    placeholder="Confirm your password"
                    defaultValue={user.password_confirmation}
                    onChange={updateState}
                  />
                  <IoIosEyeOff
                    className={`absolute top-1/2 right-3 transform -translate-y-1/3 hover:cursor-pointer hover:scale-110 ${showPassword ? 'text-blue-600' : 'text-slate-500'}`}
                    onClick={togglePassword}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div>
                <label htmlFor="remember" className="">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 border-slate-200 focus:bg-blue-600"
                    defaultChecked={terms}
                    onChange={() => setTerms(!terms)}
                  />
                  Aceptar Términos y Condiciones
                </label>
              </div>
              <div>
                <Link to="/olvide-password" className="font-medium text-blue-600">Recuperar Contraseña?</Link>
              </div>
            </div>

            {
              !loading ?
                <button className={` btn-action ${isDisabled() ? 'opacity-40' : ''} `} >
                  <IoLogIn className="w-6 h-6" />
                  <span>Registrar</span>
                </button>
                :
                <Spinner />
            }

            <p className="text-center">¿Ya tienes cuenta?{' '}
              <Link
                to='/login'
                className="text-blue-600 font-medium inline-flex space-x-1 items-center"
              >
                <span> Inicia Sesion</span>
                <LuExternalLink className="w-4 h-4" />
              </Link>
            </p>

          </div>
        </form>

      </div >
    </Layout >

  )
}

export default Register