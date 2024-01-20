import React from 'react';

import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { images } from '../constants';



const Login = () => {

    return (

        <Layout>
            <div className="max-w-lg mx-auto my-5 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <h1 className="text-4xl font-medium text-center">Login</h1>
                <p className="text-slate-500 font-bold">Hola, Bienvenido 👋</p>

                <div className="my-5">
                    <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">

                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6 " alt="" /><span>Continua con Google</span>
                    </button>
                    <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">

                        <img src="https://svgrepo.com/show/448224/facebook.svg" className="w-6 h-6 " alt="" /><span>Continua con Facebook</span>
                    </button>
                </div>
                <form action="" className="my-5">
                    <div className="flex flex-col space-y-5">
                        <label for="email">
                            <p className="font-medium text-slate-700 pb-2">Email:</p>
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                            placeholder="Enter email address" 
                            />
                        </label>
                        <label for="password">
                            <p className="font-medium text-slate-700 pb-2">Contraseña</p>
                            <input type="password" name="password" id="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                        </label>
                        <div className="flex flex-row justify-between">
                            <div>
                                <label for="remember" className="">

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
                            <span>Login</span>
                        </button>
                        <p class="text-center">Aún no tienes cuenta?
                            <Link to={'/register'}
                                class="text-blue-600 font-medium inline-flex space-x-1 items-center"
                            >
                                <span>Registrate Ahora </span>
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
    )
}

export default Login