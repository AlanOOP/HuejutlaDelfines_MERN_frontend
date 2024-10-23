import React, { useState } from 'react';
import Layout from '../components/Layout';
import clienteAxios from '../config/clientAxios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RecoverPasswordSecret = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [secretQuestion, setSecretQuestion] = useState('');
    const [token, setToken] = useState('')
    const [answer, setAnswer] = useState('');
    console.log(token);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await clienteAxios.post('/secretQuestionByEmail', { email });
            
            toast.success('Exitoso');
            if (response.status === 200) {
                setSecretQuestion(response.data);
                setToken(response.data?.user?.token);
                setOpen(true);
            }
        } catch (error) {
            console.log(error);
            setOpen(false);
            toast.error(error.response.data);
        }
    }

    const handleComprobate = async (e) => {
        e.preventDefault();

        if (answer === '') {
            return toast.error('La respuesta es obligatoria');
        }

        if (secretQuestion.answer === answer) {
            toast.success('Respuesta correcta');
            navigate(`/olvide-password/${token}`);
        }

        return toast.error('Respuesta incorrecta');

    }

    return (
        <Layout>
            <div className="container mx-auto">
                <div className="flex justify-center items-center h-screen">
                    <div className="w-full max-w-4xl shadow-md rounded">
                        <form className="bg-white px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                            <h1 className="text-2xl text-center text-gray-700 mb-4">Recuperar Contraseña</h1>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Ingrese su Correo Electrónico
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="btn-action"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                        <div>
                            {
                                open ? (
                                    <form className="bg-white px-8 pt-6 pb-8 mb-4" onSubmit={handleComprobate}>
                                        <h1 className="text-2xl text-center text-gray-700 mb-4">Pregunta Secreta</h1>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">
                                                {secretQuestion.question}
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="question"
                                                type="text"
                                                placeholder="Respuesta"
                                                value={answer}
                                                onChange={e => setAnswer(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <button
                                                className="btn-action"
                                            >
                                                Comprobar
                                            </button>
                                        </div>
                                    </form>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default RecoverPasswordSecret