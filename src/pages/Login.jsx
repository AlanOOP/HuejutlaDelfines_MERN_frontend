import { useState } from 'react';
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail, isPassword } from '../utils/Regex';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";
import useAuth from '../hooks/useAuth';
import clienteAxios from '../config/clientAxios';
// import { toast } from 'react-toastify';
import { toast } from 'react-hot-toast';
// import Spinner from '../components/Spinner';
import Breadcrumb from '../components/Breadcrumb';
import { IoIosEyeOff } from "react-icons/io";
import { Turnstile } from '@marsidev/react-turnstile'




const Login = () => {

    const navigate = useNavigate();

    const { auth, setAuth } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);
    const [attempt, setAttempt] = useState(0);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const updateState = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const isValidated = () => {

        if (user.email === '' || user.password === '') {
            toast.error('Todos los campos son obligatorios')
            return false;
        }

        if (!isEmail(user.email)) {
            toast.error('El email no es valido')
            return false;
        }

        if (!isPassword(user.password)) {
            toast.error('La contraseña no es valida')
            return false;
        }
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidated()) return;
        try {
            const response = await clienteAxios.post('/singUp', user);
            // console.log(response.data);

            const { token } = response.data.user;

            setAuth({
                token: token,
                auth: true,
            });
            localStorage.setItem('token', token);
            console.log(token);

            toast.success('Bienvenido a Huejutla Delfines');


            setTimeout(() => {
                navigate('/');
            }, 3000);

        } catch (error) {
            toast.error(error.response.data);
            setAttempt(attempt + 1);
        }
    }


    return (
        <Layout>

            <div className='flex container mx-auto justify-center'>
                <Breadcrumb
                    path={'Inicio de sesión'}
                />
            </div>


            <div className="max-w-lg mx-auto  bg-white p-8 rounded-xl shadow shadow-slate-300 my-16  from-sky-800 to-blue-100">

                <h1 className="text-4xl font-medium text-center">Login</h1>
                <p className="text-slate-500 font-bold">Hola, Bienvenido 👋</p>

                {
                    attempt >= 3 && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-5" role="alert">
                            <p className="font-bold">Usuario Bloqueado</p>
                            <p>Has excedido el número de intentos permitidos, tu cuenta ha sido bloqueada por 1 hora.</p>
                        </div>
                    )
                }

                <div className="my-5 flex gap-x-2 sm:flex-row flex-col">
                    <button className="btn-auth">
                        <FcGoogle className='w-6 h-6' /> <span>Continua con Google</span>
                    </button>
                    <button className="btn-auth">

                        <FaFacebook className="w-6 h-6 text-blue-700" /><span>Continua con Facebook</span>
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="my-5"
                >
                    <div className="flex flex-col space-y-5">
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
                        <div >
                            <label htmlFor="password" className="font-medium text-slate-700 pb-2">Contraseña:</label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password" className='input-auth'
                                    placeholder="Ingrese su Contraseña"
                                    defaultValue={user.password}
                                    onChange={updateState}
                                />
                                <IoIosEyeOff
                                    className={`absolute top-1/2 right-3 transform -translate-y-1/3 hover:cursor-pointer hover:scale-110 ${showPassword ? 'text-blue-600' : 'text-slate-500'}`}
                                    onClick={togglePassword}
                                />

                            </div>
                        </div>

                        {/* o inicie sesion con */}

                        <div className='flex items-center justify-center'>
                            {
                                // Widget()
                                // < Turnstile siteKey={import.meta.env.VITE_TURNSTILE} />
                            }
                        </div>

                        <div clascosName="flex flex-row justify-between">
                            <div>
                                <label htmlFor="remember" className="">
                                    <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-blue-600" />
                                    Recordar contraseña
                                </label>
                            </div>
                            <div>
                                <Link to='/olvide-password' className="font-medium text-blue-600">Recuperar Contraseña?</Link>
                            </div>
                        </div>
                        <button className="btn-action">
                            <IoLogIn className="w-6 h-6" />
                            <span>Login</span>
                        </button>
                        {/* <Spinner /> */}
                        <p className="text-center">Aún no tienes cuenta?
                            <Link
                                to='/register'
                                className="text-blue-600 font-medium inline-flex space-x-1 items-center"
                            >
                                <span>Registrate Ahora </span>
                                <LuExternalLink className="w-4 h-4" />
                            </Link>
                        </p>
                    </div>
                </form>


            </div>


        </Layout>
    )
}

export default Login