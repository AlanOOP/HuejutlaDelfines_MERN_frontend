import React from 'react';
import Layout from '../components/Layout';
import CoursesHome from '../components/home/CoursesHome';
import Breadcrumb from '../components/Breadcrumb';

const Courses = () => {

  return (

    <Layout>

      <div className='flex container mx-auto justify-center'>
        <Breadcrumb
          path={'Cursos'}
        />
      </div>
      <CoursesHome />
    </Layout>
  )
}

export default Courses