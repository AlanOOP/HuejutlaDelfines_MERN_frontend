import React from 'react';

import Layout from '../components/Layout';

import { images } from '../constants';

const AboutMe = () => {
  return (
    <Layout>

      <section class="container mx-auto">
        {/* Mision */}
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl font-extrabold text-sky-900 sm:text-4xl text-center">Misión</h2>
              <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
            </div>
            <div class="mt-12 md:mt-0">
              <img src={images.ImgVision} alt="About Us Image" class="object-cover rounded-lg shadow-md" />
            </div>
          </div>

        </div>

        {/* Vision */}

        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="mt-12 md:mt-0">
              <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md" />
            </div>
            <div class="max-w-lg ml-10">
              <h2 class="text-3xl font-extrabold text-sky-900 sm:text-4xl text-center">Vision</h2>
              <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default AboutMe