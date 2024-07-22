import React, { useEffect, useState } from 'react'
import AdminLayout from '../layout/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import clienteAxios from '../../../config/clientAxios';
import { toast } from 'react-hot-toast';


const AdminEditCompetence = () => {

    const { id } = useParams();

    const [competence, setCompetence] = useState({
        title: '',
        content: '',
        date: '',
        place: '',
        isPublished: ''
    })

    const navigate = useNavigate();

    console.log(competence);

    const [img, setImg] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);

    const updateState = e => {
        setCompetence({
            ...competence,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const getCompetence = async () => {
            try {
                const response = await clienteAxios.get(`/competences/${id}`);
                setCompetence(response.data);
                setImg(response.data?.url);

            } catch (error) {
                console.log(error);
            }
        }
        getCompetence();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (competence.title === '' || competence.content === '' || competence.date === '' || competence.place === '' || competence.isPublished === '') {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        const formData = new FormData();
        formData.append('title', competence.title);
        formData.append('content', competence.content);
        formData.append('date', competence.date);
        formData.append('place', competence.place);
        formData.append('isPublished', competence.isPublished);
        formData.append('img', imgUrl);

        try {
            const response = await clienteAxios.put(`/competences/${id}`, formData);
            console.log(response);

            if (response.status === 200) {
                toast.success('Competencia Actualizada');
                setTimeout(() => {
                    navigate('/admin/dashboard/competences');
                }, 2000);
            }

        } catch (error) {
            console.log(error);
            toast.error('Hubo un Error');
        }
    }

    return (
        <AdminLayout>
            <div className='flex items-center justify-center mt-5'>
                <div className="mt-32 md:mt-0 relative w-11/12 md:w-5/6 bg-white p-8 rounded-lg shadow shadow-slate-300 flex flex-col items-center space-y-4 px-4 py-4 md:px-8">


                    <h1 className="text-4xl font-extrabold text-center text-slate-600">Editar Competencia</h1>

                    <form
                        className="w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className='flex space-x-5 py-4'>
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="title" className='font-medium text-slate-700 pb-2'>Titulo: </label>
                                <input
                                    name='title'
                                    defaultValue={competence.title}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="text"
                                />
                            </div>


                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="date" className='font-medium text-slate-700 pb-2'>Fecha: </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className='input-auth'
                                    placeholder="Fecha de Nacimiento"
                                    defaultValue={competence.date}
                                    onChange={updateState}

                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-col space-y-1 space-x-1">
                            <label htmlFor="content" className='font-medium text-slate-700 pb-2'>Descripción: </label>

                            <textarea
                                name='content'
                                defaultValue={competence.content}
                                onChange={updateState}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                type="text"
                            />
                        </div>


                        <div className="flex space-x-5 py-4">
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="place" className='font-medium text-slate-700 pb-2'>Lugar: </label>
                                <input
                                    name='place'
                                    defaultValue={competence.place}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="text"
                                />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Activo: </label>
                                {/* selecy con opciones de principiante intermedio  */}
                                <select
                                    name='isPublished'
                                    defaultValue={competence.isPublished}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                >
                                    <option value={competence.isPublished}>{competence.isPublished ? 'Publicado' : 'No Publicado'}</option>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </select>
                            </div>

                        </div>
                        <div className="flex space-x-5 py-4">

                            <div className="w-1/2  flex flex-col space-y-1 space-x-1">
                                <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Imagen: </label>
                                <input
                                    name='image'
                                    onChange={e => setImgUrl(e.target.files[0])}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    id="image"
                                    multiple
                                />


                            </div>

                            <div className="w-1/2 flex justify-center  space-y-1 space-x-1">
                                {
                                    img ? (
                                        <div className='p-2 border border-slate-200 flex justify-center items-center'>
                                            <img
                                                src={imgUrl ? URL.createObjectURL(imgUrl) : img}
                                                alt="imagen"
                                                className='mb-4 h-36 w-36 object-cover  '
                                            />
                                        </div>
                                    )
                                        : null
                                }

                            </div>
                        </div>




                        <div className='flex justify-end mt-2'>
                            <input
                                type="submit"
                                className={`w-2/12 p-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center `}
                                value="Guardar Cambios"
                            // disabled={validateButton()}
                            />
                        </div>

                    </form>
                </div>
            </div>
        </AdminLayout >
    )
}

export default AdminEditCompetence