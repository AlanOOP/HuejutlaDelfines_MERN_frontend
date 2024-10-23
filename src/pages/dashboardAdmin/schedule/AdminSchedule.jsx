import React, { useEffect, useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import clienteAxios from '../../../config/clientAxios'
import { BiEditAlt } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';

const AdminSchedule = () => {

    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const getSchedules = async () => {
            try {
                const response = await clienteAxios.get('/schedule');
                setSchedules(response.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getSchedules();
    }, []);


    const handleDelete = async (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Una vez eliminado, no podrás recuperar este registro",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await clienteAxios.delete(`/schedule/${id}`);
                    Swal.fire({
                        icon: 'success',
                        title: 'Registro Eliminado',
                        text: 'El registro se ha eliminado correctamente',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Cerrar',
                    });
                    setSchedules(schedules.filter(schedule => schedule._id !== id));
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Hubo un error',
                        text: 'No se pudo eliminar el registro'
                    })
                }
            }
        })
    }

    return (
        <AdminLayout>
            <section className="max-w-5xl mx-auto bg-slate-50">
                <h1 className="text-center text-3xl font-bold text-slate-600 mt-10">Administra los Horarios</h1>

                {/* Link agregar nueva imagen */}


                <p className="text-center  my-4 mx-2">
                    Aqui podras administrar los horarios de la Escuela.
                </p>

                <div className="flex my-2 mx-10">
                    <div className="p-2">
                        <Link to='/admin/dashboard/add-schedule' className="btn-action p-2">
                            <IoIosAddCircle className="text-2xl" />
                            Agregar Horario
                        </Link>
                    </div>
                </div>

                <div className="">
                    <div className="col-span-1 overflow-auto bg-slate-50 shadow-lg p-4">
                        <table className="table-auto border w-full my-2">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-2 py-2 border text-gray-600">No.</th>
                                    <th className="px-2 py-2 border text-gray-600">Día</th>
                                    <th className="px-2 py-2 border text-gray-600">Hora</th>
                                    <th className="px-2 py-2 border text-gray-600">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    schedules.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-sm text-gray-600 mt-2">No hay Horarios</td>
                                        </tr>
                                    ) : (
                                        schedules.map((schedule, index) => (
                                            <tr key={index}>
                                                <td className="px-2 py-2 border text-center">
                                                    {index + 1}
                                                </td>
                                                <td className="px-2 py-2 border text-center">
                                                    {schedule.day}
                                                </td>
                                                <td className="px-2 py-2 border text-center">
                                                    {schedule.hour} PM
                                                </td>
                                                <td className="px-2 py-2 border">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link to={`/admin/edit-news/${schedule._id}`} className="">
                                                            <BiEditAlt className="text-2xl text-blue-600" />
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(schedule._id)}
                                                            className="hover:scale-105 transition-all ease-in-out duration-300"
                                                        >
                                                            <RiDeleteBin6Line className="text-2xl text-red-600" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )))

                                }
                            </tbody>
                        </table>

                    </div>
                </div>

            </section>
        </AdminLayout>
    )
}

export default AdminSchedule