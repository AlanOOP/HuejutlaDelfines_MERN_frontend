import React from 'react';
import Layout from '../components/Layout';

import Slider from '../components/home/Slider';
import CoursesHome from '../components/home/CoursesHome';

const HomePage = () => {

  return (
    <Layout>

      <Slider />
      <CoursesHome />



    </Layout>
  )
}

export default HomePage