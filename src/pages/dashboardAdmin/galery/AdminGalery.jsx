import React, { useState } from 'react'
import AdminLayout from '../layout/AdminLayout';
import clienteAxios from '../../../config/clientAxios';
import { IoIosAddCircle } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import AllImages from './AllImages';

const AdminGalery = () => {

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleUploadImage = async (e) => {
        setLoading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await clienteAxios.post('/galery', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setLoading(false);

            if (response.status === 200) {
                toast.success('Imagen subida correctamente');
                // window.location.reload();
                navigate('/admin/dashboard');
            }
            console.log(response);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    return (
        <AdminLayout>
            <div className="relative  m-4 bg-white p-4 shadow-lg">
                <h3 className="border-b-2 border-yellow-700 mb-4 pb-2 text-2xl font-semibold text-slate-700 text-center ">
                    Galería de Imágenes Huejutla Delfines
                </h3>

                <div className="relative flex flex-col space-y-2">
                    <div className="relative z-0 px-4 py-2 rounded text-white flex justify-center space-x-2 md:w-4/12 bg-blue-600">
                        <IoIosAddCircle className="text-2xl" />
                        <span>Subir Imagen</span>
                    </div>
                    <input
                        onChange={handleUploadImage}
                        type="file"
                        name="image"
                        accept=".jpg, .jpeg, .png, .gif, .bmp , .svg .tif, .tiff|image/*"
                        className="absolute z-10 opacity-0 cursor-pointer w-full h-full top-0 left-0"
                    />
                </div>

                <AllImages
                    loading={loading}
                // id={_id}
                />

            </div>

        </AdminLayout>
    )
}

export default AdminGalery