 import { Fragment, useEffect, useState } from 'react';
 import React from 'react'
import AdminLayout from './layout/AdminLayout'
import clienteAxios from '../../config/clientAxios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { MdOutlineAddCircle } from "react-icons/md";

const Instructor = () => {

  const [instructores, setInstructores] = useState([]);
  const [search, setSearch] = useState('');


 

  useEffect(()=>{
    const getInstructor = async () => {
    
      try {
        const response = await clienteAxios.get(`/instructor`);
        console.log(response);
        setInstructores(response.data);
        toast.success(response.data.message);
      } catch (error) {
        toast.error(response.data.message);
      }
    }
getInstructor();

  },[])
  

  return (

 <AdminLayout>


    <div className='flex justify-center items-center'>
    <div className='container mx-auto'>
    <div className="flex justify-between">

    <Link to="/admin/dashboard/addInstructor"
                  // style={{ background: "#303031" }}
                  className="rounded-md cursor-pointer p-4 bg-blue-800 flex items-center text-gray-100 text-sm font-semibold uppercase"
                >
                  <MdOutlineAddCircle />
                  Agregar Instructor
                </Link>

 

        {/* <div className='flex items-center gap-x-2'>
                  <label htmlFor="search" className="">Buscar Instructor:</label>
                  <input
                    type="text"
                    className="input-auth"
                    placeholder="Buscar"
                    defaultValue={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyUp={searchInstructor}
                  />
                </div> */}

                </div>
    
        <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
              <table className="table-auto border w-full my-2">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Nombre</th>
                    <th className="px-4 py-2 border">Last Name</th>
                    <th className="px-4 py-2 border">Age</th>
                    <th className="px-4 py-2 border">Specialty</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Phone</th>
                    <th className="px-4 py-2 border">Editar</th>
                    
                  </tr>
                </thead>

                <tbody>

                  {instructores.map((Instructor) => (
                    <CourseTable key={Instructor._id} Instructor={Instructor} />
                  ))}
                </tbody>
          
              </table>
              
            </div>


    </div>
    </div>
    </AdminLayout>
  
  )
}


const CourseTable = ({ Instructor }) => {

  const { name, lastName, email, phone, age, speciality} = Instructor;

   return (
     <Fragment>
       <tr>
        
         <td className="p-2 text-left">{name}</td>

         <td className="p-2 text-left">
           {lastName}
         </td>
         <td className="p-2 text-center">{age}</td>
         <td className="p-2 text-center">{speciality}</td>
         <td className="p-2 text-center">{email}</td>
         <td className="p-2 text-center">{phone}</td>
         <td className="p-2 flex items-center justify-center">

           <span
             // onClick={(e) => editProduct(product._id, product, true)}
             className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
           >
             <svg
              className="w-6 h-6 fill-current text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
               <path
                 fillRule="evenodd"
                 d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                 clipRule="evenodd"
               />
             </svg>
           </span>
                      <span
//             // onClick={(e) => deleteProduct(product._id)}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
             <svg
               className="w-6 h-6 fill-current text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
              fillRule="evenodd"
                 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                 clipRule="evenodd"
               />
             </svg>
          </span>
         </td>
       </tr>
     </Fragment>
   );
   };

export default Instructor
