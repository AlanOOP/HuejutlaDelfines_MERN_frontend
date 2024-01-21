import React from 'react'
import CourseCard from '../CourseCard'
import { courses } from '../../constants/data'


const CoursesHome = () => {
  return (
    <section className="my-10">

      <div className="pt-10 pb-10 ">

        <div className="flex-col gap-5 p-5 md:col-span-2 bg-blue-500 text-slate-100 flex  justify-center items-center md:flex-row">

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

      <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10 items-center justify-center">
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