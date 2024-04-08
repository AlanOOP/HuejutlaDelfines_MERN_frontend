import LayoutUser from './dashboardUser/LayoutUser';

const Profile = () => {

  const handleProfile = async (e) => {
    e.preventDefault()
  }

  const handleQuestion = async (e) => {
    e.preventDefault()
  }

  return (
    <LayoutUser>
      <section className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
        <div className="shadow-lg border">
          <h1 className="py-4 px-4 text-2xl font-bold text-center ">
            Información Personal
          </h1>
          <hr />
          <form
            onSubmit={handleProfile}
            className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4"
          >
            {/* {fData.success ? ( */}


            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Nombre:</label>
              <input
                // onChange={(e) => setFdata({ ...fData, name: e.target.value })}
                value="Alan Alexis Hernandez Francisco"
                type="text"
                id="name"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input
                value="alan@alan.com"
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
              <label htmlFor="number">Numero de telefono:</label>
              <input
                // onChange={(e) => setFdata({ ...fData, phone: e.target.value })}
                value="7717128042"
                type="number"
                id="number"
                className="border px-4 py-2 w-full focus:outline-none"
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
                    name='category'
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  >
                    <option value=""> -- Seleccione una opción </option>
                    <option value="">¿Cuál es el nombre de tu primera mascota ? </option>
                    <option value="">¿Cuál es tu comida favorita ? </option>
                    <option value="">¿Cuál es el nombre de tu película favorita ? </option>
                    <option value="">¿Cuál es tu equipo deportivo favorito ? </option>
                    <option value="">¿Cuál es el nombre de tu primer amor ? </option>
                    <option value="">¿Cuál es el nombre de tu canción favorita ? </option>
                    <option value="">¿Cuál es el nombre de tu libro favorito ? </option>
                  </select>
                </div>
                <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                  <label htmlFor="name" className='font-medium text-slate-700 pb-2'>Respuesta: </label>
                  <input
                    name='title'

                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
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