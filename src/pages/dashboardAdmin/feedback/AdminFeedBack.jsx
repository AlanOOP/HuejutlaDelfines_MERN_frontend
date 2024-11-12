import React, { useEffect, useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import clienteAxios from '../../../config/clientAxios';

const AdminFeedBack = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getFeedback = async () => {
            try {
                const response = await clienteAxios.get('/feedback');

                // Contar la frecuencia de cada punto dentro del rango de 1 a 5
                const frequencyMap = {
                    5: { label: 'Muy Fácil', count: 0 },
                    4: { label: 'Fácil', count: 0 },
                    3: { label: 'Regular', count: 0 },
                    2: { label: 'Difícil', count: 0 },
                    1: { label: 'Muy Difícil', count: 0 },
                };

                // Contar las ocurrencias dinámicamente a partir de response.data
                response.data.forEach(fb => {
                    if (frequencyMap[fb.point]) {
                        frequencyMap[fb.point].count += 1;
                    }
                });

                // Convertir el mapa en un array compatible con Recharts
                const frequencyData = Object.entries(frequencyMap).map(([point, { label, count }]) => ({
                    point: parseInt(point),
                    label,
                    count,
                }));

                setData(frequencyData);

            } catch (error) {
                console.log('Hubo un error', error);
            }
        };

        getFeedback();
    }, []);

    return (
        <AdminLayout>
            <section className='my-10'>
                <h1 className='text-center text-4xl text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-sky-400 font-black font-poppins'>
                    FeedBack de los usuarios
                </h1>
            </section>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" label={{ value: 'Facilidad de Uso', position: 'insideBottom', dy: 10 }} />
                    <YAxis label={{ value: 'Cantidad', angle: -90, position: 'insideLeft', dx: -10 }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" name="Cantidad de Feedbacks" />
                </BarChart>
            </ResponsiveContainer>
        </AdminLayout>
    );
};

export default AdminFeedBack;
