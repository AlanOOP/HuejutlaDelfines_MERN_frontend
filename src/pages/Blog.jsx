import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout';
import BlogDetail from '../components/blog/BlogDetail';
import CourseCard from '../components/CourseCard';

const Blog = () => {
  return (
    <Layout>
      <section
        class="flex flex-col container mx-auto px-5 py-10"
      >

        <h1 className="flex mx-auto items-center justify-center text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Blog
        </h1>

        <div className='flex flex-wrap md:gap-x-5 gap-y-5 pb-10 items-center justify-center mt-5'>
          
          <BlogDetail />
          <BlogDetail />
          <BlogDetail />
          <BlogDetail />
          
        </div>

      </section>
    </Layout>
  )
}

export default Blog