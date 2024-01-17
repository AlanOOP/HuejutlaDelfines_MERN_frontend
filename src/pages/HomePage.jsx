import React from 'react';
import Layout from '../components/Layout';

import Slider from '../components/home/Slider';
import CoursesHome from '../components/home/CoursesHome';

const HomePage = () => {

  return (
    <Layout>
      <Slider
      />

      <CoursesHome />

      <div className="container flex justify-center items-center m-5">
        <iframe width="640" height="480"
          src="https://sketchfab.com/models/de9e202843494872bfa5c0c2192efea2/embed?autostart=1&internal=1&tracking=0&ui_ar=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_theatre=1&ui_watermark=0"
          xr-spatial-tracking="true" exection-while-out-of-viewport="true" execution-while-not-rendered="true"
          web-share="true" allow="autoplay; fullscreen; vr" allowfullscreen="true" mozallowfullscreen="true"
        >

        </iframe>
      </div>
    </Layout>
  )
}

export default HomePage