import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { BiLeftArrowAlt } from "react-icons/bi";
import { TbCheck } from "react-icons/tb";
import useAuth from '../hooks/useAuth';
import clienteAxios from '../config/clientAxios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Spinner from '../components/Spinner';
import { FaCcPaypal } from "react-icons/fa6";

const Payment = () => {

    const { user } = useAuth();

    const [client, setClient] = useState({})
    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(false);
    const [payment, setPayment] = useState({});

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        const getClient = async () => {
            try {
                const { data } = await clienteAxios.get(`/student/user/${user._id}`);
                setClient(data);

            } catch (error) {
                console.log(error);
            }
        }

        const getCourse = async () => {
            try {
                const { data } = await clienteAxios.get(`/courses/${id}`);
                setCourse(data);

            } catch (error) {
                console.log(error);
            }
        }

        if (user && user._id && !client.name) {
            getClient();
        }
        getCourse();

    }, [user, client.name])



    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await clienteAxios.post('/create-order', {
                id_student: client._id,
                id_course: course._id,
                amount: course.price
            });

            setLoading(false)

            console.log(response)

            if (response.status === 200) {
                window.location.href = response.data.links[1].href;
            }


        } catch (error) {
            toast.error(error.response.data);
            setLoading(false)
            console.log(error)
        }
    }

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
                                        <img src={
                                            course && course.image
                                                ? `${import.meta.env.VITE_BACKEND_URL}/uploads/${course.image[0]}`
                                                : 'https://via.placeholder.com/150'
                                        }
                                            alt="course"
                                            className='w-20 h-20 md:w-48 md:h-44 rounded-sm'
                                        />
                                        <div>
                                            <p className='tetx-lg md:ml-6 truncate font-bold'>
                                                {course && course.title}
                                            </p>
                                            <p className='md:ml-6 font-semibold text-gray-600 text-md'>
                                                $  {course && course.price}
                                            </p>
                                            <p className='md:ml-6 font-semibold text-gray-600 text-md'>
                                                Cantidad: 1
                                            </p>
                                            <p className='md:ml-6 font-semibold text-gray-600 text-md'>
                                                {
                                                    course && course.cupos > 0 ? 'Disponible' : 'No Disponible'
                                                }
                                            </p>
                                        </div>

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

                        <form
                            onSubmit={handlePayment}
                            className='p-4 md:p-8'
                        >
                            <div className="flex flex-col py-2">
                                <label htmlFor="nombre" className="pb-2">
                                    Nombre:
                                </label>
                                <input
                                    defaultValue={client && client.name}
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
                                    defaultValue={user && user.email}
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
                                    defaultValue={'Huejutla de Reyes, Hidalgo, México'}
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
                                    defaultValue={client && client.phone}
                                    type="number"
                                    id="phone"
                                    className="border px-4 py-2"
                                    placeholder="+52"
                                />
                            </div>

                            <div id="dropin-container"></div>


                            {
                                !loading ?
                                    (
                                        <button
                                            className="btn-action"
                                        >
                                            <FaCcPaypal className="w-6 h-6" />
                                            <span>Pagar</span>
                                        </button>
                                    ) : <Spinner />
                            }
                        </form>
                    </div>
                </div>
            </section>



        </Layout >
    )
}

export default Payment