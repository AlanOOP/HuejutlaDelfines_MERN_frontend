import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { BiLeftArrowAlt } from "react-icons/bi";
import { TbCheck } from "react-icons/tb";
import useDelf from '../hooks/useDelf';
import clienteAxios from '../config/clientAxios';

const Payment = () => {

    const [user, setUser] = useState({});
    console.log(user.email);

    useEffect(() => {

        const getPayment = async () => {
            const token = localStorage.getItem('token');

            if (!token) return;

            try {
                const response = await clienteAxios.get('/user/profile', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(response.data.user); // Assign the response data to setUser


            } catch (error) {
                console.log(error);
            }
        }

        if (!user.email) {
            getPayment();
        }

    }, [user.email]) // Add user.email as a dependency to run the effect only when it changes



    return (
        <Layout>

            <div className="flex justify-center mt-8 flex-col gap-5 p-5 md:col-span-2 bg-gradient-to-tr from-sky-800 to-blue-400 ">
                <h1 className="text-3xl text-center font-extrabold md:text-4xl lg:text-5xl xl:text-6xl bg-opacity-10 rounded py-2 text-slate-100">
                    Inscripción
                </h1>

            </div>

            <section className='mx-4 mt-16 md:mx-12 md:mt-32 lg:mt-24'>
                {/* Course List */}
                <div className='flex flex-col md:flex md:space-x-2 md:flex-row'>
                    {/* Curso */}
                    <div className='md:w-1/2'>
                        <div className='grid grid-cols-2 md:grid-cols-1'>
                            <div className='col-span-1 m-2 md:py-6 md:border-t md:border-b md:my-2 md:mx-0 md:flex md:items-center md:justify-between '>

                                <div className='md:flex flex-col md:items-center md:space-x-4'>
                                    <div className='flex ml-10 sm:flex-row flex-col'>
                                        <img src="https://www.ccnatacion.com/wp-content/uploads/2023/11/entrenamiento-de-natacion.jpg" alt="" className='cursor-pointer md:h-20 md:w-20 object-cover object-center' />
                                        <p className='tetx-lg md:ml-6 truncate font-bold'>
                                            Curso de Natación
                                        </p>
                                        <p className='md:ml-6 font-semibold text-gray-600 text-md'>
                                            Precio : $500.00
                                        </p>
                                        <p className='md:ml-6 font-semibold text-gray-600 text-md'>
                                            Cantidad: 1
                                        </p>
                                        <p className='md:ml-6 font-semibold text-gray-600 text-md'>
                                            Subtotal : $500.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment */}

                    <div className='w-full order-first md:order-last md:w-1/2'>
                        <div className='flex justify-center bg-yellow-400 p-2'>
                            <h2 className='text-2xl font-semibold text-center md:text-left  text-gray-700 ' >
                                Detalles de Pago
                            </h2>
                        </div>

                        <form className='p-4 md:p-8'>
                            <div className="flex flex-col py-2">
                                <label htmlFor="nombre" className="pb-2">
                                    {user && user.email}
                                </label>
                                <input
                                    defaultValue={user && user.name}
                                    type="text"
                                    id="nombre"
                                    className="border px-4 py-2"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label htmlFor="correo" className="pb-2">
                                    Correo:
                                </label>
                                <input

                                    type="text"
                                    id="correo"
                                    className="border px-4 py-2"
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label htmlFor="address" className="pb-2">
                                    Dirección:
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    className="border px-4 py-2"
                                    placeholder="Dirección"
                                />
                            </div>
                            <div className="flex flex-col py-2 mb-2">
                                <label htmlFor="phone" className="pb-2">
                                    Numero de Teléfono:
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    className="border px-4 py-2"
                                    placeholder="+52"
                                />
                            </div>

                            <div id="dropin-container"></div>


                            <button
                                className="w-full px-4 py-2 text-center text-white font-semibold cursor-pointer"
                                style={{ background: "#303031" }}
                            >
                                Pagar
                            </button>
                        </form>
                    </div>
                </div>
            </section>



        </Layout >
    )
}

export default Payment