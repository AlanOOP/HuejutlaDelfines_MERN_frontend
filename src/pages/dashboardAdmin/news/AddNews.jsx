import React, { useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import clienteAxios from '../../../config/clientAxios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddNews = () => {

    const navigate = useNavigate();

    const [news, setNews] = useState({
        title: '',
        content: '',
        date: '',
        isPublished: ''
    })

    console.log(news);

    const [image, setImage] = useState([]);
    console.log(image);


    const updateState = e => {

        //validar que sea imagen 

        setNews({
            ...news,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (news.title === '' || news.content === '' || news.date === '' || news.isPublished === '') {
            return toast.error('Todos los campos son obligatorios');
        }

        

        try {
            const formData = new FormData();
            formData.append('title', news.title);
            formData.append('content', news.content);
            formData.append('date', news.date);
            formData.append('isPublished', news.isPublished);
            formData.append('img', image[0]);

            const response = await clienteAxios.post('/news', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                toast.success('Noticia agregada correctamente');
                navigate('/admin/dashboard/noticias');
            }
        } catch (error) {
            console.log(error);
            toast.error('Hubo un error al agregar la noticia');
        }

    }



    return (
        <AdminLayout>

            <div className='flex items-center justify-center mt-5'>
                <div className="mt-32 md:mt-0 relative w-11/12 md:w-5/6 bg-white p-8 rounded-lg shadow shadow-slate-300 flex flex-col items-center space-y-4 px-4 py-4 md:px-8">


                    <h1 className="text-4xl font-extrabold text-center text-dark-hard">Noticia Nuevo</h1>

                    <form
                        className="w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className='flex space-x-5 py-4'>
                            <div className="w-full flex flex-col space-y-1 space-x-1">
                                <label htmlFor="title" className='font-medium text-slate-700 pb-2'>Titulo: </label>
                                <input
                                    name='title'
                                    defaultValue={news.title}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="text"
                                />
                            </div>


                        </div>
                        <div className="w-full flex flex-col space-y-1 space-x-1">
                            <label htmlFor="content" className='font-medium text-slate-700 pb-2'>Descripción: </label>
                            <textarea
                                name='content'
                                defaultValue={news.content}
                                onChange={updateState}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                type="text"
                            />
                        </div>


                        <div className="flex space-x-5 py-4">
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="date" className='font-medium text-slate-700 pb-2'>Fecha: </label>
                                <input
                                    name='date'
                                    defaultValue={news.date}
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
                                    defaultValue={news.isPublished}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                >
                                    <option value="">-- Seleccione una opción</option>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </select>
                            </div>

                        </div>


                        <div className="w-full flex flex-col space-y-1 space-x-1">
                            <label htmlFor="image" className='font-medium text-slate-700 pb-2'>Imagen: </label>
                            <input
                                name='image'
                                onChange={e => setImage([e.target.files[0]])}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                id="image"
                                multiple
                            />


                        </div>

                        <div className="w-1/2 flex justify-center  space-y-1 space-x-1">
                            {
                                image.length > 0 &&
                                image.map((img, index) => {
                                    // Crear un objeto URL para la imagen
                                    const url = URL.createObjectURL(img);
                                    return (
                                        <img
                                            key={index}
                                            className='w-1/4'
                                            src={url}
                                            alt="Imagen del curso"
                                        // onClick={() => removeImage(index)}
                                        />
                                    )
                                })
                            }

                        </div>

                        <div className='flex justify-end mt-2'>
                            <input
                                type="submit"
                                className={`w-2/12 p-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center `}
                                value="Agregar Noticia"
                            // disabled={validateButton()}
                            />
                        </div>

                    </form>
                </div>
            </div>

        </AdminLayout >
    )
}

export default AddNews