import LayoutUser from './dashboardUser/LayoutUser';
import useAuth from '../hooks/useAuth';
import { useEffect, useRef, useState } from 'react';
import clienteAxios from '../config/clientAxios';
import { toast } from 'react-hot-toast';
import { questions } from '../constants/app';
import Webcam from 'react-webcam';
import { FaCamera } from "react-icons/fa";


const Profile = () => {

  const { user } = useAuth();
  const [usuario, setUsuario] = useState({})
  const [secretQuestion, setSecretQuestion] = useState({
    question: '',
    answer: ''
  })

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [avatar, setAvatar] = useState(user.avatar);
  const webcamRef = useRef(null);

  // Configuración para el componente de Webcam
  const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: "user",
  };

  console.log(secretQuestion);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await clienteAxios.get(`/student/user/${user._id}`);
        setUsuario(data);
        console.log(usuario);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [user._id]);

  const updateState = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const handleProfile = async (e) => {
    e.preventDefault();

    try {
      const { data } = await clienteAxios.put(`/student/update/${usuario._id}`, {
        name: usuario.name,
        lastName: usuario.lastName,
        phone: usuario.phone
      });
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error('Error al actualizar la información');
    }
  }
  const handleQuestion = async (e) => {
    e.preventDefault();

    if (secretQuestion.question === '' || secretQuestion.answer === '') {
      return toast.error('Todos los campos son obligatorios');
    }

    try {
      const { data } = await clienteAxios.post(`/secretQuestion/${user._id}`, {
        question: secretQuestion.question,
        answer: secretQuestion.answer.toUpperCase()
      });
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }

  }

  const handleCapture = async () => {
    if (webcamRef.current) {
      // Toma la foto y obtiene la imagen en base64
      const imageSrc = webcamRef.current.getScreenshot();
      setAvatar(imageSrc);
      setIsCameraOpen(false);

      // Convierte la imagen base64 a un Blob
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      // Crea el FormData para enviar al backend
      const formData = new FormData();
      formData.append('img', blob, 'avatar.jpg');

      try {
        // Realiza la petición al backend
        const response = await clienteAxios.post(`/user/avatar/${user._id}`, formData);
        console.log("Avatar actualizado:", response.data);
      } catch (error) {
        console.error("Error al subir el avatar:", error);
      }
    }
  };

  return (
    <LayoutUser>
      <section className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
        <div className="shadow-lg border">
          <h1 className="py-4 px-4 text-2xl font-bold text-center ">
            Información Personal
          </h1>
          <hr />

          <div className="flex flex-col items-center">
            {/* Mostrar el avatar o la vista de la cámara */}
            {isCameraOpen ? (
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                className="w-32 h-32 rounded-full object-cover"
              />
            ) : (
              <img
                src={user.avatar}
                alt="avatar"
                className="w-32 h-32 rounded-full object-cover"
              />
            )}

            {/* Botón para tomar la foto o abrir la cámara */}
            <button onClick={() => setIsCameraOpen(!isCameraOpen)} className="mt-2">
              <FaCamera className="h-6 w-6 text-slate-600" />
            </button>

            {/* Mostrar el botón de captura solo si la cámara está abierta */}
            {isCameraOpen && (
              <button onClick={handleCapture} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Tomar Foto
              </button>
            )}
          </div>
          <form
            onSubmit={handleProfile}
            className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4"
          >


            <div className='flex gap-x-2'>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor="name">Nombre:</label>
                <input
                  name='name'
                  type="text"
                  id="name"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  onChange={updateState}
                  value={usuario.name ?? ''}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor="lastName">Apellido:</label>
                <input
                  type="text"
                  id="lastName"
                  name='lastName'
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  onChange={updateState}
                  value={usuario.lastName ?? ''}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input
                value={usuario.user?.email ?? ''}
                readOnly
                type="email"
                id="email"
                className="cursor-not-allowed border px-4 py-2 bg-gray-100 w-full focus:outline-none focus:cursor-not-allowed"
              />
              <span className="text-sm text-blue-800 font-bold">
                No puedes cambiar tu email
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="phone">Numero de telefono:</label>
              <input
                type="number"
                name='phone'
                id="phone"
                className="border px-4 py-2 w-full focus:outline-none"
                onChange={updateState}
                value={usuario.phone ?? ''}
              />
            </div>
            <button
              // onClick={(e) => handleSubmit()}
              className="btn-action"
            >
              Actualizar Información
            </button>
          </form>

          <hr />

          <div className=''>
            <form onSubmit={handleQuestion} className='py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4'>
              <h2 className="py-4 px-4 text-2xl font-bold text-center "> Agregar método de recuperación de contraseña </h2>
              <div className='flex space-x-5 py-4'>
                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                  <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Pregunta: </label>
                  {/* selecy con opciones de principiante intermedio  */}
                  <select
                    name='question'
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    value={secretQuestion.question}
                    onChange={(e) => setSecretQuestion({ ...secretQuestion, question: e.target.value })}
                  >
                    <option value="">Selecciona una pregunta</option>
                    {
                      questions.map(question => (
                        <option key={question.id} value={question.question}>{question.question}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                  <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Respuesta: </label>
                  <input
                    name='answer'
                    value={secretQuestion.answer}
                    onChange={(e) => setSecretQuestion({ ...secretQuestion, answer: e.target.value })}
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow uppercase"
                    type="text"
                  />
                </div>
              </div>
              <div className='flex justify-end mt-2'>
                <button className="btn-action ">
                  {/* <IoLogIn className="w-6 h-6" /> */}
                  Agregar
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </LayoutUser >
  )
}

export default Profile