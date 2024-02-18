import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import clienteAxios from '../config/clientAxios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import OTPVerification from './OTPVerification';


const Confirmar = () => {

    const navigate = useNavigate();

    const [error, setError] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const { token } = useParams();


    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const response = await clienteAxios.get(`/confirm/${token}`);

                setMensaje(response.data.message);

                setError(false);
            } catch (error) {

                setMensaje(error.response.data.message);
                setError(true);
                // setTimeout(() => {
                //     navigate('/');
                // }, 3000);
            }
        }
        confirmarCuenta();
    }, []);



    return (
        <Layout>

            <div className="flex container mx-auto h-screen items-center justify-center">
                <div className="">

                    <h1 className="text-3xl font-bold text-center my-10 leading-snug">Confirmar Cuenta</h1>

                    <div className="text-center w-full">
                        <OTPVerification token={token} />
                    </div>
                    {/* <Link to="/login" className="rounded-md cursor-pointer p-4 bg-blue-800 flex items-center text-gray-100 text-sm font-semibold uppercase justify-center">Iniciar Sesion</Link> */}
                </div>
            </div>

        </Layout>
    )
}

export default Confirmar