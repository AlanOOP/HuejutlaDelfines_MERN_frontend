import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import LayoutInstructor from './LayoutInstructor'
import clienteAxios from '../../config/clientAxios'
import { toast } from 'react-hot-toast'

const CourseInstructor = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState({});
    const [enrolled, setEnrolled] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCourse = async () => {
            setLoading(true);
            try {
                const response = await clienteAxios.get(`/courses/${id}`);
                console.log(response.data);
                setCourse(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        const getEnrolled = async () => {
            try {
                const response = await clienteAxios.get(`/enrollment/course/${id}`);
                console.log(response.data);
                setEnrolled(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getCourse();
        getEnrolled();
    }, [id])

    return (
        <LayoutInstructor>
            <section className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
                <div className="shadow-lg border">
                    <h1 className="py-4 px-4 text-3xl font-bold text-center text-blue-600">
                        {course.title}
                    </h1>
                    <hr />

                    {/* alumnos inscritos */}
                    <div className="p-4">
                        <h2 className="text-2xl font-bold text-gray-600">Alumnos Inscritos</h2>
                        <hr />
                        {
                            enrolled.length === 0 ? (
                                <p className="text-center">No hay alumnos inscritos</p>
                            ) : (
                                enrolled.map(enroll => (
                                    <div key={enroll._id} className="p-4 border-b flex justify-evenly">
                                        <div>
                                            <p className="font-bold text-gray-600">Id:
                                                {enroll.student?._id}
                                            </p>
                                            <p className="font-bold text-gray-600">Nombre:
                                                {enroll.student?.name} {enroll.student?.lastName}
                                            </p>
                                        </div>

                                        {/* boton evaluar progreso */}
                                        <button
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded my-2"
                                            onClick={() => navigate(`/instructor/progress/${enroll.student._id}`)}
                                        >
                                            Evaluar Progreso
                                        </button>
                                    </div>
                                ))
                            )
                        }

                    </div>
                </div>
            </section>
        </LayoutInstructor>
    )
}

export default CourseInstructor