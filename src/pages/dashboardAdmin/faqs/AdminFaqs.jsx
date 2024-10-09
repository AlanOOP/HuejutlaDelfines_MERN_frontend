import React, { useEffect, useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import clienteAxios from '../../../config/clientAxios';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CiEdit } from "react-icons/ci";
import Swal from 'sweetalert2';

const AdminFaqs = () => {

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {

        const getFaqs = async () => {
            try {
                const response = await clienteAxios.get('/faq');
                setFaqs(response.data)

            } catch (error) {
                console.log('Hubo un error', error)
            }
        }

        getFaqs();

    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Una vez eliminado no se podra recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si, Eliminar!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await clienteAxios.delete(`/faq/${id}`);
                    console.log(response);

                    if (response.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            'La pregunta ha sido eliminada.',
                            'success',

                        )
                        const newFaqs = faqs.filter(faq => faq._id !== id);
                        setFaqs(newFaqs);
                    }

                } catch (error) {
                    console.log('Hubo un error', error)
                }
            }
        })
    }

    return (
        <AdminLayout>
            <section className="max-w-5xl mx-auto bg-slate-50">
                <h1 className="text-center text-3xl font-bold text-slate-600 mt-10">Administra las Preguntas Frecuentes
                </h1>

                {/* Link agregar nueva imagen */}


                <p className="text-center  my-4 mx-2">
                    Aqui podras administrar las preguntas frecuentes de la plataforma
                </p>

                <div className="flex my-2 mx-10">
                    <div className="p-2">
                        <Link to='/admin/dashboard/add-faq' className="btn-action p-2">
                            <IoIosAddCircle className="text-2xl" />
                            Agregar Pregunta
                        </Link>
                    </div>
                </div>

                <div className="">
                    <div className="col-span-1 overflow-auto bg-slate-50 shadow-lg p-4">
                        <table className="table-auto border w-full my-2">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-2 py-2 border text-gray-600">No.</th>
                                    <th className="px-2 py-2 border text-gray-600">Pregunta</th>
                                    <th className="px-2 py-2 border text-gray-600">Respuesta</th>

                                    <th className="px-2 py-2 border text-gray-600">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    faqs.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-sm text-gray-600 mt-2">No hay noticias</td>
                                        </tr>
                                    ) : (
                                        faqs.map((faq, index) => (
                                            <tr key={index}>
                                                <td className="px-2 py-2 border text-center">
                                                    {index + 1}
                                                </td>
                                                <td className="px-2 py-2 border text-center">
                                                    {faq.name} {faq.question}
                                                </td>
                                                <td className="px-2 py-2 border text-center">
                                                    {faq.answer}

                                                </td>

                                                {/* <td className="px-2 py-2 border flex items-center justify-center">
                                                    <img src={faq.img} alt={faq.title} className="w-16 h-16 object-cover" />
                                                </td> */}
                                                <td className="px-2 py-2 border">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link to={`/admin/dashboard/edit-faq/${faq._id}`} className="">
                                                            <CiEdit className="text-2xl text-blue-600" />
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(faq._id)}
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

export default AdminFaqs