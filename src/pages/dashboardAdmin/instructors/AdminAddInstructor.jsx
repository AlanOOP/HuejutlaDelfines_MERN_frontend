import React, { useState } from 'react'
import AdminLayout from '../layout/AdminLayout'
import { toast } from 'react-hot-toast'
import clienteAxios from '../../../config/clientAxios'
import { useNavigate } from 'react-router-dom'

const AdminAddInstructor = () => {

    const [instructor, setInstructor] = useState({
        name: '',
        lastName: '',
        password: '',
        email: '',
        phone: '',
        age: '',
        speciality: '',
    })

    console.log(instructor);
    const navigate = useNavigate();

    const updateState = e => {
        setInstructor({
            ...instructor,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (instructor.name === '' || instructor.lastName === '' || instructor.email === '' || instructor.password === '' || instructor.phone === '' || instructor.age === '' || instructor.speciality === '') {
                toast.error('Todos los campos son obligatorios');
                return;
            }


            const response = await clienteAxios.post('/instructor', instructor);
            console.log(response);

            if (response.status === 200) {
                toast.success('Instructor Agregado');
                navigate('/admin/dashboard/instructors');
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

                    <h1 className="text-4xl font-extrabold text-center text-dark-hard">Instructor Nuevo</h1>

                    <form
                        className="w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className='flex space-x-5 py-4'>
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="name" className='font-bold text-slate-700 pb-2'>Nombre: </label>
                                <input
                                    name='name'
                                    defaultValue={instructor.name}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="text"
                                />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="lastName" className='font-bold text-slate-700 pb-2'>Apellido: </label>
                                <input
                                    name='lastName'
                                    defaultValue={instructor.lastName}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="text"
                                />
                            </div>


                        </div>



                        <div className="flex space-x-5 py-4">
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="email" className='font-bold text-slate-700 pb-2'>Email: </label>
                                <input
                                    name='email'
                                    defaultValue={instructor.email}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="email"
                                />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="password" className='font-bold text-slate-700 pb-2'>Contraseña: </label>
                                <input
                                    name='password'
                                    defaultValue={instructor.password}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="password"
                                />
                            </div>

                        </div>
                        <div className="flex space-x-5 py-4">
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="phone" className='font-bold text-slate-700 pb-2'>Teléfono: </label>
                                <input
                                    name='phone'
                                    defaultValue={instructor.phone}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="tel"
                                />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="age" className='font-bold text-slate-700 pb-2'>Edad: </label>
                                <input
                                    name='age'
                                    defaultValue={instructor.age}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="number"
                                />
                            </div>

                        </div>
                        <div className="flex space-x-5 py-4">
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Categoria: </label>
                                {/* selecy con opciones de principiante intermedio  */}
                                <select
                                    name='speciality'
                                    defaultValue={instructor.speciality}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                >
                                    <option value="">Ninguno</option>
                                    <option value="Principiante">Principiante</option>
                                    <option value="Intermedio">Intermedio</option>
                                    <option value="Avanzado">Avanzado</option>
                                </select>
                            </div>

                        </div>



                        <div className='flex justify-end mt-2'>
                            <input
                                type="submit"
                                className={`w-2/12 p-3 font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center `}
                                value="Agregar Instructor"
                            // disabled={validateButton()}
                            />
                        </div>

                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminAddInstructor;