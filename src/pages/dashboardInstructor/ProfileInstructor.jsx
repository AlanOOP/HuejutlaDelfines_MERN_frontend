import React, { useEffect, useState } from 'react'
import LayoutInstructor from './LayoutInstructor'
import clienteAxios from '../../config/clientAxios'
import { toast } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom'


const ProfileInstructor = () => {

    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const getCourses = async () => {
            setLoading(true);
            try {
                const response = await clienteAxios.get(`/instructor/${user._id}`);
                console.log(response.data);
                setCourses(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        if (user._id) {
            getCourses();
        }
    }, [user._id])

    return (
        <LayoutInstructor>
            <section className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
                <div className="shadow-lg border">
                    <h1 className="py-4 px-4 text-3xl font-bold text-center text-blue-600">
                        Tus cursos
                    </h1>
                    <hr />
                    <div className="p-4">
                        {
                            loading ? (
                                <p className="text-center">Cargando...</p>
                            ) : (
                                courses.length === 0 ? (
                                    <p className="text-center">No tienes cursos</p>
                                ) : (
                                    courses.map(course => (
                                        <div key={course._id} className="p-4 border-b">

                                            <p className="font-bold text-gray-600">Nombre: {course.title}</p>
                                            <p className="font-bold text-gray-600">Descripción: {course.description}</p>
                                            <p className="font-bold text-gray-600">Precio: {course.price}</p>
                                            <p className="font-bold text-gray-600">Categoría: {course.category}</p>
                                            {/* boton para selecionar */}
                                            <button
                                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded my-2"
                                                onClick={() => navigate(`/instructor/course/${course._id}`)}
                                            >
                                                Ver curso
                                            </button>

                                        </div>
                                    ))
                                )
                            )
                        }
                    </div>
                </div>
            </section>
        </LayoutInstructor>
    )
}

export default ProfileInstructor