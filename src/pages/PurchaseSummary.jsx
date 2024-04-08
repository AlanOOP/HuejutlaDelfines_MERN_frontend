import React from 'react'
import Layout from '../components/Layout'

const PurchaseSummary = () => {
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
            <section className='mx-4 mt-16 md:mx-12 md:mt-32 lg:mt-24'>
                <div className='flex flex-col md:flex md:space-x-2 md:flex-row'>
                    <div className='md:w-1/2'>
                        <h2 className='text-2xl font-bold'>Curso</h2>
                        <p>Curso de React</p>
                    </div>
                    <div className='md:w-1/2'>
                        <h2 className='text-2xl font-bold'>Precio</h2>
                        <p>$100</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex md:space-x-2 md:flex-row'>
                    <div className='md:w-1/2'>
                        <h2 className='text-2xl font-bold'>Nombre</h2>
                        <p>Juan Perez</p>
                    </div>
                    <div className='md:w-1/2'>
                        <h2 className='text-2xl font-bold'>Email</h2>
                        <p>

                        </p>
                    </div>

                </div>


            </section>
        </Layout>
    )
}

export default PurchaseSummary