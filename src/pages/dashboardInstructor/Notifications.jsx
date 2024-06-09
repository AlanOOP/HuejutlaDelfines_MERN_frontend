import React, { useState } from 'react'
import LayoutInstructor from './LayoutInstructor'
import clienteAxios from '../../config/clientAxios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {

    const navigate = useNavigate();

    const [notification, setNotification] = useState({
        title: '',
        message: '',
        time: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (notification.title === '' || notification.message === '' || notification.time === '') {
            return toast.error('Por favor complete todos los campos');
        }

        try {
            const response = await clienteAxios.post('/notification', notification);

            if (response.status === 200) {
                toast.success('Notificación creada');
                setNotification({
                    title: '',
                    message: '',
                    time: ''
                })

                //volver a cargar el sitio 
                window.location.reload();
            }

            toast.error('Hubo un error al crear la notificación');

        } catch (error) {
            toast.error('Error del servidor');
        }
    }



    return (
        <LayoutInstructor>
            <section className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
                <div className="shadow-lg border">
                    <h1 className="py-4 px-4 text-3xl font-bold text-center text-blue-600">
                        Notificaciones de Entrenamientos
                    </h1>
                    <hr />

                    <div>
                        {/* formulario para agregar notificacion : mensaje y como para los horarios */}
                        <form className="flex flex-col w-full md:w-8/12 mx-auto my-4" onSubmit={handleSubmit}>

                            <div className='w-full flex flex-col space-y-4'>
                                <label className="text-xl font-semibold text-blue-600" htmlFor="title">
                                    Título:
                                </label>
                                <input
                                    className="border border-gray-300 p-2"
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Título de la notificación"
                                    value={notification.title}
                                    onChange={(e) => setNotification({ ...notification, title: e.target.value })}
                                />
                            </div>

                            <div className='w-full flex flex-col space-y-4 mt-5'>
                                <label className="text-xl font-semibold text-blue-600" htmlFor="time">
                                    Horario:
                                </label>
                                {/* select con opciones de las horas */}
                                <select
                                    className="border border-gray-300 p-2"
                                    name="time"
                                    id="time"
                                    value={notification.time}
                                    onChange={(e) => setNotification({ ...notification, time: e.target.value })}
                                >
                                    <option value=""> -- Seleccione una opción </option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                </select>
                            </div>
                            <div className='w-full flex flex-col mt-5 space-y-4'>
                                <label className="text-xl font-semibold text-blue-600" htmlFor="message">
                                    Mensaje:
                                </label>
                                <textarea
                                    className="border border-gray-300 p-2"
                                    name="message"
                                    id="message"
                                    placeholder="Escriba el mensaje de notificación"
                                    value={notification.message}
                                    onChange={(e) => setNotification({ ...notification, message: e.target.value })}
                                >
                                </textarea>
                            </div>

                            <button
                                className="mt-10 bg-blue-600 text-white font-semibold p-2  hover:text-gray-100 transition-all duration-300 ease-out hover:bg-blue-500"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </LayoutInstructor>
    )
}

export default Notifications