import React, { useEffect, useState } from 'react'
import AdminLayout from '../layout/AdminLayout'
import clienteAxios from '../../../config/clientAxios'
import { IoIosAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';



const AdminInstructors = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {

        const getInstructors = async () => {
            try {
                const response = await clienteAxios.get('/instructor');
                setInstructors(response.data)
                console.log(response.data);

            } catch (error) {
                console.log('Hubo un error', error)
            }
        }

        getInstructors();

    }, [])


    return (
        <AdminLayout>
            <section className="max-w-5xl mx-auto bg-slate-50">
                <h1 className="text-center text-3xl font-bold text-slate-600 mt-10">Administra los Instructores
                </h1>

                {/* Link agregar nueva imagen */}


                <p className="text-center  my-4 mx-2">
                    Aqui podras administrar los instructores de la Escuela.
                </p>

                <div className="flex my-2 mx-10">
                    <div className="p-2">
                        <Link to='/admin/dashboard/add-instructor' className="btn-action p-2">
                            <IoIosAddCircle className="text-2xl" />
                            Agregar Instructor
                        </Link>
                    </div>
                </div>

                <div className="">
                    <div className="col-span-1 overflow-auto bg-slate-50 shadow-lg p-4">
                        <table className="table-auto border w-full my-2">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-2 py-2 border text-gray-600">No.</th>
                                    <th className="px-2 py-2 border text-gray-600">Nombre</th>
                                    <th className="px-2 py-2 border text-gray-600">Teléfono</th>
                                    <th scope="col" className="px-2 py-2 border text-gray-600">Especialidad</th>
                                    <th className="px-2 py-2 border text-gray-600">Correo</th>
                                    <th className="px-2 py-2 border text-gray-600">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    instructors.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-sm text-gray-600 mt-2">No hay noticias</td>
                                        </tr>
                                    ) : (
                                        instructors.map((instructor, index) => (
                                            <tr key={index}>
                                                <td className="px-2 py-2 border text-center">
                                                    {index + 1}
                                                </td>
                                                <td className="px-2 py-2 border text-center">
                                                    {instructor.name} {instructor.lastName}
                                                </td>
                                                <td className="px-2 py-2 border text-center">
                                                    {instructor.phone}

                                                </td>
                                                <td className="px-2 py-2 border text-center">
                                                    {instructor.speciality}
                                                </td>
                                                <td className="px-2 py-2 border text-center">
                                                    {instructor?.user?.email}
                                                </td>
                                                {/* <td className="px-2 py-2 border flex items-center justify-center">
                                                    <img src={instructor.img} alt={instructor.title} className="w-16 h-16 object-cover" />
                                                </td> */}
                                                <td className="px-2 py-2 border">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link to={`/admin/edit-news/${instructor._id}`} className="">
                                                            <BiEditAlt className="text-2xl text-blue-600" />
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(instructor._id)}
                                                            className="hover:scale-105 transition-all ease-in-out duration-300"
                                                        >
                                                            <RiDeleteBin6Line className="text-2xl text-red-600" />
                                                        </button>
                                                    </div>
                                                </td>
                                                {/* <td className="px-2 py-2 border text-center">
                                                    <Link to={`/new-item/${instructor._id}`} className="btn-action p-2">
                                                        Ver
                                                    </Link>
                                                </td> */}
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

export default AdminInstructors