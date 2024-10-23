import React, { useState } from 'react';
import axios from 'axios';
import LayoutInstructor from './LayoutInstructor';

const PredictInstructor = () => {
    const [formData, setFormData] = useState({ time: '', distance: '', weight: '', height: '' });
    const [prediction, setPrediction] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            console.log(data);

            if (data.prediction) {
                setPrediction(data.prediction);
            }



        } catch (error) {
            console.error('Error al obtener la predicción:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <LayoutInstructor>
            <section className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
                <div className="shadow-lg border">
                    <h1 className="py-4 px-4 text-3xl font-bold text-center text-blue-600">
                        Predicción de Nivel de Entrenamiento
                    </h1>
                    <hr />
                    <div>
                        <form className="flex flex-col w-full md:w-8/12 mx-auto my-4" onSubmit={handleSubmit}>
                            <div className='w-full flex flex-col space-y-4'>
                                <label className="text-xl font-semibold text-blue-600" htmlFor="time">Tiempo:</label>
                                <input
                                    className="border border-gray-300 p-2"
                                    type="number"
                                    name="time"
                                    id="time"
                                    placeholder="Tiempo en minutos"
                                    value={formData.time}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='w-full flex flex-col space-y-4 mt-5'>
                                <label className="text-xl font-semibold text-blue-600" htmlFor="distance">Distancia:</label>
                                <input
                                    className="border border-gray-300 p-2"
                                    type="number"
                                    name="distance"
                                    id="distance"
                                    placeholder="Distancia en kilómetros"
                                    value={formData.distance}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='w-full flex flex-col space-y-4 mt-5'>
                                <label className="text-xl font-semibold text-blue-600" htmlFor="weight">Peso:</label>
                                <input
                                    className="border border-gray-300 p-2"
                                    type="number"
                                    name="weight"
                                    id="weight"
                                    placeholder="Peso en kilogramos"
                                    value={formData.weight}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='w-full flex flex-col space-y-4 mt-5'>
                                <label className="text-xl font-semibold text-blue-600" htmlFor="height">Altura:</label>
                                <input
                                    className="border border-gray-300 p-2"
                                    type="number"
                                    name="height"
                                    id="height"
                                    placeholder="Altura en centímetros"
                                    value={formData.height}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                className="mt-10 bg-blue-600 text-white font-semibold p-2 hover:text-gray-100 transition-all duration-300 ease-out hover:bg-blue-500"
                                type="submit"
                            >
                                Enviar
                            </button>
                        </form>
                        {prediction && (
                            <div className="mt-4 text-center text-xl font-bold text-blue-600">
                                Predicción de nivel: {prediction}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </LayoutInstructor>
    );
};

export default PredictInstructor;
