import { useRef } from 'react'
import Layout from '../components/Layout'
// import audioFile from '../assets/audio/77.mp3';
import audioinicio from '../assets/audio/Inicio.mp3';
import audioregresar from '../assets/audio/regresar.mp3';
import audiocursos from '../assets/audio/cursos.mp3';
import audioblog from '../assets/audio/blog.mp3';
import audioacercade from '../assets/audio/acerca de.mp3';
import audiogaleria from '../assets/audio/galeria.mp3';
import audioiniciarsesion from '../assets/audio/iniciar sesion.mp3';
import { Link } from 'react-router-dom';
// import { Button } from '@material-tailwind/react';
import { images } from '../constants';
import useDelf from '../hooks/useDelf';

const Accesibility = () => {

    const audioBackRef = useRef(new Audio(audioregresar));
    const audioHomeRef = useRef(new Audio(audioinicio));
    const audiocursosRef = useRef(new Audio(audiocursos));
    const audioblogRef = useRef(new Audio(audioblog));
    const audioacercadeRef = useRef(new Audio(audioacercade));
    const audiogaleriaRef = useRef(new Audio(audiogaleria));
    const audiosesionRef = useRef(new Audio(audioiniciarsesion));
    const { isPlaying, setIsPlaying } = useDelf();

    const handleMouseEnter = (audioRef) => {
        if (isPlaying) {
            audioRef.current.play();
        }
        
    }

    const handleMouseLeave = (audioRef) => {
        if (isPlaying) {
            audioRef.current.pause();
        }
    }

    const handleOut = (audioRef) => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <Layout>
            <section className='flex flex-col container mx-auto px-5 py-10'>

                <div className='flex flex-wrap mx-auto w-10/12 md:gap-x-5 gap-y-5 pb-10 items-center justify-center'>


                    <Link to='/'
                        className='flex bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        onMouseEnter={() => handleMouseEnter(audioBackRef)}
                        onMouseLeave={()=> handleMouseLeave(audioBackRef)}
                        onClick={()=> handleOut(audioBackRef)}
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.iconoBack} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'>Regresar</p>
                        </div>
                    </Link>


                    <Link to='/'
                        className='flex bg-gradient-to-tr from-amber-500 to-yellow-500 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        onMouseEnter={() => handleMouseEnter(audioHomeRef)}
                        onMouseLeave={()=> handleMouseLeave(audioHomeRef)}
                        onClick={()=> handleOut(audioBackRef)}
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.iconoHome} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'>Inicio</p>
                        </div>
                    </Link>


                    <Link
                        to='/courses'
                        className='flex bg-gradient-to-tr from-fuchsia-500 to-cyan-500 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        onMouseEnter={() => handleMouseEnter(audiocursosRef)}
                        onMouseLeave={()=> handleMouseLeave(audiocursosRef)}
                        onClick={()=> handleOut(audiocursosRef)}
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.logoCursos} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'> Cursos</p>
                        </div>
                    </Link>

                    <Link
                        to='/blog'
                        className='flex bg-gradient-to-r from-rose-400 to-red-500 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        onMouseEnter={() => handleMouseEnter(audioblogRef)}
                        onMouseLeave={()=> handleMouseLeave(audioblogRef)}
                        onClick={()=> handleOut(audioblogRef)}
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.logoBlog} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'>Blog</p>
                        </div>
                    </Link>

                    <Link
                        to='/about'
                        className='flex bg-gradient-to-tr from-teal-400 to-yellow-200 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        onMouseEnter={() => handleMouseEnter(audioacercadeRef)}
                        onMouseLeave={()=> handleMouseLeave(audioacercadeRef)}
                        onClick={()=> handleOut(audioacercadeRef)}
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.iconoAbout} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'> Acerca de</p>
                        </div>
                    </Link>

            
                    <Link
                        to='/contact'
                        className='flex bg-gradient-to-tr from-yellow-200  to-pink-400 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        onMouseEnter={() => handleMouseEnter(audiogaleriaRef)}
                        onMouseLeave={()=> handleMouseLeave(audiogaleriaRef)}
                        onClick={()=> handleOut(audiogaleriaRef)}
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.iconoContacto} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'> Galeria</p>
                        </div>
                    </Link>


                    <Link
                        to='/login'
                        className='flex bg-gradient-to-r from-red-400 to-orange-400 rounded-xl p-5 h-60 w-72 items-center justify-center hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        onMouseEnter={() => handleMouseEnter(audiosesionRef)}
                        onMouseLeave={()=> handleMouseLeave(audiosesionRef)}
                        onClick={()=> handleOut(audiosesionRef)}
                    >
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <img src={images.logoLogin} alt="logo" className='w-20 h-20' />
                            <p className='text-3xl uppercase font-bold text-white'> Iniciar sesión</p>
                        </div>
                    </Link>


                </div>
            </section>

            <section>
                {/* Ayuda con asistente de voz en android o ios */}



            </section>
        </Layout>
    )
}

export default Accesibility