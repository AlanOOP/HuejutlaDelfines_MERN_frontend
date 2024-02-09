import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import clienteAxios from '../config/clientAxios';
import { Link, useParams } from 'react-router-dom';


const Confirmar = () => {

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
                console.log(error);
                setMensaje(error.response.data.message);
                setError(true);
            }
        }
        confirmarCuenta();
    }, []);

    return (
        <Layout>

            <div className="container h-screen flex items-center justify-center">
                <div className="row">
                    <div className="col-md-12 text-center my-10">
                        {
                            error ? (
                                <h1 className='bg-[#FED7D7] p-4 border-l-4 border-solid border-[#C53030] text-red-700'>{mensaje}</h1>
                            ) : (
                                <h1 className=' bg-[#D1FAE5] p-4 border-l-4 border-solid border-[#10B981] text-green-700'>
                                    Confirmado Correctamente
                                </h1>
                            )
                        }
                    </div>
                    <Link to="/login" className="rounded-md cursor-pointer p-4 bg-blue-800 flex items-center text-gray-100 text-sm font-semibold uppercase justify-center">Iniciar Sesion</Link>
                </div>
            </div>

        </Layout>
    )
}

export default Confirmar