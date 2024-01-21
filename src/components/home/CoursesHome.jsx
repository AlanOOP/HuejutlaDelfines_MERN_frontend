import React from 'react'
import CourseCard from '../CourseCard'

import { FaArrowRight } from "react-icons/fa";



const CoursesHome = () => {
  return (
    <section className="my-10">

      <div className='flex justify-center mb-10'>


        <h2 className='text-3xl mx-auto text-center font-extrabold text-yellow-500 md:text-4xl lg:text-5xl xl:text-6xl lg:text-left leading-relaxed '>
          Cursos
        </h2>

        {/* unete */}

        {/* <div className="flex items-center justify-center gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
          <button className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
            Unete
          </button>
          <FaArrowRight className='text-2xl' />
        </div> */}

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