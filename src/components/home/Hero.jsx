import { useEffect, useState } from 'react'
import { logos } from '../../constants/images';
import useDelf from '../../hooks/useDelf';
import { FiSearch } from "react-icons/fi";
// import video from '../../assets/video/huejutla-delfines.mp4'


const Hero = () => {

  const autoSlideInterval = 5000
  const { darkMode } = useDelf();

  const [currentImage, setCurrentImage] = useState(logos[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(logos[(logos.indexOf(currentImage) + 1) % logos.length]);
    }, 5000);

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [currentImage]);

  return (
    <div className={darkMode ? 'bg-gray-600' : 'bg-sky-100'}>
      <section className="mx-1 sm:mx-10 flex flex-col px-5 py-5 lg:flex-row space-x-5 ">

        <div className="sm:mt-10 lg:w-1/2 flex items-center justify-end mt-2 ">
          <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
            <h1 className="text-3xl text-center font-extrabold text-dark-soft md:text-4xl lg:text-5xl xl:text-6xl lg:text-left leading-relaxed lg:max-w-[680px] ">
              Escuela de <span className='text-sky-400'> Natación </span> <span className='text-sky-400'>Huejutla</span> Delfines
            </h1>
            <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
              Eres muy importante para todos y sabemos que vas a lograr todo lo que quieras.
            </p>
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/4 sm:top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
              <input
                className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
                type="text"
                placeholder="Busca un articulo"
              />
              <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
                Buscar
              </button>
            </div>
            <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
              <span className="text-dark-light font-semibold mt-2 lg:mt-4 lg:text-sm xl:text-base">
                Popular :
              </span>
              <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
                <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                  Competencias
                </li>
                <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                  Natacion
                </li>
                <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                  Tecnicas de Nado
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" lg:block lg:w-1/2 m-2 ">
          <div className='flex justify-center items-center mt-10 shadow'>
            <img
              className=" object-cover  h-auto md:h-3/6 lg:h-5/6 xl:h-5/6"
              src={logos[1]}
              alt="users are reading articles"
            />

            {/* <video
              className=" object-cover  h-auto md:h-3/6 lg:h-5/6 xl:h-5/6"
              src={video}
              autoPlay
              loop
              muted
            >
            </video> */}

          </div>
        </div>



      </section>

    </div>
  )
}

export default Hero;