import CourseCard from '../CourseCard'
// import { courses } from '../../constants/data'
import clienteAxios from '../../config/clientAxios'
import { useEffect, useState } from 'react'

const CoursesHome = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await clienteAxios.get('/courses')
        setCourses(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCourses()
  }, [])

  return (
    <section className="my-5">
      <div className="pt-10 pb-10 ">
        <div className="flex-col gap-5 p-5 md:col-span-2 bg-gradient-to-tr from-sky-800 to-blue-400 text-slate-100 flex  justify-center items-center md:flex-row">
          <div>
            <h1 className="text-3xl text-center font-extrabold md:text-4xl lg:text-5xl xl:text-6xl bg-opacity-10 rounded py-2">
              Cursos
            </h1>
            <p className="mt-2 text-xl text-slate-300">
              Ven y aprende con nosotros, no hay mejor lugar que el club de natación para aprender a nadar.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:mx-14 mx-2 sm:grid grid-cols-3 gap-x-4 gap-y-5 pb-10 flex flex-wrap">
        {
          courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))
        }


      </div>
    </section>
  )
}

export default CoursesHome