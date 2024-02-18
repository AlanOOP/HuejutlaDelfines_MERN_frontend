import React from 'react';
import Layout from '../components/Layout';
import imgMision from '../assets/images/imgMision.jpg'
import imgVision from '../assets/images/imgVision.jpg'


const AboutMe = () => {

  const data = [
    {
      title: 'Mision',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quod.',
      img: imgMision
    },
    {
      title: 'Vision',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quod.',
      img: imgVision
    },
  ]

  return (
    <Layout>

      <section className='max-w-[1200px] py-16 mx-auto'>

        <h5 className='sm:text-2xl md:text-5xl font-bold text-dark-hard text-center mb-10'> Sobre Nosotros</h5>

        <div className='bg-white lg:shadowxl lg:shadow-slate-200/50'>
          {
            data.map(({ title, description, img }) => (
              <div className='bg-blue-100 flex flex-col md:even:flex-row-reverse md:odd:flex-row'>
                <div className='flex-1'>
                  <img src={img} alt={title} loading='lazy' className='w-full h-80 md:h-96' />
                </div>
                <div className='flex-1 items-center flex'>
                  <div className='p-10'>
                    <h1 className='text-xl text-primary md:text-lg font-bold mb-3'>{title}</h1>
                    <p className='text-xl md:text-lg leading-6 whitespace-pre-line text-dark-soft'>{description}</p>
                  </div>

                </div>
              </div>
            ))
          }
        </div>

      </section>

    </Layout>
  )
}

export default AboutMe