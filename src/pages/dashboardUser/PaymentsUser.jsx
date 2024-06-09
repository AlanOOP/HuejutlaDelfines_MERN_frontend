import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LayoutUser from './LayoutUser'
import clienteAxios from '../../config/clientAxios'
import useAuth from '../../hooks/useAuth'

const PaymentsUser = () => {

    const { user } = useAuth()
    const [payments, setPayments] = useState([])
    const [usuario, setUsuario] = useState({})
    const [amount, setAmount] = useState({})
    const [loading, setLoading] = useState(false)
    const [fecha, setFecha] = useState('')
    const [proximoPago, setProximoPago] = useState('')
    console.log(proximoPago)
    console.log(fecha)

    const calcularProximaFechaPago = (fechaUltimoPago) => {
        // Dividir la cadena en día, mes y año
        const partesFecha = fechaUltimoPago.split('/');

        // Crear un objeto de fecha
        const fechaPago = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]); // Restar 1 al mes (0-indexed)

        // Obtener el día y el mes del último pago
        const ultimoPagoDia = fechaPago.getDate();
        const ultimoPagoMes = fechaPago.getMonth();
        const ultimoPagoAnio = fechaPago.getFullYear();

        // Calcular la próxima fecha de pago sumando un mes
        const proximaFechaPago = new Date(ultimoPagoAnio, ultimoPagoMes + 1, ultimoPagoDia);

        // Formatear la fecha en el formato deseado "dd/mm/yyyy"
        const dia = proximaFechaPago.getDate();
        const mes = proximaFechaPago.getMonth() + 1; // Sumar 1 al mes (0-indexed)
        const anio = proximaFechaPago.getFullYear();
        const proximaFechaPagoFormateada = `${dia}/${mes}/${anio}`;

        return proximaFechaPagoFormateada;
    }

    const formatearFechaEnEspañol = (fechaString) => {
        // Convertir la cadena en un objeto de fecha
        const fecha = new Date(fechaString);

        // Formatear la fecha en español
        return fecha.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }


    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await clienteAxios.get(`/student/user/${user._id}`);
                setUsuario(response.data);
                console.log(response.data);

                if (response.status === 200) {
                    const respuesta = await clienteAxios.get(`/payments/${response.data._id}`);
                    setPayments(respuesta.data);
                    console.log(respuesta.data);

                    const { pagos } = respuesta.data[0];
                    console.log(pagos)

                    console.log(pagos[pagos.length - 1].fecha)
                    setFecha(pagos[pagos.length - 1].fecha)

                }

            } catch (error) {
                console.log(error);
            }
        }

        const getAmount = async () => {
            try {
                const response = await clienteAxios.get('membership/661e9c9648b5dcc8e395329b');
                setAmount(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getUser();
        getAmount();

        //calcular la proxima fecha de pago a partir de la fecha del ultimo pago a partir de la fehca

        const proximaFecha = calcularProximaFechaPago(fecha);
        setProximoPago(proximaFecha);

    }, [payments])


    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {

            const response = await clienteAxios.post('/create-membership-order', {
                id_student: usuario._id,
                fecha: proximoPago,
                amount: amount.amount
            });

            console.log(response)

            if (response.status === 200) {
                window.location.href = response.data.links[1].href;
            }


        } catch (error) {
            toast.error(error.response.data);
            console.log(error)
        }
    }



    //calcular la proxima fecha de pago 

    return (
        <LayoutUser>
            <div className="w-full">
                <h1 className="text-3xl text-center font-semibold text-gray-800">Pagos</h1>
                <div className="flex flex-col w-full">
                    <div className="w-full flex flex-col
                    justify-center items-center
                    bg-gray-100 rounded-lg shadow-md
                    p-4 mt-4">
                        <h1 className="text-xl text-center font-semibold text-gray-800">Historial de pagos</h1>
                        <table className="w-full mt-4">
                            <thead>
                                <tr>
                                    <th className="text-left">Fecha</th>
                                    <th className="text-left">Monto</th>
                                    <th className="text-left">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.map((payment, index) => (
                                    payment.pagos.map((pago, index) => (
                                        <tr key={index} className="border-b-2 border-gray-200">
                                            <td className="text-left">{pago.fecha}</td>
                                            <td className="text-left">{pago.monto}</td>
                                            <td className="text-left">Pagado</td>
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* proxima fecha de pago */}
                    <form
                        className="w-full flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-md p-4 mt-4"
                        onSubmit={handlePayment}
                    >
                        <h1 className="text-xl text-center font-semibold text-gray-800">Próximo pago</h1>
                        <div className="w-full flex flex-col justify-center items-center">
                            <p className="text-lg text-gray-800">Fecha de pago:{proximoPago}</p>
                            <p className="text-lg text-gray-800">Monto: {amount.amount}</p>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            Pagar

                        </button>

                    </form>
                </div>

            </div>
        </LayoutUser>
    )
}

export default PaymentsUser