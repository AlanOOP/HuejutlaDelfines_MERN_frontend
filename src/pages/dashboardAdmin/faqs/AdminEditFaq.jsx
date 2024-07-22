import React, { useEffect, useState } from 'react'
import AdminLayout from '../layout/AdminLayout'
import { useNavigate, useParams } from 'react-router-dom';
import clienteAxios from '../../../config/clientAxios';
import toast from 'react-hot-toast';

const AdminEditFaq = () => {

    const { id } = useParams();

    const [faq, setFaq] = useState({
        question: '',
        answer: ''
    });

    const navigate = useNavigate();

    useEffect(() => {

        const getFaq = async () => {
            try {
                const response = await clienteAxios.get(`/faq/${id}`);
                setFaq(response.data);

            } catch (error) {
                console.log('Hubo un error', error)
            }
        }

        getFaq();
    }, [])

    const updateState = e => {
        setFaq({
            ...faq,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (faq.question === '' || faq.answer === '') {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        try {
            const response = await clienteAxios.put(`/faq/${id}`, faq);
            console.log(response);

            if (response.status === 200) {
                toast.success('Pregunta Agregada');
                navigate('/admin/dashboard/faqs');
            }

        } catch (error) {
            console.log(error);
            toast.error('Hubo un Error');
        }

    }

    return (
        <AdminLayout>
            <div className='flex items-center justify-center mt-5'>
                <div className="mt-32 md:mt-0 relative w-11/12 md:w-5/6 bg-white p-8 rounded-lg shadow shadow-slate-300 flex flex-col items-center space-y-4 px-4 py-4 md:px-8">

                    <h1 className="text-4xl font-extrabold text-center text-slate-600">Editar Pregunta</h1>

                    <form
                        className="w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className='flex space-x-5 py-4'>
                            <div className="w-full flex flex-col space-y-1 space-x-1">
                                <label htmlFor="question" className='font-bold text-slate-700 pb-2'>Pregunta: </label>
                                <input
                                    name='question'
                                    defaultValue={faq.question}
                                    onChange={updateState}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    type="text"
                                />
                            </div>



                        </div>

                        <div className="w- flex flex-col space-y-1 space-x-1">
                            <label htmlFor="answer" className='font-bold text-slate-700 pb-2'>Respuesta: </label>
                            <input
                                name='answer'
                                defaultValue={faq.answer}
                                onChange={updateState}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                type="text"
                            />
                        </div>



                        <div className='flex justify-end mt-2'>
                            <input
                                type="submit"
                                className={`w-2/12 p-3 font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center `}
                                value="Editar Pregunta"
                            // disabled={validateButton()}
                            />
                        </div>

                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminEditFaq