import React, { useState } from 'react';
import AdminLayout from './layout/AdminLayout';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clienteAxios from '../../config/clientAxios'
import { useNavigate } from 'react-router-dom'

const AddInstructor = () => {

  const navigate = useNavigate();

  const [instructor, setInstructor] = useState({
    name: '',
    lastname: '',
    password:'',
    age: '',
    specialty: '',
    email: '',
    phone: '',
  });

  const actualizarState = e => {
    setInstructor({
      ...instructor,
      [e.target.name]: e.target.value
    })
  }


const handleSubmit = async (e) => {
   e.preventDefault();

  const newInstructor = {
    name: instructor.name,
    lastName: instructor.lastname,
    password: instructor.password,
    email: instructor.email,
    phone: instructor.phone,
    age: instructor.age,
    speciality: instructor.specialty
};

try {
    const respuesta = await clienteAxios.post('/instructor', newInstructor, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

      console.log(respuesta);

      if (respuesta.status === 200) {
          toast.success(respuesta.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT
          });

      }

  } catch (error) {
       toast.error(error.response.data)
       console.log(error);
  }
}


  const validateButton = () => {
    // Destructuring
    const { name, lastname, age, specialty, email, phone } = instructor;
    if (![name, lastname, age, specialty, email, phone].includes('')) {
        return false;
    }
    return true;
}



  return (

    <AdminLayout>
    <div>
        <ToastContainer className={'font-roboto'} />
    </div>

    <form className="w-full" onSubmit={handleSubmit}>
       
        <div className='flex items-center justify-center mt-5'>
            <div className="mt-32 md:mt-0 relative w-11/12 md:w-5/6 bg-white p-8 rounded-lg shadow shadow-slate-300 flex flex-col items-center space-y-4 px-4 py-4 md:px-8">
                <h1 className="text-4xl font-extrabold text-center text-dark-hard">Agregar Instructores</h1>

                <div className="flex flex-wrap justify-between w-full">


                    <div className="w-full md:w-5/12 flex flex-col space-y-4">
                        <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Nombre: </label>
                        <input
                            name='name'
                            value={instructor.name}
                            onChange={actualizarState}
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            type="text"
                        />
                    </div>

                    <div className="w-full md:w-5/12 flex flex-col space-y-4">
                        <label htmlFor="lastname" className='font-medium text-slate-700 pb-2'>Apellido: </label>
                        <input
                            name='lastname'
                            value={instructor.lastname}
                            onChange={actualizarState}
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            type="text"
                        />
                    </div>

                    <div className="w-full md:w-5/12 flex flex-col space-y-4">
                        <label htmlFor="age" className='font-medium text-slate-700 pb-2'>Edad: </label>
                        <input
                            name='age'
                            defaultValue={instructor.age}
                            onChange={actualizarState}
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            type="number"
                            min="1"
                            max="100"
                        />
                    </div>

                    <div className="w-full md:w-5/12 flex flex-col space-y-4">
                        <label htmlFor="specialty" className='font-medium text-slate-700 pb-2'>Nivel: </label>
                        <select
                            name='specialty'
                            defaultValue={instructor.specialty}
                            onChange={actualizarState}
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                        >
                            <option value="">Ninguno</option>
                            <option value="Principiante">Principiante</option>
                            <option value="Intermedio">Intermedio</option>
                            <option value="Avanzado">Avanzado</option>
                        </select>
                    </div>

                    <div className="w-full md:w-5/12 flex flex-col space-y-4">
                        <label htmlFor="email" className="font-medium text-slate-700 pb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                            placeholder="Ingrese su Email"
                            defaultValue={instructor.email}
                            onChange={actualizarState}
                        />
                    </div>

                    <div className="w-full md:w-5/12 flex flex-col space-y-4">
                        <label htmlFor="tel" className="font-medium text-slate-700 pb-2">Teléfono:</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                            placeholder="Ingrese su Número"
                            defaultValue={instructor.tel}
                            onChange={actualizarState}
                        />
                    </div>

                    <div className="w-full md:w-5/12 flex flex-col space-y-4">
                        <label htmlFor="password" className="font-medium text-slate-700 pb-2">Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                            placeholder="Ingrese su Número"
                            defaultValue={instructor.password}
                            onChange={actualizarState}
                        />
                    </div>
                </div>

                


                <div className='w-full flex justify-center'>
                    <input
                        type="submit"
                        className={`w-2/5 md:w-2/12 p-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center ${validateButton() ? 'opacity-50 cursor-not-allowed' : ''}`}
                        value="Agregar Instructor"
                        disabled={validateButton()}
                    />
                </div>
            </div>
        </div>
    </form>
</AdminLayout>

  );
}

export default AddInstructor;
