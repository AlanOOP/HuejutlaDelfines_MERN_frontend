import { useEffect, useState } from "react";
import LayoutUser from "./LayoutUser";
import { months } from "../../constants/months";
import { IoIosSave } from "react-icons/io";
import { RiFileHistoryFill } from "react-icons/ri";
import { toast } from 'react-hot-toast'
import clienteAxios from "../../config/clientAxios";
import useAuth from "../../hooks/useAuth";
import { diferenciaEnDias } from "../../constants/calcularDays";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart, Line
} from "recharts";


const Progress = () => {

    const { user } = useAuth();
    const [usuario, setUsuario] = useState({})
    const [evaluations, setEvaluations] = useState([]);
    const [selectedEvaluation, setSelectedEvaluation] = useState(null);
    const [selectedEvaluation2, setSelectedEvaluation2] = useState(null);
    console.log(selectedEvaluation);
    console.log(selectedEvaluation2);
    //state para la evaluacion seleccionada

    console.log(evaluations);


    const [time, setTime] = useState(0);
    const [dates, setDates] = useState([]);

    const [nado, setNado] = useState(false)
    const [days, setDays] = useState([]);
    const [month, setMonth] = useState(new Date().getMonth())


    //states para la calculadora

    const [timeInitial, setTimeInitial] = useState(0)
    const [dayInitial, setDayInitial] = useState(0)
    const [kTime, setKTime] = useState(0)
    const [kDay, setKDay] = useState(0)
    const [option, setOption] = useState(0)
    const [variable, setVariable] = useState(0)
    const [result, setResult] = useState(0)

    console.log(timeInitial, kTime, kDay, option, variable, result);

    const calcularTasaCambio = (tiempoInicial, tiempoFinal, dias) => {
        return Math.log(tiempoFinal / tiempoInicial) / dias;
    }

    const calcularDiaParaTiempoInstancia = (tiempoInicial, tiempoDeseado, tasaCambio) => {
        return Math.log(tiempoDeseado / tiempoInicial) / tasaCambio;
    }

    const calcularTiempoInstanciaEnDia = (tiempoInicial, dias, tasaCambio) => {
        return tiempoInicial * Math.exp(tasaCambio * dias);
    }

    const handleCalculate = (e) => {
        e.preventDefault();

        setKDay(Number(diferenciaEnDias(selectedEvaluation.date, selectedEvaluation2.date)));
        setTimeInitial(Number(selectedEvaluation.time));
        setKTime(Number(selectedEvaluation2.time));

        if (selectedEvaluation === null || selectedEvaluation2 === null) {
            toast.error('Seleccione una fecha');
            return;
        }

        if (option === "1") {
            const tasaCambio = calcularTasaCambio(timeInitial, kTime, kDay);
            console.log(tasaCambio, 1)
            setResult(calcularTiempoInstanciaEnDia(timeInitial, variable, tasaCambio))
        } else {
            const tasaCambio = calcularTasaCambio(timeInitial, kTime, kDay);
            console.log(tasaCambio, 2)
            setResult(calcularDiaParaTiempoInstancia(timeInitial, variable, tasaCambio))
        }

    }

    useEffect(() => {
        const getDays = () => {
            return Array.from({ length: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() }, (_, i) => i + 1);
        }
        setDays(getDays())

        const getUser = async () => {
            try {
                const { data } = await clienteAxios.get(`/student/user/${user._id}`);
                setUsuario(data);

            } catch (error) {
                console.log(error);
            }
        }


        getUser();

    }, [user._id])

    const getEvaluations = async (e) => {

        e.preventDefault();

        try {
            const response = await clienteAxios.post(`/evaluation/${usuario._id}`, {
                month: "Abril",
                year: 2024
            });
            console.log(response.data);

            setEvaluations(response.data);
        } catch (error) {
            console.log(error);

        }
    }

    const handleChange = (event) => {
        const selectedDate = event.target.value;
        const selected = evaluations.find(evaluation => evaluation.date === selectedDate);
        setSelectedEvaluation(selected);
    };
    const handleChange2 = (event) => {
        const selectedDate = event.target.value;
        const selected = evaluations.find(evaluation => evaluation.date === selectedDate);
        setSelectedEvaluation2(selected);
    };

    const data = evaluations.map(evaluation => ({
        date: evaluation.date,
        time: parseFloat(evaluation.time)
    }));



    return (
        <LayoutUser>
            <section className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
                <div className="shadow-lg border">
                    <h1 className="py-4 px-4 text-2xl font-bold text-center ">
                        Progreso
                    </h1>
                    <hr />

                    <p className="font-bold text-center my-4">
                        En esta sección podrás ver tu progreso en los diferentes estilos de nado.
                    </p>

                    <div className="flex justify-around my-4">
                        <div className="hover:scale-110 transition-all cursor-pointer " onClick={(e) => getEvaluations(e)}>
                            <img
                                src="https://i.pinimg.com/originals/1f/37/7a/1f377a713044a0a3ff47410b5fe07561.gif"
                                alt="imagen de nado Croll"
                                className="w-48 h-44 object-cover object-center rounded-full"
                            />
                            <p className="text-center font-bold text-blue-600">Nado de Croll</p>
                        </div>
                        <div className="hover:scale-110 transition-all cursor-pointer " onClick={(e) => getEvaluations(e)}>
                            <img
                                src="https://www.arenaswim.com/media/immagini/276_z_butterfly_legs_only.gif?width=1200&height=630&mode=crop"
                                alt="imagen de nado Mariposa"
                                className="w-48 h-44 object-cover object-center rounded-full"
                            />
                            <p className="text-center font-bold text-blue-600">Nado de Mariposa</p>
                        </div>
                        <div className="hover:scale-110 transition-all cursor-pointer " onClick={() => getEvaluations(e)}>
                            <img
                                src="https://www.arenaswim.com/media/immagini/277_z_butterfly_arms_only.gif?width=1200&height=630&mode=crop"
                                alt="imagen de nado Pecho"
                                className="w-48 h-44 object-cover object-center rounded-full"
                            />
                            <p className="text-center font-bold text-blue-600">Nado de Pecho</p>
                        </div>
                        <div className="hover:scale-110 transition-all cursor-pointer " onClick={(e) => getEvaluations(e)}>
                            <img
                                src="https://www.arenaswim.com/media/immagini/267_z_breaststroke_swim.gif?width=1200&height=630&mode=crop"
                                alt="imagen de nado Torso"
                                className="w-48 h-44 object-cover object-center rounded-full"
                            />
                            <p className="text-center font-bold text-blue-600">Nado de Torso</p>
                        </div>
                    </div>


                    <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4 text-center">
                        <h2 className="py-4 px-4 text-2xl font-bold text-center">
                            Historial 🕗
                        </h2>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="border border-slate-200">Dia</th>
                                    <th className="border border-slate-200">Mes</th>
                                    <th className="border border-slate-200">Año</th>
                                    <th className="border border-slate-200">Tiempo</th>
                                    <th className="border border-slate-200">Tipo de Nado</th>
                                    <th className="border border-slate-200">Distancia</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    evaluations.length === 0 ? (
                                        <tr>
                                            <td colSpan="3" className="text-center">No hay evaluaciones</td>
                                        </tr>
                                    ) : (
                                        evaluations.map((evaluation, index) => (
                                            <tr key={index}>
                                                <td className="border border-slate-200">{evaluation.date}</td>
                                                <td className="border border-slate-200">{evaluation.month}</td>
                                                <td className="border border-slate-200">{evaluation.year}</td>
                                                <td className="border border-slate-200">{evaluation.time} Min</td>
                                                <td className="border border-slate-200">{evaluation.trainingType}</td>
                                                <td className="border border-slate-200">{evaluation.distance} mts</td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>

                    </div>

                    <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4 text-center">
                        <h2 className="py-4 px-4 text-2xl font-bold text-center">
                            Gráfica de Progreso📈
                        </h2>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart width={600} height={400} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" label={{ value: 'Fecha', position: 'insideBottom', dy: 8 }} />
                                <YAxis label={{ value: 'Tiempo', position: 'center', dy: 5 }} />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="time" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <hr />

                    <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4 text-center">
                        <h2 className="py-4 px-4 text-2xl font-bold text-center">
                            Calculadora 🧮
                        </h2>
                        <form
                            onSubmit={handleCalculate}
                            className='py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4'
                            noValidate
                        >
                            <h3 className="text-blue-600 px-4 text-2xl font-bold text-center">
                                Datos
                            </h3>
                            <div className='flex space-x-5 py-4'>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="timeInitial" className='text-slate-700 pb-2 font-bold'> Tiempo Inicial </label>
                                    {/* select con las fechas de evaluation*/}
                                    <select
                                        id="timeInitial"
                                        value={selectedEvaluation ? selectedEvaluation.date : 0}
                                        onChange={(e) => handleChange(e)}
                                        name='timeInitial'
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    >
                                        <option value="" > -- Seleccione una opción </option>
                                        {
                                            evaluations.map((evaluation, index) => (
                                                <option key={index} value={evaluation.date}> {evaluation.date} </option>
                                            ))
                                        }
                                    </select>

                                </div>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="dayInitial" className="text-slate-700 pb-2 font-bold">Tiempo</label>
                                    {/* input con el tiempo de la fecha seleccionada */}
                                    <input
                                        value={selectedEvaluation ? selectedEvaluation.time : 0}
                                        onChange={(e) => setDayInitial(e.target.value)}
                                        type="number"
                                        name="dayInitial"
                                        id="dayInitial"
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    />
                                </div>
                            </div>
                            <div className='flex space-x-5'>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="kTime" className='text-slate-700 pb-2 font-bold'> Tiempo (K) </label>
                                    {/* select */}
                                    <select
                                        id="kTime"
                                        value={selectedEvaluation2 ? selectedEvaluation2.date : 0}
                                        onChange={(e) => handleChange2(e)}
                                        name='kTime'
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    >
                                        <option value="" > -- Seleccione una opción </option>
                                        {
                                            evaluations.map((evaluation, index) => (
                                                <option key={index} value={evaluation.date}> {evaluation.date} </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="kDay" className="text-slate-700 pb-2 font-bold"> Dias </label>
                                    <input
                                        value={selectedEvaluation2 ? selectedEvaluation2.time : 0}
                                        onChange={(e) => setKDay(e.target.value)}
                                        type="number"
                                        name="kDay"
                                        id="kDay"
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    />
                                </div>
                            </div>

                            <div className='flex space-x-5'>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="option" className='text-slate-700 pb-2 font-bold'> ¿Que desea calcular? </label>
                                    <select
                                        id="option"
                                        value={option}
                                        onChange={(e) => setOption(e.target.value)}
                                        name='option'
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    >
                                        <option value="" > -- Seleccione una opción </option>
                                        <option value="1"> Dias </option>
                                        <option value="2"> Tiempo </option>

                                    </select>
                                </div>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="variable" className="text-slate-700 pb-2 font-bold"> Tiempo / Dias </label>
                                    <input
                                        value={variable}
                                        onChange={(e) => setVariable(e.target.value)}
                                        type="number"
                                        name="variable"
                                        id="variable"
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="btn-action md:w-1/4">

                                    <span>Calcular</span>
                                </button>
                            </div>
                        </form>
                        {
                            result !== 0 && (
                                <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4 text-center">
                                    <h3 className="text-blue-600 px-4 text-2xl font-bold text-center">
                                        Resultado
                                    </h3>
                                    <p className="text-slate-700"> {result}  {option === "1" ? <span>Minutos</span> : <span>Dias</span>}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </LayoutUser>
    )
}

export default Progress;