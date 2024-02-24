import { Fragment } from 'react';
import AdminLayout from '../../pages/dashboardAdmin/layout/AdminLayout';

const HomeAdmin = () => {
    return (
        <AdminLayout>
            {/* componentes para las visitisas , ranktins */}
            <Fragment>
                <div className="flex flex-col items-center justify-center my-10">
                    <h1 className="text-3xl font-bold uppercase">Bienvenido al Dashboard</h1>
                    <p className="text-xl mt-4 text-dark-hard">Aqui podras administrar tu pagina web</p>
                </div>

                <div className='flex flex-wrap justify-center'>
                    <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                        <div className='bg-white border rounded shadow p-2'>
                            <div className='flex flex-row items-center'>
                                <div className='flex-shrink pr-4'>
                                    <div className='rounded p-3 bg-green-600'><i className='fa fa-wallet fa-2x fa-fw fa-inverse'></i></div>
                                </div>
                                <div className='flex-1 text-right md:text-center'>
                                    <h5 className='font-bold uppercase text-gray-500'>Total Inscritos</h5>
                                    <h3 className='font-bold text-3xl'>3249 <span className='text-green-500'><i className='fas fa-caret-up'></i></span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                        <div className='bg-white border rounded shadow p-2'>
                            <div className='flex flex-row items-center'>
                                <div className='flex-shrink pr-4'>
                                    <div className='rounded p-3 bg-orange-600'><i className='fas fa-users fa-2x fa-fw fa-inverse'></i></div>
                                </div>
                                <div className='flex-1 text-right md:text-center'>
                                    <h5 className='font-bold uppercase text-gray-500'>Total Usuarios</h5>
                                    <h3 className='font-bold text-3xl'>249 <span className='text-orange-500'><i className='fas fa-exchange-alt'></i></span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                        <div className='bg-white border rounded shadow p-2'>
                            <div className='flex flex-row items-center'>
                                <div className='flex-shrink pr-4'>
                                    <div className='rounded p-3 bg-yellow-600'><i className='fas fa-user-plus fa-2x fa-fw fa-inverse'></i></div>
                                </div>
                                <div className='flex-1 text-right md:text-center'>
                                    <h5 className='font-bold uppercase text-gray-500'>Nuevos Usuarios</h5>
                                    <h3 className='font-bold text-3xl'>2 <span className='text-yellow-600'><i className='fas fa-caret-up'></i></span></h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tabla responsiva donde muestra los ultimos alumnos incritos  */}


                <h1 className='mt-10 font-black text-4xl text-dark-hard text-center'>Ultímos Estudiantes</h1>

                <div className="overflow-scroll mx-2">
                    <table className='w-full bg-white shadow mt-5 relative overflow-x-auto'>
                        <thead className='bg-blue-800 text-white'>
                            <tr>
                                <th className='p-2'>Nombre</th>
                                <th className='p-2'>Télefono</th>
                                <th className='p-2'>Edad</th>
                                <th className='p-2'>Email</th>
                                <th className='p-2'>Curso</th>
                                <th className='p-2'>Fecha</th>
                                <th className='p-2'>Categoria</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>
                            <tr className='border-b'>
                                <td className='p-2'>Juan</td>
                                <td className='p-2'>+569 12345678</td>
                                <td className='p-2'>23</td>
                                <td className='p-2'>alan@alan.com</td>
                                <td className='p-2'>Nado de crol</td>
                                <td className='p-2'>12/12/2021</td>
                                <td className='p-2'>Basico</td>

                            </tr>


                        </tbody>

                    </table>
                </div>


            </Fragment>

        </AdminLayout >
    )
}

export default HomeAdmin