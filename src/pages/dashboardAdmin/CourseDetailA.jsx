import React, { useEffect, useState } from 'react'
import AdminLayout from './layout/AdminLayout'
import { useParams } from 'react-router-dom'
import clienteAxios from '../../config/clientAxios'

function CourseDetailA() {

    const { id } = useParams()
    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getCourse = async () => {
            try {
                const response = await clienteAxios.get(`/courses/${id}`)
                setCourse(response.data)
                setLoading(true)
            } catch (error) {
                console.log(error)
            }
        }
        getCourse()
    }, [id])



    return (
        <AdminLayout>
            {/* tailwindcss course detail */}

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-3/4 px-4">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-2">Course Detail</h2>
                            <div className="border border-gray-200 rounded-lg p-6">
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
                                        <img
                                            src={`
                                            ${course.image ? `${import.meta.env.VITE_BACKEND_URL}/uploads/${course.image[0]}` : 'https://via.placeholder.com/300x200'}
                                            `}
                                            alt=""
                                            className="w-full rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full lg:w-2/3 px-4">
                                        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                                        <p className="text-gray-500 mb-4">{course.description}</p>
                                        <div className="flex items-center mb-4">
                                            <span className="text-gray-500">Category: </span>
                                            <span className="text-gray-800 ml-2">{course.category}</span>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <span className="text-gray-500">Price: </span>
                                            <span className="text-gray-800 ml-2">${course.price}</span>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <span className="text-gray-500">Oferta: </span>
                                            <span className="text-gray-800 ml-2">{course.offer}</span>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <span className="text-gray-500">Active: </span>
                                            <span className="text-gray-800 ml-2">{course.active ? 'Si' : 'No'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AdminLayout>

    )
}

export default CourseDetailA