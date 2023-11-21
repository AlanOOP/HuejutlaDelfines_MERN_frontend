import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Outlet } from 'react-router-dom';
import { images } from '../constants';
import useDelf from '../hooks/useDelf';


const Layout = ({ children }) => {

  const { isStyle, setIsStyle, isPlaying, setIsPlaying } = useDelf();

  return (
    <div className={isStyle ? 'no-styles' : ''}>
      <Header />

      <div className='fixed top-1/3 '>

        <div className='flex flex-col space-y-2'>
          <Link
            onClick={e => setIsPlaying(!isPlaying)}
            to='/accesibility'
            className='bg-purple-400 text-white px-4 py-2  hover:scale-x-150 rounded-sm'
          >
            <img src={images.iconoCiego} alt="" width={35} height={35} />
          </Link>
          <Link
            to='/accesibility'
            className='bg-yellow-400 text-white px-4 py-2 hover:scale-x-150 rounded-sm'
          >
            <img src={images.iconoSor} alt="" width={35} height={35} />
          </Link>
          <Link
            to='/accesibility'
            className='bg-green-500 text-white px-4 py-2 hover:scale-x-150 rounded-sm'
          >
            <img src={images.iconoDis} alt="" width={35} height={35} />
          </Link>

          <button
            onClick={e => setIsStyle(!isStyle)}
            className='bg-red-500 text-white px-4 py-2 hover:scale-x-150 rounded-sm'
          >
            <img src={images.iconoHTML} alt="" width={35} height={35} />
          </button>

        </div>

      </div>

      {children}

      <Footer />
    </div >
  )
}

export default Layout