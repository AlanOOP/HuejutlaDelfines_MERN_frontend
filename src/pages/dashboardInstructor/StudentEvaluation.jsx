import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import LayoutInstructor from './LayoutInstructor'
import clienteAxios from '../../config/clientAxios'
import { toast } from 'react-hot-toast'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { months } from '../../constants/months'


const StudentEvaluation = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [evaluations, setEvaluations] = useState([]);
    const [fecha, setFecha] = useState('');
    const [fechas, setFechas] = useState([]);
    const [month, setMonth] = useState(months[new Date().getMonth()]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [loading, setLoading] = useState(false);
    const [evaluation, setEvaluation] = useState({
        studentId: id,
        trainingType: '',
        date: '',
        time: '',
        distance: '',
        year: '2024',
        month: month
    });


    useEffect(() => {
        const getEvaluations = async () => {
            setLoading(true);
            try {
                //get con body
                const response = await clienteAxios.post(`/evaluation/${id}`, {
                    month: month,
                    year: year
                });
                console.log(response.data);
                setEvaluations(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                toast.error('Error cargando evaluaciones');
            }
        }

        const getFecha = () => {
            let fechaActual = new Date();
            let primerDiaMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
            let ultimoDiaMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);

            let fechas = [];
            for (let fecha = new Date(primerDiaMes); fecha <= ultimoDiaMes; fecha.setDate(fecha.getDate() + 1)) {
                fechas.push(fecha.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            }

            setFechas(fechas);
        }

        getEvaluations();
        getFecha();
    }, [id])

    //crear una evaluacion

    const handleChange = e => {
        setEvaluation({
            ...evaluation,
            [e.target.name]: e.target.value
        })
    }

    //data de progrso por fecha 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await clienteAxios.post(`/evaluation/${id}`, evaluation);
            console.log(response.data);
            setEvaluations(response.data);
            toast.success('Evaluación agregada');
        } catch (error) {
            console.log(error);
            toast.error(error.response.data);
        }
    }

    return (
        <LayoutInstructor>
            <section className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
                <div className="shadow-lg border">
                    <h1 className="py-4 px-4 text-3xl font-bold text-center text-blue-600">
                        Evaluación de Estudiante {month}
                    </h1>
                    <hr />
                    <div className="p-4">
                        {/* <p className="text-center">Aquí se mostrará la evaluación de los estudiantes</p> */}
                        <div className="flex flex-col justify-center items-center">
                            <p className='text-center capitalize'>Alan Alexis Hernandez Francisco</p>
                            {id}
                        </div>
                    </div>
                    <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4 text-center">
                        <h2 className="text-2xl font-bold text-blue-600">Agregar Evaluación</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4"
                            noValidate
                        >
                            <div className='flex space-x-5 py-4'>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="trainingType" className='text-slate-700 pb-2 font-bold'>
                                        Tipo de Entrenamiento
                                    </label>
                                    <select
                                        id="trainingType"
                                        value={evaluation.trainingType}
                                        onChange={handleChange}
                                        name='trainingType'
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    >
                                        <option value="" > -- Seleccione una opción </option>
                                        <option value="crol" > Crol </option>
                                        <option value="mariposa" > Mariposa </option>
                                        <option value="pecho" > Pecho </option>
                                        <option value="torso" > Torso </option>

                                    </select>
                                </div>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="date" className='text-slate-700 pb-2 font-bold'>
                                        Fecha de la Clase
                                    </label>
                                    <select
                                        id="date"
                                        value={evaluation.date}
                                        onChange={handleChange}
                                        name='date'
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    >
                                        <option value="" > -- Seleccione una opción </option>
                                        {
                                            fechas.map(fecha => (
                                                <option key={fecha} value={fecha}> {fecha} </option>
                                            ))
                                        }

                                    </select>
                                </div>


                            </div>
                            <div className='flex space-x-5 py-4'>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="time" className='text-slate-700 pb-2 font-bold'> Tiempo (Min) </label>
                                    <input
                                        value={evaluation.time}
                                        onChange={handleChange}
                                        type="number"
                                        name="time"
                                        id="time"
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="distance" className="text-slate-700 pb-2 font-bold">Distancia (Mts)</label>
                                    <input
                                        value={evaluation.distance}
                                        onChange={handleChange}
                                        type="number"
                                        name="distance"
                                        id="distance"
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    />
                                </div>
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
                {/* formulario evaluacion */}
            </section>
        </LayoutInstructor>
    )
}

export default StudentEvaluation