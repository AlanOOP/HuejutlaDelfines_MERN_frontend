import React from 'react'

const ContactForm = () => {
    return (
        <div>

            <h2 className="text-2xl text-center font-extrabold md:text-3xl lg:text-4xl xl:text-5xl bg-opacity-10 rounded py-2">
                Contacto
            </h2>
            <p className="mt-2 text-xl text-slate-300 text-center">
                Si tienes alguna duda o comentario, no dudes en contactarnos.
            </p>

            <div className='container mx-auto flex justify-center my-5 '>

                <div className='grid grid-cols-1 overflow-hidden  sm:grid-cols-2 md:grid-cols-2 bg-gradient-to-tr from-sky-800 to-blue-400 rounded-md'>
                    <div className='col-span-1'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1297141836226!2d-98.40594321673116!3d21.147235539285504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7273438463ba3%3A0x7a5d4bc461ba4fd4!2sClub%20de%20Natacion%20Delfines!5e0!3m2!1ses-419!2smx!4v1706921071642!5m2!1ses-419!2smx" width="600" height="450" loading="async" referrerPolicy='no-referrer-when-downgrade' />

                    </div>

                    <div className=" p-8  shadow  col-span-1">
                        <form action="" className="">
                            <div className="flex flex-col space-y-5">

                                <label htmlFor="text">
                                    <p className="font-medium text-white pb-2">Nombre:</p>
                                    <input type="text" name="text" id="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Ingrese Su Nombre" />
                                </label>


                                <label htmlFor="email">
                                    <p className="font-medium text-white pb-2">Email:</p>
                                    <input type="email" name="email" id="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Ingrese su Email" />
                                </label>

                                <label htmlFor="message">
                                    <p className="font-medium text-white pb-2">Mensaje:</p>
                                    <textarea name="message" id="message" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Escriba su Mensaje"></textarea>
                                </label>


                                <button className="w-full py-3 font-medium text-white bg-yellow-500 hover:bg-yellow-400 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">

                                    <span>Enviar</span>
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm