
import React, { useEffect, useState } from 'react'
import Spinner from '../../../components/Spinner';
import clienteAxios from '../../../config/clientAxios';

const AllImages = ({ loading }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            try {
                const response = await clienteAxios.get('/galery');

                setImages(response.data);

            } catch (error) {
                console.log(error);
            }
        }

        getImages();

    }, [])

    const deleteImageReq = async (id) => {
        try {
            const response = await clienteAxios.delete(`/galery/${id}`);
            if (response.status === 200) {
                setImages(images.filter(image => image._id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {
                loading ? (<div className='flex items-center justify-center p-8'> <Spinner /> </div>) : null
            }

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 my-4">
                {
                    images.length > 0 ? (
                        images.map((image, index) => (
                            <div key={index} className="relative col-span-1 m-2 border border-slate-600">
                                <img
                                    className="w-full md:h-32 object-center object-cover"
                                    src={image?.url}
                                    alt={image?.description}
                                />
                                <span
                                    onClick={() => deleteImageReq(image._id)}
                                    style={{ background: "#303031" }}
                                    className="absolute top-0 right-0 m-1 text-white cursor-pointer rounded-full p-1"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className='col-span-1 md:col-span-2 lg:col-span-3 text-center text-xl font-light w-full bg-orange-200 rounded py-2'>
                            No hay imagenes
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default AllImages