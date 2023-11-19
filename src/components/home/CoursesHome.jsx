import React from 'react'
import CourseCard from '../CourseCard'

import { FaArrowRight } from "react-icons/fa";



const CoursesHome = () => {
  return (
    <section className="flex flex-col container mx-auto px-5 py-10">

      <div className='flex text-center justify-center my-10'>
        <h2 className='border-dark-light font-extrabold'>
          Cursos
        </h2>
      </div>

      <div>

      </div>
      <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10 items-center justify-center">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <a className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>Más Cursos</span>

      </a>
    </section>
  )
}

export default CoursesHome