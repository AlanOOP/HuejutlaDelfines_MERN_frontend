import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout';
import BlogDetail from '../components/blog/BlogDetail';
import CourseCard from '../components/CourseCard';

const Blog = () => {
  return (
    <Layout>
      <section className=" px-5 py-10">
        <div className="flex-col gap-5 p-5 md:col-span-2 bg-blue-500 text-slate-100 flex  justify-center items-center md:flex-row">

          <div>
            <h1 className="text-3xl text-center font-extrabold md:text-4xl lg:text-5xl xl:text-6xl bg-opacity-10  rounded py-2">
              Noticias
            </h1>
          </div>

        </div>


        <div className='flex items-center justify-center'>
          <div className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-5 pb-10  mt-5'>

            {/* <BlogDetail />
            <BlogDetail />
            <BlogDetail />
            <BlogDetail /> */}

          </div>
        </div>


      </section>
    </Layout>
  )
}

export default Blog