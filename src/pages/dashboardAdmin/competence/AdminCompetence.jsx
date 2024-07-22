import React, { useEffect, useState } from 'react'
import clienteAxios from '../../../config/clientAxios'
import AdminLayout from '../layout/AdminLayout'
import Spinner from '../../../components/Spinner'
import { Link } from 'react-router-dom'
import { MdOutlineAddCircle } from 'react-icons/md'
import { BiCategoryAlt, BiEditAlt } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';


const AdminCompetence = () => {

    const [competences, setCompetences] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getCompetences = async () => {
            try {
                setLoading(true);
                const response = await clienteAxios.get('/competences');
                setCompetences(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false); v
                console.log(error);
            }
        };
        getCompetences();
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
                    await clienteAxios.delete(`/competences/${id}`);
                    Swal.fire({
                        title: 'Eliminado',
                        text: 'El registro ha sido eliminado',
                        icon: 'success',
                       
                    });
                    setCompetences(competences.filter(competence => competence._id !== id));
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

            {/* comprobar que se carguen los datos, si no madar la pagina de error */}

            {
                loading ? <Spinner /> :
                    <div className='grid grid-cols-1 space-y-4 p-4'>
                        <div className="mb-10">
                            <div className="flex justify-between">
                                {/* It's open the add product modal */}
                                <Link to="/admin/dashboard/add-competence"
                                    // style={{ background: "#303031" }}
                                    className="rounded-md cursor-pointer p-4 bg-blue-800 flex items-center text-gray-100 text-sm font-semibold uppercase gap-2"
                                >
                                    <MdOutlineAddCircle className='w-6 h-6' />
                                    Agregar Competencia
                                </Link>


                            </div>

                        </div>

                        <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
                            <table className="table-auto border w-full my-2">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border">Titulo</th>
                                        <th className="px-4 py-2 border">Contenido</th>
                                        <th className="px-4 py-2 border">Activo</th>
                                        <th className="px-4 py-2 border">Lugar</th>
                                        <th className="px-4 py-2 border">Fecha</th>
                                        <th className="px-4 py-2 border">Imagen</th>
                                        <th className="px-4 py-2 border">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {competences.map((competence) => (
                                        <tr>
                                            <td className="p-2 text-left underline">
                                                <Link to={`curso-detail/${competence._id}`}>
                                                    {competence.title}
                                                </Link>
                                            </td>
                                            <td className="border">
                                                {/* cortar  */}
                                                {competence.content.length > 100 ? competence.content.slice(0, 50) + '...' : competence.content}
                                            </td>
                                            <td className="p-2 text-center">
                                                {competence.isPublished ? (
                                                    <span className="bg-green-200 text-green-600 rounded-md p-2">
                                                        Activo
                                                    </span>
                                                ) : (
                                                    <span className="bg-red-100 text-red-500 rounded-md px-2 py-1">
                                                        Desactivado
                                                    </span>
                                                )
                                                }
                                            </td>
                                            <td className="p-2 text-center"> {competence.place} </td>
                                            <td className="p-2 text-center"> {competence.date} </td>
                                            <td className="px-2 py-2 border flex items-center justify-center">
                                                <img src={competence.url} alt={competence.title} className="w-16 h-16 object-cover" />
                                            </td>
                                            <td className="p-2">
                                                <div className="flex items-center justify-center gap-2">
                                                    <Link to={`/admin//edit-competence/${competence._id}`} className="">
                                                        <BiEditAlt className="text-2xl text-blue-600" />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(competence._id)}
                                                        className="hover:scale-105 transition-all ease-in-out duration-300"
                                                    >
                                                        <RiDeleteBin6Line className="text-2xl text-red-600" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="text-sm text-gray-600 mt-2">
                                Total de competencias: {competences.length}
                            </div>
                        </div>

                    </div>
            }
        </AdminLayout>
    )
}

export default AdminCompetence