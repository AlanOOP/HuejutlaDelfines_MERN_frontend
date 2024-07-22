import React, { useState } from 'react'
import AdminLayout from '../layout/AdminLayout'
import clienteAxios from '../../../config/clientAxios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminAddSchedule = () => {

    const [schedule, setSchedule] = useState({
        day: '',
        hour: ''
    });

    const navigate = useNavigate();

    const updateState = e => {
        setSchedule({
            ...schedule,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (schedule.day === '' || schedule.hour === '') {
                toast.error('Todos los campos son obligatorios');
                return;
            }

            const response = await clienteAxios.post('/schedule', schedule);
            console.log(response);

            if (response.status === 200) {
                toast.success('Horario Agregado');
                setTimeout(() => {
                    navigate('/admin/dashboard/schedule');
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            toast.error('Hubo un Error');
        }
    }

    return (
        <AdminLayout>
            <div className=''>

            </div>
            <div className='flex items-center justify-center mt-5'>
                <div className="mt-32 md:mt-0 relative w-11/12 md:w-5/6 bg-white p-8 rounded-lg shadow shadow-slate-300 flex flex-col items-center space-y-4 px-4 py-4 md:px-8">

                    <h1 className="text-4xl font-extrabold text-center text-slate-600">Horario Nuevo</h1>

                    <form
                        className="w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className='flex space-x-5 py-4'>
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="day" className='font-bold text-slate-700 pb-2'>Día: </label>
                                <input
                                    name='day'
                                    defaultValue={schedule.day}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="text"
                                />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="hour" className='font-bold text-slate-700 pb-2'>Hora: </label>
                                <input
                                    name='hour'
                                    defaultValue={schedule.hour}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className='flex justify-end mt-2'>
                            <input
                                type="submit"
                                className={`w-2/12 p-3 font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center `}
                                value="Agregar Horario"
                            // disabled={validateButton()}
                            />
                        </div>

                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminAddSchedule