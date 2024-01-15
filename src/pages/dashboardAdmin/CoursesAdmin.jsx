import React, { Fragment, useEffect } from 'react';
import AdminLayout from './layout/AdminLayout';
import { Link } from 'react-router-dom';
import clienteAxios from '../../config/clientAxios';

const CoursesAdmin = () => {

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await clienteAxios.get('/courses');
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <AdminLayout>
      <div className='grid grid-cols-1 space-y-4 p-4'>
        <div className="col-span-1 flex justify-between items-center">
          <div className="flex items-center">
            {/* It's open the add product modal */}
            <Link to="/admin/dashboard/addCourse"
              // style={{ background: "#303031" }}
              className="rounded-lg cursor-pointer p-2 bg-blue-800 flex items-center text-gray-100 text-sm font-semibold uppercase"
            >
              <svg
                className="w-6 h-6 text-gray-100 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              Agregar Curso
            </Link>
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

              <ProductTable />
            </tbody>
          </table>
          <div className="text-sm text-gray-600 mt-2">
            Total  product found
          </div>
        </div>

      </div>
    </AdminLayout>
  )
}

const ProductTable = ({ product, deleteProduct, editProduct }) => {
  return (
    <Fragment>
      <tr>
        <td className="p-2 text-left">
          Curso de Natación para niños
        </td>
        <td className="p-2 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptas, quas, quibusdam, doloribus voluptates voluptatem
          voluptatibus
        </td>
        <td className="p-2 text-center">
          <img
            className="w-12 h-12 object-cover object-center"
            // src={`${apiURL}/uploads/products/${product.pImages[0]}`}
            alt="pic"
          />
        </td>
        <td className="p-2 text-center">
          Activo
        </td>
        <td className="p-2 text-center"> 1500 </td>
        <td className="p-2 text-center"> Principiante </td>
        <td className="p-2 text-center"> 0% </td>
        <td className="p-2 text-center">
          27/08/2021
        </td>
        <td className="p-2 text-center">
          27/08/2021
        </td>
        <td className="p-2 flex items-center justify-center">
          <span
            onClick={(e) => editProduct(product._id, product, true)}
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
            onClick={(e) => deleteProduct(product._id)}
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