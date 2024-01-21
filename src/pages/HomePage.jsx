import React from 'react';
import Layout from '../components/Layout';

import Hero from '../components/home/Hero';
import CoursesHome from '../components/home/CoursesHome';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {

  return (
    <Layout>

      <Hero />
      <CoursesHome />
      <Testimonials />


    </Layout>
  )
}

export default HomePage