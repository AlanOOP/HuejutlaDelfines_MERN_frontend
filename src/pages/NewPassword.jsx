import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link, useParams } from 'react-router-dom';
import { IoLogIn } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { isEmail, isPassword } from '../utils/Regex';
import clienteAxios from '../config/clientAxios';
import { toast } from 'react-toastify';



const NewPassword = () => {

    const { token } = useParams();

    const [user, setUser] = useState({
        password: '',
        password_confirmation: '',
    });

    const updateState = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    

    const isValidated = () => {
        if (user.password === '' || user.password_confirmation === '') {
            toast.error('Todos los campos son obligatorios')
            return false;
        }

        if (!isPassword(user.password)) {
            toast.error('La contraseña no es valida')
            return false;
        }

        if (user.password !== user.password_confirmation) {
            toast.error('Las contraseñas no coinciden')
            return false;
        }

        return true
    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidated()) return;

        //olvide password 

        try {
            const response = await clienteAxios.post(`/olvide-password/${token}`, { password: user.password });

            console.log(response.data.message);

            console.log(response.data);
            toast.success(response.data.message);
            setUser({
                password: '',
                password_confirmation: '',
            });

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        }
    }

    return (
        <Layout>
            <div className="container mx-auto my-16">

                <div className="max-w-lg mx-auto  bg-white p-8 rounded-xl shadow shadow-slate-300 my-16">
                    <h1 className="text-4xl font-bold text-dark-hard text-center">Recuperar contraseña</h1>

                    <form
                        className="mt-10"
                        onSubmit={handleSubmit}
                    >


                        <div className="mb-5">
                            <label htmlFor="password" className="font-medium text-slate-700 pb-2">Contraseña:</label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="input-auth"
                                    placeholder="Contraseña"
                                    name="password"
                                    value={user.password}
                                    onChange={updateState}
                                />
                                <IoIosEyeOff
                                    className='absolute top-1/2 right-3 transform -translate-y-1/3 hover:cursor-pointer hover:scale-110'
                                    onClick={togglePassword}
                                />
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="password_confirmation" className="font-medium text-slate-700 pb-2">Confirmar contraseña:</label>

                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password_confirmation"
                                    className="input-auth"
                                    placeholder="Confirmar contraseña"
                                    name="password_confirmation"
                                    value={user.password_confirmation}
                                    onChange={updateState}
                                />
                                <IoIosEyeOff
                                    className='absolute top-1/2 right-3 transform -translate-y-1/3 hover:cursor-pointer hover:scale-110'
                                    onClick={togglePassword}
                                />
                            </div>
                        </div>

                        <button className="btn-action">
                            <IoLogIn className="w-6 h-6" />
                            <span>Enviar</span>
                        </button>

                    </form>
                </div>

            </div>

        </Layout>
    )
}

export default NewPassword