import { useEffect, useState } from "react";
import LayoutUser from "./LayoutUser";
import { months } from "../../constants/months";
import { IoIosSave } from "react-icons/io";
import { RiFileHistoryFill } from "react-icons/ri";
import { toast } from 'react-hot-toast'

const Progress = () => {

    //state tipos de mado

    const [nadoCroll, setNadoCroll] = useState(false)
    const [nadoMariposa, setNadoMariposa] = useState(false)
    const [nadoPecho, setNadoPecho] = useState(false)
    const [nadoTorso, setNadoTorso] = useState(false)

    const [day, setDay] = useState("");
    const [time, setTime] = useState(0);
    const [dates, setDates] = useState([]);

    const [nado, setNado] = useState(false)
    const [days, setDays] = useState([]);
    const [month, setMonth] = useState(new Date().getMonth())



    useEffect(() => {
        const getDays = () => {
            return Array.from({ length: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() }, (_, i) => i + 1);
        }
        setDays(getDays())
    }, [])

    const resetForm = () => {
        setDay("")
        setTime(0)
    }

    const handleSave = (e) => {
        e.preventDefault();

        if (day === "" || time === 0) {
            toast.error('Todos los campos son obligatorios')
            return;
        }

        //comprobar si el dia ya esta registrado

        const dateExist = dates.find(date => date.day === day && date.month === month)
        if (dateExist) {
            toast.error('Ya existe un registro para este dia')
            return;
        }

        //comprobar que los dias se asignen en ordern ascendente en el state days
        if (days[0] < day) {
            toast.error('Solo puedes registrar los dias en orden ascendente')
            return;
        }

        //quitar los dias registyrados en el state days

        const newDays = days.filter(d => d !== parseInt(day))
        setDays(newDays)

        //guardar la fecha en el state dates
        setDates([...dates, { day, month, time }])
        //resetear los campos

        resetForm();

    }


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
                        <div className="hover:scale-110 transition-all cursor-pointer " onClick={() => setNadoCroll(!nadoCroll)}>
                            <img
                                src="https://i.pinimg.com/originals/1f/37/7a/1f377a713044a0a3ff47410b5fe07561.gif"
                                alt="imagen de nado Croll"
                                className="w-48 h-44 object-cover object-center rounded-full"
                            />
                            <p className="text-center font-bold text-blue-600">Nado de Croll</p>
                        </div>
                        <div className="hover:scale-110 transition-all cursor-pointer " onClick={() => setNadoMariposa(!nadoMariposa)}>
                            <img
                                src="https://www.arenaswim.com/media/immagini/276_z_butterfly_legs_only.gif?width=1200&height=630&mode=crop"
                                alt="imagen de nado Mariposa"
                                className="w-48 h-44 object-cover object-center rounded-full"
                            />
                            <p className="text-center font-bold text-blue-600">Nado de Mariposa</p>
                        </div>
                        <div className="hover:scale-110 transition-all cursor-pointer " onClick={() => setNadoPecho(!nadoPecho)}>
                            <img
                                src="https://www.arenaswim.com/media/immagini/277_z_butterfly_arms_only.gif?width=1200&height=630&mode=crop"
                                alt="imagen de nado Pecho"
                                className="w-48 h-44 object-cover object-center rounded-full"
                            />
                            <p className="text-center font-bold text-blue-600">Nado de Pecho</p>
                        </div>
                        <div className="hover:scale-110 transition-all cursor-pointer " onClick={() => setNadoTorso(!nadoTorso)}>
                            <img
                                src="https://www.arenaswim.com/media/immagini/267_z_breaststroke_swim.gif?width=1200&height=630&mode=crop"
                                alt="imagen de nado Torso"
                                className="w-48 h-44 object-cover object-center rounded-full"
                            />
                            <p className="text-center font-bold text-blue-600">Nado de Torso</p>
                        </div>
                    </div>


                    {

                        //poner titulo del tipo de nado que se selecciono
                        (
                            <div className=''>
                                <form
                                    onSubmit={handleSave}
                                    className='py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4'
                                    noValidate
                                >
                                    <h2 className="py-4 px-4 text-2xl font-bold text-center">  </h2>
                                    <div className='flex space-x-5 py-4'>
                                        <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                            <label htmlFor="month" className='text-slate-700 pb-2 font-bold'>Dia del Mes: {months[month]} </label>
                                            <select
                                                id="month"
                                                value={day}
                                                onChange={(e) => setDay(e.target.value)}
                                                name='month'
                                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                            >
                                                <option value="" > -- Seleccione una opción </option>
                                                {
                                                    days.map((day, index) => (
                                                        <option key={index} value={day}> {day} </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                            <label htmlFor="time" className="text-slate-700 pb-2 font-bold">Tiempo en Minutos</label>
                                            <input
                                                value={time}
                                                onChange={(e) => setTime(e.target.value)}
                                                type="number"
                                                name="time"
                                                id="time"
                                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <button className="btn-action md:w-1/4">
                                            <IoIosSave className="w-6 h-6 " />
                                            <span>Guardar</span>
                                        </button>
                                    </div>
                                </form>

                            </div>
                        )
                    }

                    <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4 text-center">
                        <h2 className="py-4 px-4 text-2xl font-bold text-center">
                            Historial 🕗
                        </h2>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="border border-slate-200">Dia</th>
                                    <th className="border border-slate-200">Mes</th>
                                    <th className="border border-slate-200">Tiempo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dates.map((date, index) => (
                                        <tr key={index}>
                                            <td className="border border-slate-200">{date.day}</td>
                                            <td className="border border-slate-200">{months[date.month]}</td>
                                            <td className="border border-slate-200">{date.time} Minutos</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    <hr />

                    <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4 text-center">
                        <h2 className="py-4 px-4 text-2xl font-bold text-center">
                            Calcular Laplace de Nado crecimiento de tiempo
                        </h2>

                        <form
                            onSubmit={handleSave}
                            className='py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4'
                            noValidate
                        >
                            <h2 className="py-4 px-4 text-2xl font-bold text-center"> Datos </h2>
                            <div className='flex space-x-5 py-4'>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="month" className='text-slate-700 pb-2 font-bold'> Tiempo Inicial </label>
                                    <input
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        type="number"
                                        name="time"
                                        id="time"
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="time" className="text-slate-700 pb-2 font-bold">Dias</label>
                                    <input
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        type="number"
                                        name="time"
                                        id="time"
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    />
                                </div>
                            </div>
                            <div className='flex space-x-5'>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="month" className='text-slate-700 pb-2 font-bold'> Tiempo (K) </label>
                                    <input
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        type="number"
                                        name="time"
                                        id="time"
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="time" className="text-slate-700 pb-2 font-bold"> Dias </label>
                                    <input
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        type="number"
                                        name="time"
                                        id="time"
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    />
                                </div>
                            </div>

                            <div className='flex space-x-5'>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="month" className='text-slate-700 pb-2 font-bold'> ¿Que desea calcular? </label>
                                    <select
                                        id="month"
                                        value={day}
                                        onChange={(e) => setDay(e.target.value)}
                                        name='month'
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    >
                                        <option value="" > -- Seleccione una opción </option>
                                        <option value="1"> Dias </option>
                                        <option value="2"> Tiempo </option>

                                    </select>
                                </div>
                                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                                    <label htmlFor="time" className="text-slate-700 pb-2 font-bold"> Tiempo / Dias </label>
                                    <input
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        type="number"
                                        name="time"
                                        id="time"
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

                    </div>
                </div>


            </section>
        </LayoutUser>
    )
}

export default Progress