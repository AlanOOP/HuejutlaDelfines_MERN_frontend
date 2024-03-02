import React, { useState } from 'react';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import { galery } from '../constants';
import { IoMdCloseCircle } from "react-icons/io";

const Galery = () => {

  // scrooll infine

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectImageIndex, setSelectImageIndex] = useState(null);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setLoading(true);
  }

  window.addEventListener('scroll', handleScroll);

  const openModal = (index) => {
    setModal(true);
    setSelectImageIndex(index)
  }

  return (
    <Layout>
      <section className='my-2'>
        <div className="flex-col gap-5 p-5 md:col-span-2 bg-gradient-to-tr from-sky-800 to-blue-400 text-slate-100 flex  justify-center items-center md:flex-row">
          <div>
            <h1 className='text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-300'>
              Galería
            </h1>
            <p className="mt-2 text-xl text-slate-300">
              Explora nuestra galería de imágenes y videos.
            </p>
          </div>
        </div>

        {modal && (
          <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white p-4 rounded-lg'>
              <button onClick={() => setModal(false)} className='absolute bg-red-600 p-4 rounded-full 
              sm:top-16 sm:right-96 text-2xl right-40 top-12 md:right-96'>
                <IoMdCloseCircle className='w-6 h-6 text-white' />
              </button>
              <img src={galery[selectImageIndex]} alt="imagen" className='w-full h-[400px] object-cover rounded-lg' />
            </div>
          </div>
        )}

        <div className='flex container mx-auto justify-center w-11/12'>
          <div className='flex flex-wrap justify-center'>
            {
              // imagenes lazy load 
              galery.map((img, index) => (
                <div key={index} className='w-1/2 md:w-1/3 lg:w-1/4 p-2'>
                  <img
                    loading='lazy'
                    src={img} alt=""
                    className='w-full h-full object-cover rounded-sm shadow-lg cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'
                    onClick={() => openModal(index)}
                  />
                </div>
              ))

            }

          </div>
        </div>


      </section>
    </Layout>
  )
}

export default Galery