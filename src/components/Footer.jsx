import React from 'react';


import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

import { images } from "../constants";




const Footer = () => {
  return (
    <div>
      <div className=''>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink='http://www.w3.org/1999/xlink'
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"

        >
          <defs>
            <linearGradient id="bg">
              <stop offset="0%" stopColor="rgba(41,70,127,0.06)" />
              <stop offset="100%" stopColor="rgba(53,127,252,0.6)" />
            </linearGradient>
            <path
              id='wave'
              fill='url(#bg)'
              d='M-363.852,502.589c0,0,236.988-41.997,505.475,0,s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z'
            />
          </defs>
          <g>
            <use xlinkHref='#wave' x='50' y='0' >
              <animateTransform
                dur='12s'
                attributeName='transform'
                attributeType='XML'
                type='translate'
                calcMode={'linear'}
                values='0 0; 50 -20; 0 0'
                keyTimes={'0; .5; 1'}
                keySplines={'0.42 0 0.58 1; 0.42 0 0.58 1.0'}
                repeatCount={'indefinite'}
              />

            </use>

            <use xlinkHref='#wave' x='50' y='3' >
              <animateTransform
                dur='15s'
                attributeName='transform'
                attributeType='XML'
                type='translate'
                calcMode={'linear'}
                values='0 0; 50 -20; 0 0'
                keyTimes={'0; .5; 1'}
                keySplines={'0.42 0 0.58 1; 0.42 0 0.58 1.0'}
                repeatCount={'indefinite'}
              />

            </use>

            <use xlinkHref='#wave' x='50' y='5' >
              <animateTransform
                dur='20s'
                attributeName='transform'
                attributeType='XML'
                type='translate'
                calcMode={'linear'}
                values='0 0; 50 -20; 0 0'
                keyTimes={'0; .5; 1'}
                keySplines={'0.42 0 0.58 1; 0.42 0 0.58 1.0'}
                repeatCount={'indefinite'}
              />

            </use>
          </g>
        </svg>
      </div>
      <section className="bg-dark-hard">
        <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
          <div className="col-span-5 md:col-span-4 lg:col-span-2">
            <h3 className="text-dark-light font-bold md:text-lg">Cursos</h3>
            <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
              <li>
                <a href="/">Horarios</a>
              </li>

              <li>
                <a href="/">Documentacion</a>
              </li>
              <li>
                <a href="/"></a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>

          <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2">
            <h3 className="text-dark-light font-bold md:text-lg">Club</h3>
            <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
              <li>
                <a href="/about">Acerca de</a>
              </li>
              <li>
                <a href="/terms">Terminos y Condiciones</a>
              </li>
              <li>
                <a href="/private-policy">Politica de Privacidad</a>
              </li>
              <li>
                <a href="/cookies">Aviso de Cookies</a>
              </li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-4 lg:col-span-2">
            <h3 className="text-dark-light font-bold md:text-lg">Más</h3>
            <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">License</a>
              </li>
              <li>
                <a href="/faq">Preguntas y Respuestas</a>
              </li>
            </ul>
          </div>
          <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
            <img
              src={images.Logo}
              alt="logo"
              className="mx-auto md:mx-0"
            />
            <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
              <li>
                <a href="/">
                  <AiOutlineTwitter className="w-6 h-auto" />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillYoutube className="w-6 h-auto" color='red' />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillInstagram className="w-6 h-auto" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaFacebook className="w-6 h-auto" color='blue' />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsTelegram className="w-6 h-auto" />

                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
            <div className="bg-primary text-white p-3 rounded-full">
              <AiFillHeart className="w-7 h-auto" />
            </div>
            <p className="font-bold italic text-dark-light">
              Todos los derechos reservados Huejutla delfines 2023
            </p>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default Footer