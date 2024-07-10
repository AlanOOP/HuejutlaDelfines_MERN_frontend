import React from 'react'
import AdminLayout from './layout/AdminLayout'
import { Link } from 'react-router-dom'
import { IoIosAddCircle } from 'react-icons/io'

const Noticias = () => {
    return (
        <AdminLayout>
            <section className="container mx-auto bg-slate-50">
                <h1 className="text-center text-3xl font-bold text-slate-600 mt-10">Administra Las Noticias</h1>

                {/* Link agregar nueva imagen */}


                <p className="text-center  my-4 mx-2">
                    Aqui podras administrar las noticias de la pagina web
                </p>

                <div className="flex my-2 mx-10">
                    <div className="p-2">
                        <Link to='/admin/add-news' className="btn-action p-2">
                            <IoIosAddCircle className="text-2xl" />
                            Agregar Noticias
                        </Link>
                    </div>
                </div>

                <div className="">
                    <div className="col-span-1 overflow-auto bg-slate-50 shadow-lg p-4">
                        <table className="table-auto border w-full my-2">
                            <thead>
                                <tr>
                                    <th className="px-2 py-2 border text-gray-600">No.</th>
                                    <th className="px-2 py-2 border text-gray-600">Titulo</th>
                                    <th scope="col" className="px-2 py-2 border text-gray-600">Fecha</th>
                                    <th className="px-2 py-2 border text-gray-600">Imagen</th>
                                    <th className="px-2 py-2 border text-gray-600">Acciones</th>
                                    <th scope="col" className="px-2 py-2 border text-gray-600">Ver</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* {
                                    blogs.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-sm text-gray-600 mt-2">No hay noticias</td>
                                        </tr>
                                    ) : (
                                        blogs.map((blog, index) => (
                                            <tr key={index}>
                                                <td className="px-2 py-2 border text-center">
                                                    {index + 1}
                                                </td>
                                                <td className="px-2 py-2 border text-center">
                                                    {blog.title}
                                                </td>
                                                <td className="px-2 py-2 border text-center">
                                                    {blog.date}

                                                </td>
                                                <td className="px-2 py-2 border flex items-center justify-center">
                                                    <img src={blog.img} alt={blog.title} className="w-16 h-16 object-cover" />
                                                </td>
                                                <td className="px-2 py-2 border">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link to={`/admin/edit-news/${blog._id}`} className="">
                                                            <TiEdit className="text-2xl text-blue-600" />
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(blog._id)}
                                                            className="hover:scale-105 transition-all ease-in-out duration-300"
                                                        >
                                                            <RiDeleteBin6Line className="text-2xl text-red-600" />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-2 py-2 border text-center">
                                                    <Link to={`/new-item/${blog._id}`} className="btn-action p-2">
                                                        Ver
                                                    </Link>
                                                </td>
                                            </tr>
                                        )))

                                } */}
                            </tbody>
                        </table>

                    </div>
                </div>

            </section>
        </AdminLayout>
    )
}

export default Noticias