import React from 'react'
import CourseCard from '../CourseCard'

import { FaArrowRight } from "react-icons/fa";



const CoursesHome = () => {
  return (
    <section className="my-10">

      <div className='flex justify-center mb-10'>


        <h2 className='text-3xl mx-auto text-center font-extrabold text-dark-soft md:text-4xl lg:text-5xl xl:text-6xl lg:text-left leading-relaxed '>
          Cursos
        </h2>

      </div>
      <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10 items-center justify-center">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  )
}

export default CoursesHome