import React, { Fragment, useEffect, useState } from 'react';
import AdminLayout from './layout/AdminLayout';
import { Link } from 'react-router-dom';
import clienteAxios from '../../config/clientAxios';
import { MdOutlineAddCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { toast, ToastContainer } from 'react-toastify';
import PageError from '../PageError';

const CoursesAdmin = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [active, setActive] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await clienteAxios.get('/courses');
        setCourses(response.data);
        console.log(response.data);
        setLoading(true);
      } catch (error) {
        toast.error(response.data.message);

      }
    };
    getProducts();
  }, []);

  const searchProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await clienteAxios.post(`/courses/search?title=${search}`);
      setCourses(response.data);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(response.data.message);
    }
  }

  const filterProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await clienteAxios.post(`/courses/search/category?category=${category}&active=${active}`);
      setCourses(response.data);
    } catch (error) {
      toast.error(response.data.message);
    }
  }

  return (
    <AdminLayout>

      {/* comprobar que se carguen los datos, si no madar la pagina de error */}

      {!loading ? <PageError
        codigo={500} error={'Error del servidor'}
        des={'No se pudo cargar los datos, intente mas tarde'}
      /> :

        <div className='grid grid-cols-1 space-y-4 p-4'>
          <div className="mb-10">
            <div className="flex justify-between">
              {/* It's open the add product modal */}
              <Link to="/admin/dashboard/addCourse"
                // style={{ background: "#303031" }}
                className="rounded-md cursor-pointer p-4 bg-blue-800 flex items-center text-gray-100 text-sm font-semibold uppercase"
              >
                <MdOutlineAddCircle />
                Agregar Curso
              </Link>
              <div className='flex'>
                <input
                  type="text"
                  className="input-auth"
                  placeholder="Buscar"
                  defaultValue={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="rounded-lg hover:cursor-pointer p-2 bg-blue-800 flex items-center text-gray-100 text-sm font-semibold uppercase gap-2"
                  onClick={searchProduct}
                >
                  <FaSearch />
                  Buscar
                </button>
              </div>
              <div className='flex'>

                <select
                  className="input-auth"
                  defaultValue={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Categoría</option>
                  <option value="Principiante">Principiante</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>

                <select
                  className="input-auth"
                  defaultValue={active}
                  onChange={(e) => setActive(e.target.value)}
                >
                  <option value="">Estado</option>
                  <option value={true}>Activo</option>
                  <option value={false}>Desactivado</option>
                </select>

                <button
                  className="rounded-lg cursor-pointer p-2 bg-blue-800 flex items-center text-gray-100 text-sm font-semibold uppercase gap-2"
                  onClick={filterProduct}
                >
                  <BiCategoryAlt />
                  Categorias
                </button>
              </div>
            </div>

          </div>

          <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
            <table className="table-auto border w-full my-2">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Product</th>
                  <th className="px-4 py-2 border">Description</th>
                  <th className="px-4 py-2 border">Image</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Stock</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Offer</th>
                  <th className="px-4 py-2 border">Created at</th>
                  <th className="px-4 py-2 border">Updated at</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>

                {courses.map((course) => (
                  <CourseTable key={course._id} course={course} />
                ))}
              </tbody>
            </table>
            <div className="text-sm text-gray-600 mt-2">
              Total  product found
            </div>
          </div>

        </div>
      }
    </AdminLayout>
  )
}

const CourseTable = ({ course }) => {

  const { title, description, image, active, category, offer, price, updatedAt, createdAt } = course;

  return (
    <Fragment>
      <tr>
        <td className="p-2 text-left">
          {title}
        </td>
        <td className="p-2 text-left">
          {description}
        </td>
        <td className="p-2 text-center">
          <img
            className="w-12 h-12 object-cover object-center"
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${image[0]}`}
            alt="pic"
          />
        </td>
        <td className="p-2 text-center">
          {active ? (
            <span className="bg-green-100 text-green-500 rounded-md p-1">
              Activo
            </span>
          ) : (
            <span className="bg-red-100 text-red-500 rounded-md px-2 py-1">
              Desactivado
            </span>
          )
          }
        </td>
        <td className="p-2 text-center"> ${price} </td>
        <td className="p-2 text-center"> {category} </td>
        <td className="p-2 text-center"> {offer}% </td>
        <td className="p-2 text-center">
          {createdAt.slice(0, 10)}
        </td>
        <td className="p-2 text-center">
          {updatedAt.slice(0, 10)}
        </td>
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
            // onClick={(e) => deleteProduct(product._id)}
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


export default CoursesAdmin