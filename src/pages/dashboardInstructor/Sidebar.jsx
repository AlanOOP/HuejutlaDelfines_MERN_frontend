import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex flex-col w-full space-y-4 md:w-3/12 font-medium">
            <div
                className="flex items-center space-x-2 bg-dark-hard rounded-sm shadow p-2 text-gray-100"
            >
                <img className="w-20 h-20 rounded-full " src="https://media.istockphoto.com/id/1605350658/es/foto/mujer-agua-y-retrato-en-piscina-para-competici%C3%B3n-entrenamiento-o-deporte-profesional-o.jpg?s=2048x2048&w=is&k=20&c=6Zo4Ea6h_tvu5NC28IrVBjQ_-M_lieBUQ_ehAy3Y6D0=" alt="Rounded avatar">
                </img>
                <div className="flex flex-col w-full">
                    <span className="ml-2 text-lg text-white font-semibold">Hola, Bienvenido</span>
                    <span className="text-lg">
                        {/* {data.userDetails ? data.userDetails.name : ""} */}
                    </span>
                </div>
            </div>
            <div className="shadow  md:block w-full flex flex-col">
                <div
                    onClick={(e) => navigate("/instructor/dashboard")}
                    className={`${location.pathname === "/instructor/dashboard"
                        ? "border-r-4 border-yellow-700 bg-gray-200"
                        : ""
                        }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
                >
                    Cursos
                </div>
                <hr />
                <div
                    onClick={(e) => navigate("/instructor/predict")}
                    className={`${location.pathname === "/instructor/predict"
                        ? "border-r-4 border-yellow-700 bg-gray-200"
                        : ""
                        }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
                >
                    <p>
                        Predicciones de Estudiantes
                    </p>
                </div>
                <hr />

                <div
                    onClick={(e) => navigate("/instructor/notifications")}
                    className={`${location.pathname === "/profile/progress"
                        ? "border-r-4 border-yellow-700 bg-gray-200"
                        : ""
                        }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
                >
                    <p>Notificaciones de Entrenamientos</p>
                </div>

                <hr />

                <hr />
                <div
                    // onClick={(e) => logout()}
                    className={`${location.pathname === "/admin/dashboard/categories"
                        ? "border-r-4 border-yellow-700 bg-gray-200"
                        : ""
                        }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
                >
                    Cerrar Sesión
                </div>
            </div>
        </div >
    )
}

export default Sidebar