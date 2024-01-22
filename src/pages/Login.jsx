import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail, isPassword } from '../utils/Regex';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";
import useDelf from '../hooks/useDelf';
import clienteAxios from '../config/clientAxios';
import { toast } from 'react-toastify';

const Login = () => {

    const navigate = useNavigate();

    const { auth, setAuth } = useDelf();

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);

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
        return true
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidated()) return;

        try {
            const response = await clienteAxios.post('/singUp', user);
            console.log(response.data);

            const { token } = response.data.user;

            setAuth({
                token: token,
                auth: true,
            });
            localStorage.setItem('token', token);

            toast.success(response.data.message);

            setTimeout(() => {
                navigate('/');
            }, 3000);

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }



    return (

        <Layout>
            <div className="max-w-lg mx-auto  bg-white p-8 rounded-xl shadow shadow-slate-300 my-16">

                <h1 className="text-4xl font-medium text-center">Login</h1>
                <p className="text-slate-500 font-bold">Hola, Bienvenido 👋</p>

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
                                onChange={e => updateState(e)}
                            />
                        </div>
                        <div >
                            <label htmlFor="password" className="font-medium text-slate-700 pb-2">Contraseña:</label>
                            <input
                                type="password"
                                name="password"
                                id="password" className='input-auth'
                                placeholder="Ingrese su Contraseña"
                                defaultValue={user.password}
                                onChange={e => updateState(e)}
                            />
                        </div>
                        <div className="flex flex-row justify-between">
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