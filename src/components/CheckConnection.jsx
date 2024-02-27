import React, { useEffect, useState } from 'react';
import { CiWifiOff } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import clienteAxios from '../config/clientAxios';

const CheckConnection = () => {

    const [isOnline, setIsOnline] = useState(true);
    const [data, setData] = useState([]);

    console.log(isOnline)

    // useEffect(() => {
    //     const checkConnection = async () => {
    //         try {
    //             const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //             setTimeout(() => {
    //                 setData(response)
    //                 setIsOnline(true)
    //             }, 10000);
    //         } catch (error) {
    //             setIsOnline(false)
    //         }
    //     }

    //     checkConnection();
    // }, [data])



    return (
        <div className='w-96 rounded-sm px-2 py-2 bg-white shadow-md flex border-t-2 border-red-500  left-1/2 top-0'>
            <div className=''>
                <CiWifiOff className='w-10 h-10 bg-red-500 flex text-white items-center rounded-full p-1 mr-4' />
            </div>
            <div className="">
                <h2 className='text-[1.2rem] font-medium'>¡Ups! No hay conexión</h2>
                <p className='text-gray-500 m-2'>Por favor, revisa tu conexión a internet e intenta nuevamente.</p>

                {/* button reconnect */}

                <button className='bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600'>
                    Reconectar
                </button>

            </div>
        </div>
    )
}

export default CheckConnection