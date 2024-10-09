import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import clienteAxios from '../config/clientAxios'

const PurchaseSummary = () => {

    const location = useLocation()

    const { token } = queryString.parse(location.search)

    const [order, setOrder] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(order)

    useEffect(() => {
        const getOrder = async () => {
            try {
                const response = await clienteAxios.get(`/capture-order?token=${token}`)
                setOrder(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getOrder()
    }, [token])


    return (
        <Layout>
            <div className="flex justify-center mt-8 flex-col gap-5 p-5 ">
                <h1 className="text-2xl text-center font-extrabold md:text-3xl lg:text-4xl xl:text-5xl bg-opacity-10 rounded py-2 text-slate-700">
                    Resumen de compra
                </h1>

                <p className='my-2 text-blue-400 text-2xl text-center font-bold'>
                    ¡Gracias por tu compra!
                </p>
            </div>
            {/* resumen de pago */}

            {/* <div className="flex justify-center mt-8 flex-col gap-5 p-5 ">
                <h1 className="text-2xl text-center font-extrabold md:text-3xl lg:text-4xl xl:text-5xl bg-opacity-10 rounded py-2 text-slate-700">
                    Resumen de pago
                </h1>

                <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <p className="text-xl">Producto</p>
                        <p className="text-xl">{order?.payer}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-xl">Precio</p>
                        <p className="text-xl">${order?.purchase_units?.[0]?.amount?.value}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-xl">Estado</p>
                        <p className="text-xl">{order?.status}</p>
                    </div>
                </div>
            </div> */}
        </Layout>
    )
}

export default PurchaseSummary