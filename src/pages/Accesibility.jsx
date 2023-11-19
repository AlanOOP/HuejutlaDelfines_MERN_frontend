import React, { useRef, useState } from 'react'
import Layout from '../components/Layout'
import audioFile from '../assets/audio/77.mp3';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { images } from '../constants';

const Accesibility = () => {

    const audioRef = useRef(new Audio(audioFile));
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }

    const handleMouseLeave = () => {
        if (isPlaying) {
            audioRef.current.pause();
        }
    }

    return (
        <Layout>
            <section className='flex flex-col container mx-auto px-5 py-10'>
                <Button
                    className='mx-auto flex items-center my-5 gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg'
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    Menu de información
                </Button>
                <div className='flex flex-wrap mx-auto w-10/12 md:gap-x-5 gap-y-5 pb-10 items-center justify-center'>


                    <Link to='/'
                        className='flex bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.iconoBack} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'>Regresar</p>
                        </div>
                    </Link>
                    <Link to='/'
                        className='flex bg-gradient-to-tr from-amber-500 to-yellow-500 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.iconoHome} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'>Inicio</p>
                        </div>
                    </Link>

                    <Link
                        to='/courses'
                        className='flex bg-gradient-to-tr from-fuchsia-500 to-cyan-500 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.logoCursos} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'> Cursos</p>
                        </div>
                    </Link>

                    <Link
                        to='/blog'
                        className='flex bg-gradient-to-r from-rose-400 to-red-500 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.logoBlog} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'>Blog</p>
                        </div>
                    </Link>
                    <div
                        className='flex bg-gradient-to-tr from-teal-400 to-yellow-200 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.iconoAbout} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'> Acerca de</p>
                        </div>
                    </div>
                    <div
                        className='flex bg-gradient-to-tr from-yellow-200  to-pink-400 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.iconoContacto} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'> Contacto</p>
                        </div>
                    </div>
                    <div
                        className='flex bg-gradient-to-r from-red-400 to-orange-400 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.logoLogin} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'> Iniciar sesión</p>
                        </div>
                    </div>


                </div>
            </section>

            <section>
                {/* Ayuda con asistente de voz en android o ios */}



            </section>
        </Layout>
    )
}

export default Accesibility