import { useEffect, useState } from 'react'
import AdminLayout from './layout/AdminLayout'
import clienteAxios from '../../config/clientAxios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'



const AddCourse = () => {

    const navigate = useNavigate();

    const [instructors, setInstructors] = useState([]);
    const [course, setCourse] = useState({
        title: '',
        description: '',
        image: '',
        category: '',
        price: '',
        offer: '',
        instructor: '',
        cupos: ''
    })


    useEffect(() => {
        const getInstructor = async () => {
            try {
                const response = await clienteAxios.get('/instructor')
                setInstructors(response.data);
                console.log(instructors)
            } catch (error) {
                console.error(error);
            }
        }
        getInstructor()

    }, [instructors])

    const [image, setImage] = useState([]);

    const actualizarState = e => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        })
    }

    const validateButton = () => {
        // Destructuring
        const { title, description, category, price, offer } = course;
        if (![title, description, category, price, offer].includes('')) {
            return false;
        }
        return true;
    }

    const removeImage = (index) => {
        setImage(image.filter((img, i) => i !== index))
    }

    const handleSubmit = async e => {
        e.preventDefault();

        // Crear un formdata

        let formData = new FormData();

        for (const file of image) {
            // console.log(file)
            formData.append("image", file[0]);
        }

        formData.append('title', course.title);
        formData.append('description', course.description);
        formData.append('category', course.category);

        formData.append('price', course.price);
        formData.append('offer', course.offer);
        formData.append('instructor', course.instructor);
        formData.append('cupos', course.cupos);

        // console.log(image)

        try {
            const respuesta = await clienteAxios.post('/courses', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (respuesta.status === 200) {
                toast.success(respuesta.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });

                navigate('/admin/dashboard');

            }

        } catch (error) {
            console.log(error);
        }
    }

    const handleImage = e => {
        e.preventDefault();

        // if (validateButton()) {
        //     toast.error('Todos los campos son obligatorios', {
        //         position: toast.POSITION.BOTTOM_RIGHT
        //     });
        //     return;
        // }

        if (course.category === '') {
            toast.error('Selecciona una categoria', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return;
        }

        toast.success('Agregando curso...', {
            position: toast.POSITION.BOTTOM_RIGHT
        });

    }

    return (
        <AdminLayout>

            <div className=''>
                <ToastContainer
                    className={'font-roboto'}
                />
            </div>
            <div className='flex items-center justify-center mt-5'>
                <div className="mt-32 md:mt-0 relative w-11/12 md:w-5/6 bg-white p-8 rounded-lg shadow shadow-slate-300 flex flex-col items-center space-y-4 px-4 py-4 md:px-8">


                    <h1 className="text-4xl font-extrabold text-center text-dark-hard">Curso Nuevo</h1>

                    <form
                        className="w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className='flex space-x-5 py-4'>
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Titulo: </label>
                                <input
                                    name='title'
                                    defaultValue={course.title}
                                    onChange={actualizarState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="text"
                                />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Categoria: </label>
                                {/* selecy con opciones de principiante intermedio  */}
                                <select
                                    name='category'
                                    defaultValue={course.category}
                                    onChange={actualizarState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                >
                                    <option value="">Ninguno</option>
                                    <option value="Principiante">Principiante</option>
                                    <option value="Intermedio">Intermedio</option>
                                    <option value="Avanzado">Avanzado</option>
                                </select>
                            </div>

                        </div>
                        <div className="w-full flex flex-col space-y-1 space-x-1">
                            <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Descripción: </label>
                            <textarea
                                name='description'
                                defaultValue={course.description}
                                onChange={actualizarState}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                type="text"
                            />
                        </div>


                        <div className="flex space-x-5 py-4">
                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Precio: </label>
                                <input
                                    name='price'
                                    defaultValue={course.price}
                                    onChange={actualizarState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="number"
                                />
                            </div>

                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Instructor: </label>
                                {/* selecy con opciones de principiante intermedio  */}
                                <select
                                    name='instructor'
                                    defaultValue={course.instructor}
                                    onChange={actualizarState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                >
                                    <option value="">Ninguno</option>
                                    {
                                        instructors.map(({ _id, name, lastName }) => (
                                            <option value={`${_id}`}>{name}  {lastName}</option>

                                        ))

                                    }
                                </select>
                            </div>

                        </div>

                        <div className='flex justify-center space-x-2'>

                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Oferta: </label>
                                {/* selecy con opciones de principiante intermedio  */}
                                <input
                                    name='offer'
                                    defaultValue={course.offer}
                                    onChange={actualizarState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="number"
                                />
                                {/* tomar la otra mitad */}
                            </div>

                            <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Cupos: </label>
                                {/* selecy con opciones de principiante intermedio  */}
                                <input
                                    name='cupos'
                                    defaultValue={course.cupos}
                                    onChange={actualizarState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="number"
                                />
                                {/* tomar la otra mitad */}
                            </div>

                        </div>

                        <div className="w-full flex flex-col space-y-1 space-x-1">
                            <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Imagen: </label>
                            <input
                                name='image'
                                onChange={e => setImage([...image, e.target.files])}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                id="image"
                                multiple
                            />
                            <span className='text-xs text-blue-600'>Se requieren minimo 2 imagenes</span>

                        </div>

                        <div className="w-1/2 flex justify-center  space-y-1 space-x-1">
                            {
                                image.length > 0 &&
                                image.map((img, index) => {
                                    // Crear un objeto URL para la imagen
                                    const url = URL.createObjectURL(img[0]);
                                    return (
                                        <img
                                            key={index}
                                            className='w-1/4'
                                            src={url}
                                            alt="Imagen del curso"
                                            onClick={() => removeImage(index)}
                                        />
                                    )
                                })
                            }

                        </div>

                        <div className='flex justify-end mt-2'>
                            <input
                                type="submit"
                                className={`w-2/12 p-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center ${validateButton() ? 'opacity-50 cursor-not-allowed' : ''}`}
                                value="Agregar Curso"
                                disabled={validateButton()}
                            />
                        </div>

                    </form>
                </div>
            </div>

        </AdminLayout >
    )
}

export default AddCourse