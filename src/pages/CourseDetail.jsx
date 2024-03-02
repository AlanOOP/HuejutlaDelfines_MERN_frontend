import { images } from '../constants';
import { Rating } from "@material-tailwind/react";
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import clienteAxios from '../config/clientAxios';
import Spinner from '../components/Spinner';

const CourseDetail = () => {

  const { id } = useParams();

  const [course, setCourse] = useState([])
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
    <Layout>
      <section className="py-10  dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">

            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">

              <div className="sticky top-0 overflow-hidden ">

                <div className="relative mb-6 lg:mb-10 lg:h-96">

                  {course.image && (
                    <img src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${course.image[0]}`} alt="course" className="object-cover w-full h-full rounded-xl" />
                  )}

                </div>
                <div className="flex-wrap hidden mx-2 md:flex">
                  <p>
                    {course.description}
                  </p>

                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6">
                  <span className="px-2.5 py-0.5 text-sm text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-sm dark:text-gray-200">Curso
                    Nuevo</span>
                  <div className='flex-row flex-auto items-center text-yellow-400 my-2 '>
                    <Rating value={5} readonly className='flex' ratedColor="amber" />
                  </div>
                  <h2 className="max-w-xl mt-3 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    {course.title}
                  </h2>
                  <div className="flex flex-wrap items-center mb-2">

                    <a className="mb-2 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0" href="#">
                      Natacion {" "} {course.category}
                    </a>
                  </div>
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>{course.price}</span>
                    <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">$1,000.00</span>
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">Especificaciones del curso :</h2>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                    <div className="p-3 lg:p-5 ">
                      <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <img src="https://www.svgrepo.com/show/311110/presence-available-16-filled.svg" alt="logo_Calendar" className='w-6 h-6 dark:bg-gray-600' />
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Cupos
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  {course.cupos}
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <img src="https://www.svgrepo.com/show/496036/category.svg" alt="logo_Calendar" className='w-6 h-6 dark:bg-gray-600' />
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Categoria:
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  {course.category}
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <img src="https://www.svgrepo.com/show/533389/calendar-days.svg" alt="logo_Calendar" className='w-6 h-6 dark:bg-gray-600' />
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Duracion:
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  30 dias
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <img src="https://www.svgrepo.com/show/532122/clock-three.svg" alt="logo_Calendar" className='w-6 h-6 dark:bg-gray-600' />
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Horario:
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  8:00 am - 10:00 am
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
              <span class="text-base text-gray-600 dark:text-gray-400">In Stock</span>
              <p class="mt-2 text-sm text-blue-500 dark:text-blue-200">Ships from china.
                <span class="text-gray-600 dark:text-gray-400">
                  Most customers receive within 3-31 days.
                </span>
              </p>
            </div> */}
                <div className="mb-6 "></div>

                <div className="flex gap-4 mb-6">
                  <a href="#" className="w-full py-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    Inscribete Ahora</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CourseDetail