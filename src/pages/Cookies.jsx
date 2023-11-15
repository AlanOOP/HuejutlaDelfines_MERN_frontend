import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Cookies = () => {

    const svgIcon = () => {
        return (
            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
        )
    }

    return (
        <Layout>
            <div className='my-5 flex flex-col items-center'>
                <div className='flex-col'>
                    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl  p-4 uppercase">Cookies Policy
                    </h1>
                </div>

                <div className='w-3/4 text-xl text-justify'>
                    <p class="mb-10  font-bold flex justify-end">Última actualización: 14/11/2023</p>
                    <div>
                        <p class="my-3 text-lg font-bold flex"> Cookies </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Las cookies son pequeños archivos con texto que se almacenan en su dispositivo cuando visita sitios web. El uso más común es recordar sus preferencias, proporcionar una experiencia de usuario mejorada o recopilar información sobre su comportamiento de navegación.
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 font-bold mt-5"> Huejutla delfines utiliza los siguientes tipos de cookies: </p>

                        <ul className='mt-5 space-y-1 text-gray-500 list-inside dark:text-gray-400 '>
                            <li className='flex items-start'>
                                <p className='mt-1'>
                                    {svgIcon()}
                                </p>
                                <p className='font-bold'> Cookies esenciales :
                                    <span className='font-normal'> estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar. Tampoco recopilan ningún dato personal.
                                    </span>
                                </p>
                            </li>
                            <li className='flex items-start'>
                                <p className='mt-1'>
                                    {svgIcon()}
                                </p>
                                <p className='font-bold'> Cookies funcionales :
                                    <span className='font-normal'>estas cookies recuerdan sus preferencias, como el idioma o el tamaño de fuente, para brindarle una experiencia más personalizada.
                                    </span>
                                </p>
                            </li>
                            <li className='flex items-start'>
                                <p className='mt-1'>
                                    {svgIcon()}
                                </p>
                                <p className='font-bold'> Cookies de rendimiento :
                                    <span className='font-normal'> estas cookies recopilan información sobre cómo los usuarios interactúan con el sitio web, como las páginas visitadas y el tiempo que pasan en cada página, lo que nos ayuda a mejorar el rendimiento del sitio web y la experiencia del usuario.
                                    </span>
                                </p>
                            </li>

                            <li className='flex items-start'>
                                <p className='mt-1'>
                                    {svgIcon()}
                                </p>
                                <p className='font-bold'> Cookies de Inicio de Sesión :
                                    <span className='font-normal'> estas cookies se utilizan para mantener su sesión activa y almacenar información relacionada con su sesión.
                                    </span>
                                </p>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <p class="my-3 text-lg font-bold flex"> ¿Cómo usamos las cookies? </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Usamos cookies para varias razones detalladas a continuación. Desafortunadamente, en la mayoría de los casos, no hay opciones estándar de la industria para deshabilitar las cookies sin deshabilitar completamente la funcionalidad y las características que agregan a este sitio. Se recomienda que deje todas las cookies si no está seguro de si las necesita o no en caso de que se utilicen para proporcionar un servicio que utiliza.
                        </p>
                    </div>

                    <div>
                        <p class="my-3 text-lg font-bold flex"> Deshabilitar cookies </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Puede evitar la configuración de cookies ajustando la configuración de su navegador consulte la Ayuda de su navegador para saber cómo hacerlo. Tenga en cuenta que la desactivación de cookies afectará la funcionalidad de este y muchos otros sitios web que visite. La desactivación de las cookies generalmente también provocará la desactivación de ciertas funciones y características de este sitio. Por lo tanto, se recomienda que no desactive las cookies.
                        </p>
                    </div>

                    <p className="text-gray-500 dark:text-gray-400 mt-5">
                        Consulte la seccion de
                        <Link
                            to='/private-policy'
                            className="text-primary font-bold underline px-2"
                        >
                            Avisos de Privacidad
                        </Link>
                        para conocer más sobre el uso de sus datos personales.
                    </p>

                    <div>
                        <p className='font-bold mt-5'>Te ha sido util esta información?</p>
                        <div className='flex gap-5 items-center border-gray-400 border-solid'>
                            <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                                </svg>
                                <span className="sr-only">Icon description</span>
                            </button>

                            <button type="button" className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500">
                                No
                                <span className="sr-only">Icon description</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cookies