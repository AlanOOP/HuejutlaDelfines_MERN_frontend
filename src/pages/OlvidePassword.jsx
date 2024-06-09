import { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { IoLogIn } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";
import { isEmail } from '../utils/Regex';
import clienteAxios from '../config/clientAxios';
import { toast } from 'react-toastify';
import Breadcrumb from '../components/Breadcrumb';
// import Spinner from '../components/Spinner';

const OlvidePassword = () => {

    const [user, setUser] = useState({
        email: '',
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

        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidated()) return;

        //olvide password 
        try {
            const response = await clienteAxios.post('/olvide-password', user);
            toast.success(response.data.message)
        } catch (error) {
            toast.warn(error.response.data.message)
            console.error(error);
        }
    }

    return (
        <Layout>
            <div className='flex container mx-auto justify-center'>
                <Breadcrumb
                    path={'Olvide password'}
                />
            </div>
            <div className="container mx-auto my-16">


                <div className="max-w-lg mx-auto  bg-white p-8 rounded-xl shadow shadow-slate-300 my-16">
                    <h1 className="text-4xl font-bold text-dark-hard text-center">Recuperar contraseña</h1>

                    <form
                        className="mt-10"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-5">
                            <label htmlFor="email" className="font-medium text-slate-700 pb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="input-auth"
                                placeholder="Email"
                                name="email"
                                value={user.email}
                                onChange={updateState}
                            />
                        </div>

                        <button className="btn-action">
                            <IoLogIn className="w-6 h-6" />
                            <span>Enviar</span>
                        </button>
                        <p className="text-center my-2">Ya tienes cuenta?
                            <Link
                                to='/register'
                                className="text-blue-600 font-medium inline-flex space-x-1 items-center"
                            >
                                <span>Inicia Sesión </span>
                                <LuExternalLink className="w-4 h-4" />
                            </Link>
                        </p>
                        <p className="text-center my-2">Aún no tienes cuenta?
                            <Link
                                to='/register'
                                className="text-blue-600 font-medium inline-flex space-x-1 items-center"
                            >
                                <span>Registrate Ahora </span>
                                <LuExternalLink className="w-4 h-4" />
                            </Link>
                        </p>
                    </form>
                </div>

            </div>
        </Layout>
    )
}

export default OlvidePassword