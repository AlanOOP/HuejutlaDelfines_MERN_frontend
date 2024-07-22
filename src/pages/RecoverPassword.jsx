import React from 'react'
import Layout from '../components/Layout';
import { SiGmail } from "react-icons/si";
import { FaQuestion } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RecoverPassword = () => {
    return (
        <Layout>
            {/* menu de eleccion de metodo para recuperar contraseña, correo o pregunta secreta */}
            <div className="flex flex-col items-center justify-center h-screen">
                <div className='shadow-lg p-8'>
                    <h2 className="text-2xl font-bold text-center">Recuperar contraseña</h2>
                    <p className=' text-slate-500 font-bold text-center'>
                        Elige el método para recuperar tu contraseña
                    </p>

                    <div className="flex flex-col space-y-4 mt-4">
                        <hr />
                        <Link to="/recover-password-email" className="btn-action">
                            <SiGmail className="w-6 h-6" />
                            <span>Recuperar por correo</span>
                        </Link>
                        <hr />
                        <Link to="/recover-password-secret-question" className="btn-action">
                            <FaQuestion className="w-6 h-6" />
                            <span> Recuperar por pregunta secreta</span>
                        </Link>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default RecoverPassword