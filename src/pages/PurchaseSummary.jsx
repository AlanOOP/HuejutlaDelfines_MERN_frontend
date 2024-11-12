import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string';
import clienteAxios from '../config/clientAxios';
import Spinner from '../components/Spinner';
import iconmuyfacil from '../assets/icons/muyfacil.png';
import iconfacil from '../assets/icons/facil.png';
import iconregular from '../assets/icons/regular.png';
import icondificil from '../assets/icons/dificil.png';
import iconmuydificil from '../assets/icons/muydificil.png';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const PurchaseSummary = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const { user } = useAuth()

    const handleFeedback = async (point) => {

        setLoading(true);
        try {
            const response = await clienteAxios.post('/feedback', { point, userId: user._id });
            console.log(response.data);
            setLoading(false);
            if (response.status === 201) {
                toast.success('Gracias por tu feedback');
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    if (user) return (
        <Layout>
            <div className="flex justify-center mt-8 flex-col gap-5 p-5 ">
                <h1 className="text-2xl text-center font-extrabold md:text-3xl lg:text-4xl xl:text-5xl bg-opacity-10 rounded py-2 text-slate-700">
                    Resumen de compra
                </h1>

                <p className='my-2 text-blue-700 text-5xl text-center font-bold '>
                    ¡Gracias por tu compra!
                </p>
            </div>

            <section className='my-10 flex flex-col justify-center mx-auto max-w-2xl'>

                {
                    loading ? (
                        <Spinner />
                    ) : (
                        <div className='shadow-md p-5'>
                            <p className='font-black text-3xl font-poppins text-slate-600 text-center'>¿Qué tan fácil fue el proceso de inscripción?</p>
                            <div className='mt-10 flex justify-around space-x-2'>
                                <button className='' onClick={() => handleFeedback(5)}>
                                    <img src={iconmuyfacil} alt="icono muy facil" className='mx-auto w-12 h-12 home-img hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 ' />
                                    <p className='mt-2 font-poppins font-bold tex-xl text-blue-600 text-center'>Muy Facíl</p>
                                </button>
                                <button className='' onClick={() => handleFeedback(4)}>
                                    <img src={iconfacil} alt="icono facil" className='mx-auto w-12 h-12 home-img hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 ' />
                                    <p className='mt-2 font-poppins font-bold tex-xl text-blue-600 text-center'>Facíl</p>
                                </button>
                                <button className='' onClick={() => handleFeedback(3)}>
                                    <img src={iconregular} alt="icono regular" className='mx-auto w-12 h-12 home-img hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 ' />
                                    <p className='mt-2 font-poppins font-bold tex-xl text-blue-600 text-center'>Regular</p>
                                </button>
                                <button className='' onClick={() => handleFeedback(2)}>
                                    <img src={icondificil} alt="icono dificil" className='mx-auto w-12 h-12 home-img hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 ' />
                                    <p className='mt-2 font-poppins font-bold tex-xl text-blue-600 text-center'>Difícil</p>
                                </button>
                                <button className='' onClick={() => handleFeedback(1)}>
                                    <img src={iconmuydificil} alt="icono muy dificil" className='mx-auto w-12 h-12 home-img hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 ' />
                                    <p className='mt-2 font-poppins font-bold tex-xl text-blue-600 text-center'>Muy Difícil</p>
                                </button>
                            </div>
                        </div>
                    )
                }
                {/* <div className='mt-5'>
               
                    <div className='shadow-md p-5'>
                        <p className='font-black text-3xl font-poppins text-slate-600 text-center'>¿Qué opinas de la plataforma?</p>
                        <div className='mt-2'>
                            <textarea className='w-full p-5 rounded-md border-2 border-slate-400 focus:border-blue-400' placeholder='Escribe aquí tu opinión' ></textarea>
                        </div>
                        <div className='mt-5'>
                            <button className='bg-blue-400 text-white p-3 rounded-md font-bold'>Enviar</button>
                        </div>
                    </div>

                </div> */}
            </section>
            {/* resumen de pago */}

            {/* <div className="flex justify-center mt-8 flex-col gap-5 p-5 ">
                <h1 className="text-2xl text-center font-extrabold md:text-3xl lg:text-4xl xl:text-5xl bg-opacity-10 rounded py-2 text-slate-700">
                    Resumen de pago
                </h1>

                <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <p className="text-xl">Producto</p>
                        <p className="text-xl">{order?.payer}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-xl">Precio</p>
                        <p className="text-xl">${order?.purchase_units?.[0]?.amount?.value}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-xl">Estado</p>
                        <p className="text-xl">{order?.status}</p>
                    </div>
                </div>
            </div> */}
        </Layout>
    )
}

export default PurchaseSummary