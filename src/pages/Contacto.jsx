// import React from 'react';
import Layout from '../components/Layout';

const Contacto = () => {
  return (
    <Layout>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-4xl font-bold text-center">Contacto</h1>
        <p className="text-slate-500 mt-5">Contactate con nosotros 🥺</p>

        <form action="" className="my-10">
          <div className="flex flex-col space-y-5">

            <label htmlFor="text">
              <p className="font-medium text-slate-700 pb-2">Nombre:</p>
              <input type="text" name="text" id="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your Name" />
            </label>


            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">Email:</p>
              <input type="email" name="email" id="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
            </label>

            <label htmlFor="message">
              <p className="font-medium text-slate-700 pb-2">Mensaje:</p>
              <textarea name="message" id="message" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your message"></textarea>
            </label>


            <button className="w-full py-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">

              <span>Enviar</span>
            </button>

          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contacto