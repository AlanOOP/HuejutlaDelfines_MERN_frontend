import React from 'react';

import Layout from '../components/Layout';
import { images } from '../constants';

const Page404 = () => {
  return (

    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">

            <div className='flex items-center justify-center mb-0'>
              <img
                className="md:w-1/4 object-cover object-center w-1/2 h-auto "
                src={images.Img404}
                alt="users are reading articles"
              />

            </div>
            <h1 className="mb-4 mt-0 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Pagina No Encontrada.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <a href="#" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>


          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Page404